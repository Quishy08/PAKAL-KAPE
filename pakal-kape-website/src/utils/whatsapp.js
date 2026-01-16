/**
 * Abre WhatsApp con un mensaje predefinido
 * @param {string} product - Nombre del producto o mensaje
 * @param {string} phoneNumber - Número de teléfono (opcional)
 */
export const sendWhatsAppMessage = (product, phoneNumber = "+522212764387") => {
  const message = encodeURIComponent(
    `Hola! Me interesa ${product} de Pakal Kape. ¿Podrían darme más información?`
  );

  const url = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${message}`
    : `https://wa.me/?text=${message}`;

  window.open(url, "_blank");
};
