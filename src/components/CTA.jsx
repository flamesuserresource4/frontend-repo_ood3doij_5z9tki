import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-8 rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 p-10 text-emerald-950 shadow-lg dark:border-white/10 dark:text-emerald-950">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-extrabold md:text-4xl">Ready to plant your next big launch?</h3>
          <p className="mt-3 text-emerald-950/80">
            Request our media kit and we’ll tailor a plan across seasons, creators, and in‑world moments.
          </p>
        </div>
        <form className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            type="email"
            required
            placeholder="Your work email"
            className="w-full rounded-lg border border-emerald-900/10 bg-white/90 px-4 py-3 text-emerald-900 placeholder-emerald-900/50 shadow-sm outline-none ring-emerald-700/20 focus:ring-4"
          />
          <button
            type="submit"
            className="rounded-lg bg-emerald-900 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
          >
            Send me the media kit
          </button>
        </form>
        <p className="text-xs text-emerald-950/70">No spam. We’ll reply within one business day.</p>
      </div>
    </section>
  );
}
