import { motion } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why both sides love it</h2>
          <p className="mt-2 text-slate-600">Designed for students and companies with a modern, fair approach.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-amber-800 text-sm">
              <GraduationCap size={16} />
              <span>For students & pupils</span>
            </div>
            <ul className="mt-4 grid gap-2 text-slate-700 text-sm">
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Anonymous, skill-based profiles</li>
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Fun skill check to identify strengths</li>
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Connect with real opportunities</li>
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Inclusive and supportive experience</li>
            </ul>
          </div>

          <div className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-amber-800 text-sm">
              <Building2 size={16} />
              <span>For companies</span>
            </div>
            <ul className="mt-4 grid gap-2 text-slate-700 text-sm">
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Discover talent by competencies</li>
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Fair, bias-aware early talent matching</li>
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Build apprenticeship and internship pipelines</li>
              <li className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2">Modern brand experience for Gen Z/Alpha</li>
            </ul>
          </div>
        </div>

        <div id="contact" className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#skills" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-2.5 font-medium shadow-sm hover:shadow transition-all">Try the skill check</a>
          <a href="#" className="inline-flex items-center justify-center rounded-full border border-stone-300 text-slate-800 px-5 py-2.5 font-medium hover:bg-slate-50 transition-colors">Talk to us</a>
        </div>
      </div>
    </section>
  );
}
