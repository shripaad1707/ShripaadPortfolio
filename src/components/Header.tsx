import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenResumeModal?: () => void;
}

export default function Header({ onOpenResumeModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["home", "featured-systems", "works", "skills", "about", "contact"];
      const current = sections
        .map((section) => {
          const el = document.getElementById(section);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { section, top: rect.top };
        })
        .filter(Boolean)
        .filter((item) => item!.top <= 150)
        .sort((a, b) => b!.top - a!.top)
        .map((item) => item!.section)[0];

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#featured-systems" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Center Navbar Container */}
      <div className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300 flex justify-center pointer-events-none`}>
        <header
          id="app-header"
          className={`w-full max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between px-5 md:px-6 py-2.5 pointer-events-auto ${
            isScrolled || mobileMenuOpen
              ? "bg-[#03020D]/85 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm tracking-wider text-white leading-none uppercase select-none hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5F62FF] text-white shadow-[0_0_12px_rgba(95,98,255,0.4)]">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <span>KODURI SHRIPAAD</span>
          </a>

          {/* Centered Desktop Menu */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`nav-${item.href.substring(1)}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
                className={`px-3 py-1.5 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
                  activeSection === item.href.substring(1)
                    ? "text-white bg-white/10 border border-white/5 shadow-inner"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              id="cta-nav-primary"
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded-full btn-premium-gradient"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex p-1.5 rounded-full text-zinc-400 hover:bg-white/5 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 bg-[#03020D]/95 backdrop-blur-2xl border border-white/10 rounded-2xl z-40 p-5 flex flex-col gap-4 lg:hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  id={`mobile-nav-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  className={`px-4 py-2.5 rounded-xl font-sans text-xs font-semibold tracking-wide transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="h-px bg-white/5 w-full" />

            <div className="flex flex-col gap-2">
              <a
                id="mobile-cta-contact"
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full inline-flex items-center justify-center gap-1 px-5 py-2.5 text-xs font-semibold rounded-full btn-premium-gradient text-center"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
