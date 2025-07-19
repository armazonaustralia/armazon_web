// src/components/Client/Client.js
import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import './Client.css';
import { CLIENTS_LOGOS, SECTION_IDS } from '../../constants'; // Assuming CLIENTS_LOGOS is an array of image filenames

// Dynamically import client logos
const clientLogoImages = CLIENTS_LOGOS.reduce((acc, logoName) => {
  try {
    // Adjust the path according to your assets structure
    acc[logoName] = require(`../../assets/${logoName}`);
  } catch (e) {
    console.warn(`Client logo not found: ${logoName}`);
    acc[logoName] = 'https://placehold.co/150x80/EEE/31343C?text=Logo+Not+Found'; // Placeholder
  }
  return acc;
}, {});

const ClientSection = () => {
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section className="client-section" id={SECTION_IDS.CLIENTS}>
      <h2 className="client-section-title">
        We partner with trailblazing brands to engineer their digital future.
      </h2>
      <div className="client-logos-slider">
        {/* For a true slider, you'd need a library like react-slick or build custom JS logic.
            This example creates a horizontally scrollable list, which is simpler. */}
        <div className="client-logos-track">
          {CLIENTS_LOGOS.map((logoName, index) => (
            <div key={index} className="client-logo-item">
              <img src={clientLogoImages[logoName]} alt={`Client ${index + 1}`} className="client-logo-image" />
            </div>
          ))}
          {/* Duplicate logos for infinite scroll illusion if desired, requires more complex CSS/JS */}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
