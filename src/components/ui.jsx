import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks.js';

/* ── Icons (stroke icons, 24×24) ─────────────────────────────────────────── */
const c = (cx, cy, r) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const ICONS = {
  star: ['M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z'],
  book: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z', 'M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5'],
  pencil: ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z'],
  shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4'],
  check: ['M20 6L9 17l-5-5'],
  globe: [c(12, 12, 10), 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
  users: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', c(9, 7, 4), 'M23 21v-2a4 4 0 0 0-3-3.9', 'M16 3.1a4 4 0 0 1 0 7.8'],
  heart: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z'],
  user: ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', c(12, 7, 4)],
  layers: ['M12 2l10 5-10 5L2 7z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5'],
  flask: ['M9 3h6', 'M10 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V3'],
  compass: [c(12, 12, 10), 'M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z'],
  tool: ['M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z'],
  bulb: ['M9 18h6', 'M10 22h4', 'M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z'],
  sparkles: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z', 'M19 3v4', 'M17 5h4'],
  smile: [c(12, 12, 10), 'M8 14s1.5 2 4 2 4-2 4-2', 'M9 9h.01', 'M15 9h.01'],
  rocket: [
    'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z',
    'M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z',
    'M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0',
    'M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5',
  ],
  trophy: ['M8 21h8', 'M12 17v4', 'M7 4h10v5a5 5 0 0 1-10 0z', 'M17 5h3v2a3 3 0 0 1-3 3', 'M7 5H4v2a3 3 0 0 0 3 3'],
  music: ['M9 18V5l12-2v13', c(6, 18, 3), c(18, 16, 3)],
  gift: ['M20 12v10H4V12', 'M2 7h20v5H2z', 'M12 22V7', 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z', 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'],
  phone: ['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z'],
  mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M22 6l-10 7L2 6'],
  pin: ['M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z', c(12, 10, 3)],
  file: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M8 13h8', 'M8 17h8'],
  download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  external: ['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', 'M15 3h6v6', 'M10 14L21 3'],
  menu: ['M3 6h18', 'M3 12h18', 'M3 18h18'],
  x: ['M18 6L6 18', 'M6 6l12 12'],
  'arrow-right': ['M5 12h14', 'M12 5l7 7-7 7'],
  'arrow-left': ['M19 12H5', 'M12 19l-7-7 7-7'],
  'chevron-down': ['M6 9l6 6 6-6'],
  whatsapp: ['M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l1.9-5.4A8.4 8.4 0 1 1 21 11.5z'],
  send: ['M22 2L11 13', 'M22 2l-7 20-4-9-9-4z'],
  image: ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', c(8.5, 8.5, 1.5), 'M21 15l-5-5L5 21'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 6h18v15H3z', 'M3 10h18'],
  quote: ['M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 5-4 5z', 'M14 21c3 0 7-1 7-8V5h-7v8h4c0 4-2 5-4 5z'],
  building: ['M3 21h18', 'M5 21V7l7-4 7 4v14', 'M9 21v-6h6v6'],
  clipboard: ['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M9 2h6v4H9z'],
  sun: [c(12, 12, 5), 'M12 1v2', 'M12 21v2', 'M4.2 4.2l1.4 1.4', 'M18.4 18.4l1.4 1.4', 'M1 12h2', 'M21 12h2', 'M4.2 19.8l1.4-1.4', 'M18.4 5.6l1.4-1.4'],
  search: [c(11, 11, 8), 'M21 21l-4.3-4.3'],
  trending: ['M23 6l-9.5 9.5-5-5L1 18', 'M17 6h6v6'],
  flag: ['M4 22V4', 'M4 4h13l-2 5 2 5H4'],
};

export function Icon({ name, size = 24, className = '', ...rest }) {
  const paths = ICONS[name] || ICONS.star;
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/* ── Images ──────────────────────────────────────────────────────────────────
   <Img name="gallery/g1" /> looks for public/images/gallery/g1.webp, then .jpg,
   then .png. If none exist yet it renders a designed artwork tile instead of a
   broken image, so the layout never breaks while real photos are being added. */
const EXTS = ['webp', 'jpg', 'png'];

export function Img({
  name,
  alt,
  tone = 'blue',
  icon = 'image',
  label,
  fallback = 'art',
  eager = false,
  className = '',
}) {
  const [i, setI] = useState(0);
  const base = import.meta.env.BASE_URL || '/';
  if (i >= EXTS.length) {
    if (fallback === 'none') return null;
    return (
      <div className={`art tone-${tone} ${className}`} role="img" aria-label={alt}>
        <Icon name={icon} size={64} className="art__icon" />
        {label ? <span className="art__label">{label}</span> : null}
      </div>
    );
  }
  return (
    <img
      className={className}
      src={`${base}images/${name}.${EXTS[i]}`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setI((n) => n + 1)}
    />
  );
}

/* ── Count-up number (only used for real numeric values) ─────────────────── */
export function CountUp({ to, duration = 1600 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(prefersReducedMotion() ? to : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setVal(to);
      return undefined;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(to * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} aria-label={String(to)}>
      {val}
    </span>
  );
}

/* ── Section heading ─────────────────────────────────────────────────────── */
export function SectionHead({ eyebrow, title, sub, light = false, center = true, id }) {
  return (
    <header className={`head ${center ? 'head--center' : ''} ${light ? 'head--light' : ''}`}>
      {eyebrow ? (
        <p className="eyebrow" data-reveal="up">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="h2" id={id} data-reveal="blur" style={{ '--d': '80ms' }}>
        {title}
      </h2>
      {sub ? (
        <p className="head__sub" data-reveal="up" style={{ '--d': '160ms' }}>
          {sub}
        </p>
      ) : null}
    </header>
  );
}

/* ── Organic curve between sections. `color` = colour of the section above. */
export function Wave({ color = '#fff' }) {
  return (
    <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        fill={color}
        d="M0 0H1440V28C1230 78 980 4 720 36C470 68 230 8 0 48Z"
      />
    </svg>
  );
}

/* ── Modal ───────────────────────────────────────────────────────────────── */
export function Modal({ open, onClose, title, children }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (ref.current) ref.current.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (previous && previous.focus) previous.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="modal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal__panel" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}>
        <button className="modal__close" onClick={onClose} aria-label="Close dialog">
          <Icon name="x" />
        </button>
        {children}
      </div>
    </div>
  );
}

/* ── Lightbox (full-screen image viewer) ─────────────────────────────────── */
export function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    if (index == null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onNav]);

  if (index == null || !items[index]) return null;
  const it = items[index];
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <Icon name="x" />
      </button>
      <button className="lightbox__btn lightbox__prev" onClick={() => onNav(-1)} aria-label="Previous image">
        <Icon name="arrow-left" />
      </button>
      <figure className="lightbox__fig" key={it.id}>
        <Img name={it.img} alt={it.alt} tone={it.tone} icon={it.icon} label={it.title} className="lightbox__img" />
        <figcaption>
          {it.title} <span>· {index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button className="lightbox__btn lightbox__next" onClick={() => onNav(1)} aria-label="Next image">
        <Icon name="arrow-right" />
      </button>
    </div>
  );
}
