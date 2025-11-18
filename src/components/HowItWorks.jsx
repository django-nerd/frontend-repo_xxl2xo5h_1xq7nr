import { motion } from 'framer-motion';
import { ShieldCheck, Users, EyeOff } from 'lucide-react';

const steps = [
  {
    icon: EyeOff,
    title: 'Anonymous profiles',
    text: 'Students create competency-first profiles without grades or photos, focusing on strengths and interests.'
  },
  {
    icon: Users,
    title: 'Smart matching',
    text: 'Companies discover talent based on skills, potential, and role-fit for apprenticeships and internships.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & inclusive',
    text: 'Privacy-by-design approach ensures a fair, bias-aware process for young candidates.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-2 text-blue-100/80">Simple steps to connect talent and companies in a fair, modern way.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
