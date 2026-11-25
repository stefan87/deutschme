# DeutschMe · Lernstudio

Web aplikacija za svakodnevno učenje nemačkog. A1.1 uključuje 10 celina × 5 lekcija × 10 interaktivnih zadataka, 10 testova i završni ispit sa 20 zadataka. A1.2, A2.1 i A2.2 imaju po 10 tematskih celina i 5 planiranih lekcija u svakoj, ali bez aktivnih lekcija i ocenjivanja. A1.1–A2.2 su interne podele nastavnog plana.

## Pokretanje

Potreban je Node.js 22+ i npm. Raspakuj arhivu, u terminalu otvori folder `deutschme`, pa pokreni:

```bash
npm ci
npm run dev
```

Otvori adresu prikazanu u terminalu, obično `http://localhost:5173`. Za proveru produkcijskog paketa:

```bash
npm run build
npm run preview
```

`dist/` je rezultat build-a i može se objaviti na statičkom hostingu. Za mikrofon izvan `localhost` okruženja potreban je HTTPS. Nema API ključeva, CDN-a niti backenda za rad ove verzije. MP3 klipovi su uključeni u projekat; ponovna izrada je opciona (`python scripts/audio.py`, uz `espeakng-loader` i `ffmpeg`).

## Kako radi

- Welcome ekran podešava ime, maternji jezik, jezik interfejsa (srpski ili nemački), željeni nivo i dnevni cilj. Izbor višeg nivoa omogućiće pregled plana, a ne preskakanje na još neobjavljene lekcije.
- A1.1 napredak meri svih 61 koraka: lekcije, testove i ispit. Za otključavanje sledećeg koraka traži se najmanje 80%. Završene sesije ostaju dostupne. Testovi i ispit uzorkuju zadatke iz nastavnog sadržaja. Zadaci sa više pododgovora vrede jedan bod i traže da svi pododgovori budu tačni.
- Provera pisanih odgovora koristi unapred definisane formulacije, ne AI. Zanemaruje velika/mala slova, razmake i završnu interpunkciju, ali razlikuje umlaut i ß. Nije automatski korektor svih mogućih ispravnih formulacija. Nastavni prevodi ostaju nemački–srpski i u nemačkom interfejsu.
- XP za pitanje se daje samo jednom, čak i ako se isto pitanje pojavi na testu. Bonusi za savršenu lekciju, položeni test, ispit, dnevni cilj i prvi sedmodnevni niz imaju jedinstvene ključeve. Dnevni cilj meri vreme u vidljivoj kartici tokom vežbi, vokabulara i govora, a ne vreme u pozadini.
- 100 kartica ima član, množinu, srpski prevod, vizuelnu oznaku, primer i audio. SRS intervali: teško 2 sata, učim 1 dan, naučeno 2–60 dana po uzastopnim pozitivnim procenama. U trenutnoj verziji ilustracije su emoji piktogrami, a zvuk je sintetizovan eSpeak NG nemačkim glasom, ne snimak izvornog govornika.
- German in Germany uključuje 10 scenarija; sekcija Govor ima još 4 scenarija i lokalno snimanje do 30 sekundi. Snimci se ne šalju i ne čuvaju posle napuštanja sekcije. Nema prepoznavanja govora ili automatske ocene izgovora.
- Profil, XP, rezultati, kartice i mesto do jednog aktivnog zadatka čuvaju se u `localStorage` na istom pregledaču i adresi. Nedovršen unos u polje ne čuva se do predaje odgovora. Brisanje podataka sajta briše napredak. Nema naloga ni sinhronizacije. Sertifikat je isključivo interni, sa štampom ili čuvanjem kroz dijalog pregledača, i nije Goethe-Institut/telc sertifikat.

## Arhitektura

- `src/core/`: modeli, provera odgovora, bodovi i jedinstvene nagrade, vreme i ponavljanje kartica.
- `src/data/`: urednički sadržaj, čitanje, razgovori, sastavljanje sesija i plan viših nivoa.
- `src/features/`: prikaz vežbi, vokabular, registracija/podešavanja i snimanje govora.
- `src/services/repository.ts`: granica za lokalno skladištenje sa verzionisanim ključem.
- `public/audio/`: nemački MP3 klipovi; `tests/`: Node testovi i Playwright testovi u pregledaču.
- Stack: React, TypeScript, Tailwind CSS, Vite i Lucide.

Za proširenje dodaj stabilne identifikatore lekcija i pitanja; ne recikliraj postojeće jer su povezani sa XP-om i istorijom. Za Supabase uvedi asinhroni repozitorijum i autentifikaciju, zatim migracije sa izolacijom redova po `user_id`, jedinstvenim ključem za nagrade, transakcijama za upis rezultata i strategijom migracije/sukoba za lokalne zapise. `.env.example` rezerviše javne promenljive; `VITE_*` ulaze u klijentski bundle i nikada nisu mesto za privatne ključeve. Za komercijalnu verziju slede urednička i metodološka provera, snimci govornika, potpun sadržaj viših nivoa, privatnost i pristupačnost, sinhronizacija i produkciono testiranje.

## Testovi

```bash
npm test
npx playwright install chromium
npm run test:e2e
```

Testovi u Chromium-u pokrivaju tok vežbi, audio, snimanje uz simulirani mikrofon, napredak, sertifikat, nastavljanje posle osvežavanja, nemački interfejs i uski prikaz od 320 px. Na Linuxu, ako je potrebno instalirati sistemske zavisnosti, koristi `npx playwright install --with-deps chromium`. Već instalirani Chromium može se zadati promenljivom `CHROMIUM_PATH`.

## Git i GitHub

Kreiraj prazan repozitorijum `deutschme` na GitHub-u (bez automatskog README-a), a u folderu projekta pokreni:

```bash
git init -b main
git add .
git commit -m "feat: add DeutschMe A1.1 learning app"
git remote add origin git@github.com:TVOJ_NALOG/deutschme.git
git push -u origin main
```

Zameni `TVOJ_NALOG` svojim korisničkim imenom ili koristi HTTPS adresu koju prikaže GitHub. Ako koristiš SSH, prethodno podesi javni SSH ključ. Kod nije objavljen na GitHub-u. `.gitignore` isključuje `node_modules`, `dist`, lokalne tajne i rezultate testova. Koristi male commitove, npr. `fix: keep XP stable on lesson replay` i `content: add A1.2 shopping unit`. Proveri `git status` i izbegni dodavanje `.env` datoteka, privatnih tokena ili korisničkih podataka.

## Nalozi i sinhronizacija (v2)

1. Napravi Supabase projekat, u SQL Editor-u izvrši `supabase/schema.sql`.
2. U Supabase Authentication podesi Site URL i Redirect URL na svoj GitHub Pages URL (sa završnim `/`). Email potvrda je uključena prema podešavanjima Supabase projekta.
3. Kopiraj `.env.example` u `.env.local` i unesi **Project URL** i **publishable** key. Nikad ne koristi `service_role` ili secret key u frontend-u.
4. Pokreni `npm install`, zatim `npm run dev`; za produkciju `npm run build`. Na GitHub Pages podesi VITE promenljive kao GitHub Actions variables i deploy build-a putem Actions.
5. Nalog se registruje emailom i lozinkom, a napredak se čuva u `study_progress` sa RLS po `auth.uid()`. Nije povezano dok se ne unesu stvarni Supabase podaci.

Stari `localStorage` napredak se **ne prebacuje automatski** na cloud nalog, kako se podaci sa zajedničkog računara ne bi pripisali pogrešnoj osobi.

## Audio v2

U vežbama i karticama koristi se nemački glas operativnog sistema/pregledača (`speechSynthesis`), sa izborom glasa i brzine. Dostupnost i prirodnost zavise od uređaja. Rezervni MP3 ostaje dostupan. Za dosledan profesionalni neuralni glas na svim uređajima potrebno je naknadno dodati licencirane snimke ili TTS servis sa bezbednim serverskim pristupom.
