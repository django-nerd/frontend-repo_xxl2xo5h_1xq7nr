import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SkillCheck from './components/SkillCheck';
import Benefits from './components/Benefits';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SkillCheck />
      <Benefits />
      <footer className="py-10 text-center text-blue-200/70">© {new Date().getFullYear()} NovaPath</footer>
    </div>
  );
}

export default App;
