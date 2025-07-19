import React, { useEffect, useRef } from 'react';
import './App.css'; // Main app styles
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Members from './components/Members/Members';
import ClientSection from './components/Client/Client'; // Renamed Client to ClientSection for clarity
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import { SITE_TITLE, SECTION_IDS, SITE_ICON, IS_MEMBERS_ENABLED, IS_CLIENTS_ENABLED, IS_VISION_MISSION_VALUES_ENABLED } from './constants';
import VisionMissionValues from './components/VisionMissionValues/VisionMissionValues';

function App() {
   useEffect(() => {
    document.title = SITE_TITLE;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', SITE_TITLE);
    }

    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement('link');
      link.rel = 'icon';
      link.href = SITE_ICON;
      console.log(`App.js line 27 - link ${JSON.stringify(link)}`);
      document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  const sectionRefs = {
    [SECTION_IDS.ABOUT]: useRef(null),
    [SECTION_IDS.SERVICES]: useRef(null),
    [SECTION_IDS.MEMBERS]: useRef(null),
    [SECTION_IDS.CLIENTS]: useRef(null),
    [SECTION_IDS.CONTACT]: useRef(null),
    [SECTION_IDS.MISSION_VISION_VALUES]: useRef(null),
    // Add other sections here if they need to be scrollable-to
  };

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback for sections without specific refs, or if ID is direct (e.g. Hero)
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        {/* Hero section typically doesn't need a ref for scrolling *to* it via header, but can have an ID */}
        <Hero scrollToSection={scrollToSection} />

        {/* Assign refs to sections that need to be scrolled to */}
        <div ref={sectionRefs[SECTION_IDS.ABOUT]} id={SECTION_IDS.ABOUT}>
          <AboutUs />
        </div>
        <div ref={sectionRefs[SECTION_IDS.SERVICES]} id={SECTION_IDS.SERVICES}>
          <Services />
        </div>
        {IS_CLIENTS_ENABLED && (
          <div ref={sectionRefs[SECTION_IDS.CLIENTS]} id={SECTION_IDS.CLIENTS}>
            <ClientSection />
          </div>
        )}
        {IS_MEMBERS_ENABLED && (
          <div ref={sectionRefs[SECTION_IDS.MEMBERS]} id={SECTION_IDS.MEMBERS}>
            <Members />
          </div>
        )}
        {IS_VISION_MISSION_VALUES_ENABLED && (
          <div ref={sectionRefs[SECTION_IDS.MISSION_VISION_VALUES]} id={SECTION_IDS.MISSION_VISION_VALUES}>
            <VisionMissionValues />
          </div>
        )}
        <div ref={sectionRefs[SECTION_IDS.CONTACT]} id={SECTION_IDS.CONTACT}>
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
