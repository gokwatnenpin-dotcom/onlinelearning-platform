import { useState } from "react";

export default function AuthModal({ mode, onClose, onSubmit, onModeChange }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const isSignup = mode === "signup";

  const submit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    if (isSignup && name.length < 2) return setError("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    if (form.password.length < 6) return setError("Your password must be at least 6 characters.");
    onSubmit({ name: name || email.split("@")[0], email });
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/50 p-4" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div className="relative w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
        <button onClick={onClose} className="absolute top-4 right-4 rounded-md px-2 py-1 text-xl leading-none text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Close">×</button>
        <div className="mb-6 pr-8">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 font-display text-lg font-bold text-white">L</div>
          <h2 id="auth-title" className="font-display text-2xl font-bold text-slate-900">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {isSignup ? "Start learning at your own pace — it’s free to join." : "Sign in to continue where you left off."}
          </p>
        </div>
        <form onSubmit={submit} noValidate>
          {isSignup && <label className="mb-4 block text-sm font-medium text-slate-700">Name<input autoFocus value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm" placeholder="Your name" /></label>}
          <label className="mb-4 block text-sm font-medium text-slate-700">Email address<input autoFocus={!isSignup} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm" placeholder="you@example.com" /></label>
          <label className="block text-sm font-medium text-slate-700">Password<input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm" placeholder="At least 6 characters" /></label>
          {error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}
          <button type="submit" className="mt-6 w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800">{isSignup ? "Create free account" : "Sign in"}</button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-500">
          {isSignup ? "Already have an account?" : "New to LearnHub?"} <button type="button" onClick={() => onModeChange(isSignup ? "signin" : "signup")} className="font-medium text-slate-900 underline underline-offset-2">{isSignup ? "Sign in" : "Create an account"}</button>
        </p>
      </div>
    </div>
  );
}
