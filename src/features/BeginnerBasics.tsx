import { useState } from "react";
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
    <h2 lang="de" style={{textAlign:"center",marginTop:16}}>{unit.pairs[card].de}</h2>
    <p style={{textAlign:"center",fontSize:20}}>{unit.pairs[card].sr}</p>
    {unit.pairs[card].note&&<p lang="de" style={{textAlign:"center"}}>{unit.pairs[card].note}</p>}
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
      {scramble(unit.pairs.slice(0,4),unitIndex+99).map(pair=><button key={pair.de} type="button" className="tile" disabled={Object.values(matched).includes(pair.de)} onClick={()=>{
        if(matchingIndex===null)return;
        if(unit.pairs[matchingIndex].de===pair.de){setMatched(old=>({...old,[matchingIndex]:pair.de}));setMatchingIndex(null)}
        else setMatchingIndex(null);
      }}>{pair.de}</button>)}
    </div>
    <p className="muted">Tačno povezano: {Object.keys(matched).length}/4. Ako par nije tačan, pokušaj ponovo.</p>
    <button className="primary" type="button" disabled={Object.keys(matched).length!==4} onClick={()=>setStage("quiz")}>Nastavi na pitanja</button>
  </>}
  {stage==="quiz"&&<>
    <p className="eyebrow">PITANJE {index+1}/{quiz.length}</p>
    <progress className="bar" value={index} max={quiz.length} aria-label="Napredak testa"/>
    <div className="picture" style={{minHeight:110}}><span style={{fontSize:55}} aria-hidden="true">{question.pair.visual||"📘"}</span></div>
    <h2>{unit.id==="objects"?"Koja nemačka reč odgovara slici?":`Kako se na nemačkom kaže: ${question.pair.sr}?`}</h2>
    <div className="choices">{choices.map((c,i)=><button key={c.de} type="button" className={`choice ${selected===i?"selected":""}`} disabled={submitted} aria-pressed={selected===i} onClick={()=>setSelected(i)} lang="de">{c.de}</button>)}</div>
    {submitted&&<p role="status" className={`feedback ${selected!==null&&choices[selected].de===question.pair.de?"ok":"miss"}`}>{selected!==null&&choices[selected].de===question.pair.de?"Sehr gut!":"Fast richtig!"} Tačno: <strong lang="de">{question.pair.de}</strong></p>}
    <button type="button" className="primary" disabled={selected===null} onClick={()=>submitted?next():setSubmitted(true)} style={{marginTop:16}}>{submitted?"Nastavi":"Proveri odgovor"}</button>
  </>}
  {stage==="done"&&<><h2>Sehr gut! 🎉</h2><p>Rezultat: {Math.round(correct*100/quiz.length)}%</p><p>Rezultat je sačuvan u tvom profilu. Ponovljeni test ne donosi dupli XP.</p><button className="primary" type="button" onClick={()=>chooseUnit((unitIndex+1)%units.length)}>Sledeća celina →</button></>}
  {done&&stage!=="done"&&<p className="muted">Najbolji prethodni rezultat: {done.score}%</p>}
 </section>
}
