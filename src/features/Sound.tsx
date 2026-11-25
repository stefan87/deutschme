import {useEffect,useState} from 'react';
import {Volume2} from './icons';
import {media} from '../data/content';
import {speechTexts} from '../data/speech';
import type {Lang} from '../core/types';
import {choose} from '../core/i18n';
export default function Sound({clip,lang}:{clip:string;lang:Lang}){
 const [voices,setVoices]=useState<SpeechSynthesisVoice[]>([]);
 const [chosen,setChosen]=useState(()=>localStorage.getItem('deutschme:voice')||'');
 const [rate,setRate]=useState(()=>Number(localStorage.getItem('deutschme:rate')||'.9'));
 const [error,setError]=useState('');
 useEffect(()=>{if(!('speechSynthesis' in window))return;const refresh=()=>setVoices(window.speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('de')));refresh();window.speechSynthesis.addEventListener('voiceschanged',refresh);return()=>{window.speechSynthesis.removeEventListener('voiceschanged',refresh);window.speechSynthesis.cancel()}},[]);
 const text=speechTexts[clip];const available=voices.length>0&&!!text;
 function speak(){if(!available)return;setError('');window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='de-DE';u.rate=rate;u.pitch=1;u.voice=voices.find(v=>v.voiceURI===chosen)||voices.find(v=>/natural|neural|premium|enhanced/i.test(v.name))||voices[0];u.onerror=e=>setError(`TTS nije uspeo (${e.error}). Možeš koristiti rezervni MP3.`);window.speechSynthesis.speak(u)}
 return <div className="sound"><Volume2 size={18} aria-hidden/>{available?<><button type="button" className="secondary" onClick={speak}>{choose(lang,'▶ Prirodniji izgovor','▶ Aussprache hören')}</button><label className="sr-only" htmlFor={`voice-${clip}`}>Glas</label><select id={`voice-${clip}`} aria-label="Nemački glas" value={chosen} onChange={e=>{setChosen(e.target.value);localStorage.setItem('deutschme:voice',e.target.value)}}><option value="">Automatski glas</option>{voices.map(v=><option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>)}</select><label className="sr-only" htmlFor={`rate-${clip}`}>Brzina</label><select id={`rate-${clip}`} aria-label="Brzina izgovora" value={rate} onChange={e=>{setRate(Number(e.target.value));localStorage.setItem('deutschme:rate',e.target.value)}}>{[.75,.9,1,1.1].map(v=><option key={v} value={v}>{v}×</option>)}</select><details><summary>{choose(lang,'Rezervni MP3','MP3-Alternative')}</summary><audio controls preload="metadata" src={media(clip)} /></details></>:<audio controls preload="metadata" src={media(clip)} aria-label="Nemački audio"/>}{error&&<small role="alert">{error}</small>}</div>
}
