import React from 'react';
import Hero from './components/Hero';
import AdFormats from './components/AdFormats';
import Stats from './components/Stats';
import CTA from './components/CTA';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-grid h-8 w-8 place-items-center rounded-md bg-emerald-500 font-bold text-emerald-950">SV</span>
          <span className="text-sm font-semibold tracking-wide">Valley Ads</span>
        </a>
        <nav className="hidden items-center gap-6 text-white/90 md:flex">
          <a href="#formats" className="text-sm hover:text-white">Formats</a>
          <a href="#cta" className="text-sm hover:text-white">Media Kit</a>
          <a href="#" className="text-sm hover:text-white">Case Studies</a>
        </nav>
        <a href="#cta" className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20">
          Get in touch
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900 antialiased dark:bg-[#0b1210]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AdFormats />
        <CTA />
        <footer className="border-t border-emerald-900/10 py-10 text-center text-sm text-emerald-900/60 dark:border-white/10 dark:text-white/50">
          © {new Date().getFullYear()} Valley Ads — Independent network for cozy & farm game audiences.
        </footer>
      </main>
    </div>
  );
}
