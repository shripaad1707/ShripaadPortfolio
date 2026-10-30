import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { MaskHeading, Reveal, Stagger, staggerItem, useMediaQuery } from '../lib/motion.jsx';
import { Eyebrow } from './About.jsx';
import { ENGINEERING, WORK } from '../content.js';
import { goTo } from './Nav.jsx';

const THEMES = ['dark', 'cream', 'lime', 'dark', 'cream'];

function host(href) {
  try {
    return href.startsWith('#') ? 'blender · cycles' : new URL(href).host;
  } catch {
    return href;
  }
}

function Media({ p }) {
  const ref = useRef(null);
  const vid = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  useEffect(() => {
    const v = vid.current;
    if (!v || reduce) return;
    if (inView) v.play?.().catch(() => {});
    else v.pause?.();
  }, [inView, reduce]);
  return (
    <div className="frame" ref={ref}>
      <div className="frame__bar" aria-hidden="true">
        <span className="frame__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame__url">{host(p.href)}</span>
      </div>
      <div className="frame__body">
        {p.video ? (
          <video ref={vid} src={p.video} poster={p.poster} muted loop playsInline preload="metadata" aria-label={`${p.title} — screen recording`} />
        ) : (
          <img src={p.image} alt={`${p.title} — preview`} loading="lazy" />
        )}
      </div>
    </div>
  );
}

function Card({ p, i, total, progress, stack }) {
  const reduce = useReducedMotion();
  const target = 1 - (total - 1 - i) * 0.045;
  const scale = useTransform(progress, [i / total, 1], [1, target]);
  const internal = p.href.startsWith('#');
  return (
    <div className="stack__item" style={stack ? { top: `calc(var(--nav-h) + 20px + ${i * 18}px)` } : undefined}>
      <motion.article className={`pcard pcard--${THEMES[i % THEMES.length]}`} style={stack && !reduce ? { scale } : undefined}>
        <div className="pcard__info">
          <div className="pcard__top">
            <span className="pcard__n">{p.n}</span>
            <span className="pcard__year mono">{p.year}</span>
          </div>
          <div>
            <span className="pcard__kind mono">{p.kind}</span>
            <h3 className="pcard__title">{p.title}</h3>
            <p className="pcard__text">{p.text}</p>
            <ul className="chips">
              {p.tags.map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <a
            href={p.href}
            className="pcard__cta"
            {...(internal ? { onClick: e => goTo(e, p.href.slice(1)) } : { target: '_blank', rel: 'noreferrer' })}
          >
            {p.cta} <span>{internal ? '↓' : '↗'}</span>
          </a>
        </div>
        <div className="pcard__media">
          <Media p={p} />
        </div>
      </motion.article>
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const desktop = useMediaQuery('(min-width: 900px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <section id="work" className="work section">
      <div className="container">
        <div className="work__head">
          <div>
            <Eyebrow n="02">Selected work</Eyebrow>
            <MaskHeading className="h2" lines={['Things I’ve designed,', <>built & <span className="hl">shipped.</span></>]} />
          </div>
          <Reveal as="p" className="lead" delay={0.15}>
            Live products, client-style builds and engineering projects. Scroll through the stack, then click in.
          </Reveal>
        </div>
        <div className="stack" ref={ref}>
          {WORK.map((p, i) => (
            <Card key={p.id} p={p} i={i} total={WORK.length} progress={scrollYProgress} stack={desktop} />
          ))}
        </div>

        <div className="eng">
          <div className="eng__head">
            <span className="mono eng__label">ENGINEERING PROJECTS</span>
            <h3 className="eng__title">
              Three Python systems, one idea: <span className="hl">the model proposes, code decides.</span>
            </h3>
          </div>
          <Stagger className="eng__grid" stagger={0.08}>
            {ENGINEERING.map((e, k) => (
              <motion.article key={e.id} className="eng-card" variants={staggerItem()}>
                <div className="eng-card__top">
                  <span className="mono eng-card__n">0{k + 1}</span>
                  <span className="mono eng-card__tag">{e.tag}</span>
                </div>
                <h4 className="eng-card__name">{e.name}</h4>
                <p className="eng-card__line">{e.line}</p>
                <div className="eng-card__metric">
                  <b>{e.metric}</b>
                  <small>{e.metricLabel}</small>
                </div>
                <ul className="eng-card__points">
                  {e.points.map(pt => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="eng-card__foot">
                  <ul className="chips">
                    {e.stack.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="mono eng-card__tests">✓ {e.tests} tests</span>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
