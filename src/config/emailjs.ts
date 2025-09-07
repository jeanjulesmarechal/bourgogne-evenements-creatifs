// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // Service ID - Créez un service dans votre dashboard EmailJS
  serviceId: 'service_xxxxxxx',
  
  // Template ID - Créez un template dans votre dashboard EmailJS
  templateId: 'template_xxxxxxx',
  
  // Public Key - Trouvez-la dans Account > API Keys
  publicKey: 'xxxxxxxxxxxxxxxx',
};

// Template EmailJS - Variables disponibles :
// {{from_name}} - Nom complet de l'expéditeur
// {{from_email}} - Email de l'expéditeur
// {{company}} - Société
// {{phone}} - Téléphone
// {{project_type}} - Type de projet
// {{budget}} - Budget estimé
// {{message}} - Message
// {{recaptcha_token}} - Token reCAPTCHA
// {{timestamp}} - Date et heure d'envoi

export const EMAILJS_TEMPLATE = {
  to_name: 'ECLOSION', // Votre nom/entreprise
  reply_to: '{{from_email}}', // Email de réponse
  subject: 'Nouvelle demande de contact - {{from_name}}',
};

