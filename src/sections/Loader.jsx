import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { EASE } from '../lib/motion.jsx';

export default function Loader({ onReveal, onDone }) {
  const [n, setN] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const total = 1300;
    const loop = now => {
      const t = Math.min(1, (now - start) / total);
      setN(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(loop);
      else
        setTimeout(() => {
          setExit(true);
          onReveal?.();
        }, 150);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      animate={exit ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1.1, ease: EASE }}
      onAnimationComplete={() => exit && onDone()}
      aria-hidden="true"
    >
      <div className="loader__name">
        <span className="mask-line">
          <motion.span className="mask-line__inner" initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}>
            Shripaad <em>Koduri</em>
          </motion.span>
        </span>
        <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
          AI AUTOMATION ENGINEER · CREATIVE DEVELOPER
        </motion.small>
      </div>
      <div className="loader__count">
        <span>PORTFOLIO — 2026</span>
        <span className="tabular">{String(n).padStart(3, '0')}</span>
      </div>
      <motion.div className="loader__bar" style={{ scaleX: n / 100 }} />
    </motion.div>
  );
}
