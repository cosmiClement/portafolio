// /api/sendEmail.js
const emailjs = require('emailjs-com');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { user_name, user_email, message } = req.body;

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,   // Service ID de EmailJS
        process.env.EMAILJS_TEMPLATE_ID,   // Template ID de EmailJS
        {
          user_name,
          user_email,
          message,
        },
        process.env.EMAILJS_PUBLIC_KEY    // Public Key de EmailJS
      );

      res.status(200).json({ message: 'Mensaje enviado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al enviar el mensaje', error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
