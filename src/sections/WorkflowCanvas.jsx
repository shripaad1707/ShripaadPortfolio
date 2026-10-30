import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, motionValue, useInView, useReducedMotion, useTransform } from 'motion/react';
import DotGrid from '../components/rb/DotGrid.jsx';
import { EASE } from '../lib/motion.jsx';

const ICONS = {
  chat: (
    <svg viewBox="0 0 24 24">
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z" />
    </svg>
  ),
  branch: (
    <svg viewBox="0 0 24 24">
      <path d="M4 5h16l-6 7v6l-4 2v-8z" />
    </svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4M9 15l2 2 4-4" />
    </svg>
  ),
  db: (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </svg>
  )
};

const NODES = [
  { id: 'wa', label: 'WhatsApp', sub: 'Trigger', icon: 'chat', fx: 0.0, fy: 0.42 },
  { id: 'ai', label: 'AI Agent', sub: 'GPT · RAG', icon: 'spark', fx: 0.25, fy: 0.08 },
  { id: 'q', label: 'Qualify', sub: 'Score lead', icon: 'branch', fx: 0.5, fy: 0.5 },
  { id: 'cal', label: 'Schedule', sub: 'Calendar', icon: 'cal', fx: 1, fy: 0.06 },
  { id: 'crm', label: 'CRM', sub: 'Sync + ping', icon: 'db', fx: 1, fy: 0.84 }
];
const EDGES = [
  ['wa', 'ai'],
  ['ai', 'q'],
  ['q', 'cal'],
  ['q', 'crm']
];
const IDX = Object.fromEntries(NODES.map((n, i) => [n.id, i]));

const SCENARIOS = [
  {
    tag: 'Real estate',
    wa: '“Is the 3BHK villa still available?”',
    ai: 'Answered from listings (RAG) in 0.8s',
    q: 'Budget ✓ Timeline ✓ → HOT lead',
    cal: 'Site visit booked · Sat 11:30',
    crm: 'Lead saved · agent pinged on WhatsApp'
  },
  {
    tag: 'Clinic',
    wa: '“Can I book a cleaning this week?”',
    ai: 'Checked services, pricing & slots',
    q: 'New patient → WARM',
    cal: 'Appointment set · Thu 16:15',
    crm: 'Request logged · reminder queued'
  },
  {
    tag: 'E-commerce',
    wa: '“Do you ship to Dubai?”',
    ai: 'Shipping FAQ answered + size guide',
    q: 'Cart value $140 → HOT',
    cal: 'Follow-up scheduled · in 24h',
    crm: 'Order intent tagged · owner notified'
  }
];

const LABEL = { wa: 'WhatsApp', ai: 'AI Agent', q: 'Qualify', cal: 'Schedule', crm: 'CRM' };

function Edge({ a, b, nw, nh, setRef }) {
  const d = useTransform([a.x, a.y, b.x, b.y], ([ax, ay, bx, by]) => {
    const x1 = ax + nw;
    const y1 = ay + nh / 2;
    const x2 = bx;
    const y2 = by + nh / 2;
    const dx = Math.max(36, Math.abs(x2 - x1) / 2);
    return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
  });
  return (
    <>
      <motion.path d={d} className="wf-edge__under" />
      <motion.path ref={setRef} d={d} className="wf-edge" />
    </>
  );
}

function stamp() {
  return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date());
}

function Canvas({ size }) {
  const { w, h, nw, nh } = size;
  const reduce = useReducedMotion();
  const wrap = useRef(null);
  const inView = useInView(wrap, { amount: 0.3 });
  const mvs = useRef(null);
  if (!mvs.current) mvs.current = NODES.map(() => ({ x: motionValue(0), y: motionValue(0) }));
  const paths = useRef([]);
  const layer = useRef(null);
  const packets = useRef([]);
  const scen = useRef(-1);
  const [active, setActive] = useState({});
  const [done, setDone] = useState({});
  const [logs, setLogs] = useState([]);
  const [runs, setRuns] = useState(1284);
  const [tag, setTag] = useState(SCENARIOS[0].tag);

  useLayoutEffect(() => {
    NODES.forEach((n, i) => {
      mvs.current[i].x.set(Math.round(14 + n.fx * (w - nw - 28)));
      mvs.current[i].y.set(Math.round(14 + n.fy * (h - nh - 46)));
    });
  }, [w, h, nw, nh]);

  const arrive = useCallback((id, si) => {
    const s = SCENARIOS[si];
    setActive(a => ({ ...a, [id]: true }));
    setDone(d => ({ ...d, [id]: true }));
    setTimeout(() => setActive(a => ({ ...a, [id]: false })), 650);
    setLogs(l => [{ k: `${Date.now()}-${id}`, t: stamp(), node: LABEL[id], text: s[id] }, ...l].slice(0, 4));
    EDGES.forEach(([from], ei) => {
      if (from === id) spawn(ei, si);
    });
  }, []);

  const spawn = (ei, si) => {
    const g = layer.current;
    if (!g) return;
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('r', '4.5');
    c.setAttribute('class', 'wf-packet');
    g.appendChild(c);
    packets.current.push({ e: ei, t: 0, el: c, si });
  };

  const run = useCallback(() => {
    scen.current = (scen.current + 1) % SCENARIOS.length;
    setTag(SCENARIOS[scen.current].tag);
    setDone({});
    setRuns(r => r + 1);
    arrive('wa', scen.current);
  }, [arrive]);

  useEffect(() => {
    let raf;
    let last = performance.now();
    const loop = now => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const list = packets.current;
      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        const path = paths.current[p.e];
        if (!path) continue;
        p.t += dt / (reduce ? 0.2 : 0.95);
        const len = path.getTotalLength();
        const pt = path.getPointAtLength(Math.min(1, p.t) * len);
        p.el.setAttribute('cx', pt.x);
        p.el.setAttribute('cy', pt.y);
        if (p.t >= 1) {
          p.el.remove();
          list.splice(i, 1);
          arrive(EDGES[p.e][1], p.si);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [arrive, reduce]);

  useEffect(() => {
    if (reduce || !inView) return;
    const first = setTimeout(run, 900);
    const id = setInterval(run, 6200);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [inView, reduce, run]);

  return (
    <div className="wf" ref={wrap}>
      <div className="wf__bar">
        <span className="wf__title">
          <i className="pulse" />
          <span className="mono">lead-to-booking.flow</span>
          <em className="mono">LIVE DEMO</em>
        </span>
        <span className="wf__right">
          <span className="mono wf__runs tabular">{runs.toLocaleString('en-IN')} runs</span>
          <button type="button" className="wf__run" onClick={run} aria-label="Run the workflow">
            Run <span>▶</span>
          </button>
        </span>
      </div>

      <div className="wf__canvas" style={{ height: h }}>
        <div className="wf__dots" aria-hidden="true">
          <DotGrid dotSize={2} gap={18} baseColor="#cfd3c4" activeColor="#5d8a00" proximity={110} shockRadius={200} shockStrength={3} glow={0.3} intro={false} />
        </div>
        <svg className="wf__svg" width={w} height={h} aria-hidden="true">
          {EDGES.map(([a, b], i) => (
            <Edge key={`${a}-${b}`} a={mvs.current[IDX[a]]} b={mvs.current[IDX[b]]} nw={nw} nh={nh} setRef={el => (paths.current[i] = el)} />
          ))}
          <g ref={layer} />
        </svg>
        <div className="wf__nodes" style={{ width: w, height: h }}>
          {NODES.map((n, i) => (
            <motion.div
              key={n.id}
              className={`wf-node ${active[n.id] ? 'is-active' : ''} ${done[n.id] ? 'is-done' : ''}`}
              style={{ x: mvs.current[i].x, y: mvs.current[i].y, width: nw, height: nh }}
              drag
              dragMomentum={false}
              dragElastic={0.08}
              dragConstraints={{ left: 0, top: 0, right: w - nw, bottom: h - nh }}
              whileDrag={{ scale: 1.06, cursor: 'grabbing' }}
              tabIndex={0}
              aria-label={`${n.label} node`}
            >
              <span className="wf-node__icon">{ICONS[n.icon]}</span>
              <span className="wf-node__text">
                <strong>{n.label}</strong>
                <small className="mono">{n.sub}</small>
              </span>
              <span className="wf-node__ok" aria-hidden="true">
                ✓
              </span>
            </motion.div>
          ))}
        </div>
        <span className="wf__hint mono" aria-hidden="true">
          ✦ drag the nodes
        </span>
        <span className="wf__tag mono">{tag.toUpperCase()}</span>
      </div>

      <div className="wf__log" aria-live="polite">
        <AnimatePresence initial={false}>
          {logs.length === 0 && (
            <motion.p key="idle" className="wf__idle mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Waiting for the next message…
            </motion.p>
          )}
          {logs.map((l, i) => (
            <motion.p
              key={l.k}
              layout
              className="wf__line"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1 - i * 0.22, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="mono wf__time">{l.t}</span>
              <span className="mono wf__node">{l.node}</span>
              <span className="wf__text">{l.text}</span>
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function WorkflowCanvas() {
  const box = useRef(null);
  const [size, setSize] = useState(null);
  useLayoutEffect(() => {
    const el = box.current;
    const measure = () => {
      const w = Math.round(el.clientWidth);
      const small = w < 460;
      setSize(s => {
        const next = { w, h: small ? 290 : 300, nw: small ? 106 : 132, nh: small ? 44 : 52 };
        return s && s.w === next.w && s.h === next.h ? s : next;
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div ref={box} className="wf-box">{size && <Canvas key={`${size.nw}-${size.h}`} size={size} />}</div>;
}
