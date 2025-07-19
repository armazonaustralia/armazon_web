// src/components/Hero/Hero.js
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Hero.css';
import { HERO_TITLE, HERO_DESCRIPTION, CALL_TO_ACTION_TEXT, SECTION_IDS, HERO_VIDEO_ENABLED, COMPANY_KEY } from '../../constants';
import digitalExperiencesImg from '../../assets/digitalExperiences.png';


const Hero = ({ scrollToSection }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const videoRef = React.useRef(null);
  // const videoSrc = videos[COMPANY_KEY] || heroAshTowersVideo; 
  const videoSrc = 'https://github.com/SPLAYER-HD/armazon_videos/raw/refs/heads/main/aboutUs-armazonHub.mp4'; 
  useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 2;
      }
    }, []);
  return (
    <section className="hero" id="hero">
      <div className={`hero-content ${isDesktop ? 'desktop' : 'mobile'}`}>
        <div className="hero-text-content">
          <h1>{HERO_TITLE}</h1>
          <p>{HERO_DESCRIPTION}</p>
          <button
            onClick={() => scrollToSection(SECTION_IDS.CONTACT)}
            className="hero-cta-button"
          >
            {CALL_TO_ACTION_TEXT}
          </button>
          <br />
        </div>
        {/* {isDesktop && ( */}
        <br />
        <div >
            {/* Display if ABOUT_US_VIDEO_ENABLED is true otherwise image*/}
            {HERO_VIDEO_ENABLED ? (
              <div className="hero-video">
                <video className="hero-video" autoPlay loop muted ref={videoRef}>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="hero-image-content">
            <img src={digitalExperiencesImg} alt="Digital Experiences" className="hero-image" />
          </div>
            )}
          </div>
          
        {/* )} */}

      </div>
    </section>
  );
};

export default Hero;
