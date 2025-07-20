// src/constants.js

export const COMPANY_KEY = 'armazonHub';
export const COMPANY_NAME = '';
export const SITE_TITLE = 'Armazon Hub';
export const SITE_ICON = 'armazonHub.ico'; // Example icon URL, replace with actual
export const HERO_TITLE = 'Residential and Commercial Scaffolding';
export const HERO_DESCRIPTION =
  'we specialize in the supply, assembly, and disassembly of scaffolding for construction projects.';
export const HERO_VIDEO = 'https://github.com/armazonaustralia/videos/raw/refs/heads/main/aboutUs-armazonHub.mp4'; 
export const HERO_VIDEO_ENABLED = true; 
export const ABOUT_US_TITLE = 'About Us';
export const ABOUT_US_DESCRIPTION =
  'Our focus is on delivering safe, efficient, and tailored solutions that meet the specific needs of each client, project, and design. We work with the highest standards of quality and safety, ensuring reliable service from start to finish. Backed by a team of trained professionals, we are committed to supporting the success of every project we take part in.';
export const ABOUT_US_VIDEO_ENABLED = false;
export const SERVICES_TITLE = 'Our Services';
export const MEMBERS_TITLE = 'Our Team';
export const IS_MEMBERS_ENABLED = false;
export const IS_CLIENTS_ENABLED = false;

export const SERVICES_DATA = [
  {
    title: 'Dismantling',
    description:
      'Safe dismantling, modifing, and adjusting scaffolding structures.',
    imageUrl: 'web.jpeg',
    videoUrl: 'https://github.com/armazonaustralia/videos/raw/refs/heads/main/dismateling.mp4',
  },
  {
    title: 'Erecting',
    description:
      'Erecting scaffolding for residential and commercial projects.',
    imageUrl: 'mobile.jpeg',
    videoUrl: 'https://github.com/armazonaustralia/videos/raw/refs/heads/main/erecting.mp4',
  }
];

export const IS_VISION_MISSION_VALUES_ENABLED = true;
export const MISSION_VISION_VALUES_TITLE = '';
export const MISSION_VISION_VALUES_DATA = [
  {
    title: 'Mission',
    description: 'To provide reliable, safe, and efficient scaffolding solutions that support our clients in building with confidence, while ensuring the highest levels of quality and professionalism in every project.',
  },
  {
    title: 'Vision',
    description: 'To be a leading scaffolding service provider in the construction industry, recognized for our commitment to safety, innovation, and customer satisfaction.',
  },
  {    title: 'Values',
    description: `•	Safety First: We prioritize the well-being of our team, clients, and the public in every aspect of our work.
	•	Integrity: We operate with transparency, responsibility, and honesty.
	•	Excellence: We strive for high performance, quality service, and continuous improvement.
	•	Customer Focus: We build lasting relationships through trust, responsiveness, and tailored solutions.
	•	Teamwork: We believe in collaboration and respect to achieve shared success.`,
  },
];

export const TEAM_MEMBERS = [
  {
    title: 'Lahiru Ranasinghe',
    description: 'Founder | Solutions Architect',
    imageUrl: 'lahiru.jpeg',
  },
  {
    title: 'Diego Torres',
    description: 'Founder | CTO',
    imageUrl: 'diego.jpeg',
  },
  {
    title: 'Nelson Penagos',
    description: 'Full Stack Developer',
    imageUrl: 'nelson.jpeg',
  },
  {
    title: 'Eduard Arias',
    description: 'Data Analitics',
    imageUrl: 'edu.jpeg',
  },
  {
    title: 'Tiana Vasiljev',
    description: 'Creative Direction | Branding & Marketing',
    imageUrl: 'tiana.jpeg',
  },
];

export const CLIENTS_LOGOS = [
  'kiindred.png',
  'fitideas.png',
  'TekSystems.png',
];

export const FOOTER_TEXT = `© ${new Date().getFullYear()} Ashtowers. All rights reserved.`;
export const CALL_TO_ACTION_TEXT = 'Get a Quote';
export const CALL_TO_ACTION_URL = 'https://www.ashtowers.com/contact';

export const CONTACT_US_TITLE = 'Contact Us';
export const CONTACT_US_EMAIL = 'admin@jhonny@armazon.com.au, admin@armazon.com.au';
export const CONTACT_US_DESCRIPTION = `Ready to discuss your project? Get in touch with us today. ${CONTACT_US_EMAIL}`;

// Note: Telegram bot token and chat ID should ideally be stored in environment variables
// and handled on a backend for security. For this migration, we'll keep them here
// but acknowledge this is not best practice for production.
export const TELEGRAM_BOT_TOKEN = '8012188492:AAFsHyYZlOQnTdW8-f42ZpaIvaEsdJi5soE';
export const TELEGRAM_CHAT_ID = '8159349286';

export const SECTION_IDS = {
  ABOUT: 'about',
  SERVICES: 'services',
  MEMBERS: 'members',
  CONTACT: 'contact',
  CLIENTS: 'clients',
  MISSION_VISION_VALUES: 'mission-vision-values',
};
