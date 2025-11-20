import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-stone-200/80 bg-white/80 backdrop-blur-xl px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md"
            >
              <Sparkles size={18} />
            </motion.div>
            <span className="text-slate-800 font-semibold tracking-tight">NovaPath</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
            <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skill check</a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">Benefits</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#skills" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
              Try Skill Test
            </a>
            <button className="md:hidden inline-flex items-center justify-center text-slate-700 hover:text-slate-900">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
