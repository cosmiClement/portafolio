import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLang = (lang) => {
    toggleLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">Dev Clemente.</div>
      <ul className="navbar-menu">
        <li><a href="#hero">{language === 'es' ? 'Inicio' : 'Home'}</a></li>
        <li><a href="#about">{language === 'es' ? 'Sobre mí' : 'About'}</a></li>
        <li><a href="#projects">{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
        <li><a href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
        <li className="lang-selector">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="lang-toggle">
            🌐 {language === 'es' ? 'Idioma' : 'Language'}
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => changeLang('es')}>
                <img src="/flags/bolivia.png" alt="Español" className="flag" /> Español
              </li>
              <li onClick={() => changeLang('en')}>
                <img src="/flags/estados-unidos.png" alt="English" className="flag" /> English
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
