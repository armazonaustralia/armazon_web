// src/components/Services/Services.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Services.css';
import { SERVICES_TITLE, SERVICES_DATA, SECTION_IDS } from '../../constants';
// Dynamically import images from assets based on SERVICES_DATA
const serviceImages = SERVICES_DATA.reduce((acc, service) => {
  try {
    acc[service.videoUrl] = service.videoUrl;
    acc[service.imageUrl] = require(`../../assets/${service.imageUrl}`);
  } catch (e) {
    console.warn(`Image not found for ${service.imageUrl}, using placeholder or default.`);
    // You could set a default placeholder image here if needed
    acc[service.imageUrl] = 'https://placehold.co/350x200/EEE/31343C?text=Image+Not+Found';
  }
  return acc;
}, {});


const ServiceCard = ({ title, description, imageUrl, isDesktop, videoUrl }) => {
  return (
    <div className={`service-card ${isDesktop ? 'desktop' : 'mobile'}`}>
      {videoUrl ? (
        <div className="service-video">
          <video className="service-video" autoPlay loop muted>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : <img src={serviceImages[imageUrl]} alt={title} className="service-card-image" />}
      
      <div className="service-card-content">
        <h3 style={{ textAlign: 'center', width: '100%' }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section className="services" id={SECTION_IDS.SERVICES}>
      <h2>{SERVICES_TITLE}</h2>
      <div className="services-grid">
        {SERVICES_DATA.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            isDesktop={isDesktop}
            videoUrl={service.videoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
