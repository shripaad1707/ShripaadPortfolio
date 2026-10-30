import { motion } from 'motion/react';
import LogoLoop from '../components/rb/LogoLoop.jsx';
import SpotlightCard from '../components/rb/SpotlightCard.jsx';
import { MaskHeading, Reveal, Stagger, staggerItem } from '../lib/motion.jsx';
import { Eyebrow } from './About.jsx';
import { SKILLS, TOOLS } from '../content.js';

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills__head">
          <div>
            <Eyebrow n="05">Skills & tools</Eyebrow>
            <MaskHeading className="h2" lines={['What I work with,', <span className="hl">every day.</span>]} />
          </div>
          <Reveal as="p" className="lead" delay={0.15}>
            Strongest in automation and AI integration, comfortable across the frontend — and honest about what I’m still learning (dashed).
          </Reveal>
        </div>
        <Stagger className="skill-grid" stagger={0.07}>
          {SKILLS.map(s => (
            <motion.div key={s.group} variants={staggerItem(20)} className="skill-cell">
              <SpotlightCard theme="light" spotlightColor="#9fd12a" intensity={0.25} spotlightSize={260} borderGlow={0.7} className="skill-card">
                <span className="skill-card__n mono">{s.n}</span>
                <h3>{s.group}</h3>
                <ul className="chips">
                  {s.items.map(i => (
                    <li key={i} className={i.includes('learning') ? 'is-learning' : ''}>
                      {i}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
      <div className="skills__loop">
        <LogoLoop
          logos={TOOLS.map(t => ({ node: <span className="tool-pill">{t}</span>, title: t }))}
          speed={46}
          logoHeight={15}
          gap={10}
          fadeOut
          fadeOutColor="#ebe6da"
          pauseOnHover
          ariaLabel="Tools I use"
        />
      </div>
    </section>
  );
}
