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
    <section id="skills" className="relative py-24 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Discover your strengths</h2>
          <p className="mt-2 text-slate-600">A playful, grade-free check to understand your core competencies.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <AnimatePresence mode="wait">
              {step < QUESTIONS.length ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-amber-800 text-sm">
                    {(() => { const Icon = QUESTIONS[step].icon; return <Icon size={16} /> })()}
                    <span>Question {step + 1} of {QUESTIONS.length}</span>
                  </div>
                  <h3 className="mt-4 text-slate-900 text-xl font-semibold">{QUESTIONS[step].text}</h3>
                  <div className="mt-4 grid gap-3">
                    {QUESTIONS[step].options.map((o) => (
                      <button
                        key={o.k}
                        onClick={() => handleAnswer(QUESTIONS[step].id, o.k)}
                        className="text-left rounded-2xl border border-stone-200 bg-white px-4 py-3 text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all"
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
                  <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${result.color} px-3 py-1.5 text-white text-sm`}>
                    <Lightbulb size={16} />
                    <span>Your cluster: {result.label}</span>
                  </div>
                  <h3 className="mt-4 text-slate-900 text-xl font-semibold">Great! Here are strengths that match your style:</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {result.skills.map((s) => (
                      <li key={s} className="rounded-xl bg-slate-50 border border-stone-200 px-3 py-2 text-slate-700 text-sm">{s}</li>
                    ))}
                  </ul>
                  <button onClick={restart} className="mt-6 inline-flex rounded-full border border-stone-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Try again</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-50 border border-stone-200 p-4">
                <h4 className="text-slate-900 font-semibold">What you’ll get</h4>
                <p className="text-slate-600 text-sm mt-1">A simple overview of your strengths you can share with companies — without revealing grades or personal details.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-stone-200 p-4">
                <h4 className="text-slate-900 font-semibold">Why it matters</h4>
                <p className="text-slate-600 text-sm mt-1">Companies can search by skills and potential, leading to fairer opportunities for apprenticeships and internships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
