import React, { useEffect } from 'react';
import '../styles/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTiktok, FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiNodedotjs, SiCss3, SiBootstrap,
  SiMysql, SiJavascript, SiAngular, SiGit, SiCodeigniter
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const techIcons = [
  { icon: <SiHtml5 />, label: 'HTML' },
  { icon: <SiCss3 />, label: 'CSS' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiBootstrap />, label: 'Bootstrap' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiAngular />, label: 'Angular' },
  { icon: <FaJava />, label: 'Java' },
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiCodeigniter />, label: 'CodeIgniter' },
];

const Hero = () => {
  const { language } = useLanguage();

  const texts = {
    es: {
      greeting: "Hola Mundo, Soy",
      description: "Apasionado por crear soluciones digitales innovadoras y funcionales que impacten positivamente al usuario final.",
      download: "Descargar CV",
      contact: "Contáctame",
      titles: ["Frontend Developer", 2000, "Desarrollador Web", 2000]
    },
    en: {
      greeting: "Hello World, I'm",
      description: "Passionate about creating innovative and functional digital solutions that positively impact the end user.",
      download: "Download CV",
      contact: "Contact me",
      titles: ["Frontend Developer", 2000, "Web Developer", 2000]
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-right">
        <p className="greeting">{texts[language].greeting}</p>
        <h1>
          Cosmi Clemente<br />
          <span className="highlight">
            <TypeAnimation
              key={`type-${language}`} // ✅ Esta línea evita el texto sobrepuesto
              sequence={texts[language].titles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="description">{texts[language].description}</p>
        <div className="hero-buttons">
          <a href="/cv.pdf" className="btn solid" download>{texts[language].download}</a>
          <a href="#contact" className="btn outline">{texts[language].contact}</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/Cosmi Clemente Flores" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/cosmiClement" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://wa.me/59171714425" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.tiktok.com/@Clementefloresj" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>

      <div className="hero-image" data-aos="zoom-in">
        <div className="orbit-system">
          <motion.div
            className="rotating-ring"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {techIcons.map((tech, index) => {
              const angle = (index / techIcons.length) * 2 * Math.PI;
              const radius = 160;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={index}
                  className="orbit-icon"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  <div className="icon-static">{tech.icon}</div>
                </div>
              );
            })}
          </motion.div>

          <div className="orbit-center">
            <img src="/avatar.jpeg" alt="Cosmi" className="avatar minimal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
