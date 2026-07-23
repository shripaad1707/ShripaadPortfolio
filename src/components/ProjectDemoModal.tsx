import { motion } from "motion/react";
import { X, Sparkles, Check, ArrowUpRight, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";

export interface ProjectDetail {
  category: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  businessImpact: string;
  points: string[];
  image: string;
}

interface ProjectDemoModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onContact: () => void;
}

export default function ProjectDemoModal({ project, onClose, onContact }: ProjectDemoModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Heavy glass backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative w-full max-w-3xl my-auto overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-[#090818] p-5 sm:p-8 shadow-[0_0_60px_rgba(95,98,255,0.25)] text-left z-10 max-h-[90vh] flex flex-col"
      >
        {/* Interior background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150px] bg-gradient-to-b from-[#5F62FF]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between relative z-10 mb-5 pb-3 border-b border-white/10 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#5F62FF]/10 border border-[#5F62FF]/25 shadow-[0_0_12px_rgba(95,98,255,0.15)]">
            <Cpu className="h-3.5 w-3.5 text-[#8C8EFF]" />
            <span className="font-mono text-[9px] font-bold text-[#8C8EFF] uppercase tracking-wider">
              {project.category} Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer hover:bg-white/10 rounded-full"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto pr-1 space-y-6 text-zinc-300 text-xs sm:text-sm font-body custom-scrollbar">
          
          {/* Project Title & Impact */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
              {project.title}
            </h2>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span>Business Impact: {project.businessImpact}</span>
            </div>
          </div>

          {/* Graphic / Screenshot Diagram Preview */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#060515] p-2 flex items-center justify-center shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Problem vs Solution Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-500/[0.03] border border-red-500/15 space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-red-400 tracking-wider block">
                ❌ The Problem
              </span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/15 space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider block">
                💡 The Engineering Solution
              </span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technical Architecture Highlights */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#5F62FF]" /> Key System Features
            </h3>
            <div className="space-y-2">
              {project.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300 font-sans">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#8C8EFF]" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono text-white bg-[#5F62FF]/10 border border-[#5F62FF]/20 px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 my-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-zinc-400 font-body">
            Interested in implementing a similar system for your business?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full btn-premium-gradient cursor-pointer shadow-md"
            >
              <span>Build A System Like This</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
