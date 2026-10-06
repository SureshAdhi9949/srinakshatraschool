import { useCallback, useState } from 'react';
import { Icon, Img, Lightbox, SectionHead, Wave } from './ui.jsx';
import { BEYOND, CAMPUS, LEADERS, PHILOSOPHY_STEPS } from '../content.js';
import { Modal } from './ui.jsx';

/* ── Beyond the classroom ────────────────────────────────────────────────── */
export function Beyond() {
  return (
    <section id="beyond" className="section section--warm" aria-labelledby="beyond-title">
      <div className="container">
        <SectionHead
          id="beyond-title"
          eyebrow="Co-Scholastic Life"
          title="LEARNING DOESN’T STOP AT THE CLASSROOM"
          sub="Students grow through creativity, culture, sport and community as much as through books."
        />
      </div>
      <div className="beyond" role="list" tabIndex={0} aria-label="Beyond the classroom activities (scrollable)">
        {BEYOND.map((b, i) => (
          <article key={b.title} role="listitem" className="bcard" data-reveal="right" style={{ '--d': `${i * 110}ms` }}>
            <div className="bcard__media">
              <Img name={b.img} alt={`${b.title} at Sri Nakshatra School`} tone={b.tone} icon={b.icon} className="bcard__img" />
            </div>
            <div className="bcard__body">
              <span className={`bcard__tag tone-${b.tone}`}>
                <Icon name={b.icon} size={16} /> {b.title}
              </span>
              <p className="bcard__text">{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Campus life ─────────────────────────────────────────────────────────── */
export function Campus() {
  const [idx, setIdx] = useState(null);
  const nav = useCallback((d) => setIdx((i) => (i == null ? i : (i + d + CAMPUS.length) % CAMPUS.length)), []);
  const close = useCallback(() => setIdx(null), []);

  return (
    <section id="campus" className="section section--tint" aria-labelledby="campus-title">
      <Wave color="#fff8ec" />
      <div className="container">
        <SectionHead id="campus-title" eyebrow="Campus Life" title="LIFE AT SRI NAKSHATRA" sub="A look at the spaces and moments that make up a school day." />
        <ul className="mosaic">
          {CAMPUS.map((c, i) => (
            <li key={c.id} className={`mosaic__item mosaic__item--${i + 1}`}>
              <button type="button" className="tile" onClick={() => setIdx(i)} aria-label={`Open ${c.title} image`}>
                <Img name={c.img} alt={c.alt} tone={c.tone} icon={c.icon} label={c.title} eager className="tile__img" />
                <span className="tile__cap">
                  <Icon name="search" size={16} /> {c.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={CAMPUS} index={idx} onClose={close} onNav={nav} />
    </section>
  );
}

/* ── Leadership ──────────────────────────────────────────────────────────── */
export function Leadership() {
  const [open, setOpen] = useState(null);
  const leader = LEADERS.find((l) => l.key === open);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="leadership" className="section section--white" aria-labelledby="lead-title">
      <div className="container">
        <SectionHead id="lead-title" eyebrow="Leadership" title="LEADERSHIP THAT INSPIRES" sub="The people guiding Sri Nakshatra School." />
        <ul className="leaders">
          {LEADERS.map((l, i) => (
            <li key={l.key} className="leader" data-reveal={i === 0 ? 'right' : 'left'}>
              <div className="leader__portrait">
                <Img name={l.img} alt={`Illustrative portrait for the ${l.role}`} tone={i === 0 ? 'blue' : 'sun'} icon="user" className="leader__img" />
                <span className="leader__portrait-note">Illustration</span>
              </div>
              <p className="leader__role">{l.role}</p>
              <h3 className="leader__name">{l.name}</h3>
              <p className="leader__quote">
                <Icon name="quote" size={18} className="leader__qicon" />
                {l.message ? l.message : 'A message from our ' + l.role + ' will be shared here.'}
              </p>
              <button type="button" className="btn btn--outline" onClick={() => setOpen(l.key)}>
                Read Message <Icon name="arrow-right" size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal open={Boolean(leader)} onClose={close} title={leader ? `Message from ${leader.name}` : ''}>
        {leader ? (
          <div className="msg">
            <p className="msg__role">{leader.role}</p>
            <h3 className="msg__name">{leader.name}</h3>
            {leader.message ? (
              <blockquote className="msg__text">{leader.message}</blockquote>
            ) : (
              <p className="msg__text msg__text--pending">
                The {leader.role}’s message will be published here soon. For now, please contact the school office to connect.
              </p>
            )}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

/* ── Educational philosophy ──────────────────────────────────────────────── */
export function Philosophy() {
  return (
    <section id="philosophy" className="section section--photo" aria-labelledby="phil-title">
      <Wave color="#ffffff" />
      <div className="phil__bg" aria-hidden="true">
        <Img name="philosophy/students" alt="" fallback="none" className="phil__photo" />
      </div>
      <div className="phil__shade" aria-hidden="true" />
      <div className="container phil">
        <p className="eyebrow eyebrow--light" data-reveal="up">Our Philosophy</p>
        <h2 className="phil__quote" id="phil-title" data-reveal="blur" style={{ '--d': '100ms' }}>
          “Every Talent Deserves an <span className="grad-text">Opportunity</span>”
        </h2>
        <ol className="flow" aria-label="Dream, Discover, Learn, Create, Grow, Lead">
          <li className="flow__line" data-reveal="line" aria-hidden="true" role="presentation" />
          {PHILOSOPHY_STEPS.map((s, i) => (
            <li key={s.label} className="flow__step" data-reveal="scale" style={{ '--d': `${i * 140}ms` }}>
              <span className="flow__node"><Icon name={s.icon} size={24} /></span>
              <span className="flow__label">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
