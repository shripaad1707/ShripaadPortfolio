import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import MagicRings from "./MagicRings";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const baseRadius = isMobile ? 0.18 : isTablet ? 0.28 : 0.32;
  const radiusStep = isMobile ? 0.065 : isTablet ? 0.075 : 0.08;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // offset of 90px to account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[88vh] pt-36 sm:pt-44 pb-10 sm:pb-16 bg-[#03020D]/40 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Magic Rings Background Layer */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden opacity-55 pointer-events-none">
        <MagicRings
          color="#5F62FF"
          colorTwo="#8B5CF6"
          ringCount={5}
          speed={isMobile ? 0.35 : 0.45}
          attenuation={8.0}
          lineThickness={isMobile ? 1.25 : 1.5}
          baseRadius={baseRadius}
          radiusStep={radiusStep}
          scaleRate={0.06}
          opacity={0.8}
          blur={0}
          noiseAmount={isMobile ? 0.012 : 0.03}
          rotation={30}
          ringGap={1.3}
          fadeIn={0.8}
          fadeOut={0.4}
          followMouse={!isMobile}
          mouseInfluence={isMobile ? 0 : 0.12}
          hoverScale={1.08}
          parallax={isMobile ? 0 : 0.02}
          clickBurst={!isMobile}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. Friendly Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-zinc-300 font-mono text-sm sm:text-base md:text-lg font-medium tracking-widest uppercase">
            HI, I'M SHRIPAAD.
          </span>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.025em] font-sans max-w-3xl leading-[1.14] mb-6"
        >
          Automating Workflows.<br className="hidden sm:inline" /> Accelerating Growth.
        </motion.h1>

        {/* 3. Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-300 text-[0.92rem] sm:text-base md:text-lg leading-[1.5] sm:leading-relaxed max-w-[min(88vw,30rem)] sm:max-w-2xl px-5 sm:px-0 mx-auto mb-6 font-body font-normal"
        >
          <span className="block sm:hidden">
            I build AI automation systems that streamline operations, automate repetitive work, and help businesses scale efficiently.
          </span>
          <span className="hidden sm:block">
            I build AI-powered automation systems that eliminate repetitive work, streamline operations, and help businesses scale without increasing manual effort. From AI agents and workflow automation to custom backend integrations, I help turn repetitive processes into intelligent systems.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-6 flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-zinc-400 font-mono tracking-wider"
        >
          <span>Built with Python</span>
          <span>•</span>
          <span>FastAPI</span>
          <span>•</span>
          <span>OpenAI</span>
          <span>•</span>
          <span>n8n</span>
          <span>•</span>
          <span>AI Agents</span>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto"
        >
          {/* Button 1: Explore My Work */}
          <a
            id="hero-cta-view-projects"
            href="#featured-systems"
            onClick={(e) => handleNavClick(e, "featured-systems")}
            className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 text-xs sm:text-sm font-semibold rounded-full btn-premium-gradient shadow-lg whitespace-nowrap cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <span>Explore My Work</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Button 2: Contact Me */}
          <a
            id="hero-cta-contact-me"
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 text-xs sm:text-sm font-semibold rounded-full bg-white/5 border border-white/12 hover:bg-white/10 text-white transition-all whitespace-nowrap cursor-pointer hover:scale-[1.02]"
          >
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* 5. Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          onClick={(e) => {
            const el = document.getElementById("featured-systems");
            if (el) {
              const offset = 90;
              window.scrollTo({
                top: el.getBoundingClientRect().top + window.scrollY - offset,
                behavior: "smooth"
              });
            }
          }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Featured Projects</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-[#8C8EFF]" />
        </motion.div>

      </div>
    </section>
  );
}


