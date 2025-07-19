// src/components/Header/Header.js
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Header.css';
import { COMPANY_KEY, COMPANY_NAME, CALL_TO_ACTION_TEXT, CALL_TO_ACTION_URL, SECTION_IDS } from '../../constants';
// import logo from '../../assets/logo.png'; 
import ashtowersLogo from '../../assets/ashTowers.png'; 
import armazonHubLogo from '../../assets/armazonHub.png'; 

const logos = {
  ashTowers: ashtowersLogo,
  armazonHub: armazonHubLogo,
}

const Header = ({ scrollToSection }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    scrollToSection(sectionId);
    if (!isDesktop) {
      setMobileMenuOpen(false);
    }
  };

  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const DesktopNav = () => (
    <nav className="header-nav">
      <button onClick={() => handleScrollTo(SECTION_IDS.ABOUT)} className="header-nav-link">About</button>
      <button onClick={() => handleScrollTo(SECTION_IDS.SERVICES)} className="header-nav-link">Services</button>
      <button onClick={() => handleScrollTo(SECTION_IDS.CONTACT)} className="header-nav-link">Contact</button>
      <button onClick={() => openUrl(CALL_TO_ACTION_URL)} className="header-cta-button">{CALL_TO_ACTION_TEXT}</button>
    </nav>
  );

  const MobileNav = () => (
    <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
      <button onClick={() => handleScrollTo(SECTION_IDS.ABOUT)} className="mobile-nav-link">About</button>
      <button onClick={() => handleScrollTo(SECTION_IDS.SERVICES)} className="mobile-nav-link">Services</button>
      <button onClick={() => handleScrollTo(SECTION_IDS.CONTACT)} className="mobile-nav-link">Contact</button>
      <button onClick={() => openUrl(CALL_TO_ACTION_URL)} className="mobile-cta-button">{CALL_TO_ACTION_TEXT}</button>
    </div>
  );

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-container">
          <img src={logos[COMPANY_KEY]} alt={`${COMPANY_NAME} logo`} className="header-logo-img" />
          <span className="header-company-name">{COMPANY_NAME}</span>
        </div>
        {isDesktop ? <DesktopNav /> : (
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        )}
      </div>
      {!isDesktop && <MobileNav />}
    </header>
  );
};

export default Header;
