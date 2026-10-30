import { useEffect, useState } from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'motion/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import ClickSpark from './components/rb/ClickSpark.jsx';
import GradualBlur from './components/rb/GradualBlur.jsx';
import { prefersReduced } from './lib/motion.jsx';

import Loader from './sections/Loader.jsx';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Band from './sections/Band.jsx';
import About from './sections/About.jsx';
import Work from './sections/Work.jsx';
import Systems from './sections/Systems.jsx';
import Studio from './sections/Studio.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export default function App() {
  const [ready, setReady] = useState(() => prefersReduced());
  const [loaderGone, setLoaderGone] = useState(() => prefersReduced());

  useEffect(() => {
    if (prefersReduced()) return;
    const lenis = new Lenis({ duration: 1.15, easing: t => 1 - Math.pow(1 - t, 3.2), anchors: true });
    window.__lenis = lenis;
    let raf;
    const loop = t => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    if (ready) window.__lenis?.start();
    else window.__lenis?.stop();
  }, [ready]);

  return (
    <MotionConfig reducedMotion="user">
      <ClickSpark sparkColor={['#d3f35a', '#0e2a20']} sparkSize={9} sparkRadius={20} sparkCount={8} duration={480} style={{ height: 'auto' }}>
        {!loaderGone && <Loader onReveal={() => setReady(true)} onDone={() => setLoaderGone(true)} />}
        <ScrollProgress />
        <Nav ready={ready} />
        <main>
          <Hero ready={ready} />
          <Band />
          <About />
          <Work />
          <Systems />
          <Studio />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <GradualBlur target="page" position="bottom" height="3rem" strength={0.9} layers={5} curve="bezier" exponential autoHide zIndex={40} />
      </ClickSpark>
    </MotionConfig>
  );
}
