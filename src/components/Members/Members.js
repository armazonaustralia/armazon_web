// src/components/Members/Members.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Members.css';
import { MEMBERS_TITLE, TEAM_MEMBERS, SECTION_IDS } from '../../constants';

// Dynamically import images from assets based on TEAM_MEMBERS data
const memberImages = TEAM_MEMBERS.reduce((acc, member) => {
  try {
    acc[member.imageUrl] = require(`../../assets/${member.imageUrl}`);
  } catch (e) {
    console.warn(`Image not found for ${member.imageUrl}, using placeholder.`);
    acc[member.imageUrl] = 'https://placehold.co/350x200/EEE/31343C?text=Image+Not+Found';
  }
  return acc;
}, {});

const MemberCard = ({ title, description, imageUrl, isDesktop }) => {
  return (
    <div className={`member-card ${isDesktop ? 'desktop' : 'mobile'}`}>
      <img src={memberImages[imageUrl]} alt={title} className="member-card-image" />
      <div className="member-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Members = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section className="members" id={SECTION_IDS.MEMBERS}>
      <h2>{MEMBERS_TITLE}</h2>
      <div className="members-grid">
        {TEAM_MEMBERS.map((member) => (
          <MemberCard
            key={member.title}
            title={member.title}
            description={member.description}
            imageUrl={member.imageUrl}
            isDesktop={isDesktop}
          />
        ))}
      </div>
    </section>
  );
};

export default Members;
