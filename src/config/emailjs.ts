// Configuration EmailJS
// Utilise les variables d'environnement Vercel ou les valeurs par défaut

export const EMAILJS_CONFIG = {
  // Service ID - Utilise la variable d'environnement ou la valeur par défaut
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_8x9k2m7',
  
  // Template ID - Utilise la variable d'environnement ou la valeur par défaut
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact_eclosion',
  
  // Public Key - Utilise la variable d'environnement ou la valeur par défaut
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE',
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

