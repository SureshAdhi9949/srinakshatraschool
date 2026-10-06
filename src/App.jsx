import { useEffect, useMemo, useState } from 'react';
import { Loader, Navbar, Hero, Stats } from './components/Top.jsx';
import { Soul, Why, Academics, Cbse } from './components/Story.jsx';
import { Beyond, Campus, Leadership, Philosophy } from './components/Life.jsx';
import { Gallery, News, Documents, Fee } from './components/Showcase.jsx';
import { Admissions, Contact, Footer, MobileBar } from './components/Contact.jsx';
import { SECTION_TO_NAV } from './content.js';
import { prefersReducedMotion, useActiveSection, useReveal } from './hooks.js';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [gone, setGone] = useState(false);

  const sectionIds = useMemo(() => Object.keys(SECTION_TO_NAV), []);
  const activeSection = useActiveSection(sectionIds);
  const activeNav = SECTION_TO_NAV[activeSection] || 'home';

  useReveal();

  useEffect(() => {
    const minimum = prefersReducedMotion() ? 200 : 1500;
    const start = Date.now();
    let t1 = 0;
    const finish = () => {
      const wait = Math.max(0, minimum - (Date.now() - start));
      t1 = window.setTimeout(() => setLoaded(true), wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    // Never block the page for long on slow networks.
    const t2 = window.setTimeout(() => setLoaded(true), 3000);
    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return undefined;
    const t = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(t);
  }, [loaded]);

  return (
    <>
      {!gone ? <Loader done={loaded} /> : null}
      <a className="skip" href="#about">Skip to content</a>
      <Navbar active={activeNav} />
      <main>
        <Hero ready={loaded} />
        <Stats />
        <Soul />
        <Why />
        <Academics />
        <Cbse />
        <Beyond />
        <Campus />
        <Leadership />
        <Philosophy />
        <Gallery />
        <News />
        <Documents />
        <Fee />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
