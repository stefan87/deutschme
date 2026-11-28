import { useEffect, useState } from "react";
import type { Study } from "../core/types";

type Pair = { de: string; sr: string; visual?: string; note?: string };
type Unit = { id: string; title: string; description: string; pairs: Pair[] };
const units: Unit[] = [
  { id: "pronouns", title: "Lične zamenice", description: "Ich, du, er, sie, es, wir, ihr, sie / Sie", pairs: [
    {de:"ich",sr:"ja",visual:"🙋",note:"Ich bin Stefan."},
    {de:"du",sr:"ti",visual:"👉",note:"Du bist hier."},
    {de:"er",sr:"on",visual:"👤",note:"Er heißt Max."},
    {de:"sie",sr:"ona",visual:"👤",note:"Sie heißt Mia."},
    {de:"es",sr:"ono",visual:"🧸",note:"Es ist klein."},
    {de:"wir",sr:"mi",visual:"👥",note:"Wir lernen Deutsch."},
    {de:"ihr",sr:"vi (neformalno, množina)",visual:"👥",note:"Ihr lernt Deutsch."},
    {de:"sie (Plural)",sr:"oni / one",visual:"👥",note:"Sie lernen Deutsch."},
    {de:"Sie (höflich)",sr:"Vi (formalno)",visual:"🤝",note:"Wie heißen Sie?"}
  ]},
  { id:"numbers",title:"Brojevi 0–20",description:"Broji i poveži broj sa nemačkom rečju",pairs:[
    ...["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn","zwanzig"].map((de,i)=>({de,sr:String(i),visual:"🔢"}))
  ]},
  { id:"colors",title:"Boje",description:"Prepoznaj boje i nauči osnovne nazive",pairs:[
    {de:"rot",sr:"crvena",visual:"🔴"},{de:"blau",sr:"plava",visual:"🔵"},
    {de:"grün",sr:"zelena",visual:"🟢"},{de:"gelb",sr:"žuta",visual:"🟡"},
    {de:"schwarz",sr:"crna",visual:"⚫"},{de:"weiß",sr:"bela",visual:"⚪"},
    {de:"orange",sr:"narandžasta",visual:"🟠"},{de:"lila",sr:"ljubičasta",visual:"🟣"},
    {de:"braun",sr:"braon",visual:"🟤"}
  ]},
  { id:"objects",title:"Osnovni pojmovi",description:"Uči imenice sa članovima der, die i das",pairs:[
    {de:"der Apfel",sr:"jabuka",visual:"🍎"},{de:"die Banane",sr:"banana",visual:"🍌"},
    {de:"das Brot",sr:"hleb",visual:"🍞"},{de:"das Haus",sr:"kuća",visual:"🏠"},
    {de:"das Auto",sr:"automobil",visual:"🚗"},{de:"der Hund",sr:"pas",visual:"🐕"},
    {de:"die Katze",sr:"mačka",visual:"🐈"},{de:"das Buch",sr:"knjiga",visual:"📖"},
    {de:"der Ball",sr:"lopta",visual:"⚽"},{de:"die Uhr",sr:"sat",visual:"⌚"},
    {de:"die Blume",sr:"cvet",visual:"🌷"},{de:"das Wasser",sr:"voda",visual:"💧"}
  ]}
];

function scramble<T>(items:T[], seed:number):T[]{
 const copy=[...items];let x=seed+104729;
 for(let i=copy.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[copy[i],copy[j]]=[copy[j],copy[i]]}
 return copy;
}
// Plays pronunciation on demand, including on mobile browsers that require a tap.
function Pronounce({ text }: { text: string }) {
 const [error, setError] = useState("");
 const spoken = text.replace(/\s*\([^)]*\)/g, "").trim();
 useEffect(() => () => {
   if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
 }, []);
 function play() {
   setError("");
   if (!("speechSynthesis" in window)) {
     setError("Izgovor nije podržan u ovom pregledaču.");
     return;
   }
   try {
     window.speechSynthesis.cancel();
     const u = new SpeechSynthesisUtterance(spoken);
     u.lang = "de-DE";
     u.rate = 0.85;
     u.pitch = 1;
     const german = window.speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith("de"));
     u.voice = german.find(v => /natural|neural|premium|enhanced/i.test(v.name)) || german[0] || null;
     u.onerror = e => {
       if (e.error !== "canceled" && e.error !== "interrupted") setError("Zvuk nije dostupan. Proveri glasove telefona.");
     };
     window.speechSynthesis.speak(u);
   } catch {
     setError("Nije moguće pustiti izgovor.");
   }
 }
 return <span style={{display:"inline-flex",alignItems:"center",gap:4}}>
   <button type="button" onClick={play} aria-label={`Poslušaj izgovor: ${spoken}`} title={`Izgovor: ${spoken}`}
     style={{minWidth:44,minHeight:44,padding:"6px 10px",borderRadius:12,border:"1px solid currentColor",background:"transparent",color:"inherit",cursor:"pointer"}}>🔊</button>
   {error && <small role="alert">{error}</small>}
 </span>;
}

export type BasicsRecord=Record<string,{score:number;date:string}>;
export default function BeginnerBasics({state,onComplete}:{state:Study;onComplete:(unitId:string,score:number)=>void}){
 const completed:BasicsRecord=state.basics||{};
 const [unitIndex,setUnitIndex]=useState(0);
 const [stage,setStage]=useState<"study"|"match"|"quiz"|"done">("study");
 const [card,setCard]=useState(0);
 const [index,setIndex]=useState(0);
 const [selected,setSelected]=useState<number|null>(null);
 const [correct,setCorrect]=useState(0);
 const [submitted,setSubmitted]=useState(false);
 const [matched,setMatched]=useState<Record<number,string>>({});
 const [matchingIndex,setMatchingIndex]=useState<number|null>(null);
 const unit=units[unitIndex];
 const quiz=unit.pairs.map((pair,i)=>({pair,i}));
 const question=quiz[index];
 const choices=scramble([question.pair,...scramble(unit.pairs.filter(x=>x!==question.pair),index+unitIndex*77).slice(0,3)],index+unitIndex*301);
 const done=completed[unit.id];
 function chooseUnit(i:number){setUnitIndex(i);setStage("study");setCard(0);setIndex(0);setSelected(null);setCorrect(0);setSubmitted(false);setMatched({});setMatchingIndex(null)}
 function next(){if(!submitted)return;const count=correct+Number(selected!==null&&choices[selected].de===question.pair.de);
   if(index+1===quiz.length){const score=Math.round(count*100/quiz.length);onComplete(unit.id,score);setCorrect(count);setStage("done")}
   else{setCorrect(count);setIndex(index+1);setSelected(null);setSubmitted(false)}
 }
 return <section className="card" style={{maxWidth:780,margin:"0 auto"}}>
  <span className="eyebrow">A1.1 · PRVI KORACI</span><h2>Deutsch von Anfang an</h2>
  <p>Uči osnovne reči, zatim proveri znanje. Završene celine možeš ponavljati bez gubitka rezultata.</p>
  <div className="tiles" style={{margin:"16px 0"}}>{units.map((u,i)=><button key={u.id} type="button" className={`tile ${unitIndex===i?"selected":""}`} onClick={()=>chooseUnit(i)}>{u.title} {completed[u.id]?`✓ ${completed[u.id].score}%`:""}</button>)}</div>
  <h2>{unit.title}</h2><p className="muted">{unit.description}</p>
  {stage==="study"&&<>
    <div className="picture" style={{minHeight:125}}><span style={{fontSize:60}} aria-hidden="true">{unit.pairs[card].visual||"📘"}</span></div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,flexWrap:"wrap",marginTop:16}}><h2 lang="de" style={{margin:0}}>{unit.pairs[card].de}</h2><Pronounce text={unit.pairs[card].de}/></div>
    <p style={{textAlign:"center",fontSize:20}}>{unit.pairs[card].sr}</p>
    {unit.pairs[card].note&&<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}><p lang="de">{unit.pairs[card].note}</p><Pronounce text={unit.pairs[card].note}/></div>}
    <div className="line" style={{marginTop:18}}><button type="button" className="secondary" disabled={card===0} onClick={()=>setCard(card-1)}>← Prethodna</button><span>{card+1}/{unit.pairs.length}</span><button type="button" className="secondary" disabled={card===unit.pairs.length-1} onClick={()=>setCard(card+1)}>Sledeća →</button></div>
    <button type="button" className="primary" style={{marginTop:16}} onClick={()=>{setStage(unit.id==="objects"||unit.id==="colors"?"match":"quiz");setIndex(0);setCorrect(0);setSelected(null);setSubmitted(false);setMatched({});setMatchingIndex(null)}}>Proveri znanje</button>
  </>}
  {stage==="match"&&<>
    <p>Poveži 4 slike sa nemačkim rečima. Izaberi sliku, zatim odgovarajuću reč.</p>
    <div className="choices">
      {unit.pairs.slice(0,4).map((pair,i)=><button key={i} type="button" className={`choice ${matchingIndex===i?"selected":""}`} disabled={!!matched[i]} onClick={()=>setMatchingIndex(i)} aria-pressed={matchingIndex===i}>
        <span style={{fontSize:34}} aria-hidden="true">{pair.visual}</span> {matched[i]?`✓ ${pair.de}`:`Slika ${i+1}`}
      </button>)}
    </div>
    <div className="tiles" style={{marginTop:12}}>
      {scramble(unit.pairs.slice(0,4),unitIndex+99).map(pair=><div key={pair.de} style={{display:"flex",alignItems:"center",gap:6,minWidth:0}}>
        <button type="button" className="tile" style={{flex:"1 1 auto",minWidth:0}} disabled={Object.values(matched).includes(pair.de)} onClick={()=>{
          if(matchingIndex===null)return;
          if(unit.pairs[matchingIndex].de===pair.de){setMatched(old=>({...old,[matchingIndex]:pair.de}));setMatchingIndex(null)}
          else setMatchingIndex(null);
        }}>{pair.de}</button>
        <Pronounce text={pair.de}/>
      </div>)}
    </div>
    <p className="muted">Tačno povezano: {Object.keys(matched).length}/4. Ako par nije tačan, pokušaj ponovo.</p>
    <button className="primary" type="button" disabled={Object.keys(matched).length!==4} onClick={()=>setStage("quiz")}>Nastavi na pitanja</button>
  </>}
  {stage==="quiz"&&<>
    <p className="eyebrow">PITANJE {index+1}/{quiz.length}</p>
    <progress className="bar" value={index} max={quiz.length} aria-label="Napredak testa"/>
    <div className="picture" style={{minHeight:110}}><span style={{fontSize:55}} aria-hidden="true">{question.pair.visual||"📘"}</span></div>
    <h2>{unit.id==="objects"?"Koja nemačka reč odgovara slici?":`Kako se na nemačkom kaže: ${question.pair.sr}?`}</h2>
        <div className="choices dm-basics-quiz">
  {choices.map((c, i) => {
    const isCorrect = c.de === question.pair.de;
    const isSelected = selected === i;
    const showCorrect = submitted && isCorrect;
    const showWrong = submitted && isSelected && !isCorrect;

    return (
      <div
        key={c.de}
        className={`dm-basics-answer ${
          showCorrect ? "dm-basics-correct" :
          showWrong ? "dm-basics-wrong" :
          isSelected ? "dm-basics-selected" : ""
        }`}
      >
        <button
          type="button"
          className="dm-basics-answer-button"
          disabled={submitted}
          aria-pressed={isSelected}
          onClick={() => setSelected(i)}
          lang="de"
        >
          {c.de}
        </button>
        {showCorrect && (
          <div className="dm-basics-answer-sound">
            <Pronounce text={c.de} />
          </div>
        )}
      </div>
    );
  })}
</div>

    <div className="choices">{choices.map((c,i)=><div key={c.de} style={{display:"flex",alignItems:"center",gap:8,minWidth:0}}>
      <button type="button" className={`choice ${selected===i?"selected":""}`} style={{flex:"1 1 auto",minWidth:0}} disabled={submitted} aria-pressed={selected===i} onClick={()=>setSelected(i)} lang="de">{c.de}</button>
      <Pronounce text={c.de}/>
    </div>)}</div>
{submitted && selected !== null && (
      <div className={`feedback ${choices[selected].de === question.pair.de ? "ok" : "miss"}`}>
        <strong>
          {choices[selected].de === question.pair.de
            ? "Sehr gut!"
            : "Nije tačno. Pogledaj ispravan odgovor:"}
        </strong>
        <p>
          {choices[selected].de === question.pair.de ? "Tačan odgovor: " : "Ispravan odgovor: "}
          <strong lang="de">{question.pair.de}</strong>
        </p>
      </div>
    )}    <button type="button" className="primary" disabled={selected===null} onClick={()=>submitted?next():setSubmitted(true)} style={{marginTop:16}}>{submitted?"Nastavi":"Proveri odgovor"}</button>
  </>}
  {stage==="done"&&<><h2>Sehr gut! 🎉</h2><p>Rezultat: {Math.round(correct*100/quiz.length)}%</p><p>Rezultat je sačuvan u tvom profilu. Ponovljeni test ne donosi duple šargarepice.</p><button className="primary" type="button" onClick={()=>chooseUnit((unitIndex+1)%units.length)}>Sledeća celina →</button></>}
  {done&&stage!=="done"&&<p className="muted">Najbolji prethodni rezultat: {done.score}%</p>}
 </section>
}
