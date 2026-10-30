import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import { EASE, MaskHeading, Reveal } from '../lib/motion.jsx';
import { Eyebrow } from './About.jsx';
import { SYSTEMS } from '../content.js';

const DURATION = 7000;

function Pipeline({ steps }) {
  const reduce = useReducedMotion();
  const n = steps.length;
  return (
    <div className="pipe" aria-label={steps.join(' → ')}>
      <div className="pipe__rail" aria-hidden="true">
        {!reduce && (
          <motion.i className="pipe__packet" initial={{ left: '0%' }} animate={{ left: ['0%', '100%'] }} transition={{ duration: 3.2, ease: 'linear', repeat: Infinity }} />
        )}
      </div>
      {steps.map((s, i) => (
        <motion.div
          key={s}
          className="pipe__node"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.08 }}
          style={{ '--d': `${(i / (n - 1)) * 3.2}s` }}
        >
          <b>{String(i + 1).padStart(2, '0')}</b>
          <span>{s}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Systems() {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || hover || reduce) return;
    const id = setTimeout(() => setI(v => (v + 1) % SYSTEMS.length), DURATION);
    return () => clearTimeout(id);
  }, [i, inView, hover, reduce]);

  const s = SYSTEMS[i];

  return (
    <section id="systems" className="systems section" ref={ref}>
      <div className="container">
        <div className="systems__head">
          <div>
            <Eyebrow n="03" light>
              Automation systems
            </Eyebrow>
            <MaskHeading className="h2" lines={['The engines behind', <>a <span className="hl">calm inbox.</span></>]} />
          </div>
          <Reveal as="p" className="lead lead--light" delay={0.15}>
            Four production-style systems I design and deploy for service businesses — so no lead waits, no call goes unanswered and no invoice gets typed by hand.
          </Reveal>
        </div>

        <div className="sys" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className="sys__tabs" role="tablist" aria-label="Automation systems">
            {SYSTEMS.map((x, k) => (
              <button
                key={x.id}
                type="button"
                role="tab"
                aria-selected={k === i}
                className={`sys__tab ${k === i ? 'is-active' : ''}`}
                onClick={() => setI(k)}
              >
                <span className="sys__tab-n mono">{x.n}</span>
                <span className="sys__tab-t">{x.title}</span>
                <span className="sys__tab-s">{x.sub}</span>
                <i className="sys__bar">
                  <i key={k === i ? `on-${i}-${hover}` : 'off'} style={{ animationDuration: `${DURATION}ms`, animationPlayState: hover ? 'paused' : 'running' }} />
                </i>
              </button>
            ))}
          </div>

          <div className="sys__panel" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                className="sys__inner"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="sys__top">
                  <span className="mono sys__label">SYSTEM {s.n} / 04</span>
                  <span className="sys__live mono">
                    <i /> deployable
                  </span>
                </div>
                <h3 className="sys__title">{s.title}</h3>
                <Pipeline steps={s.flow} />
                <ul className="sys__points">
                  {s.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="sys__metrics">
                  {s.metrics.map(([v, l]) => (
                    <span key={l}>
                      <b className="tabular">{v}</b>
                      <small>{l}</small>
                    </span>
                  ))}
                </div>
                <ul className="chips chips--dark">
                  {s.stack.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
