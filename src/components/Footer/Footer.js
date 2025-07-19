// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FOOTER_TEXT } from '../../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <p>{FOOTER_TEXT}</p>
    </footer>
  );
};

export default Footer;
