// src/components/AboutUs/AboutUs.js
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "./AboutUs.css";
import { ABOUT_US_TITLE, ABOUT_US_DESCRIPTION, SECTION_IDS } from "../../constants";
import aboutUsImg from "../../assets/aboutUs.jpeg";

// const videos = {
//   armazonHub: aboutUsArmazonVideo,
//   ashTowers: aboutUsAshTowersVideo,
// }
const AboutUs = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const videoRef = useRef(null);
  // const videoSrc = videos[COMPANY_KEY] || aboutUsAshTowersVideo;
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section className="about-us" id={SECTION_IDS.ABOUT}>
      <div className={`about-us-content ${isDesktop ? "desktop" : "mobile"}`}>
        {isDesktop && (
          <div className="about-us-image-content">
            {/* Display if ABOUT_US_VIDEO_ENABLED is true otherwise image*/}
            {/* {ABOUT_US_VIDEO_ENABLED ? (
              <div className="about-us-video">
                <video className="about-us-video" autoPlay loop muted ref={videoRef}>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : ( */}
              <img src={aboutUsImg} alt="About Ashtowers" className="about-us-image" />
            {/* )} */}
          </div>
        )}
        <div className="about-us-text-content">
          <h2>{ABOUT_US_TITLE}</h2>
          <p>{ABOUT_US_DESCRIPTION}</p>
        </div>
        {!isDesktop && (
          <div className="about-us-image-content mobile-image">
            {/* {ABOUT_US_VIDEO_ENABLED ? (
              <div className="about-us-video">
                <video className="about-us-video" autoPlay loop muted ref={videoRef}>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : ( */}
            <img src={aboutUsImg} alt="About Ashtowers" className="about-us-image" />
            {/* )} */}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
