import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import CountUp from '../components/rb/CountUp.jsx';
import CircularText from '../components/rb/CircularText.jsx';
import { Reveal, Stagger, staggerItem } from '../lib/motion.jsx';
import { INDUSTRIES, STATS } from '../content.js';

export function Eyebrow({ n, children, light = false }) {
  return (
    <Reveal className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
      {n && <span className="eyebrow__n">{n}</span>}
      <span>{children}</span>
    </Reveal>
  );
}

const BEFORE = ['Hi,', 'I’m'];
const AFTER =
  'Shripaad. I turn slow, manual business work into systems that run themselves — then wrap them in interfaces people actually enjoy using.'.split(' ');

function W({ children, progress, range, reduce }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span className="mw" style={reduce ? undefined : { opacity }} aria-hidden="true">
      {children}
    </motion.span>
  );
}

const SERVICES = [
  { n: '01', t: 'AI agents & automations', d: 'n8n workflows, WhatsApp and email agents, voice receptionists and follow-ups that run 24/7.' },
  { n: '02', t: 'Websites & web apps', d: 'Fast, considered sites and AI-powered apps — from landing pages to full products.' },
  { n: '03', t: '3D & video', d: 'Blender product renders and short-form UGC-style ads made for Reels and TikTok.' }
];

export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.4'] });
  const total = BEFORE.length + AFTER.length;
  const full = [...BEFORE, ...AFTER].join(' ');

  return (
    <section id="about" className="about section">
      <div className="container">
        <Eyebrow n="01">About</Eyebrow>
        <div className="about__top">
        <p ref={ref} className="manifesto" aria-label={full}>
          {BEFORE.map((w, i) => (
            <span key={`b${i}`}>
              <W progress={scrollYProgress} range={[i / total, (i + 1) / total]} reduce={reduce}>
                {w}
              </W>{' '}
            </span>
          ))}
          <motion.span
            className="manifesto__pic"
            aria-hidden="true"
            initial={reduce ? false : { width: 0, opacity: 0 }}
            whileInView={{ width: '1.9em', opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="img/shripaad.webp" alt="" />
          </motion.span>{' '}
          {AFTER.map((w, i) => {
            const k = BEFORE.length + i;
            return (
              <span key={`a${i}`}>
                <W progress={scrollYProgress} range={[k / total, (k + 1) / total]} reduce={reduce}>
                  {w === 'run' || w === 'themselves' ? <span className="hl">{w}</span> : w}
                </W>{' '}
              </span>
            );
          })}
        </p>
        <Reveal className="about__badge" aria-hidden="true" delay={0.2}>
          <CircularText
            text="AI AUTOMATION • WEB • 3D & VIDEO • "
            size={176}
            fontSize={13}
            fontWeight={600}
            letterSpacing={2}
            spinDuration={22}
            onHover="speedUp"
            color="var(--ink)"
          >
            <span className="about__badge-core">Sk</span>
          </CircularText>
          <p className="mono">BASED IN HYDERABAD<br />WORKING WORLDWIDE</p>
        </Reveal>
        </div>

        <div className="about__grid">
          <Stagger className="services" stagger={0.08}>
            {SERVICES.map(s => (
              <motion.article key={s.n} className="service" variants={staggerItem()}>
                <span className="mono">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </motion.article>
            ))}
          </Stagger>
          <div className="about__side">
            <Reveal as="p" className="about__bio">
              I started by automating my own busywork and never stopped. Since December 2025 I&apos;ve worked freelance from Hyderabad with real estate teams, clinics, brands and agencies — always directly, always one fixed price agreed up front, and with the work shown at every stage.
            </Reveal>
            <Stagger className="stats" stagger={0.08}>
              {STATS.map(s => (
                <motion.div key={s.label} className="stat" variants={staggerItem()}>
                  <b className="tabular">
                    {s.prefix}
                    <CountUp to={s.to} duration={1.6} />
                    {s.suffix}
                  </b>
                  <small>{s.label}</small>
                </motion.div>
              ))}
            </Stagger>
            <Reveal className="industries">
              <span className="mono">Industries</span>
              <ul className="chips">
                {INDUSTRIES.map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
