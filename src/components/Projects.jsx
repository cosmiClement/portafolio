// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';

//import hatoImg from '../images/hato1.png';
import umssImg from '../images/umss.png';
//import personalImg from '../images/personal.png';
import hato1 from '../images/hato1.png';
import hato2 from '../images/hato2.png';
import hato3 from '../images/hato3.png';

import umss1 from '../images/umss1.png';
import umss2 from '../images/umss2.png';
import umss3 from '../images/umss3.png';
import umss4 from '../images/umss4.png';
import personal2 from '../images/personal2.png';
import personal3 from '../images/pesonal3.png';
import personal4 from '../images/personal4.png';

import { useLanguage } from '../context/LanguageContext';
import ModalProyecto from './ModalProyecto';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const Projects = () => {
  const { language } = useLanguage();

  const texts = {
    es: {
      sectionTitle: "Proyectos",
      viewMore: "Ver más",
      closeModal: "Cerrar"
    },
    en: {
      sectionTitle: "Projects",
      viewMore: "View More",
      closeModal: "Close"
    }
  };

  // Aquí definimos los proyectos con capturas y rol
  const projects = [
    {
      title: 'Aplicación Móvil para la Administración de un Hato Lechero',
      description: 'App desarrollada para gestionar el hato lechero, incluyendo producción, control veterinario y reproducción.',
      role: 'Frontend y Designer',
      details: `Desarrollada con React Native, Laravel y MySQL. Incluye registro de ganado, control de producción de leche y calendario de eventos. Participé en el desarrollo frontend, levantamiento de requerimientos, diseño de interfaz, elaboración de manuales y aseguré buenas prácticas de desarrollo móvil. `,
      screenshots: [hato1,hato2,hato3]
    },
    {
      title: 'Sistema de Inscripciones - Universidad Mayor de San Simón',
      description: 'Sistema web para gestionar inscripciones a olimpiadas estudiantiles, permitiendo registro, inscripciones a diferentes areas de competencia, validaciones de inscripciones por el cajero, validaciones de tutorias,  y generación de reportes.',
      role: 'Frontend y Designer',
      details: `Desarrollada con React, Node.js, Express.js y SupaBase. Permite el registro de usuarios, inscripciones por áreas, validación por cajeros y tutores, y generación de reportes. Participé en el desarrollo frontend, levantamiento de requerimientos, diseño de interfaz, creación de manuales y aplicación de buenas prácticas de desarrollo.`,
      screenshots: [umss1, umss2, umss3, umss4]
    },
    {
      title: 'Página Web Personal',
      description: 'Sistema web desarrollado para mostrar mi portafolio profesional como desarrollador, integrando animaciones y diseño responsive.',
      role: 'Frontend y Designer',
      details: `Página web para mostrar mi portafolio profesional.  
- Tecnologías: React,HTML, Tailwind CSS.  
- Funcionalidades: Animaciones, diseño responsive, contenido dinámico.`,
      screenshots: [personal2, personal3, personal4]
    }
  ];

  const techStacks = [
    ['React Native', 'JavaScript', 'Html', 'CSS', 'Laravel', 'Node.js', 'MySQL'],
    ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SupaBase', 'Express.js'],
    ['React', 'Framer Motion', 'Tailwind CSS']
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const content = texts[language];

  const openModal = (index) => {
    setSelectedProject(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section-unique">
      <h2 className="projects-title-unique">{content.sectionTitle}</h2>

      <div className="projects-grid-unique">
        {projects.map((project, index) => (
          <motion.div
            className="project-box"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={project.screenshots[0]} alt={project.title} className="project-img-unique" />
            <div className="project-content-unique">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list-unique">
                {techStacks[index].map((tech, i) => (
                  <span key={i} className="tech-tag-unique">{tech}</span>
                ))}
              </div>
              <button
                onClick={() => openModal(index)}
                className="project-button"
              >
                {content.viewMore}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ModalProyecto
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        project={selectedProject !== null ? projects[selectedProject] : null}
        languageTexts={content}
      />
    </section>
  );
};

export default Projects;
