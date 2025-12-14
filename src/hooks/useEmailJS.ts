import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAILJS_TEMPLATE } from '../config/emailjs';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message?: string;
  honeypot?: string; // Champ piège à spam
}

interface UseEmailJSReturn {
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
  submitForm: (data: FormData, recaptchaToken?: string) => Promise<boolean>;
  resetForm: () => void;
}

export const useEmailJS = (): UseEmailJSReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Rate limiting - stockage local
  const getLastSubmissionTime = (): number => {
    const lastTime = localStorage.getItem('lastEmailSubmission');
    return lastTime ? parseInt(lastTime, 10) : 0;
  };

  const setLastSubmissionTime = (): void => {
    localStorage.setItem('lastEmailSubmission', Date.now().toString());
  };

  // Validation stricte
  const validateFormData = (data: FormData): string | null => {
    // Vérification du honeypot (champ piège)
    if (data.honeypot && data.honeypot.trim() !== '') {
      return 'Spam détecté';
    }

    // Validation des champs requis
    if (!data.firstName?.trim()) return 'Le prénom est requis';
    if (!data.lastName?.trim()) return 'Le nom est requis';
    if (!data.company?.trim()) return 'La société est requise';
    if (!data.email?.trim()) return 'L\'email est requis';
    if (!data.projectType?.trim()) return 'Le type de projet est requis';

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return 'Format d\'email invalide';
    }

    // Validation téléphone (optionnel mais si fourni)
    if (data.phone && data.phone.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(data.phone)) {
        return 'Format de téléphone invalide';
      }
    }

    // Validation longueur des champs
    if (data.firstName.length > 50) return 'Le prénom est trop long';
    if (data.lastName.length > 50) return 'Le nom est trop long';
    if (data.company.length > 100) return 'Le nom de société est trop long';
    if (data.message && data.message.length > 1000) return 'Le message est trop long';

    return null;
  };

  // Rate limiting
  const checkRateLimit = (): boolean => {
    const lastSubmission = getLastSubmissionTime();
    const now = Date.now();
    const timeDiff = now - lastSubmission;
    const minInterval = 60000; // 1 minute

    if (timeDiff < minInterval) {
      const remainingTime = Math.ceil((minInterval - timeDiff) / 1000);
      setSubmitError(`Veuillez attendre ${remainingTime} secondes avant de renvoyer un message`);
      return false;
    }

    return true;
  };

  const submitForm = useCallback(async (data: FormData, recaptchaToken?: string): Promise<boolean> => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Vérifications de sécurité
      if (!checkRateLimit()) {
        return false;
      }

      const validationError = validateFormData(data);
      if (validationError) {
        setSubmitError(validationError);
        return false;
      }

      // Vérification reCAPTCHA
      if (!recaptchaToken) {
        setSubmitError('Vérification de sécurité requise. Veuillez réessayer.');
        return false;
      }

      // Préparation des données pour EmailJS
      const templateParams = {
        ...EMAILJS_TEMPLATE,
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        company: data.company,
        phone: data.phone || 'Non renseigné',
        project_type: data.projectType,
        budget: data.budget || 'Non renseigné',
        message: data.message || 'Aucun message',
        'g-recaptcha-response': recaptchaToken, // EmailJS attend ce nom de paramètre
        timestamp: new Date().toLocaleString('fr-FR'),
      };

      // Envoi via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        setLastSubmissionTime();
        return true;
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }

    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const resetForm = useCallback(() => {
    setSubmitError(null);
    setSubmitSuccess(false);
  }, []);

  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submitForm,
    resetForm,
  };
};
