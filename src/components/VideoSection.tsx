import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import SplitText from "./SplitText";

const GRAPH_BACKGROUND_SVG = `<svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
  <defs>
    <linearGradient id="purple-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%235F62FF" stop-opacity="0.3" />
      <stop offset="50%" stop-color="%238B5CF6" stop-opacity="0.2" />
      <stop offset="100%" stop-color="%2306B6D4" stop-opacity="0.2" />
    </linearGradient>
    <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="%235F62FF" stop-opacity="0.25" />
      <stop offset="100%" stop-color="%235F62FF" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Flow connecting paths -->
  <path d="M 120,300 C 250,150 350,450 500,300" stroke="url(%23purple-cyan)" stroke-width="2.5" stroke-dasharray="8 6" />
  <path d="M 120,300 C 250,450 350,150 500,300" stroke="url(%23purple-cyan)" stroke-width="2" opacity="0.3" />
  <path d="M 500,300 L 760,300" stroke="url(%23purple-cyan)" stroke-width="2.5" stroke-dasharray="4" />
  <path d="M 500,300 C 600,200 660,150 780,180" stroke="url(%23purple-cyan)" stroke-width="1.5" opacity="0.2" />
  <path d="M 500,300 C 600,400 660,450 780,420" stroke="url(%23purple-cyan)" stroke-width="1.5" opacity="0.2" />

  <!-- Node Glows -->
  <circle cx="120" cy="300" r="100" fill="url(%23node-glow)" />
  <circle cx="500" cy="300" r="120" fill="url(%23node-glow)" />
  <circle cx="760" cy="300" r="100" fill="url(%23node-glow)" />

  <!-- Node 1 Card (Lead Ingestion) -->
  <g transform="translate(30, 240)">
    <rect width="180" height="120" rx="16" fill="%230F0D2E" fill-opacity="0.85" stroke="%235F62FF" stroke-width="1.5" />
    <text x="20" y="35" fill="%238C8EFF" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" letter-spacing="1">INBOUND HOOK</text>
    <text x="20" y="65" fill="%23FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Active Web Forms</text>
    <text x="20" y="85" fill="%23A1A1AA" font-family="system-ui" font-size="11">Detecting active leads...</text>
    <circle cx="180" cy="60" r="4" fill="%2310B981" />
  </g>

  <!-- Node 2 Card (AI Orchestration Hub) -->
  <g transform="translate(400, 230)">
    <rect width="200" height="140" rx="16" fill="%230F0D2E" fill-opacity="0.9" stroke="%238B5CF6" stroke-width="1.5" />
    <text x="20" y="32" fill="%23C084FC" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" letter-spacing="1">AI INTERPRETER</text>
    <text x="20" y="60" fill="%23FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Qualification Agent</text>
    <text x="20" y="82" fill="%2310B981" font-family="system-ui" font-size="11" font-weight="600">✓ Fit Parameters Matched</text>
    <text x="20" y="105" fill="%238C8EFF" font-family="system-ui" font-size="11">Initiating CRM Update...</text>
    <circle cx="0" cy="70" r="4" fill="%238B5CF6" />
    <circle cx="200" cy="70" r="4" fill="%238B5CF6" />
  </g>

  <!-- Node 3 Card (SaaS Automation sync) -->
  <g transform="translate(720, 110)">
    <rect width="180" height="100" rx="16" fill="%230F0D2E" fill-opacity="0.85" stroke="%2338BDF8" stroke-width="1" />
    <text x="20" y="30" fill="%2338BDF8" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" letter-spacing="1">CRM HUB</text>
    <text x="20" y="55" fill="%23FFFFFF" font-family="system-ui" font-size="13" font-weight="600">HubSpot Updated</text>
    <text x="20" y="75" fill="%23A1A1AA" font-family="system-ui" font-size="10">Deal pipeline synced</text>
    <circle cx="0" cy="50" r="3" fill="%2338BDF8" />
  </g>

  <!-- Node 4 Card (Calendar booking integration) -->
  <g transform="translate(720, 360)">
    <rect width="180" height="100" rx="16" fill="%230F0D2E" fill-opacity="0.85" stroke="%2306B6D4" stroke-width="1" />
    <text x="20" y="30" fill="%2306B6D4" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" letter-spacing="1">AUTO-SCHEDULER</text>
    <text x="20" y="55" fill="%23FFFFFF" font-family="system-ui" font-size="13" font-weight="600">Google Calendar</text>
    <text x="20" y="75" fill="%23A1A1AA" font-family="system-ui" font-size="10">Slot booked perfectly</text>
    <circle cx="0" cy="50" r="3" fill="%2306B6D4" />
  </g>
</svg>`;

interface VideoSectionProps {
  onOpenVideoModal: () => void;
}

export default function VideoSection({ onOpenVideoModal }: VideoSectionProps) {
  return (
    <section
      id="video-section"
      className="pt-6 pb-16 md:py-24 bg-[#03020D] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 md:mb-16">
          <SplitText
            text="See How It Works"
            tag="h2"
            splitType="words"
            delay={40}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.03em] font-sans"
          />
          <p className="text-zinc-400 text-sm sm:text-base leading-[1.6] font-body">
            A quick introduction to how I help businesses automate repetitive work and improve operations.
          </p>
        </div>

        {/* Professional Video Placeholder Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          onClick={onOpenVideoModal}
          className="relative w-full aspect-[4/3] xs:aspect-[16/10] md:aspect-video min-h-[300px] xs:min-h-[340px] md:min-h-0 rounded-2xl md:rounded-[24px] border border-white/10 bg-[#070614] overflow-hidden group shadow-[0_30px_70px_rgba(0,0,0,0.6)] cursor-pointer select-none"
        >
          {/* Background Realistic Dashboard/Automation Layout - Layer 0 */}
          <div className="absolute inset-0 z-0 select-none overflow-hidden flex items-center justify-center bg-[#070614] pointer-events-none">
            {/* Fallback Layer 1: Exquisite vector SVG simulation of a dashboard/automation node map */}
            <div 
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none scale-98 sm:scale-100"
              dangerouslySetInnerHTML={{ __html: GRAPH_BACKGROUND_SVG }}
            />

            {/* Custom User-Replaceable Thumbnail Image /images/video-thumbnail.jpg (resolves from /public/images/video-thumbnail.jpg) */}
            <img
              src="/images/video-thumbnail.jpg"
              alt="Automation Walkthrough Thumbnail"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none blur-[1px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-65"
              onError={(e) => {
                // If they have not replaced the placeholder text file with a real JPEG yet, simply hide the img tag and let the magnificent SVG illustration display perfectly
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Dark luxury blue-purple overlay to ensure it blends seamlessly and is perfectly eye-safe */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03020D]/80 via-[#03020D]/30 to-[#03020D]/60 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-[#0A0720]/40 mix-blend-color pointer-events-none" />
            
            {/* Dedicated luxury vignette around the edges inside the card */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none" />
          </div>

          {/* Subtle vignette/gradient overlays to add tech atmosphere */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,98,255,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          {/* Digital Cyber Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(95,98,255,0.03),rgba(255,255,255,0.01),rgba(95,98,255,0.03))] bg-[size:100%_4px,4px_100%] opacity-30 pointer-events-none" />

          {/* Top Corner Badges */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 flex flex-wrap gap-1.5 sm:gap-2 pointer-events-none max-w-[calc(100%-24px)]">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 border border-white/10 text-white font-mono text-[8px] sm:text-[10px] tracking-wider uppercase backdrop-blur-md">
              <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#5F62FF] animate-pulse" />
              Overview
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#5F62FF]/10 border border-[#5F62FF]/20 text-[#8C8EFF] font-semibold font-mono text-[8px] sm:text-[10px] tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(95,98,255,0.1)]">
              Demo Video • Available Soon
            </span>
          </div>

          {/* Prominent Play overlay and feedback message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center z-20 mt-10 xs:mt-4 md:mt-0">
            {/* Glowing circular target */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 xs:h-16 xs:w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-tr from-[#5F62FF] to-[#8B5CF6] text-white flex items-center justify-center shadow-[0_0_30px_rgba(95,98,255,0.35)] relative group-hover:shadow-[0_0_45px_rgba(95,98,255,0.55)] transition-all duration-300"
            >
              <Play className="h-4 w-4 xs:h-6 xs:w-6 md:h-8 md:w-8 fill-white ml-0.5 xs:ml-1 text-white" />
              
              {/* Concentric rings pulsing around the button */}
              <div className="absolute inset-[-8px] xs:inset-[-12px] rounded-full border border-[#5F62FF]/30 animate-pulse opacity-40 pointer-events-none" />
              <div className="absolute inset-[-16px] xs:inset-[-24px] rounded-full border border-[#8B5CF6]/15 animate-pulse opacity-25 pointer-events-none animate-delay-1000" />
            </motion.div>

            <h4 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-semibold text-white tracking-wide transition-colors group-hover:text-[#8C8EFF] duration-300 font-sans">
              Watch Walkthrough Video
            </h4>
          </div>

          {/* Bottom Video HUD simulation bar */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-4 z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] sm:text-[9px] text-zinc-500 tracking-wider uppercase">PRO SYSTEM</span>
            </div>
            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden max-w-xs hidden sm:block">
              <div className="h-full w-0 bg-gradient-to-r from-[#5F62FF] to-[#8B5CF6]" />
            </div>
            <span className="font-mono text-[8.5px] sm:text-[9.5px] font-bold text-zinc-500 tracking-wider uppercase">
              KODURI SHRIPAAD
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
