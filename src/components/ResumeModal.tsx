import { motion } from "motion/react";
import { X, Download, Sparkles, Mail, Linkedin, Globe, MapPin, Briefcase, GraduationCap, Code2, Cpu, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate clean text resume / trigger browser print for PDF export
    window.print();
  };

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

      {/* Resume Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative w-full max-w-3xl my-auto overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-[#090818] p-5 sm:p-8 shadow-[0_0_60px_rgba(95,98,255,0.25)] text-left z-10 max-h-[90vh] flex flex-col"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150px] bg-gradient-to-b from-[#5F62FF]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

        {/* Modal Controls Header */}
        <div className="flex items-center justify-between relative z-10 mb-6 pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5F62FF] text-white shadow-[0_0_12px_rgba(95,98,255,0.4)]">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-sans leading-none">
                Koduri Shripaad — Resume
              </h2>
              <span className="text-[10px] font-mono text-[#8C8EFF] uppercase tracking-wider block mt-1">
                AI Automation Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-full btn-premium-gradient shadow-md cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer hover:bg-white/10 rounded-full"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Content */}
        <div className="overflow-y-auto pr-1 space-y-6 text-zinc-300 text-xs sm:text-sm font-body custom-scrollbar">
          
          {/* Contact Header Block */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white font-sans">KODURI SHRIPAAD</h1>
              <p className="text-[#8C8EFF] font-mono text-xs font-semibold mt-1">AI Automation Engineer & Backend Developer</p>
              <p className="text-zinc-400 text-xs mt-2 max-w-md leading-relaxed">
                Specialized in designing and deploying intelligent AI agents, custom Python automation systems, API integrations, and scalable business workflows.
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-zinc-400 font-mono shrink-0">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#5F62FF]" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#5F62FF]" />
                <a href="mailto:shripaad17@gmail.com" className="hover:text-white transition-colors">shripaad17@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5 text-[#5F62FF]" />
                <a href="https://www.linkedin.com/in/shripaad-koduri/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin.com/in/shripaad-koduri</a>
              </div>
            </div>
          </div>

          {/* Technical Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
              <Code2 className="h-4 w-4 text-[#5F62FF]" /> Technical Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">AI & Automation Platforms</span>
                <p className="text-zinc-400">n8n, Make, Zapier, OpenAI API, Google Gemini API, Prompt Engineering, AI Voice Agents (Vapi/Retell), Function Calling</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Backend Development</span>
                <p className="text-zinc-400">Python, FastAPI, RESTful APIs, Webhooks, JSON Parsing, HTTP Client Integration, Async Workflows</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Frontend & UI</span>
                <p className="text-zinc-400">HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Modern UI Design Systems, Figma</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Databases & Tools</span>
                <p className="text-zinc-400">Supabase, Airtable, Google Sheets API, Git, GitHub, Postman, Vercel, Twilio, WhatsApp Cloud API</p>
              </div>
            </div>
          </div>

          {/* Featured Automation Systems Built */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
              <Briefcase className="h-4 w-4 text-[#5F62FF]" /> Key Engineering Projects
            </h3>
            
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <span className="font-semibold text-white text-sm">AI Voice Receptionist System</span>
                  <span className="text-[10px] font-mono bg-[#5F62FF]/10 text-[#8C8EFF] px-2 py-0.5 rounded border border-[#5F62FF]/20">Python / Vapi / OpenAI / GCal</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Engineered an autonomous telephone virtual agent capable of handling concurrent call streams, evaluating inbound prospect intent, qualifying leads, and writing directly to calendar bookings and CRMs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <span className="font-semibold text-white text-sm">Automated WhatsApp Interactive Receptionist</span>
                  <span className="text-[10px] font-mono bg-[#5F62FF]/10 text-[#8C8EFF] px-2 py-0.5 rounded border border-[#5F62FF]/20">n8n / WhatsApp Cloud API / OpenAI</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Developed real-time conversational chatflows on WhatsApp for click-to-chat marketing campaigns, processing prospect requirements and instant responses with 99.9% uptime.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <span className="font-semibold text-white text-sm">Automated Billing & Invoice Reconciliation</span>
                  <span className="text-[10px] font-mono bg-[#5F62FF]/10 text-[#8C8EFF] px-2 py-0.5 rounded border border-[#5F62FF]/20">n8n / Gmail / Google Sheets API</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Built end-to-end automated invoice creation, PDF generation, email dispatching, and ledger reconciliation pipeline, eliminating ~15 hours of repetitive manual admin work every week.
                </p>
              </div>
            </div>
          </div>

          {/* Engineering Philosophy */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
              <Cpu className="h-4 w-4 text-[#5F62FF]" /> Engineering Approach
            </h3>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span><strong>Reliability First:</strong> Designing resilient workflows with error fallback nodes and monitoring logs.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span><strong>Scalable Architecture:</strong> Transitioning low-code prototypes into robust custom Python/FastAPI microservices.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center text-xs text-zinc-500 font-mono shrink-0">
          <span>Koduri Shripaad • Portfolio Resume</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </motion.div>
    </div>
  );
}
