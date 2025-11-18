import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Match young talent with real skills — not grades
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-blue-100/90"
          >
            A dual-sided platform where students and pupils showcase anonymous, competency-based profiles and connect with companies for apprenticeships, internships, and entry roles.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#skills" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:shadow-lg transition-all">Start skill check</a>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-4 py-2 font-medium hover:bg-white/10 transition-colors">How it works</a>
          </div>

          <div className="mt-6 text-xs text-blue-200/70">
            Anonymous profiles • Competency based matching • Modern, inclusive design
          </div>
        </div>

        <div className="relative h-[60vh] md:h-[70vh]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
