import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import Magnet from '../components/rb/Magnet.jsx';
import DecryptedText from '../components/rb/DecryptedText.jsx';
import WorkflowCanvas from './WorkflowCanvas.jsx';
import { EASE, MaskHeading } from '../lib/motion.jsx';
import { ME, TOOLS } from '../content.js';
import { goTo } from './Nav.jsx';

function Tile({ ready, delay = 0, className = '', children, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`tile-b ${className}`}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
      animate={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 1.1, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

function PhotoTile({ ready }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 16 });
  const move = e => {
    if (reduce) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const leave = () => {
    mx.set(0);
    my.set(0);
  };
  return (
    <Tile ready={ready} delay={0.7} className="tile-b--photo">
      <div className="photo" ref={ref} onPointerMove={move} onPointerLeave={leave}>
        <motion.div className="photo__card" style={reduce ? undefined : { rotateX: rx, rotateY: ry }}>
          <img src="img/shripaad.webp" alt="Shripaad Koduri" />
          <span className="photo__sticker">Hi, I&apos;m Shripaad 👋</span>
        </motion.div>
      </div>
    </Tile>
  );
}


const BUILDS = [
  { t: 'AI agents', s: 'that reply to leads, qualify them and book the call.' },
  { t: 'WhatsApp bots', s: 'that answer every message in seconds — even at 2 AM.' },
  { t: 'Voice receptionists', s: 'that pick up every call and log it in your CRM.' },
  { t: 'Lead pipelines', s: 'that score, tag and follow up without a spreadsheet.' },
  { t: 'Websites & apps', s: 'that load fast, look sharp and plug into your systems.' },
  { t: '3D renders & ads', s: 'made for product pages, Reels and TikTok.' }
];
const BUILD_MS = 2800;

function BuildTile({ ready }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const running = ready && inView && !paused;

  useEffect(() => {
    if (!running) return undefined;
    const id = setTimeout(() => setI(v => (v + 1) % BUILDS.length), BUILD_MS);
    return () => clearTimeout(id);
  }, [running, i]);

  const item = BUILDS[i];
  return (
    <Tile ready={ready} delay={0.8} className="tile-b--build">
      <div
        ref={ref}
        className="build"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        <div className="build__top">
          <span className="mono tile-b__label">WHAT I BUILD</span>
          <span className="mono build__count tabular">
            0{i + 1} <i>/ 0{BUILDS.length}</i>
          </span>
        </div>
        <div className="build__stage" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={item.t}
              className="build__item"
              initial={reduce ? { opacity: 0 } : { y: '105%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { y: '-105%', opacity: 0 }}
              transition={{ duration: reduce ? 0.2 : 0.75, ease: EASE }}
            >
              <b className="build__title">{item.t}</b>
              <span className="build__sub">{item.s}</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="build__bars" role="tablist" aria-label="What I build">
          {BUILDS.map((b, k) => (
            <button
              key={b.t}
              role="tab"
              aria-selected={k === i}
              aria-label={b.t}
              className={`build__bar ${k === i ? 'is-active' : ''} ${k < i ? 'is-past' : ''} ${k === i && running && !reduce ? 'is-running' : ''}`}
              onClick={() => setI(k)}
            >
              <i style={k === i && running && !reduce ? { animationDuration: `${BUILD_MS}ms` } : undefined} />
            </button>
          ))}
        </div>
      </div>
    </Tile>
  );
}

function StackTile({ ready }) {
  const half = Math.ceil(TOOLS.length / 2);
  const rows = [TOOLS.slice(0, half), TOOLS.slice(half)];
  return (
    <Tile ready={ready} delay={0.9} className="tile-b--stack">
      <span className="mono tile-b__label">DAILY STACK</span>
      <div className="stack-rows" aria-label={TOOLS.join(', ')}>
        {rows.map((row, r) => (
          <div key={r} className={`stack-row ${r ? 'stack-row--rev' : ''}`} aria-hidden="true">
            <div className="stack-row__track">
              {[...row, ...row].map((t, k) => (
                <span key={`${t}-${k}`} className="stack-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <span className="tile-b__sub">Automation · AI · Frontend · 3D</span>
    </Tile>
  );
}

export default function Hero({ ready }) {
  return (
    <section className="hero" id="top">
      <div className="container hero__bento">
        <Tile ready={ready} delay={0.35} className="tile-b--intro">
          <div className="intro__top">
            <span className="chip-live">
              <i />
              {ready ? <DecryptedText text="AVAILABLE FOR PROJECTS" animateOn="view" sequential speed={28} characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ" /> : 'AVAILABLE FOR PROJECTS'}
            </span>
            <span className="mono intro__role">AI AUTOMATION ENGINEER — CREATIVE DEVELOPER</span>
          </div>
          <MaskHeading
            as="h1"
            className="hero__title"
            immediate={ready}
            hold={!ready}
            delay={0.55}
            amount={0}
            lines={['I build systems', <>that work while</>, <span className="hl">you sleep.</span>]}
          />
          <div className="intro__foot">
            <p>
              I&apos;m Shripaad Koduri — I design AI agents, automations and websites that answer leads in seconds, book the meetings and follow up on their own.
            </p>
            <div className="intro__ctas">
              <Magnet padding={50} magnetStrength={3}>
                <a href="#work" className="btn btn--lime" onClick={e => goTo(e, 'work')}>
                  See my work <span className="btn__arrow">→</span>
                </a>
              </Magnet>
              <a href={ME.resume} download className="link-btn link-btn--light">
                Résumé <span>↓</span>
              </a>
            </div>
          </div>
        </Tile>

        <Tile ready={ready} delay={0.55} className="tile-b--flow">
          <WorkflowCanvas />
          <p className="flow__caption">
            <b>Live demo —</b> drag the nodes, or hit Run. A WhatsApp lead, qualified by AI, booked and synced in ~4 seconds.
          </p>
        </Tile>

        <PhotoTile ready={ready} />

        <BuildTile ready={ready} />

        <StackTile ready={ready} />

        <Tile ready={ready} delay={1} className="tile-b--social">
          <span className="mono tile-b__label">FIND ME</span>
          <div className="socials">
            <a href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={ME.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={ME.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={ME.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </Tile>
      </div>
    </section>
  );
}
