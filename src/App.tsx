import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  ChevronRight,
  CircleUserRound,
  Flame,
  GraduationCap,
  Headphones,
  House,
  Languages,
  Layers3,
  LockKeyhole,
  Map,
  Menu,
  Mic,
  Moon,
  Play,
  Route,
  Sparkles,
  Sun,
  Target,
  Trophy,
  TrendingUp,
  X,
  Zap,
} from "./features/icons";
import type { IconType as LucideIcon } from "react-icons";
import type { LevelId, Profile, Session, Study } from "./core/types";
import { choose } from "./core/i18n";
import {
  answer,
  finish,
  localDay,
  mark,
  award,
  streak,
  tick,
  week,
} from "./core/engine";
import { repository, fresh } from "./services/repository";
import {cloud,loadCloud,saveCloud,type Account} from "./services/cloud";
import {
  LuLandmark, LuStethoscope, LuBriefcaseBusiness,
  LuUsers, LuShoppingCart, LuHouse, LuSchool,
  LuBuilding2, LuPhone, LuWallet,
  LuHandshake, LuCoffee, LuMapPin, LuBus,
} from "react-icons/lu";
import Auth from "./features/Auth";
import Placement from "./features/placement/Placement";
import {
  allSessions,
  a12Sessions,
  curriculum,
  drills,
  exam,
  lessons,
  nextSession,
  practiceScenes,
  progress,
  unlocked,
} from "./data/content";
import { colors, levels, roadmap } from "./data/roadmap";
import BeginnerBasics from "./features/BeginnerBasics";
import Exercise, { Sound } from "./features/Exercise";
import { a12Unit1 } from "./data/a12-unit1";
import Vocabulary from "./features/Vocabulary";
import ProfileForm from "./features/Profile";
import AccountSettings from "./features/AccountSettings";
import Speaking from "./features/Speaking";
const nav = [
  ["home", "Početna", "Start", House],
  ["learn", "Učenje", "Lernen", Route],
  ["vocab", "Vokabular", "Wortschatz", Layers3],
  ["grammar", "Gramatika", "Grammatik", BookOpen],
  ["listen", "Slušanje", "Hörverstehen", Headphones],
  ["speak", "Govor", "Sprechen", Mic],
  ["germany", "German in Germany", "Deutsch in Deutschland", Map],
  ["progress", "Napredak", "Fortschritt", TrendingUp],
  ["awards", "Dostignuća", "Erfolge", Trophy],
  [
    "profile",
    "Profil i podešavanja",
    "Profil und Einstellungen",
    CircleUserRound,
  ],
] as const;
type Page = (typeof nav)[number][0];
const brand = (
  <div className="brand">
  <span className="brandmark">
  <img
    src={`${import.meta.env.BASE_URL}deutschly-logo.png`}
    alt="Deutschly logo"
    style={{
      width: "42px",
      height: "42px",
      objectFit: "contain",
      borderRadius: "10px",
    }}
  />
</span>
    <span>
Deutsch<span>ly</span>
    </span>
  </div>
);
export function Bar({ value, label }: { value: number; label: string }) {
  return (
    <progress className="bar" value={value} max={100} aria-label={label} />
  );
}
const dateTxt = (val: string, de: boolean) =>
  new Date(val).toLocaleDateString(de ? "de-DE" : "sr-Latn-RS");
const germanyIcons = [
  LuLandmark,         // s0 Auslaenderbehoerde
  LuStethoscope,      // s1 Lekar
  LuBriefcaseBusiness,// s2 Poslodavac
  LuUsers,            // s3 Kolege
  LuShoppingCart,     // s4 Supermarket
  LuHouse,            // s5 Stan
  LuSchool,           // s6 Skola
  LuBuilding2,        // s7 Institucija
  LuPhone,            // s8 Telefon
  LuWallet,           // s9 Banka
  LuHandshake,        // s10 Upoznavanje
  LuCoffee,           // s11 Kafa
  LuMapPin,           // s12 Adresa
  LuBus,              // s13 Prevoz
];

function GermanySceneIcon({ id }: { id: string }) {
const index = /^s([0-9]+)$/.exec(id);
const Icon = index ? germanyIcons[Number(index[1])] : undefined;
return Icon ? <Icon size={19} aria-hidden="true" /> : <GraduationCap size={18} />;
}
export default function App() {
  const [s, setState] = useState<Study>(() => cloud?fresh():repository.load());
  const [account,setAccount]=useState<Account|null>(null);
  const [authReady,setAuthReady]=useState(!cloud);
  const [cloudError,setCloudError]=useState("");
  const cloudLoaded=useRef(false);
  const activeUserId=useRef<string|null>(null);
  const pendingSave=useRef<ReturnType<typeof setTimeout>|null>(null);
  const [page, setPage] = useState<Page>("home");
  const [retakePlacement, setRetakePlacement] = useState(false);
  const [level, setLevel] = useState<LevelId>(
    () => repository.load().profile?.start || "A1.1",
  );
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState(false);
  const [intro, setIntro] = useState(false);
  const [result, setResult] = useState<{
    session: Session;
    score: number;
    passed: boolean;
    earned: number;
  } | null>(null);
  const [certificate, showCertificate] = useState(false);
  const [saved, setSaved] = useState(true);
  const main = useRef<HTMLElement | null>(null);
  const live = useRef(s);
  const lang = s.profile?.language || "sr";
  const de = lang === "de";
  const k = de ? 1 : 0;
  const t = (a: string, b: string) => choose(lang, a, b);
  const current = allSessions.find((x) => x.id === s.cursor?.id);
  const next = nextSession(s);
  const finished = lessons.filter((x) => s.results[x.id]).length;
  const pct = progress(s, "A1.1");
  const daily = s.days[localDay()] || 0;
  const run = streak(s);
  const weekSec = week(s);
  const goal = s.profile?.goal || 10;
  const cert = s.results[exam.id];
  const dailyCorrect = Object.keys(s.awards).filter((x) =>
    x.startsWith(`daily:${localDay()}:`),
  ).length;
  useEffect(()=>{
    if(!cloud)return;
    let alive=true;
    const {data:{subscription}}=cloud.auth.onAuthStateChange((_event,session)=>{
      if(!alive)return;
      const user=session?.user||null;
      setAccount(user);
      if(!user){if(pendingSave.current)clearTimeout(pendingSave.current);activeUserId.current=null;cloudLoaded.current=false;live.current=fresh();setState(fresh());setAuthReady(true);return;}
      if(activeUserId.current===user.id&&cloudLoaded.current)return;
      activeUserId.current=user.id;cloudLoaded.current=false;setAuthReady(false);
      void loadCloud(user.id).then(data=>{if(!alive||activeUserId.current!==user.id)return;live.current=data;setState(data);cloudLoaded.current=true;setAuthReady(true);setCloudError('');}).catch(e=>{if(!alive||activeUserId.current!==user.id)return;setCloudError('Nije moguće učitati napredak. Proveri bazu i vezu. '+String(e));setAuthReady(true)});
    });
    return ()=>{alive=false;subscription.unsubscribe()};
  },[]);
  useEffect(()=>()=>{if(pendingSave.current)clearTimeout(pendingSave.current)},[]);
  function change(update: (state: Study) => Study) {
    const n = update(live.current);
    live.current = n;
    setState(n);
    if(cloud){
      if(!account||!cloudLoaded.current)return;
      setSaved(false);
      if(pendingSave.current)clearTimeout(pendingSave.current);
      const id=account.id;
      pendingSave.current=setTimeout(()=>{void saveCloud(id,live.current).then(()=>{setSaved(true);setCloudError('')}).catch(e=>{setSaved(false);setCloudError('Sinhronizacija nije uspela: '+String(e))})},400);
    }else setSaved(repository.save(n));
  }
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = s.profile?.theme || "system";
  }, [lang, s.profile?.theme]);
  useEffect(() => {
    if (!s.profile || (!active && !["vocab", "speak"].includes(page))) return;
    let last = Date.now();
    const timer = window.setInterval(() => {
      const now = Date.now(),
        diff = Math.min(5, Math.floor((now - last) / 1000));
      last = now;
      if (document.visibilityState === "visible" && diff > 0)
        change((old) => tick(old, diff));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [active, page, !!s.profile]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, active, result, certificate, s.cursor?.index]);
  function go(p: Page) {
    setPage(p);
    setSidebar(false);
    setActive(false);
    setResult(null);
    showCertificate(false);
  }
  function open(item: Session) {
    if (!unlocked(live.current, item.id) && item.type !== "practice") return;
    if (live.current.cursor?.id !== item.id && live.current.results[item.id]) {
      const confirmed = window.confirm(
        t(
          "Uradi ponovo ovu lekciju? Novi pokusaj pocinje od prvog zadatka. Vec osvojeni XP i najbolji rezultat ostaju sacuvani. Za iste tacne odgovore XP se ne dodeljuje ponovo.",
          "Diese Lektion wiederholen? Der neue Versuch beginnt bei Aufgabe 1. Bereits verdiente XP und das beste Ergebnis bleiben erhalten. Fuer dieselben richtigen Antworten gibt es keine weiteren XP.",
        ),
      );
      if (!confirmed) return;
    }
    if (live.current.cursor?.id !== item.id) {
      if (
        live.current.cursor &&
        live.current.cursor.index > 0 &&
        !window.confirm(
          t(
            "Otvori novu sesiju? Poeni ostaju sačuvani, ali mesto u trenutnoj sesiji neće biti sačuvano.",
            "Neue Sitzung starten? Deine Punkte bleiben erhalten, aber die aktuelle Position geht verloren.",
          ),
        )
      )
        return;
      change((old) => ({
        ...old,
        cursor: { id: item.id, index: 0, correct: 0, earned: 0 },
      }));
      setIntro(!!item.intro);
    } else setIntro(false);
    setResult(null);
    showCertificate(false);
    setActive(true);
    setSidebar(false);
  }
  const known = Object.values(s.cards).filter(
    (x) => x.status === "known",
  ).length;
  const grammar = Object.keys(s.awards).filter(
    (x) => x.startsWith("question:") && x.endsWith(":grammar"),
  ).length;
  const listen = Object.keys(s.awards).filter(
    (x) => x.startsWith("question:") && x.endsWith(":listen"),
  ).length;
  const medals = [
    [
      "First Steps",
      t("Završi prvu lekciju", "Schließe deine erste Lektion ab"),
      finished >= 1,
      "🌱",
    ],
    [
      "Vocabulary Master",
      t("Označi 100 naučenih reči", "Markiere 100 Wörter als gelernt"),
      known >= 100 || !!Object.hasOwn(s.awards, "medal:vocabulary"),
      "📚",
    ],
    [
      "Grammar Hero",
      t(
        "Tačno uradi 50 gramatičkih zadataka",
        "Löse 50 Grammatikaufgaben richtig",
      ),
      grammar >= 50,
      "🧩",
    ],
    [
      "Listening Pro",
      t("Tačno uradi 20 zadataka slušanja", "Löse 20 Höraufgaben richtig"),
      listen >= 20,
      "🎧",
    ],
    [
      "Seven-Day Streak",
      t("Uči sedam dana zaredom", "Lerne sieben Tage hintereinander"),
      !!s.awards["streak:7"],
      "🔥",
    ],
    [
      "A1.1 Milestone",
      t("Položi A1.1 ispit", "Bestehe die A1.1-Prüfung"),
      !!cert,
      "🏅",
    ],
    [
      "A1 Champion",
      t("Po dostupnosti nivoa A1.2", "Nach Freigabe von A1.2"),
      false,
      "🥇",
    ],
    [
      "A2 Champion",
      t("Po dostupnosti nivoa A2.2", "Nach Freigabe von A2.2"),
      false,
      "🏆",
    ],
  ] as const;
  const medalCount = medals.filter((x) => x[2]).length;
  function storeProfile(p: Profile) {
    change((old) => ({ ...old, profile: p }));
    setLevel(p.start);
    if (!s.profile) go("home");
  }
  const head = (title: string, sub: string) => (
    <div className="page-head">
      <span className="eyebrow">DEUTSCHME STUDIO</span>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  );
  const rank =
    s.xp >= 4000
      ? t("Napredni učenik", "Fortgeschrittener Lerner")
      : s.xp >= 1000
        ? t("Istraživač", "Entdecker")
        : t("Početnik", "Einsteiger");
  if(cloud&&!authReady)return <div className="welcome-main"><h2>Učitavanje naloga i napretka...</h2></div>;
  if(cloud&&!account)return <Auth/>;
  if(cloud&&cloudError&&!cloudLoaded.current)return <div className="welcome-main"><h2>Greška pri učitavanju</h2><p role="alert">{cloudError}</p><button className="secondary" onClick={()=>void cloud?.auth.signOut()}>Odjavi se</button></div>;
  if (s.profile && retakePlacement) {
    return (
      <Placement
        onDone={(placementResult) => {
          change((old) => ({ ...old, placement: placementResult }));
          setRetakePlacement(false);
          setPage("profile");
        }}
      />
    );
  }
  if (!s.profile && !s.placement)
    return <Placement onDone={r=>{change(old=>({...old,placement:r}));setLevel(r.recommended)}}/>;
  if (!s.profile)
    return (
      <div className="welcome">
        <aside className="welcome-art">
          {brand}
          <div>
            <span className="eyebrow">DEUTSCH IM ALLTAG</span>
            <h1>
              Hallo!
              <br />
              <span>
                Schön, dass
                <br />
                du da bist.
              </span>
            </h1>
            <p>Ein bisschen Deutsch. Jeden Tag.</p>
          </div>
          <div className="art-label">
            <span>01</span>
            <span>LEARN · PRACTICE · REPEAT</span>
          </div>
        </aside>
        <section className="welcome-main">
          <span className="eyebrow">01 / START</span>
          <h2>
            Dobrodošao! <span>Willkommen!</span>
          </h2>
          <p>Prilagodi svoj profil za prve korake na nemačkom.</p>
          <ProfileForm profile={null} onSave={storeProfile} suggestedLevel={s.placement?.recommended} />
         {cloudError && (
  <p className="callout" role="alert">
    {cloudError}
  </p>
)}

{!cloud && !saved && (
  <p className="callout" role="alert">
    {t(
      "Napredak nije sačuvan.",
      "Fortschritt wurde nicht gespeichert.",
    )}
  </p>
)}

        </section>
      </div>
    );
  const stats: [LucideIcon, string, string, string][] = [
    [Zap, `${s.xp} XP`, t("Ukupno poena", "Gesamtpunkte"), "yellow"],
    [Flame, `${run}`, t("Dani u nizu", "Tage in Folge"), "orange"],
    [
      BookOpen,
      `${finished} / 50`,
      t("Završene lekcije", "Lektionen abgeschlossen"),
      "blue",
    ],
    [Award, `${medalCount}`, t("Medalje", "Medaillen"), "green"],
  ];
  const renderObj = (item: Session) => (
    <button
      key={item.id}
      className="lesson-row"
      disabled={!unlocked(s, item.id) && item.type !== "practice"}
      onClick={() => open(item)}
    >
      <span className={`lesson-icon ${s.results[item.id] ? "done" : ""}`}>
        {item.type === "practice" ? (
  <GermanySceneIcon id={item.id} />
) : s.results[item.id] ? (
  <Check size={17} />
) : !unlocked(s, item.id) ? (
  <LockKeyhole size={16} />
) : item.type === "lesson" ? (
  <Play size={16} />
) : (
  <GraduationCap size={18} />
)}
      </span>
      <span>
        {item.title[k]}
        <small>
          {s.results[item.id]
            ? `${s.results[item.id].score}% · ${t("Uradi ponovo", "Erneut machen")}``
            : `${item.items.length} ${t("zadataka", "Aufgaben")}`}
        </small>
      </span>
      <ChevronRight size={18} />
    </button>
  );
  const levelCards = (
    <div className="level-grid">
      {levels.map((l, i) => (
        <button
          key={l}
          className={`card level ${level === l ? "current" : ""}`}
          style={{ "--level": colors[i] } as React.CSSProperties}
          aria-pressed={level === l}
          onClick={() => {
            setLevel(l);
            go("learn");
          }}
        >
          <span className="level-label">
            {l}
{l === "A1.1" || l === "A1.2"
  ? <BookOpen size={15} />
  : <LockKeyhole size={14} />}
          </span>
          <b>{progress(s, l)}%</b>
          <Bar value={progress(s, l)} label={l} />
          <small>
  {l === "A1.1"
    ? t("Dostupno", "Verfügbar")
    : l === "A1.2"
      ? t("Dostupno · 1. celina", "Verfügbar · Einheit 1")
      : t("Plan · u pripremi", "Plan · in Vorbereitung")}
</small>
        </button>
      ))}
    </div>
  );
  const cardList = (items: Session[]) => (
    <div className="card rows">{items.map(renderObj)}</div>
  );
  const sessionHeader =
    current && s.cursor ? (
      <div className="session-head">
        <button
          className="secondary"
          aria-label={t("Pauziraj sesiju", "Sitzung pausieren")}
          onClick={() => setActive(false)}
        >
          <X size={19} />
        </button>
        <div>
          <strong>{current.title[k]}</strong>
          <small>
            {s.cursor.index + 1} / {current.items.length}
          </small>
          <Bar
            value={
              ((s.cursor.index + Number(!!s.cursor.graded)) * 100) /
              current.items.length
            }
            label={t("Napredak sesije", "Sitzungsfortschritt")}
          />
        </div>
      </div>
    ) : null;
  return (
    <div className="shell">
      <aside className={`sidebar ${sidebar ? "expanded" : ""}`}>
        <button className="brand-button" onClick={() => go("home")}>
          {brand}
        </button>
        <span className="nav-label">
          {t("RADNI PROSTOR", "ARBEITSBEREICH")}
        </span>
        <nav aria-label={t("Glavna navigacija", "Hauptnavigation")}>
          {nav.map(([id, sr, de, I]) => (
            <button
              key={id}
              aria-current={page === id && !active ? "page" : undefined}
              className={page === id && !active ? "nav active" : "nav"}
              onClick={() => go(id)}
            >
              <I size={19} />
              {t(sr, de)}
            </button>
          ))}
        </nav>
        <div className="local">
          <span /> {t("Lokalni profil", "Lokales Profil")}
        </div>
      </aside>
      <div className="main-shell">
        <header className="top">
          <div className="top-left">
            <button
              className="icon-btn menu"
              aria-expanded={sidebar}
              aria-label={t("Meni", "Menü")}
              onClick={() => setSidebar(!sidebar)}
            >
              {sidebar ? <X size={22} /> : <Menu size={22} />}
            </button>
            <span className="crumb">
              Studio <ChevronRight size={15} />{" "}
              {active
                ? t("Vežba", "Übung")
                : nav.find((x) => x[0] === page)?.[de ? 2 : 1]}
            </span>
          </div>
          <div className="top-right">
            {cloud&&account&&<button className="secondary" type="button" onClick={()=>void cloud?.auth.signOut()}>Odjavi se</button>}

            <button
              className="icon-btn"
              aria-label={t("Promeni temu", "Farbschema wechseln")}
              onClick={() =>
                change((old) => ({
                  ...old,
                  profile: {
                    ...old.profile!,
                    theme:
                      document.documentElement.dataset.theme === "dark" ||
                      (old.profile!.theme === "system" &&
                        matchMedia("(prefers-color-scheme:dark)").matches)
                        ? "light"
                        : "dark",
                  },
                }))
              }
            >
              {s.profile.theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
            <button
              className="avatar"
              aria-label={t("Profil", "Profil")}
              onClick={() => go("profile")}
            >
              {Array.from(s.profile.name)[0]?.toUpperCase()}
            </button>
          </div>
        </header>
        <main
          ref={main}
          className="main"
          onClick={() => {
            if (sidebar) setSidebar(false);
          }}
        >
          {cloudError && (
  <p className="callout" role="alert">
    {cloudError}
  </p>
)}

{!cloud && !saved && (
  <p className="callout" role="alert">
    {t(
      "Napredak nije sačuvan.",
      "Fortschritt wurde nicht gespeichert.",
    )}
  </p>
)}

          {active && current && s.cursor ? (
            <div className="session">
              {sessionHeader}
              {intro && current.intro ? (
                <article className="card exercise">
                  <span className="eyebrow">
                    {t("MINI LEKCIJA", "MINILEKTION")}
                  </span>
                  <h2>{current.title[k]}</h2>
                  <p>{current.intro[k]}</p>
                  <blockquote lang="de">{current.example}</blockquote>
                  <button className="primary" onClick={() => setIntro(false)}>
                    {t("Započni zadatke", "Aufgaben starten")}
                    <ArrowRight size={18} />
                  </button>
                </article>
              ) : (
                <Exercise
                  key={`${current.id}:${s.cursor.index}`}
                  q={current.items[s.cursor.index]}
                  lang={lang}
                  cursor={s.cursor}
                  checkMode={current.type === "exam" || current.type === "unit"}
                  onAnswer={(values) =>
                    change((old) => {
                      const q = current.items[old.cursor!.index];
                      const n = answer(old, current, q, values);
                      return n !== old && n.cursor?.graded?.ok
                        ? {
                            ...n,
                            awards: {
                              ...n.awards,
                              [`daily:${localDay()}:${q.id}`]: 0,
                            },
                          }
                        : n;
                    })
                  }
                  onNext={() => {
                    if (s.cursor!.index < current.items.length - 1)
                      change((old) => ({
                        ...old,
                        cursor: {
                          ...old.cursor!,
                          index: old.cursor!.index + 1,
                          graded: undefined,
                        },
                      }));
                    else {
                      const r = finish(live.current, current);
                      setResult({
                        session: current,
                        score: r.score,
                        passed: r.passed,
                        earned: s.cursor!.earned + r.bonus,
                      });
                      change(() => r.state);
                      setActive(false);
                    }
                  }}
                />
              )}
            </div>
          ) : certificate && cert ? (
            <section className="card certificate">
              <GraduationCap size={58} />
              <span className="eyebrow">DEUTSCHME LERNSTUDIO</span>
              <h1>{t("Interni sertifikat", "Internes Zertifikat")}</h1>
              <p>{t("Dodeljuje se", "Verliehen an")}</p>
              <h2>{s.profile.name}</h2>
              <p>
                A1.1 · {cert.score}% · {dateTxt(cert.date, de)}
              </p>
              <p>
                {t(
                  "Interna potvrda aplikacije. Nije zvanični Goethe-Institut ili telc sertifikat.",
                  "App-interner Nachweis. Kein offizielles Goethe-Institut- oder telc-Zertifikat.",
                )}
              </p>
              <div className="tiles noprint">
                <button className="secondary" onClick={() => go("progress")}>
                  {t("Nazad", "Zurück")}
                </button>
                <button className="primary" onClick={() => window.print()}>
                  {t(
                    "Štampaj / Sačuvaj kao PDF",
                    "Drucken / Als PDF speichern",
                  )}
                </button>
              </div>
            </section>
          ) : result ? (
            <article className="card result">
              <Sparkles size={45} />
              <span className="eyebrow">{result.session.title[k]}</span>
              <h1>
                {result.passed ? "Ausgezeichnet!" : "Keine Sorge, weiter üben!"}
              </h1>
              <p>
                {result.score}% · +{result.earned} XP
              </p>
              <p>
                {result.passed
                  ? t("Odlično odrađeno!", "Gut gemacht!")
                  : t(
                      "Za prolaz je potrebno 80%. Možeš ponovo pokušati.",
                      "Zum Bestehen brauchst du 80 %. Du kannst es erneut versuchen.",
                    )}
              </p>
              <div className="tiles">
                {result.passed && (
                  <button
                    type="button"
                    className="primary"
                    onClick={() => open(result.session)}
                  >
                    {t("Uradi ponovo", "Erneut machen")}
                  </button>
                )}
                {!result.passed && (
                  <button
                    className="primary"
                    onClick={() => open(result.session)}
                  >
                    {t("Pokušaj ponovo", "Erneut versuchen")}
                  </button>
                )}
                {result.passed && result.session.type === "exam" && (
                  <button
                    className="primary"
                    onClick={() => showCertificate(true)}
                  >
                    {t("Prikaži sertifikat", "Zertifikat ansehen")}
                  </button>
                )}
                <button
                  className="secondary"
                  onClick={() =>
                    go(result.session.type === "practice" ? page : "learn")
                  }
                >
                  {t("Nazad na pregled", "Zurück zur Übersicht")}
                </button>
              </div>
            </article>
          ) : page === "home" ? (
            <>
              <div className="hero">
                <div className="hero-copy">
                  <span className="tag">
                    <span /> A1.1 · {t("TVOJ PUT UČENJA", "DEIN LERNWEG")}
                  </span>
                  <h1>Hallo, {s.profile.name}!</h1>
                  <p>
                    {t(
                      "Nekoliko minuta nemačkog danas. Više samopouzdanja u sledećem razgovoru.",
                      "Heute ein paar Minuten Deutsch. Morgen mehr Sicherheit im Gespräch.",
                    )}
                  </p>
                  {current || next ? (
                    <button
                      className="hero-btn"
                      onClick={() => open((current || next)!)}
                    >
                      {current
                        ? t("Nastavi gde si stao", "Weiterlernen")
                        : finished
                          ? t("Nastavi učenje", "Weiterlernen")
                          : t("Započni prvu lekciju", "Erste Lektion starten")}
                      <ArrowRight size={19} />
                    </button>
                  ) : (
                    <button
                      className="hero-btn"
                      onClick={() => showCertificate(true)}
                    >
                      {t("Otvori sertifikat", "Zertifikat öffnen")}
                      <ArrowRight size={19} />
                    </button>
                  )}
                </div>
                <div className="hero-art" aria-hidden="true">
                  <div className="orbit one" />
                  <div className="orbit two" />
                  <div className="float a">
                    Hallo<span>!</span>
                  </div>
                  <div className="float b">
                    <MessageMotif /> Deutsch
                  </div>
                  <div className="float c">
                    Ä <span>Ö</span> Ü
                  </div>
                </div>
              </div>
              <div className="stat-grid">
                {stats.map(([I, value, label, color]) => (
                  <article className="card stat" key={label}>
                    <span className={`stat-icon ${color}`}>
                      <I size={20} />
                    </span>
                    <div>
                      <b>{value}</b>
                      <small>{label}</small>
                    </div>
                  </article>
                ))}
              </div>
              <div className="home-grid">
                <article className="card">
                  <div className="line">
                    <span className="eyebrow">
                      <Route size={17} /> {t("PUT UČENJA", "LERNWEG")}
                    </span>
                    <span className="chip">A1.1</span>
                  </div>
                  <h2>
                    {current?.title[k] ||
                      next?.title[k] ||
                      t("A1.1 završen", "A1.1 abgeschlossen")}
                  </h2>
                  <p className="muted">
                    {pct}% {t("nivoa završeno", "des Niveaus geschafft")}
                  </p>
                  <Bar value={pct} label="A1.1" />
                  <button
                    className="quiet"
                    onClick={() => {
                      setLevel("A1.1");
                      go("learn");
                    }}
                  >
                    {t("Otvori mapu učenja", "Lernkarte öffnen")}{" "}
                    <ArrowRight size={16} />
                  </button>
                </article>
                <article className="card">
                  <span className="eyebrow">
                    <Target size={17} /> {t("DNEVNI CILJ", "TAGESZIEL")}
                  </span>
                  <h2>
                    {Math.floor(daily / 60)} / {goal} min
                  </h2>
                  <Bar
                    value={Math.min(100, (daily * 100) / (goal * 60))}
                    label={t("Dnevni cilj", "Tagesziel")}
                  />
                  <p className="muted">
                    {daily >= goal * 60
                      ? t("Cilj ostvaren", "Ziel erreicht")
                      : t(
                          "Vreme u aktivnim vežbama",
                          "Zeit in aktiven Übungen",
                        )}{" "}
                    · +30 XP
                  </p>
                  <small>
                    {t(
                      "Izazov: 3 različita tačna odgovora",
                      "Challenge: 3 verschiedene richtige Antworten",
                    )}{" "}
                    · {Math.min(3, dailyCorrect)}/3
                  </small>
                </article>
              </div>
              <div className="line home-foot">
                <small>
                  {t("Rang", "Rang")}: {rank}
                </small>
                <small>
                  {t("Poslednja aktivnost", "Letzte Aktivität")}:{" "}
                  {s.activity ? dateTxt(s.activity, de) : "—"}
                </small>
              </div>
            </>
          ) : page === "learn" ? (
            <>
              {head(
                t("Mapa učenja", "Dein Lernweg"),
                t(
                  "Nove lekcije se otključavaju nakon najmanje 80% na prethodnoj. Završene možeš ponoviti.",
                  "Neue Lektionen öffnen sich ab 80 % in der vorherigen. Abgeschlossene kannst du wiederholen.",
                ),
              )}
              {level === "A1.1" && (
  <BeginnerBasics
    state={s}
    onComplete={(unitId, score) =>
      change((old) => {
        const previous = old.basics?.[unitId];
        const best = Math.max(previous?.score ?? 0, score);

        return {
          ...old,
          basics: {
            ...old.basics,
            [unitId]: {
              score: best,
              date: previous?.date || new Date().toISOString(),
            },
          },
        };
      })
    }
  />
)}
              {levelCards}
              {level === "A1.1" ? (
                <>
                  <div className="unit-list">
                    {curriculum.map((u, i) => (
                      <details
                        className="card unit"
                        key={u.id}
                        open={i === 0 || next?.id.startsWith(`${u.id}-`)}
                      >
                        <summary>
                          <span className="unit-icon">{u.icon}</span>
                          <span>
                            <small>
                              {t("CELINA", "EINHEIT")}{" "}
                              {String(i + 1).padStart(2, "0")}
                            </small>
                            <strong>{u.title[k]}</strong>
                          </span>
                          <span className="chip">
                            {u.lessons.filter((l) => s.results[l.id]).length}/5
                          </span>
                        </summary>
                        <div className="rows">
                          {u.lessons.map(renderObj)}
                          {renderObj(u.test)}
                        </div>
                      </details>
                    ))}
                  </div>
               {cardList([exam])}
                </>
              ) : level === "A1.2" ? (
                <div className="unit-list">
                  <h2>A1.2 · Alltag</h2>
                  <p className="muted">
                       A1.2: 10 celina, 50 lekcija, 10 testova i završni ispit.

                  </p>
{Array.from({ length: 10 }, (_, i) => (
  <details className="card unit" key={`a12-u${i + 1}`} open={i === 0}>
    <summary>
      <span className="unit-icon">
        {String(i + 1).padStart(2, "0")}
      </span>
      <strong>{roadmap[0][i].title[k]}</strong>
      <span className="chip">
        {a12Sessions
          .slice(i * 6, i * 6 + 5)
          .filter((x) => s.results[x.id]).length}/5
      </span>
    </summary>
    <div className="rows">
      {a12Sessions.slice(i * 6, i * 6 + 6).map(renderObj)}
    </div>
  </details>
))}
{cardList([a12Sessions[a12Sessions.length - 1]])}
                </div>
              ) : (
                <div className="unit-list">
                  <p className="callout">
                    {t(
                      "Ovo je nastavni plan. Lekcije, testovi i ispit još nisu dostupni.",
                      "Dies ist der Lernplan. Lektionen, Tests und Prüfung sind noch nicht verfügbar.",
                    )}
                  </p>
                  {roadmap[levels.indexOf(level) - 1]?.map((u, i) => (
                    <details className="card unit" key={u.title[0]}>
                      <summary>
                        <span className="unit-icon">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <strong>{u.title[k]}</strong>
                        <LockKeyhole size={17} />
                      </summary>
                      <ol>
                        {u.topics.map((topic) => (
                          <li key={topic} lang="sr">
                            {topic}
                          </li>
                        ))}
                      </ol>
                      <p className="muted">
                        {t("Test celine · planiran", "Einheitstest · geplant")}
                      </p>
                    </details>
                  ))}
                  <p className="callout">
                    {t(
                      "Završni ispit · planiran",
                      "Abschlussprüfung · geplant",
                    )}
                  </p>
                </div>
              )}
            </>
          ) : page === "vocab" ? (
            <>
              {head(
                t("Vokabular", "Wortschatz"),
                t(
                  "Sto reči uz članove, množinu, ilustracije i izgovor.",
                  "Hundert Wörter mit Artikeln, Plural, Bildern und Aussprache.",
                ),
              )}
              <Vocabulary
                lang={lang}
                state={s}
                onMark={(id, status) =>
                  change((old) => {
                    const n = mark(old, id, status);
                    return Object.values(n.cards).filter(
                      (c) => c.status === "known",
                    ).length >= 100
                      ? award(n, "medal:vocabulary", 0)
                      : n;
                  })
                }
             onToggleFavorite={(id) =>
  change((old) => {
    const current = old.favorites || [];

    return {
      ...old,
      favorites: current.includes(id)
        ? current.filter((wordId) => wordId !== id)
        : [...current, id],
    };
  })
} />
            </>
          ) : page === "listen" ? (
            <>
              {head(
                t("Slušanje", "Hörverstehen"),
                t(
                  "Izaberi temu i preslušaj rečenice koliko god puta želiš.",
                  "Wähle ein Thema und höre die Sätze beliebig oft.",
                ),
              )}
              <article className="card">
                <h2>{t("Brzi primer", "Kurzes Beispiel")}</h2>
                <Sound clip="l19" lang={lang} />
              </article>
              {cardList(drills.filter((x) => x.id.endsWith("-listen")))}
            </>
          ) : page === "grammar" ? (
            <>
              {head(
                t("Gramatika", "Grammatik"),
                t(
                  "Pravila iz A1.1 lekcija i brza vežba članova.",
                  "Regeln aus den A1.1-Lektionen und kurze Artikelübungen.",
                ),
              )}
              {curriculum.map((u, i) => (
                <details className="card unit" key={u.id}>
                  <summary>
                    <span className="unit-icon">{u.icon}</span>
                    <strong>{u.title[k]}</strong>
                    <BookOpen size={18} />
                  </summary>
                  <div className="rule-grid">
                    {u.lessons.map((x) => (
                      <section key={x.id}>
                        <strong>{x.title[k]}</strong>
                        <p>{x.intro?.[k]}</p>
                        <p lang="de">{x.example}</p>
                      </section>
                    ))}
                  </div>
                  {renderObj(
                    drills.find((x) => x.id === `drill-${i}-grammar`)!,
                  )}
                </details>
              ))}
            </>
          ) : page === "speak" ? (
            <>
              {head(
                t("Govor", "Sprechen"),
                t(
                  "Vežbaj naglas i probaj razgovor sa ponuđenim ili upisanim odgovorima.",
                  "Übe laut und antworte im Gespräch durch Auswahl oder Texteingabe.",
                ),
              )}
              <Speaking lang={lang} />
              {cardList(practiceScenes.slice(10))}
            </>
          ) : page === "germany" ? (
            <>
              {head(
                "German in Germany",
                t(
                  "Deset kratkih razgovora iz svakodnevnog života u Nemačkoj. Neke situacije koriste izraze iznad A1.1.",
                  "Zehn kurze Gespräche aus dem Alltag in Deutschland. Einige verwenden Ausdrücke über A1.1.",
                ),
              )}
              {cardList(practiceScenes.slice(0, 10))}
            </>
          ) : page === "progress" ? (
            <>
              {head(
                t("Tvoj napredak", "Dein Fortschritt"),
                t(
                  "Prati završene lekcije, poene i vreme koje ulažeš u učenje.",
                  "Verfolge Lektionen, Punkte und deine Lernzeit.",
                ),
              )}
              {levelCards}
              <div className="home-grid">
                <article className="card">
                  <h2>{t("Nedeljni cilj", "Wochenziel")}</h2>
                  <p>
                    {Math.floor(weekSec / 60)} / {goal * 5} min
                  </p>
                  <Bar
                    value={Math.min(100, (weekSec * 100) / (goal * 5 * 60))}
                    label={t("Nedeljni cilj", "Wochenziel")}
                  />
                  <p className="muted">
                    {t(
                      "Pet dnevnih ciljeva nedeljno",
                      "Fünf Tagesziele pro Woche",
                    )}
                  </p>
                </article>
                <article className="card">
                  <h2>{t("Interni sertifikat", "Internes Zertifikat")}</h2>
                  {cert ? (
                    <button
                      className="primary"
                      onClick={() => showCertificate(true)}
                    >
                      {t("Otvori sertifikat", "Zertifikat öffnen")}
                    </button>
                  ) : (
                    <p>
                      {t(
                        "Položi završni ispit sa najmanje 80% da otključaš sertifikat.",
                        "Bestehe die Abschlussprüfung mit mindestens 80 %, um das Zertifikat freizuschalten.",
                      )}
                    </p>
                  )}
                </article>
              </div>
              <article className="card">
                <h2>{t("Istorija učenja", "Lernverlauf")}</h2>
                {Object.keys(s.results).length ? (
                  Object.entries(s.results)
                    .sort((a, b) => b[1].date.localeCompare(a[1].date))
                    .map(([id, r]) => (
                      <div className="history" key={id}>
                        <span>
                          {allSessions.find((x) => x.id === id)?.title[k]}
                        </span>
                        <small>
                          {dateTxt(r.date, de)} · {r.score}%
                        </small>
                      </div>
                    ))
                ) : (
                  <p className="muted">
                    {t(
                      "Još nema završenih sesija.",
                      "Noch keine abgeschlossenen Sitzungen.",
                    )}
                  </p>
                )}
              </article>
            </>
          ) : page === "awards" ? (
            <>
              {head(
                t("Dostignuća", "Erfolge"),
                `${medalCount} / ${medals.length} · ${rank}`,
              )}
              <div className="medal-grid">
                {medals.map(([title, desc, won, icon]) => (
                  <article
                    className={`card medal ${won ? "won" : ""}`}
                    key={title}
                  >
                    <span>{won ? icon : <LockKeyhole size={24} />}</span>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <small>
                      {won
                        ? t("Osvojeno", "Erreicht")
                        : t("Zaključano", "Gesperrt")}
                    </small>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              {head(
                t("Profil i podešavanja", "Profil und Einstellungen"),
                t(
                  "Podešavanja i napredak ostaju u ovom pregledaču.",
                  "Einstellungen und Fortschritt bleiben in diesem Browser.",
                ),
              )}
              <div className="card profile">
                <ProfileForm profile={s.profile} onSave={storeProfile} />
              </div>
              <AccountSettings account={account} />
              <div className="card" style={{ marginTop: 16 }}>
                <h2>{t("Procena znanja nemačkog", "Deutsch-Einstufungstest")}</h2>
                <p>{t("Proveri svoj nivo kroz 24 pitanja. Rezultat ne briše XP, završene lekcije ni postojeći nivo.", "Prüfe dein Niveau mit 24 Fragen. Deine XP, Lektionen und dein aktuelles Niveau bleiben erhalten.")}</p>
                {s.placement && (
                  <p>{t("Poslednja preporuka", "Letzte Empfehlung")}: <strong>{s.placement.recommended}</strong></p>
                )}
                <button
                  type="button"
                  className="primary"
                  onClick={() => setRetakePlacement(true)}
                >
                  {t("Započni test procene znanja", "Einstufungstest starten")}
                </button>
              </div>
            </>
          )}
        </main>
      </div>
      {!active && (
        <nav className="mobile-bottom-nav" aria-label={t("Mobilna navigacija", "Mobile Navigation")}>
          {nav.filter(([id]) => ["home", "learn", "vocab", "progress", "profile"].includes(id))
            .map(([id, sr, deLabel, Icon]) => (
              <button
                key={id}
                type="button"
                className={`mobile-bottom-item ${page === id ? "selected" : ""}`}
                aria-current={page === id ? "page" : undefined}
                onClick={() => go(id)}
              >
                <Icon size={21} aria-hidden="true" />
                <span>{t(sr, deLabel)}</span>
              </button>
            ))}
        </nav>
      )}
    </div>
  );
}
function MessageMotif() {
  return (
    <span className="dots" aria-hidden="true">
      •••
    </span>
  );
}
