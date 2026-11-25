import { useState, type FormEvent } from "react";
import { cloud } from "../services/cloud";
import type { Account } from "../services/cloud";

export default function AccountSettings({ account }: { account: Account | null }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function changePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setSuccess(false);
    if (!cloud || !account) {
      setMessage("Nalog nije dostupan. Prijavi se ponovo.");
      return;
    }
    if (password.length < 12) {
      setMessage("Nova lozinka mora imati najmanje 12 karaktera.");
      return;
    }
    if (password !== confirm) {
      setMessage("Lozinke se ne podudaraju.");
      return;
    }
    setBusy(true);
    try {
      const { error } = await cloud.auth.updateUser({ password });
      if (error) throw error;
      setPassword("");
      setConfirm("");
      setSuccess(true);
      setMessage("Lozinka je promenjena. Tvoj napredak ostaje sačuvan.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Promena lozinke nije uspela.");
    } finally {
      setBusy(false);
    }
  }

  if (!cloud || !account) return null;
  return (
    <section className="card" style={{ marginTop: 16 }} aria-labelledby="account-heading">
      <h2 id="account-heading">Moj nalog</h2>
      <p className="muted">Prijavljen/a kao: <strong>{account.email || "Nepoznat email"}</strong></p>
      <p className="muted">Email potvrđen: {account.email_confirmed_at ? "Da" : "Ne"}</p>
      <h3>Promena lozinke</h3>
      <p className="muted">Za sada je dostupna promena lozinke za prijavljene korisnike. Reset zaboravljene lozinke dodaćemo kada email dostava bude pouzdana.</p>
      <form className="profile-form" onSubmit={changePassword}>
        <label htmlFor="new-account-password">Nova lozinka
          <input id="new-account-password" type={show ? "text" : "password"}
            autoComplete="new-password" minLength={12} maxLength={128} required
            value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label htmlFor="confirm-account-password">Potvrdi novu lozinku
          <input id="confirm-account-password" type={show ? "text" : "password"}
            autoComplete="new-password" minLength={12} maxLength={128} required
            value={confirm} onChange={e => setConfirm(e.target.value)} />
        </label>
        <label><input type="checkbox" checked={show} onChange={e => setShow(e.target.checked)} /> Prikaži lozinku</label>
        <button className="primary" type="submit" disabled={busy || !password || !confirm}>
          {busy ? "Čuvanje..." : "Promeni lozinku"}
        </button>
        {message && <p role={success ? "status" : "alert"} className="callout">{message}</p>}
      </form>
    </section>
  );
}
