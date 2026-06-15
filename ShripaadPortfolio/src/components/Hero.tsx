import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import MagicRings from "./MagicRings";
import SplitText from "./SplitText";

interface HeroProps {
  onOpenVideoModal: () => void;
}

export default function Hero({ onOpenVideoModal }: HeroProps) {
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
      const offset = 90; // offset of 90px to account for the fixed floating header
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
      className="relative min-h-[77dvh] xs:min-h-[78dvh] sm:min-h-[82dvh] lg:min-h-0 pt-[23dvh] xs:pt-[24dvh] sm:pt-[25dvh] lg:pt-36 pb-4 sm:pb-8 lg:pb-28 bg-[#03020D]/40 overflow-hidden flex flex-col items-center justify-start lg:justify-center text-center"
    >
      {/* Unified Magic Rings background layer, covers full section to blend 100% seamlessly without visible box boundaries */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden opacity-60 pointer-events-none">
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
        
        {/* Supporting micro line with elegant entry fade - Hidden on Mobile/Tablet, visible on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 sm:mb-5 hidden lg:block"
        >
          <span className="font-mono text-[9px] font-bold text-[#5F62FF] uppercase tracking-[0.15em]">
            Automation Consulting for Active Operations
          </span>
        </motion.div>

        {/* Headline container - No inner rings context anymore to prevent any layout box clipping */}
        <div className="relative w-full flex flex-col items-center py-1.5 sm:py-4 mb-1.5 sm:mb-4">
          <SplitText
            text="MORE SALES."
            tag="h1"
            splitType="words"
            delay={80}
            duration={1.2}
            ease="power3.out"
            from={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            threshold={0.2}
            textAlign="center"
            className="text-[43px] xs:text-[51px] sm:text-[54px] md:text-[62px] lg:text-[80px] leading-[0.95] font-semibold text-white tracking-[-0.04em] font-sans uppercase mb-1.5 sm:mb-3 select-none"
          />
          <SplitText
            text="LESS MANUAL WORK."
            tag="h1"
            splitType="words"
            delay={80}
            duration={1.2}
            ease="power3.out"
            from={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            to={{ opacity: 1, y: 0, filter: "blur(0px)", delay: 0.16 }}
            threshold={0.2}
            textAlign="center"
            className="text-[34px] xs:text-[41px] sm:text-[44px] md:text-[52px] lg:text-[80px] leading-[0.95] font-semibold text-white tracking-[-0.04em] font-sans uppercase mb-2 xs:mb-3 sm:mb-6 select-none"
          />
        </div>

        {/* Clean, jargon-free primary explanation with delayed visual rise */}
        <SplitText
          text="Automate lead follow-ups, customer communication, appointment booking, invoicing, and repetitive business processes—so your team can focus on customers, sales, and growth."
          tag="p"
          splitType="words"
          delay={20}
          duration={0.8}
          ease="power2.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0, delay: 0.4 }}
          textAlign="center"
          className="text-zinc-200 text-[11px] xs:text-xs md:text-base lg:text-xl font-medium leading-relaxed max-w-[280px] xs:max-w-sm sm:max-w-md lg:max-w-[700px] mb-2 xs:mb-3 sm:mb-6 font-body"
        />

        {/* Small supporting line below heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-500/80 text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-normal leading-normal max-w-[250px] xs:max-w-sm sm:max-w-md lg:max-w-[550px] mb-4 xs:mb-5 lg:mb-8 font-body opacity-85 sm:opacity-100"
        >
          Save hours every week, respond faster, and build systems that keep your business running efficiently behind the scenes.
        </motion.p>

        {/* Premium Apple-style interactive buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
        >
          <a
            id="hero-cta-get-in-touch"
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 xs:px-4 sm:px-8 py-2.5 sm:py-3.5 text-[10px] sm:text-xs font-semibold rounded-full btn-premium-gradient shadow-lg whitespace-nowrap"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </a>
          <button
            id="hero-cta-see-how-it-works"
            onClick={onOpenVideoModal}
            className="inline-flex items-center justify-center gap-2 px-3.5 xs:px-4 sm:px-8 py-2.5 sm:py-3.5 text-[10px] sm:text-xs font-semibold rounded-full btn-secondary-white whitespace-nowrap cursor-pointer"
          >
            <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-400 fill-zinc-400/10" />
            <span>See How It Works</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
