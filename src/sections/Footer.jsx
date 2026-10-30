import { useRef } from 'react';
import { goTo } from './Nav.jsx';

export default function Footer() {
  const ref = useRef(null);
  const move = e => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <footer className="footer">
      <div className="footer__word" ref={ref} onPointerMove={move} aria-hidden="true">
        <span className="footer__base">Shripaad</span>
        <span className="footer__fill">Shripaad</span>
      </div>
      <div className="container footer__row">
        <span>© 2026 Shripaad Koduri</span>
        <span>Designed &amp; built by me</span>
        <a href="#top" onClick={e => goTo(e, 'top')} className="link-btn">
          Back to top <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
