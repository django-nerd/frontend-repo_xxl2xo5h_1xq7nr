import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      {/* Soft off-white background with rounded bento grid accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100" />

      {/* Subtle rounded corner grid lines */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <div className="absolute left-6 right-6 top-24 grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="h-40 rounded-3xl border border-stone-200 bg-white/60" />
          <div className="h-40 rounded-3xl border border-stone-200 bg-white/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <div className="py-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            Match young talent with real skills — not grades
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-slate-600"
          >
            Anonymous, competency-based profiles connect students and pupils with companies for apprenticeships, internships, and entry roles.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#skills" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-2.5 font-medium shadow-sm hover:shadow transition-all">Start skill check</a>
            <a href="#how" className="inline-flex items-center justify-center rounded-full border border-stone-300 text-slate-800 px-5 py-2.5 font-medium hover:bg-white transition-colors">How it works</a>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            Anonymous profiles • Competency based • Playful, modern UI
          </div>
        </div>

        <div className="relative h-[58vh] md:h-[68vh]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-stone-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] bg-white/70">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
