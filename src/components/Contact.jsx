import { useState } from 'react';
import { Icon, Img, SectionHead, Wave } from './ui.jsx';
import { ENQUIRY_CLASSES, NAV, SCHOOL } from '../content.js';

const waLink = (text) =>
  `https://wa.me/${SCHOOL.whatsappNumber}?text=${encodeURIComponent(text)}`;
const mapsQ = encodeURIComponent(SCHOOL.mapsQuery);

/* ── Admissions call-to-action ───────────────────────────────────────────── */
export function Admissions() {
  return (
    <section id="admissions" className="cta" aria-labelledby="cta-title">
      <Wave color="#ffffff" />
      <div className="cta__bg" aria-hidden="true">
        <Img name="admissions/background" alt="" fallback="none" className="cta__photo" />
      </div>
      <div className="blob blob--cta1" aria-hidden="true" />
      <div className="blob blob--cta2" aria-hidden="true" />
      <div className="cta__floaters" aria-hidden="true">
        <span className="floater" style={{ left: '8%', top: '30%' }}><Icon name="star" size={26} /></span>
        <span className="floater" style={{ left: '90%', top: '24%', animationDelay: '1s' }}><Icon name="book" size={26} /></span>
        <span className="floater" style={{ left: '84%', top: '74%', animationDelay: '2s' }}><Icon name="pencil" size={26} /></span>
      </div>
      <div className="container cta__inner">
        <h2 id="cta-title" className="cta__title" data-reveal="blur">YOUR CHILD’S JOURNEY STARTS HERE</h2>
        <p className="cta__sub" data-reveal="up" style={{ '--d': '120ms' }}>
          Discover a learning environment where every child is inspired, nurtured and empowered.
        </p>
        <div className="cta__buttons" data-reveal="up" style={{ '--d': '240ms' }}>
          <a href="#enquiry" className="btn btn--primary">Admissions Enquiry <Icon name="arrow-right" size={18} /></a>
          <a href={`tel:${SCHOOL.phoneIntl}`} className="btn btn--light">Contact School <Icon name="phone" size={18} /></a>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ─────────────────────────────────────────────────────────────── */
export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Parent / guardian name: ${f.get('name')}`,
      `Phone: ${f.get('phone')}`,
      `Email: ${f.get('email') || '-'}`,
      `Class of interest: ${f.get('grade') || '-'}`,
      '',
      `${f.get('message') || ''}`,
    ].join('\n');
    const href = `mailto:${SCHOOL.email}?subject=${encodeURIComponent('Admissions enquiry – Sri Nakshatra School')}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  return (
    <section id="contact" className="section section--tint" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead id="contact-title" eyebrow="Contact" title="WE’D LOVE TO HEAR FROM YOU" sub="Visit the campus, call us, or send an enquiry." />

        <div className="contact">
          <div className="contact__cards">
            <article className="ccard" data-reveal="left">
              <span className="ccard__icon"><Icon name="pin" size={24} /></span>
              <div>
                <h3>Address</h3>
                <address>
                  <strong>{SCHOOL.name}</strong><br />
                  {SCHOOL.addressLines.map((l) => (
                    <span key={l}>{l}<br /></span>
                  ))}
                </address>
                <a className="link" href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQ}`} target="_blank" rel="noopener noreferrer">
                  Get Directions <Icon name="external" size={15} />
                </a>
              </div>
            </article>

            <article className="ccard" data-reveal="left" style={{ '--d': '100ms' }}>
              <span className="ccard__icon"><Icon name="phone" size={24} /></span>
              <div>
                <h3>Phone</h3>
                <p><a className="plain" href={`tel:${SCHOOL.phoneIntl}`}>{SCHOOL.phone}</a></p>
                <div className="ccard__btns">
                  <a className="btn btn--sm btn--primary" href={`tel:${SCHOOL.phoneIntl}`}>Call Now</a>
                  {SCHOOL.whatsappEnabled ? (
                    <a className="btn btn--sm btn--wa" href={waLink('Hello Sri Nakshatra School, I would like to know about admissions.')} target="_blank" rel="noopener noreferrer">
                      <Icon name="whatsapp" size={16} /> WhatsApp
                    </a>
                  ) : null}
                </div>
              </div>
            </article>

            <article className="ccard" data-reveal="left" style={{ '--d': '200ms' }}>
              <span className="ccard__icon"><Icon name="mail" size={24} /></span>
              <div>
                <h3>Email</h3>
                <p><a className="plain" href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></p>
                <a className="btn btn--sm btn--outline" href={`mailto:${SCHOOL.email}`}>Email Us</a>
              </div>
            </article>
          </div>

          <form id="enquiry" className="form" onSubmit={onSubmit} data-reveal="right" aria-labelledby="form-title">
            <h3 id="form-title">Admissions Enquiry</h3>
            <p className="form__hint">Fill in the details and your email app will open with the enquiry ready to send to the school.</p>
            <div className="form__row">
              <label>
                <span>Parent / guardian name *</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                <span>Phone *</span>
                <input name="phone" type="tel" required inputMode="tel" autoComplete="tel" pattern="[0-9+\s-]{10,15}" title="Enter a valid phone number" />
              </label>
            </div>
            <div className="form__row">
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                <span>Class of interest</span>
                <select name="grade" defaultValue="">
                  <option value="">Select class</option>
                  {ENQUIRY_CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" />
            </label>
            <button type="submit" className="btn btn--primary">
              Send Enquiry <Icon name="send" size={18} />
            </button>
            {sent ? (
              <p className="form__ok" role="status">
                Thank you. If your email app did not open, please write to <a className="link" href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a> or call {SCHOOL.phone}.
              </p>
            ) : null}
          </form>
        </div>

        <div className="map" data-reveal="scale">
          <iframe
            title="Sri Nakshatra School on Google Maps"
            src={`https://maps.google.com/maps?q=${mapsQ}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Wave color="#eef6ff" />
      <div className="footer__line" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="brand brand--light" aria-label="Back to top">
            <span className="brand__mark"><Icon name="star" size={22} /></span>
            <span className="brand__text"><strong>Sri Nakshatra</strong><small>School</small></span>
          </a>
          <p className="footer__tag">“{SCHOOL.tagline}”</p>
          <p className="footer__small">CBSE Affiliation No. {SCHOOL.affiliationNo}</p>
        </div>

        <nav aria-label="Footer quick navigation">
          <h3>Quick Navigation</h3>
          <ul>
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
          </ul>
        </nav>

        <nav aria-label="Important links">
          <h3>Important Links</h3>
          <ul>
            <li><a href={SCHOOL.officialSite} target="_blank" rel="noopener noreferrer">Official Website</a></li>
            <li><a href={SCHOOL.sarasUrl} target="_blank" rel="noopener noreferrer">CBSE SARAS Record</a></li>
            <li><a href="#documents">Mandatory Disclosures</a></li>
            <li><a href="#fees">Fee Structure</a></li>
            <li><a href="#enquiry">Admissions Enquiry</a></li>
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <address>
            {SCHOOL.addressLines.map((l) => <span key={l}>{l}<br /></span>)}
          </address>
          <p><a href={`tel:${SCHOOL.phoneIntl}`}>{SCHOOL.phone}</a></p>
          <p><a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {year} {SCHOOL.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Mobile action bar ───────────────────────────────────────────────────── */
export function MobileBar() {
  return (
    <nav className="mbar" aria-label="Quick actions">
      <a href={`tel:${SCHOOL.phoneIntl}`}><Icon name="phone" size={20} /><span>Call</span></a>
      {SCHOOL.whatsappEnabled ? (
        <a href={waLink('Hello Sri Nakshatra School, I would like to know about admissions.')} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={20} /><span>WhatsApp</span>
        </a>
      ) : null}
      <a href="#enquiry" className="mbar__main"><Icon name="send" size={20} /><span>Enquiry</span></a>
    </nav>
  );
}
