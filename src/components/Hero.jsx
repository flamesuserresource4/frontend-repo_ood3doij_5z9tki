import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/CoqJ4UdBiLF2djJK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-sm font-medium tracking-wide">Farm, pixel & cozy game audiences</p>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Grow your game with valley‑native ads
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
          Reach millions of Stardew‑loving players with tasteful, high‑performing placements.
          Build awareness without breaking immersion.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#formats"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Explore formats
          </a>
          <a
            href="#cta"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Get a media kit
          </a>
        </div>
      </div>
    </section>
  );
}
