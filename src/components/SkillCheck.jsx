import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Lightbulb, Ruler, Palette, Rocket } from 'lucide-react';

const QUESTIONS = [
  {
    id: 'problem_solving',
    icon: Brain,
    text: 'When you face a new challenge, what do you do first?',
    options: [
      { k: 'analyze', label: 'Break it down into smaller parts' },
      { k: 'experiment', label: 'Try different things and see what happens' },
      { k: 'ask', label: 'Ask someone who knows more' },
      { k: 'plan', label: 'Create a step-by-step plan' },
    ],
  },
  {
    id: 'creativity',
    icon: Palette,
    text: 'Which activity sounds most fun to you?',
    options: [
      { k: 'design', label: 'Design a logo or poster' },
      { k: 'build', label: 'Build a simple game or app' },
      { k: 'organize', label: 'Plan an event with friends' },
      { k: 'explain', label: 'Make a tutorial to teach others' },
    ],
  },
  {
    id: 'numbers',
    icon: Ruler,
    text: 'How do you feel about numbers?',
    options: [
      { k: 'love', label: 'I love patterns and numbers' },
      { k: 'ok', label: 'I’m okay with them' },
      { k: 'avoid', label: 'Not my favorite' },
      { k: 'visual', label: 'I prefer charts and visuals' },
    ],
  },
  {
    id: 'initiative',
    icon: Rocket,
    text: 'A community project needs help. You…',
    options: [
      { k: 'lead', label: 'Lead the team and assign tasks' },
      { k: 'research', label: 'Research what we need to do' },
      { k: 'create', label: 'Design how it should look and feel' },
      { k: 'support', label: 'Support others and keep the team positive' },
    ],
  },
];

const CLUSTERS = {
  explorer: {
    label: 'Explorer',
    color: 'from-sky-400 to-indigo-500',
    skills: ['Curiosity', 'Experimentation', 'Adaptability'],
  },
  analyst: {
    label: 'Analyst',
    color: 'from-emerald-400 to-teal-500',
    skills: ['Logical thinking', 'Pattern recognition', 'Planning'],
  },
  creator: {
    label: 'Creator',
    color: 'from-rose-400 to-fuchsia-500',
    skills: ['Creativity', 'Storytelling', 'Design sense'],
  },
  helper: {
    label: 'Helper',
    color: 'from-amber-400 to-orange-500',
    skills: ['Empathy', 'Teamwork', 'Communication'],
  },
};

export default function SkillCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (qid, key) => {
    setAnswers((prev) => ({ ...prev, [qid]: key }));
    setStep((s) => s + 1);
  };

  const result = useMemo(() => {
    const counts = { explorer: 0, analyst: 0, creator: 0, helper: 0 };

    Object.values(answers).forEach((k) => {
      if (['experiment', 'build', 'visual', 'research'].includes(k)) counts.explorer++;
      if (['analyze', 'plan', 'love', 'lead'].includes(k)) counts.analyst++;
      if (['design', 'create'].includes(k)) counts.creator++;
      if (['ask', 'organize', 'support', 'ok', 'avoid'].includes(k)) counts.helper++;
    });

    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return { key: top, ...CLUSTERS[top] };
  }, [answers]);

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section id="skills" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Discover your strengths</h2>
          <p className="mt-2 text-blue-100/80">A playful, grade-free check to understand your core competencies.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <AnimatePresence mode="wait">
              {step < QUESTIONS.length ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white text-sm">
                    {(() => { const Icon = QUESTIONS[step].icon; return <Icon size={16} /> })()}
                    <span>Question {step + 1} of {QUESTIONS.length}</span>
                  </div>
                  <h3 className="mt-4 text-white text-xl font-semibold">{QUESTIONS[step].text}</h3>
                  <div className="mt-4 grid gap-3">
                    {QUESTIONS[step].options.map((o) => (
                      <button
                        key={o.k}
                        onClick={() => handleAnswer(QUESTIONS[step].id, o.k)}
                        className="text-left rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-blue-100 hover:bg-white/10 transition-colors"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${result.color} px-3 py-2 text-white text-sm`}>
                    <Lightbulb size={16} />
                    <span>Your cluster: {result.label}</span>
                  </div>
                  <h3 className="mt-4 text-white text-xl font-semibold">Great! Here are strengths that match your style:</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {result.skills.map((s) => (
                      <li key={s} className="rounded-lg bg-white/10 px-3 py-2 text-blue-100 text-sm">{s}</li>
                    ))}
                  </ul>
                  <button onClick={restart} className="mt-6 inline-flex rounded-lg border border-white/20 px-4 py-2 text-white hover:bg-white/10">Try again</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid gap-4">
              <div className="rounded-xl bg-white/5 p-4">
                <h4 className="text-white font-semibold">What you’ll get</h4>
                <p className="text-blue-100/80 text-sm mt-1">A simple overview of your strengths you can share with companies — without revealing grades or personal details.</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <h4 className="text-white font-semibold">Why it matters</h4>
                <p className="text-blue-100/80 text-sm mt-1">Companies can search by skills and potential, leading to fairer opportunities for apprenticeships and internships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
