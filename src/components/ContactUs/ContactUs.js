// src/components/ContactUs/ContactUs.js
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './ContactUs.css';
import {
  CONTACT_US_TITLE,
  CONTACT_US_DESCRIPTION,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
  SECTION_IDS
} from '../../constants';

const ContactUs = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // To show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendTelegramMessage = async (name, email, messageContent) => {
    const text = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${messageContent}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });
      const data = await response.json();
      if (data.ok) {
        setFormStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error(data.description || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Telegram API Error:', error);
      setFormStatus(`Failed to send message. ${error.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormStatus('Please enter a valid email.');
      return;
    }
    setFormStatus('Sending...');
    sendTelegramMessage(formData.name, formData.email, formData.message);
  };

  return (
    <section className="contact-us" id={SECTION_IDS.CONTACT}>
      <div className={`contact-us-content ${isDesktop ? 'desktop' : 'mobile'}`}>
        <div className="contact-us-text-content">
          <h2>{CONTACT_US_TITLE}</h2>
          <p>{CONTACT_US_DESCRIPTION}</p>
        </div>
        <div className="contact-us-form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit Message
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
