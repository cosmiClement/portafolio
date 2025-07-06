// src/components/About.jsx
import React from 'react';
import '../styles/About.css';
import { FaUser, FaBullseye, FaBrain, FaJava, FaReact } from 'react-icons/fa'; // Importa FaReact
import {
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMysql,
  SiNodedotjs, SiGit, SiFigma // Importa SiFigma
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const techIcons = [
  { icon: <SiHtml5 />, label: 'HTML' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiCss3 />, label: 'CSS' },
  { icon: <SiBootstrap />, label: 'Bootstrap' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' }, // Cambiado de Angular a React
  { icon: <FaJava />, label: 'Java' },
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiFigma />, label: 'Figma' } // Cambiado de CodeIgniter a Figma
];

const About = () => {
  const { language } = useLanguage();

  const texts = {
    es: {
      sectionTitle: "Sobre Mí",
      skillsTitle: "Mis Habilidades Técnicas",
      cards: [
        {
          title: "¿Quién Soy?",
          desc: "Soy un Ingeniero en Sistemas y Desarrollador Web altamente motivado con sólidos conocimientos en desarrollo de software y diseño de interfaces web."
        },
        {
          title: "Mi Objetivo",
          desc: "Mi objetivo es seguir aprendiendo y aplicar mis conocimientos actuales para ganar experiencia en Front-end y Back-end."
        },
        {
          title: "Mi Perfil",
          desc: "Me caracterizo por mi capacidad para adaptarme rápidamente a nuevas tecnologías y entregar productos de alta calidad."
        }
      ]
    },
    en: {
      sectionTitle: "About Me",
      skillsTitle: "My Technical Skills",
      cards: [
        {
          title: "Who Am I?",
          desc: "I am a highly motivated Systems Engineer and Web Developer with solid knowledge in software development and web interface design."
        },
        {
          title: "My Goal",
          desc: "My goal is to continue learning and apply my current knowledge to gain experience in Front-end and Back-end development."
        },
        {
          title: "My Profile",
          desc: "I am characterized by my ability to quickly adapt to new technologies and deliver high-quality products."
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <section id="about" className="about-section">
      <div className="animated-bg" />

      <h2 className="section-title">{content.sectionTitle}</h2>

      <div className="info-cards">
        {content.cards.map((card, i) => (
          <motion.div
            className="info-card"
            key={i}
            initial={{ opacity: 0, rotateX: 90, scale: 0.8 }}
            whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {i === 0 && <FaUser className="info-icon" />}
            {i === 1 && <FaBullseye className="info-icon" />}
            {i === 2 && <FaBrain className="info-icon" />}
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <h3 className="skills-title">{content.skillsTitle}</h3>

      <motion.div
        className="skills-icons"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
      >
        {techIcons.map((tech, index) => (
          <motion.div
            className="skill"
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
          >
            {tech.icon}
            <span>{tech.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="curve-decoration"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg width="100" height="60">
          <path
            d="M0,50 Q50,0 100,50"
            stroke="#61dafb"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="5"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default About;