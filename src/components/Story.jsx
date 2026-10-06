import { Icon, Img, SectionHead, Wave } from './ui.jsx';
import { JOURNEY, SCHOOL, SOUL_TIMELINE, WHY } from '../content.js';

/* ── School with a Soul ──────────────────────────────────────────────────── */
export function Soul() {
  return (
    <section id="about" className="section section--white" aria-labelledby="soul-title">
      <div className="container soul">
        <div className="soul__media">
          <div className="frame frame--tall">
            <Img name="about/school-community" alt="Sri Nakshatra School students and community" tone="blue" icon="building" label="Sri Nakshatra School" eager className="frame__img" />
          </div>
          <div className="soul__badge glass-dark" data-reveal="scale" style={{ '--d': '500ms' }}>
            <Icon name="star" size={22} />
            <span>
              <strong>Est. {SCHOOL.founded}</strong>
              <small>CBSE No. {SCHOOL.affiliationNo}</small>
            </span>
          </div>
        </div>

        <div className="soul__body">
          <p className="eyebrow" data-reveal="right">About Us</p>
          <h2 className="h2 h2--left" id="soul-title" data-reveal="right" style={{ '--d': '100ms' }}>
            SCHOOL WITH A <span className="grad-text">SOUL</span>
          </h2>
          <p className="lead" data-reveal="up" style={{ '--d': '200ms' }}>
            Nakshatra pioneered global education through the CBSE system in Ravulapalem, with a clear, visionary and
            <mark className="hl"> project-oriented </mark> approach to teaching young minds.
          </p>
          <p data-reveal="up" style={{ '--d': '280ms' }}>
            Our methodology is child-centric. Because <mark className="hl">every child is unique</mark>, learning is shaped around
            each learner: <mark className="hl">meaningful</mark>, skill-building and <mark className="hl">creative</mark>.
          </p>
          <p data-reveal="up" style={{ '--d': '360ms' }}>
            The aim is simple: <mark className="hl">confident, lifelong learners</mark> who grow into responsible citizens and{' '}
            <mark className="hl">future leaders</mark>.
          </p>

          <ol className="path" aria-label="Our learning path">
            {SOUL_TIMELINE.map((t, i) => (
              <li key={t} data-reveal="left" style={{ '--d': `${i * 110}ms` }}>
                <span className="path__node">{i + 1}</span>
                <span className="path__label">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── Why choose us ───────────────────────────────────────────────────────── */
export function Why() {
  return (
    <section id="why" className="section section--tint" aria-labelledby="why-title">
      <Wave color="#ffffff" />
      <div className="container">
        <SectionHead id="why-title" eyebrow="Why Us" title="WHY CHOOSE SRI NAKSHATRA?" sub="The things that make learning here different." />
        <ul className="why">
          {WHY.map((w, i) => (
            <li key={w.title} className={`why__card why__card--${i + 1}`} data-reveal="up" style={{ '--d': `${i * 100}ms` }}>
              <span className="why__icon">
                <Icon name={w.icon} size={30} />
              </span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Academic excellence ─────────────────────────────────────────────────── */
export function Academics() {
  return (
    <section id="academics" className="section section--white" aria-labelledby="acad-title">
      <div className="container">
        <SectionHead
          id="acad-title"
          eyebrow="Academic Excellence"
          title="INSPIRING MINDS. SHAPING FUTURES."
          sub="A learning journey that moves from curriculum to confidence, and from confidence to the future."
        />
        <ol className="journey">
          <li className="journey__line" data-reveal="line" aria-hidden="true" role="presentation" />
          {JOURNEY.map((j, i) => (
            <li key={j.title} className="journey__step" data-reveal="up" style={{ '--d': `${i * 120}ms` }}>
              <span className="journey__node">
                <Icon name={j.icon} size={26} className="journey__icon" />
              </span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── CBSE trust section ──────────────────────────────────────────────────── */
export function Cbse() {
  return (
    <section id="cbse" className="section section--dark" aria-labelledby="cbse-title">
      <Wave color="#ffffff" />
      <div className="blob blob--one" aria-hidden="true" />
      <div className="container cbse">
        <div className="cbse__text">
          <p className="eyebrow eyebrow--light" data-reveal="up">Trust &amp; Recognition</p>
          <h2 className="h2 h2--left h2--light" id="cbse-title" data-reveal="blur" style={{ '--d': '80ms' }}>
            CBSE AFFILIATED SCHOOL
          </h2>
          <p className="cbse__lead" data-reveal="up" style={{ '--d': '160ms' }}>
            Sri Nakshatra School’s course of study and syllabus are based on CBSE guidelines.
          </p>
          <div className="cbse__number" data-reveal="scale" style={{ '--d': '240ms' }}>
            <span>Affiliation Number</span>
            <strong>{SCHOOL.affiliationNo}</strong>
          </div>
          <a className="btn btn--light" href={SCHOOL.sarasUrl} target="_blank" rel="noopener noreferrer" data-reveal="up" style={{ '--d': '320ms' }}>
            View on CBSE SARAS <Icon name="external" size={18} />
          </a>
        </div>

        <div className="cbse__card-wrap" data-reveal="scale">
          <div className="glow-card">
            <div className="record">
              <div className="record__top">
                <span className="record__badge"><Icon name="shield" size={26} /></span>
                <div>
                  <p className="record__kicker">Summary of CBSE record</p>
                  <p className="record__title">{SCHOOL.name}</p>
                </div>
              </div>
              <dl className="record__list">
                <div><dt>Affiliation No.</dt><dd>{SCHOOL.affiliationNo}</dd></div>
                <div><dt>Status</dt><dd>Senior Secondary Level</dd></div>
                <div><dt>Affiliation period</dt><dd>{SCHOOL.affiliationFrom} – {SCHOOL.affiliationTo}</dd></div>
                <div><dt>Managed by</dt><dd>{SCHOOL.society}</dd></div>
                <div><dt>Established</dt><dd>{SCHOOL.founded}</dd></div>
              </dl>
              <p className="record__note">Details as published by CBSE on its SARAS portal. This is a summary, not an official certificate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
