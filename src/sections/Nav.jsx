import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import Magnet from '../components/rb/Magnet.jsx';
import { EASE } from '../lib/motion.jsx';
import { NAV } from '../content.js';

export const goTo = (e, id) => {
  e?.preventDefault?.();
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -64 });
  else el.scrollIntoView({ behavior: 'smooth' });
};

export default function Nav({ ready }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, 'change', v => setSolid(v > 60));

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const nav = (e, id) => {
    setOpen(false);
    setTimeout(() => goTo(e, id), open ? 50 : 0);
    e.preventDefault();
  };

  return (
    <>
      <motion.header
        className={`nav ${solid ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}
        initial={{ y: -12, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <div className="nav__inner container">
          <a href="#top" className="brand" onClick={e => nav(e, 'top')} aria-label="Shripaad Koduri — home">
            <span className="brand__mark">Sk</span>
            <span className="brand__name">Shripaad Koduri</span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            {NAV.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={e => nav(e, l.id)} className="nav__link">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav__right">
            <Magnet padding={40} magnetStrength={4}>
              <a href="#contact" onClick={e => nav(e, 'contact')} className="btn btn--ink btn--sm">
                Let&apos;s talk <span className="btn__arrow">→</span>
              </a>
            </Magnet>
          </div>
          <button className={`burger ${open ? 'is-open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }}>
            <nav className="mobile-menu__links" aria-label="Mobile">
              {NAV.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={e => nav(e, l.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.08 + i * 0.06 }}
                >
                  <span>0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <p className="mobile-menu__foot">AI AUTOMATION · WEB · 3D &amp; VIDEO</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
