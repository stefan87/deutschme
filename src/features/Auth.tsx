import {useState,type FormEvent} from 'react';
import {cloud} from '../services/cloud';
export default function Auth(){
 const [mode,setMode]=useState<'login'|'register'>('login');
 const [email,setEmail]=useState('');const [password,setPassword]=useState('');
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState('');
 async function submit(e:FormEvent){e.preventDefault();if(!cloud)return;setBusy(true);setMessage('');
 try{
  if(mode==='register'){
   const {error}=await cloud.auth.signUp({email,password,options:{emailRedirectTo:window.location.origin+window.location.pathname}});if(error)throw error;
   setMessage('Registracija je primljena. Ako je potrebna potvrda, proveri email i zatim se prijavi.');
  }else{
   const {error}=await cloud.auth.signInWithPassword({email,password});if(error)throw error;
  }
 }catch(err){setMessage(err instanceof Error?err.message:'Pokušaj ponovo.')}finally{setBusy(false)}
 }
 return <div className="welcome"><aside className="welcome-art"><h1>DeutschMe</h1><div><span className="eyebrow">DEUTSCH IM ALLTAG</span><h1>Willkommen zurück.</h1><p>Uči danas. Nastavi sutra, na bilo kom uređaju.</p></div><p>Tvoj napredak, tvoj nalog.</p></aside><section className="welcome-main"><span className="eyebrow">DEUTSCHME ACCOUNT</span><h2>{mode==='login'?'Prijavi se':'Napravi nalog'}</h2><p>Bezbedna prijava putem email adrese.</p><form className="profile-form" onSubmit={submit}>
 <label>Email<input type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} /></label>
 {<label>Lozinka<input type="password" autoComplete={mode==='register'?'new-password':'current-password'} required minLength={8} value={password} onChange={e=>setPassword(e.target.value)}/></label>}
 <button className="primary" disabled={busy}>{busy?'Sačekaj...':mode==='login'?'Prijavi se':'Registruj se'}</button>
 {message&&<p role="status" className="callout">{message}</p>}
 <button type="button" className="quiet" onClick={()=>{setMode(mode==='login'?'register':'login');setMessage('')}}>{mode==='login'?'Nemaš nalog? Registruj se':'Nazad na prijavu'}</button>

 </form></section></div>
}
