// src/components/ModalProyecto.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/ModalProyecto.css';
// AOS ya no se importa aquí, se inicializa globalmente

const ModalProyecto = ({ isOpen, onRequestClose, project, languageTexts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  if (!project) return null;

  const totalScreenshots = project.screenshots ? project.screenshots.length : 0;

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalScreenshots - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalScreenshots - 1 : prevIndex - 1
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="modal"
      overlayClassName="overlay"
    >
      {/* Añade data-aos al elemento donde quieres que se aplique la animación.
          El modal en sí ya tiene una animación de entrada/salida definida por 'react-modal',
          pero podemos usar AOS para el contenido si lo deseas.
          Sin embargo, lo más común es que el modal ya tenga sus propias transiciones.
          Si quieres un efecto de aparición al abrir el modal,
          'react-modal' maneja esto mejor con sus props `closeTimeoutMS` y `className`.
          Pero si quieres aplicar AOS a elementos dentro del modal una vez que este aparezca,
          puedes hacerlo.
          
          Para el modal completo, 'react-modal' es más adecuado. Si lo que buscas
          es que el *contenido* del modal aparezca con AOS una vez el modal esté visible,
          entonces lo puedes aplicar a los hijos.
          
          Vamos a añadirlo al div principal dentro del modal para que el contenido
          aparezca con un efecto si el modal ya está visible.
      */}
      <div data-aos="zoom-in" data-aos-duration="600"> {/* Ejemplo de animación AOS */}
        <h2>{project.title}</h2>

        <div className="carousel-container">
          {totalScreenshots > 1 && (
            <button onClick={goToPreviousImage} className="carousel-control prev">
              &#10094;
            </button>
          )}
          {project.screenshots && project.screenshots.length > 0 && (
            <img
              src={project.screenshots[currentImageIndex]}
              alt={`${project.title} captura ${currentImageIndex + 1}`}
              className="modal-screenshot active"
            />
          )}
          {totalScreenshots > 1 && (
            <button onClick={goToNextImage} className="carousel-control next">
              &#10095;
            </button>
          )}
          {totalScreenshots > 1 && (
            <div className="carousel-dots">
              {project.screenshots.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${currentImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                ></span>
              ))}
            </div>
          )}
        </div>

        <p style={{ whiteSpace: 'pre-line' }}>{project.details}</p>

        <p><strong>Rol:</strong> {project.role}</p>

        <div className="modal-actions">
          <button onClick={onRequestClose} className="modal-close-button">
            {languageTexts.closeModal}
          </button>

          <a
            href="https://github.com/cosmiClement"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            GitHub Repo
          </a>
        </div>
      </div> {/* Cierre del div con data-aos */}
    </Modal>
  );
};

export default ModalProyecto;