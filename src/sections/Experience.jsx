import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { MaskHeading, Reveal, Stagger, staggerItem } from '../lib/motion.jsx';
import { Eyebrow } from './About.jsx';
import { TIMELINE } from '../content.js';

const STEPS = [
  { t: 'Get in touch', d: 'Tell me about the business and the bottleneck. I reply within one working day.' },
  { t: 'Plan & price', d: 'A clear plan, timeline and one fixed price — agreed before any work starts.' },
  { t: 'Build & review', d: 'You see the work as it takes shape and ask for changes before it goes live.' },
  { t: 'Launch & improve', d: 'It goes live, you get everything, and we improve it with real usage.' }
];

export default function Experience() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="experience__head">
          <Eyebrow n="06" light>
            Experience & credentials
          </Eyebrow>
          <MaskHeading className="h2" lines={['Where I’ve been', <>putting in <span className="hl">the hours.</span></>]} />
        </div>
        <div className="tl" ref={ref}>
          <div className="tl__rail" aria-hidden="true">
            <motion.i style={{ scaleY: reduce ? 1 : fill }} />
          </div>
          {TIMELINE.map((t, k) => (
            <Reveal key={t.title} className="tl__item" y={24} delay={k * 0.05}>
              <span className="tl__dot" aria-hidden="true" />
              <div className="tl__meta">
                <span className="tl__when mono">{t.when}</span>
                <p className="tl__where">{t.where}</p>
              </div>
              <h3>{t.title}</h3>
              <ul>
                {t.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="process">
          <Reveal className="process__label mono">HOW I WORK WITH CLIENTS</Reveal>
          <Stagger className="process__steps" stagger={0.08}>
            {STEPS.map((s, i) => (
              <motion.div key={s.t} className="process__step" variants={staggerItem()}>
                <span className="mono">0{i + 1}</span>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
