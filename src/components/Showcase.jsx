import { useCallback, useMemo, useRef, useState } from 'react';
import { Icon, Img, Lightbox, SectionHead } from './ui.jsx';
import { DOCUMENTS, FEE_STRUCTURE_URL, GALLERY, GALLERY_CATEGORIES, NEWS, SCHOOL } from '../content.js';

/* ── Gallery ─────────────────────────────────────────────────────────────── */
export function Gallery() {
  const [cat, setCat] = useState('All');
  const [idx, setIdx] = useState(null);
  const items = useMemo(() => (cat === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === cat)), [cat]);
  const nav = useCallback((d) => setIdx((i) => (i == null ? i : (i + d + items.length) % items.length)), [items.length]);
  const close = useCallback(() => setIdx(null), []);

  return (
    <section id="gallery" className="section section--white" aria-labelledby="gal-title">
      <div className="container">
        <SectionHead id="gal-title" eyebrow="Gallery" title="MEMORIES THAT MATTER" sub="Ceremonies, celebrations, projects and everyday campus life." />

        <div className="chips" role="group" aria-label="Filter gallery by category" data-reveal="up">
          {GALLERY_CATEGORIES.map((c) => (
            <button key={c} type="button" className={`chip ${cat === c ? 'is-on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>

        <ul className="masonry">
          {items.map((g, i) => (
            <li key={g.id} className={`masonry__item ratio-${g.ratio}`} style={{ '--d': `${(i % 6) * 60}ms` }}>
              <button type="button" className="tile" onClick={() => setIdx(i)} aria-label={`View ${g.title} image`}>
                <Img name={g.img} alt={g.alt} tone={g.tone} icon={g.icon} className="tile__img" />
                <span className="tile__overlay">
                  <strong>{g.title}</strong>
                  <small>View</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={items} index={idx} onClose={close} onNav={nav} />
    </section>
  );
}

/* ── News & events ───────────────────────────────────────────────────────── */
export function News() {
  const row = useRef(null);
  const scroll = (dir) => {
    const el = row.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(380, el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <section id="news" className="section section--tint" aria-labelledby="news-title">
      <div className="container">
        <div className="news__head">
          <SectionHead id="news-title" center={false} eyebrow="News & Events" title="WHAT’S HAPPENING AT SCHOOL" sub="The school shares these updates on its official website." />
          <div className="news__arrows">
            <button type="button" className="round-btn" onClick={() => scroll(-1)} aria-label="Previous cards"><Icon name="arrow-left" /></button>
            <button type="button" className="round-btn" onClick={() => scroll(1)} aria-label="Next cards"><Icon name="arrow-right" /></button>
          </div>
        </div>
      </div>
      <div className="news" ref={row} role="list" tabIndex={0} aria-label="News and updates (scrollable)">
        {NEWS.map((n, i) => (
          <article key={n.id} role="listitem" className="ncard" data-reveal="up" style={{ '--d': `${i * 90}ms` }}>
            <div className="ncard__media">
              <Img name={n.img} alt={n.title} tone={n.tone} icon={n.icon} className="ncard__img" />
            </div>
            <div className="ncard__body">
              <h3>{n.title}</h3>
              <p>{n.text}</p>
              <a className="link" href={n.url} target="_blank" rel="noopener noreferrer">
                View Details <Icon name="external" size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Documents ───────────────────────────────────────────────────────────── */
export function Documents() {
  return (
    <section id="documents" className="section section--white" aria-labelledby="docs-title">
      <div className="container">
        <SectionHead
          id="docs-title"
          eyebrow="Transparency"
          title="IMPORTANT SCHOOL DOCUMENTS"
          sub="Open each document or disclosure on the official school website."
        />
        <ul className="docs">
          {DOCUMENTS.map((d, i) => (
            <li key={d.title} className="doc" data-reveal="up" style={{ '--d': `${(i % 4) * 70}ms` }}>
              <span className="doc__icon"><Icon name={d.icon} size={24} /></span>
              <h3 className="doc__title">{d.title}</h3>
              {d.url ? (
                <div className="doc__actions">
                  <a className="link" href={d.url} target="_blank" rel="noopener noreferrer">
                    View on Official Site <Icon name="external" size={15} />
                  </a>
                  {d.download ? (
                    <a className="link" href={d.url} download>
                      Download <Icon name="download" size={15} />
                    </a>
                  ) : null}
                </div>
              ) : (
                <span className="doc__pending" aria-disabled="true">Link to be added</span>
              )}
            </li>
          ))}
        </ul>
        <p className="docs__foot" data-reveal="up">
          Looking for something else? Visit the{' '}
          <a className="link" href={SCHOOL.officialSite} target="_blank" rel="noopener noreferrer">official school website</a> or{' '}
          <a className="link" href="#enquiry">contact the school office</a>.
        </p>
      </div>
    </section>
  );
}

/* ── Fee structure ───────────────────────────────────────────────────────── */
export function Fee() {
  return (
    <section id="fees" className="fee-wrap" aria-labelledby="fee-title">
      <div className="container">
        <div className="fee" data-reveal="scale">
          <span className="fee__icon"><Icon name="file" size={34} /></span>
          <div className="fee__text">
            <h2 id="fee-title">FEE STRUCTURE</h2>
            <p>For current fee details, please contact the school office or send an enquiry.</p>
          </div>
          {FEE_STRUCTURE_URL ? (
            <a className="btn btn--primary" href={FEE_STRUCTURE_URL} target="_blank" rel="noopener noreferrer">
              View Fee Structure <Icon name="external" size={18} />
            </a>
          ) : (
            <a className="btn btn--primary" href="#enquiry">
              Request Fee Details <Icon name="arrow-right" size={18} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
