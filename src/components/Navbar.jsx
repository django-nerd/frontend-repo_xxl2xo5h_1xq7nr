import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg"
            >
              <Sparkles size={18} />
            </motion.div>
            <span className="text-white font-semibold tracking-tight">NovaPath</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="text-blue-100 hover:text-white transition-colors">How it works</a>
            <a href="#skills" className="text-blue-100 hover:text-white transition-colors">Skill check</a>
            <a href="#benefits" className="text-blue-100 hover:text-white transition-colors">Benefits</a>
            <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#skills" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition-colors border border-white/10">
              Try Skill Test
            </a>
            <button className="md:hidden inline-flex items-center justify-center text-blue-100 hover:text-white">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
