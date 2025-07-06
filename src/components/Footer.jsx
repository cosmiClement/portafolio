// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const texts = {
    es: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.'
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      copyright: 'All rights reserved.'
    }
  };

  const t = texts[language];

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/Cosmi Clemente Flores" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/cosmiClement" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://wa.me/59171714425" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://www.tiktok.com/@Clementefloresj" target="_blank" rel="noreferrer"><FaTiktok /></a>
      </div>

      <div className="footer-links">
        <a href="#home">{t.home}</a>
        <a href="#about">{t.about}</a>
        <a href="#projects">{t.projects}</a>
        <a href="#contact">{t.contact}</a>
      </div>

      <p className="footer-copy">
        © 2025 Cosmi Clemente. {t.copyright}
      </p>
    </footer>
  );
};

export default Footer;
