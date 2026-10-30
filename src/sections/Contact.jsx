import { useState } from 'react';
import { motion } from 'motion/react';
import Magnet from '../components/rb/Magnet.jsx';
import { MaskHeading, Reveal, Stagger, staggerItem } from '../lib/motion.jsx';
import { Eyebrow } from './About.jsx';
import { ME } from '../content.js';

const LINKS = [
  { k: 'LinkedIn', v: 'in/shripaad-koduri', href: ME.linkedin },
  { k: 'GitHub', v: 'shripaad1707', href: ME.github },
  { k: 'WhatsApp', v: 'Message me', href: ME.whatsapp },
  { k: 'Instagram', v: '@shripaad_17', href: ME.instagram },
  { k: 'Agency', v: 'shripaads-agency', href: ME.agency },
  { k: 'Résumé', v: 'Download PDF', href: ME.resume, download: true }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', msg: '' });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ME.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  const send = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || 'your portfolio'}`);
    const body = encodeURIComponent(form.msg || 'Hi Shripaad,');
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Eyebrow n="07">Contact</Eyebrow>
        <MaskHeading className="contact__title" lines={['Let’s build', 'something that', 'runs itself.']} />
        <div className="contact__grid">
          <div className="contact__left">
            <Reveal className="contact__email" delay={0.15}>
              <a href={`mailto:${ME.email}`} className="contact__mail">
                {ME.email}
              </a>
              <button type="button" className="copy" onClick={copy} aria-live="polite">
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            </Reveal>
            <Reveal className="contact__ctas" delay={0.25}>
              <Magnet padding={60} magnetStrength={3}>
                <a href={ME.whatsapp} target="_blank" rel="noreferrer" className="btn btn--dark">
                  Message on WhatsApp <span className="btn__arrow">↗</span>
                </a>
              </Magnet>
            </Reveal>
            <Stagger as="ul" className="contact__links" stagger={0.05}>
              {LINKS.map(l => (
                <motion.li key={l.k} variants={staggerItem()}>
                  <a href={l.href} {...(l.download ? { download: true } : { target: '_blank', rel: 'noreferrer' })}>
                    <span className="mono">{l.k}</span>
                    <b>{l.v}</b>
                    <i aria-hidden="true">{l.download ? '↓' : '↗'}</i>
                  </a>
                </motion.li>
              ))}
            </Stagger>
          </div>
          <Reveal as="form" className="contact__form" onSubmit={send} delay={0.15}>
            <span className="contact__form-title">Start a project</span>
            <label>
              <span className="mono">Your name</span>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Jane from Acme Realty" autoComplete="name" />
            </label>
            <label>
              <span className="mono">What should we build?</span>
              <textarea rows={4} value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} placeholder="We miss leads on WhatsApp after 7 PM…" />
            </label>
            <button type="submit" className="btn btn--lime">
              Write the email <span className="btn__arrow">→</span>
            </button>
            <small className="contact__note">Opens your email app with the message ready to send.</small>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
