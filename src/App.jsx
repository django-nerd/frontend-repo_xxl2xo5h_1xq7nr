import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SkillCheck from './components/SkillCheck';
import Benefits from './components/Benefits';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 selection:bg-amber-200/60 selection:text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SkillCheck />
      <Benefits />
      <footer className="py-12 text-center text-slate-500">© {new Date().getFullYear()} NovaPath</footer>
    </div>
  );
}

export default App;
