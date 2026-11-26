import {useState} from 'react';
import {ArrowRight,Check,GraduationCap} from '../icons';
import type {LevelId} from '../../core/types';
import {evaluatePlacement,placementItems,placementLevels,type PlacementResult} from './assessment';
export default function Placement({onDone}:{onDone:(r:PlacementResult)=>void}){
 const [stage,setStage]=useState<'intro'|'self'|'test'|'result'>('intro');
 const [self,setSelf]=useState<LevelId>('A1.1');const [index,setIndex]=useState(0);
 const [answers,setAnswers]=useState<(number|null)[]>(Array(placementItems.length).fill(null));
 const [result,setResult]=useState<PlacementResult|null>(null);
 const [showReview,setShowReview]=useState(false);
 const item=placementItems[index];const chosen=answers[index];
 return <div className="welcome"><aside className="welcome-art"><h1>DeutschMe</h1><div><span className="eyebrow">DEIN STARTPUNKT</span><h1>Finde dein Niveau.</h1><p>Pronađi svoj sledeći korak u učenju nemačkog.</p></div><p>24 pitanja · A1.1 do A2.2</p></aside><section className="welcome-main placement">
 {stage==='intro'&&<><span className="eyebrow">01 / PROCENA ZNANJA</span><h2>Hajde da otkrijemo koliko već znaš.</h2><p>Kratak test iz gramatike i vokabulara predložiće ti početni nivo. Rezultat je orijentacioni, nije zvaničan CEFR ispit.</p><button className="primary" onClick={()=>setStage('self')}>Započni test znanja <ArrowRight size={18}/></button><button className="quiet" onClick={()=>{const r=evaluatePlacement([], 'A1.1');onDone(r)}}>Preskoči test i kreni od A1.1</button></>}
 {stage==='self'&&<><span className="eyebrow">02 / SAMOPROCENA</span><h2>Koji je tvoj trenutni nivo nemačkog?</h2><p>Izaberi nivo koji misliš da imaš. Test će nezavisno proveriti tvoje odgovore.</p><div className="choices">{placementLevels.map(l=><button className={self===l?'choice selected':'choice'} aria-pressed={self===l} key={l} onClick={()=>setSelf(l)}>{l}</button>)}</div><button className="primary" onClick={()=>setStage('test')}>Nastavi na test <ArrowRight size={18}/></button></>}
 {stage==='test'&&<><span className="eyebrow">03 / TEST ZNANJA</span><div className="line"><b>Pitanje {index+1} / {placementItems.length}</b><span className="chip">{item.level}</span></div><progress className="bar" value={index+1} max={placementItems.length}/><h2 lang="de">{item.prompt}</h2><div className="choices">{item.options.map((option,i)=><button type="button" key={i} aria-pressed={chosen===i} className={chosen===i?'choice selected':'choice'} onClick={()=>setAnswers(a=>a.map((v,j)=>j===index?i:v))}>{option}</button>)}</div><p className="muted">Odgovori se ne ocenjuju dok ne završiš test.</p><div className="line"><button className="secondary" onClick={()=>setIndex(Math.max(0,index-1))} disabled={index===0}>Nazad</button><button className="primary" disabled={chosen===null} onClick={()=>{if(index<placementItems.length-1)setIndex(index+1);else{setResult(evaluatePlacement(answers,self));setStage('result')}}}>{index===placementItems.length-1?'Prikaži rezultat':'Sledeće pitanje'} <ArrowRight size={18}/></button></div></>}
{stage === 'result' && result && <>
   <span className="eyebrow"><Check size={17}/> 04 / REZULTAT</span>
   <h2>Predloženi nivo: {result.recommended}</h2>
   <p>Samoprocena: {result.self}. Preporuka je zasnovana na odgovorenim pitanjima iz četiri oblasti.</p>
   <div className="level-grid">
     {placementLevels.map(l => <div className="card level" key={l}>
       <strong>{l}</strong>
       <b>{result.scores[l]}%</b>
       <progress className="bar" max={100} value={result.scores[l]}/>
     </div>)}
   </div>
   <p className="callout">
     {result.recommended === 'A1.1'
       ? 'Možeš odmah započeti A1.1 lekcije.'
       : 'Tvoj rezultat ukazuje na viši nivo. Lekcije A1.2–A2.2 su još u pripremi, zato trenutno možeš da pregledaš njihov plan i vežbaš A1.1. Test ne označava lekcije kao završene.'}
   </p>
   <button type="button" className="secondary" aria-expanded={showReview}
     onClick={() => setShowReview(v => !v)}>
     {showReview ? 'Sakrij odgovore' : 'Pregledaj svoje odgovore'}
   </button>
   {showReview && <div style={{display:'grid',gap:12,margin:'14px 0',width:'100%'}}>
     {placementItems.map((reviewItem,i) => {
       const selectedIndex = answers[i];
       const selectedText = selectedIndex === null ? 'Nije odgovoreno' : reviewItem.options[selectedIndex];
       const isCorrect = selectedIndex === reviewItem.correct;
       return <article key={i} className="card" style={{padding:14}}>
         <small className="muted">Pitanje {i+1} / {placementItems.length} · {reviewItem.level}</small>
         <p lang="de" style={{fontWeight:750,margin:'8px 0'}}>{reviewItem.prompt}</p>
         <div>
           <span lang="de" style={{display:'inline-block',background:'#fff',
             color:isCorrect?'#167a43':'#c62828',borderRadius:8,
             padding:'6px 12px',fontWeight:800,overflowWrap:'anywhere',maxWidth:'100%'}}>
             {selectedText}
           </span>
         </div>
         <p className={isCorrect?'muted':'callout'} style={{marginTop:9}}>
           {isCorrect ? 'Tačno!' : 'Nije tačno.'}
           {!isCorrect && <> Ispravan odgovor: <strong lang="de">{reviewItem.options[reviewItem.correct]}</strong>.</>}
         </p>
         {!isCorrect && <small>{reviewItem.explanation}</small>}
       </article>;
     })}
   </div>}
   <button className="primary" onClick={() => onDone(result)}>
     <GraduationCap size={18}/> Nastavi na podešavanje profila
   </button>
 </>}
 </section></div>
}
