import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { MaskHeading, Reveal } from '../lib/motion.jsx';
import { Eyebrow } from './About.jsx';
import { RENDERS, UGC } from '../content.js';

function Carousel() {
  const viewport = useRef(null);
  const track = useRef(null);
  const [left, setLeft] = useState(0);
  useLayoutEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      setLeft(Math.min(0, viewport.current.clientWidth - track.current.scrollWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport.current);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="carousel" ref={viewport}>
      <motion.div
        className="carousel__track"
        ref={track}
        drag="x"
        dragConstraints={{ left, right: 0 }}
        dragElastic={0.06}
        dragTransition={{ power: 0.2, timeConstant: 320 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {RENDERS.map((r, i) => (
          <motion.figure
            key={r.id}
            className="render"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
          >
            <div className="render__img">
              <img src={r.image} alt={`${r.name} — 3D product render`} draggable={false} loading="lazy" />
            </div>
            <figcaption>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              {r.name}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}

function PhoneAd({ a, i }) {
  const ref = useRef(null);
  const vid = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  useEffect(() => {
    const v = vid.current;
    if (!v || reduce) return;
    if (inView) v.play?.().catch(() => {});
    else v.pause?.();
  }, [inView, reduce]);
  const rot = [-7, -2.5, 2.5, 7][i];
  return (
    <motion.div
      className="ad"
      style={{ '--r': `${rot}deg` }}
      initial={reduce ? false : { opacity: 0, y: 60, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
      whileHover={reduce ? undefined : { y: -16, rotate: 0, scale: 1.04, zIndex: 5 }}
    >
      <div className="ad__phone" ref={ref}>
        <span className="ad__island" aria-hidden="true" />
        <video ref={vid} src={a.src} poster={a.poster} muted loop playsInline preload="none" aria-label={`UGC-style video ad for ${a.product}`} />
      </div>
      <p className="ad__meta">
        <strong>{a.product}</strong>
        <span className="mono">{a.angle}</span>
      </p>
    </motion.div>
  );
}

export default function Studio() {
  return (
    <section id="studio" className="studio section">
      <div className="container">
        <div className="studio__head">
          <div>
            <Eyebrow n="04">Studio</Eyebrow>
            <MaskHeading className="h2" lines={['3D, motion &', <span className="hl">short-form video.</span>]} />
          </div>
          <Reveal as="p" className="lead" delay={0.15}>
            The creative side: product renders lit in Blender, and vertical ads made for Reels and TikTok. All brands shown are concepts made for this portfolio.
          </Reveal>
        </div>
      </div>
      <Reveal className="carousel__hint mono container">← drag to explore →</Reveal>
      <Carousel />
      <div className="container ads">
        <div className="ads__intro">
          <span className="mono">UGC-STYLE VIDEO ADS</span>
          <p>A different hook in every ad — AI presenters, captions built for sound-off scrolling.</p>
        </div>
        <div className="ads__fan">
          {UGC.map((a, i) => (
            <PhoneAd key={a.id} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
