import { motion } from "motion/react";
import { X, Sparkles, ArrowUpRight } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  const handleGetInTouch = () => {
    onClose();
    // Smooth scroll to contact with offset
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Heavy glass backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Card with Purple Radial Glow and Precision Borders */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-[#090818] p-6 sm:p-8 shadow-[0_0_50px_rgba(95,98,255,0.2)]"
      >
        {/* Subtle interior gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[120px] bg-gradient-to-b from-[#5F62FF]/10 via-transparent to-transparent blur-xl pointer-events-none" />

        {/* Header Ribbon / Close Button */}
        <div className="flex items-center justify-between relative z-10 mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#5F62FF]/10 border border-[#5F62FF]/25 shadow-[0_0_12px_rgba(95,98,255,0.15)]">
            <Sparkles className="h-3 w-3 text-[#8C8EFF]" />
            <span className="font-mono text-[9px] font-bold text-[#8C8EFF] uppercase tracking-wider">
              Walkthrough System
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer hover:bg-white/5 rounded-md"
            aria-label="Close modal"
          >
            <X className="h-3.5 w-3.5" />
            <span className="font-mono text-[10px] font-semibold">ESC</span>
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 text-left space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight font-sans">
            Video Coming Soon
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-body">
            I'm currently finishing the walkthrough video that demonstrates how my automation systems work in real business scenarios. The video will be available within the next few days. In the meantime, feel free to explore the website or contact me directly to discuss your automation needs.
          </p>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 w-full my-6 relative z-10" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all text-center cursor-pointer order-2 sm:order-1"
          >
            Close
          </button>
          <button
            onClick={handleGetInTouch}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-[#5F62FF] to-[#8B5CF6] hover:brightness-110 active:scale-[0.98] transition-all text-center cursor-pointer shadow-[0_0_15px_rgba(95,98,255,0.3)] order-1 sm:order-2"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
