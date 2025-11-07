import React from 'react';
import { MonitorPlay, Smartphone, Megaphone, Image } from 'lucide-react';

const formats = [
  {
    icon: <Image className="h-6 w-6 text-emerald-500" />,
    title: 'In‑world billboards',
    desc: 'Pixel‑perfect boards placed along paths, markets, and stations. High visibility with cozy vibes.'
  },
  {
    icon: <MonitorPlay className="h-6 w-6 text-emerald-500" />,
    title: 'Creator integrations',
    desc: 'Sponsored segments with the top valley creators and cozy streamers. Authentic and native.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-emerald-500" />,
    title: 'Companion app moments',
    desc: 'Contextual interstitials around daily check‑ins, calendars, and guides.'
  },
  {
    icon: <Megaphone className="h-6 w-6 text-emerald-500" />,
    title: 'Event takeovers',
    desc: 'Seasonal festivals, shop refreshes, and update spotlights with premium share of voice.'
  },
];

export default function AdFormats() {
  return (
    <section id="formats" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-white md:text-4xl">Ad formats that feel at home</h2>
        <span className="text-sm text-emerald-700/70 dark:text-white/60">Brand‑safe • Player‑first</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {formats.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-white">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-emerald-900/70 dark:text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
