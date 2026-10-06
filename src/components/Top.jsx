import { useEffect, useRef, useState } from 'react';
import { Icon, Img, CountUp } from './ui.jsx';
import { NAV, SCHOOL, STATS, WELCOME } from '../content.js';
import { prefersReducedMotion } from '../hooks.js';

/* ── Loader ──────────────────────────────────────────────────────────────── */
export function Loader({ done }) {
  return (
    <div className={`loader ${done ? 'loader--out' : ''}`} aria-hidden={done} role="status" aria-label="Loading Sri Nakshatra School">
      <div className="loader__mark">
        <span className="loader__ring" />
        <Icon name="star" size={44} className="loader__star" />
      </div>
      <p className="loader__name">Sri Nakshatra School</p>
      <p className="loader__tag">A School with a Soul</p>
      <span className="loader__bar"><i /></span>
    </div>
  );
}

/* ── Navbar ──────────────────────────────────────────────────────────────── */
export function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 40);
        if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? Math.min(1, y / h) : 0})`;
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <span ref={bar} />
      </div>
      <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="nav__inner">
          <a href="#home" className="brand" onClick={close} aria-label="Sri Nakshatra School – home">
            <span className="brand__mark">
              <Icon name="star" size={22} />
            </span>
            <span className="brand__text">
              <strong>Sri Nakshatra</strong>
              <small>School</small>
            </span>
          </a>

          <nav className="nav__links" aria-label="Main navigation">
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} aria-current={active === n.id ? 'true' : undefined}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#enquiry" className="btn btn--primary nav__cta">
            Admissions Enquiry
          </a>

          <button
            className="nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'x' : 'menu'} size={26} />
          </button>
        </div>

        <div id="mobile-menu" className="nav__panel" aria-hidden={!open}>
          <ul>
            {NAV.map((n, i) => (
              <li key={n.id} style={{ '--i': i }}>
                <a href={`#${n.id}`} onClick={close} tabIndex={open ? 0 : -1} className={active === n.id ? 'is-active' : ''}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#enquiry" className="btn btn--primary btn--block" onClick={close} tabIndex={open ? 0 : -1}>
            Admissions Enquiry
          </a>
        </div>
      </header>
    </>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
function rng(seed) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(7);
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: rand() * 100,
  top: rand() * 100,
  size: 2 + rand() * 5,
  delay: rand() * 8,
  dur: 9 + rand() * 10,
  hue: i % 3,
}));
const FLOATERS = [
  { icon: 'book', left: '7%', top: '26%', d: 0 },
  { icon: 'pencil', left: '89%', top: '28%', d: 1.2 },
  { icon: 'star', left: '82%', top: '70%', d: 2.1 },
  { icon: 'bulb', left: '13%', top: '72%', d: 0.6 },
  { icon: 'rocket', left: '93%', top: '50%', d: 1.8 },
];

export function Hero({ ready }) {
  const par = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!par.current) return;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2 || window.innerWidth < 768) return;
        par.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
      });
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', on);
    };
  }, []);

  return (
    <section id="home" className={`hero ${ready ? 'is-ready' : ''}`} aria-labelledby="hero-title">
      <div className="hero__parallax" ref={par}>
        <div className="hero__bg">
          <Img name="hero/campus" alt="Sri Nakshatra School campus" fallback="none" eager className="hero__photo" />
        </div>
      </div>
      <div className="hero__shade" />
      <div className="hero__blob hero__blob--a" />
      <div className="hero__blob hero__blob--b" />
      <div className="hero__rays" aria-hidden="true" />

      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`pt pt--${p.hue}`}
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }}
          />
        ))}
      </div>
      <div className="hero__floaters" aria-hidden="true">
        {FLOATERS.map((f) => (
          <span key={f.icon} className="floater" style={{ left: f.left, top: f.top, animationDelay: `${f.d}s` }}>
            <Icon name={f.icon} size={28} />
          </span>
        ))}
      </div>

      <div className="container hero__content">
        <p className="hero__badge hero__line" style={{ '--d': '0ms' }}>
          <Icon name="shield" size={16} /> CBSE Affiliated · No. {SCHOOL.affiliationNo}
        </p>
        <h1 id="hero-title" className="hero__title hero__line" style={{ '--d': '120ms' }}>
          A <span className="grad-text">Soulful</span> School
        </h1>
        <p className="hero__sub hero__line" style={{ '--d': '260ms' }}>
          A Place of Inspired Learning and Motivated Teaching
        </p>
        <p className="hero__intro hero__line" style={{ '--d': '380ms' }}>
          {WELCOME}
        </p>
        <div className="hero__cta hero__line" style={{ '--d': '520ms' }}>
          <a href="#about" className="btn btn--primary">
            Explore Our School <Icon name="arrow-right" size={18} />
          </a>
          <a href="#enquiry" className="btn btn--ghost">
            Admissions Enquiry
          </a>
        </div>
      </div>

      <a href="#stats" className="scroll-cue hero__line" style={{ '--d': '800ms' }} aria-label="Scroll to discover more">
        <span>Discover More</span>
        <Icon name="chevron-down" size={20} />
      </a>
    </section>
  );
}

/* ── Quick facts strip ───────────────────────────────────────────────────── */
export function Stats() {
  return (
    <section id="stats" className="stats" aria-label="School at a glance">
      <div className="container">
        <ul className="stats__grid">
          {STATS.map((s, i) => (
            <li key={s.label} className="stat glass" data-reveal="up" style={{ '--d': `${i * 90}ms` }}>
              <span className="stat__icon">
                <Icon name={s.icon} size={24} />
              </span>
              <div>
                <p className="stat__value">
                  {s.value != null ? <CountUp to={s.value} /> : s.label}
                </p>
                <p className="stat__label">{s.value != null ? s.label : s.sub}</p>
                {s.value != null ? <p className="stat__sub">{s.sub}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
