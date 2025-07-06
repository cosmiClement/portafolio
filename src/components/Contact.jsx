import React, { useRef } from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useLanguage } from '../context/LanguageContext';
import { showSuccessAlert, showErrorAlert } from '../utils/alerts'; // ¡Importa las nuevas funciones!

const Contact = () => {
  const { language } = useLanguage();
  const form = useRef();

  const texts = {
    es: {
      title: 'Trabajemos Juntos',
      description:
        'Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. Si tienes alguna propuesta, pregunta o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      button: 'Enviar mensaje',
      successTitle: '¡Éxito! 🎉', // Título para SweetAlert de éxito
      successText: 'Mensaje enviado correctamente.', // Texto para SweetAlert de éxito
      errorTitle: '¡Oops! 😟', // Título para SweetAlert de error
      errorText: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.', // Texto para SweetAlert de error
    },
    en: {
      title: "Let's Work Together",
      description:
        "I'm interested in opportunities to collaborate on innovative and challenging projects. If you have a proposal, a question, or just want to say hello, feel free to contact me via the form or through my social networks.",
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Write your message here...',
      button: 'Send Message',
      successTitle: 'Success! 🎉',
      successText: 'Message sent successfully.',
      errorTitle: 'Oops! 😟',
      errorText: 'There was an error sending your message. Please try again later.',
    },
  };

  const content = texts[language];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6mo0z5d',    // ✅ Tu Service ID
        'template_kx1kgg6',    // ✅ Tu Template ID
        form.current,
        'AChoL9GrWyL10sQWQ'    // ✅ Tu Public Key
      )
      .then(
        () => {
          // Usa la función de utilidad para mostrar el éxito
          showSuccessAlert(content.successTitle, content.successText);
          form.current.reset(); // Restablece el formulario solo después del éxito
        },
        (error) => {
          // Usa la función de utilidad para mostrar el error
          showErrorAlert(content.errorTitle, content.errorText);
          console.error('Error al enviar el correo:', error.text || error); // Log más detallado
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="contact-info">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/Cosmi Clemente Flores" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/cosmiClement" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://wa.me/59171714425" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@Clemente" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder={content.namePlaceholder} required />
          <input type="email" name="user_email" placeholder={content.emailPlaceholder} required />
          <textarea name="message" rows="5" placeholder={content.messagePlaceholder} required />
          <button type="submit">{content.button}</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;