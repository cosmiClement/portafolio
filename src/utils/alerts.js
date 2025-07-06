import Swal from 'sweetalert2';
import '../styles/SweetAlertCustom.css'; // ¡Importa tus estilos personalizados aquí!

const customClasses = {
  popup: 'my-swal-popup',
  title: 'my-swal-title',
  htmlContainer: 'my-swal-text',
  confirmButton: 'my-swal-button',
  cancelButton: 'my-swal-button-cancel', // Si usas un botón de cancelar
  container: 'my-swal-overlay', // Para el fondo del overlay
};

/**
 * Muestra una alerta de éxito con SweetAlert2.
 * @param {string} title El título de la alerta.
 * @param {string} text El texto del cuerpo de la alerta.
 * @param {string} confirmButtonText El texto del botón de confirmación.
 */
export const showSuccessAlert = (title, text, confirmButtonText = 'Ok') => {
  Swal.fire({
    title,
    text,
    icon: 'success',
    confirmButtonText,
    customClass: customClasses, // Aplica las clases personalizadas
  });
};

/**
 * Muestra una alerta de error con SweetAlert2.
 * @param {string} title El título de la alerta.
 * @param {string} text El texto del cuerpo de la alerta.
 * @param {string} confirmButtonText El texto del botón de confirmación.
 */
export const showErrorAlert = (title, text, confirmButtonText = 'Ok') => {
  Swal.fire({
    title,
    text,
    icon: 'error',
    confirmButtonText,
    customClass: customClasses, // Aplica las clases personalizadas
  });
};