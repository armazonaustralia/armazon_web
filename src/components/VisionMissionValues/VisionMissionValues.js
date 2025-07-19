// src/components/Services/Services.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './VisionMissionValues.css';
import { MISSION_VISION_VALUES_DATA, MISSION_VISION_VALUES_TITLE, SECTION_IDS } from '../../constants';
// Dynamically import images from assets based on SERVICES_DATA



const ServiceCard = ({ title, description, imageUrl, isDesktop, videoUrl }) => {
  return (
    <div className={`service-card ${isDesktop ? 'desktop' : 'mobile'}`}>
      
      
      <div className="service-card-content">
        <h3 style={{ textAlign: 'center', width: '100%' }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const VisionMissionValues = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section className="visionMissionValues" id={SECTION_IDS.SERVICES}>
      <h2>{MISSION_VISION_VALUES_TITLE}</h2>
      <div className="services-grid">
        {MISSION_VISION_VALUES_DATA.map((mvv) => (
          <ServiceCard
            key={mvv.title}
            title={mvv.title}
            description={mvv.description}
            isDesktop={isDesktop}
          />
        ))}
      </div>
    </section>
  );
};

export default VisionMissionValues;
