import { motion } from 'framer-motion';
import { Building2, GraduationCap, Shield } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why both sides love it</h2>
          <p className="mt-2 text-blue-100/80">Designed for students and companies with a modern, fair approach.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white text-sm">
              <GraduationCap size={16} />
              <span>For students & pupils</span>
            </div>
            <ul className="mt-4 grid gap-2 text-blue-100/80 text-sm">
              <li>• Anonymous, skill-based profiles</li>
              <li>• Fun skill check to identify strengths</li>
              <li>• Connect with real opportunities</li>
              <li>• Inclusive and supportive experience</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white text-sm">
              <Building2 size={16} />
              <span>For companies</span>
            </div>
            <ul className="mt-4 grid gap-2 text-blue-100/80 text-sm">
              <li>• Discover talent by competencies</li>
              <li>• Fair, bias-aware early talent matching</li>
              <li>• Build apprenticeship and internship pipelines</li>
              <li>• Modern brand experience for Gen Z/Alpha</li>
            </ul>
          </div>
        </div>

        <div id="contact" className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#skills" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:shadow-lg transition-all">Try the skill check</a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-4 py-2 font-medium hover:bg-white/10 transition-colors">Talk to us</a>
        </div>
      </div>
    </section>
  );
}
