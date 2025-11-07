import React from 'react';

export default function Stats() {
  const items = [
    { value: '12M+', label: 'Monthly cozy gamers' },
    { value: '4.7x', label: 'Avg. aided recall uplift' },
    { value: '98%', label: 'Brand‑safe inventory' },
    { value: '35%', label: 'CTR above industry' },
  ];

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-16 dark:from-emerald-900/20 dark:to-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-emerald-900/10 bg-white/80 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {items.map((i) => (
              <div key={i.label} className="text-center">
                <div className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300">{i.value}</div>
                <div className="mt-1 text-sm text-emerald-900/70 dark:text-white/70">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
