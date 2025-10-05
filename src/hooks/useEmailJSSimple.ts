import { useState, useCallback } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message?: string;
}

interface UseEmailJSSimpleReturn {
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
  submitForm: (data: FormData) => Promise<boolean>;
  resetForm: () => void;
}

export const useEmailJSSimple = (): UseEmailJSSimpleReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation simple
  const validateFormData = (data: FormData): string | null => {
    if (!data.firstName?.trim()) return 'Le prénom est requis';
    if (!data.lastName?.trim()) return 'Le nom est requis';
    if (!data.company?.trim()) return 'La société est requise';
    if (!data.email?.trim()) return 'L\'email est requis';
    if (!data.projectType?.trim()) return 'Le type de projet est requis';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return 'Format d\'email invalide';
    }

    return null;
  };

  const submitForm = useCallback(async (data: FormData): Promise<boolean> => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const validationError = validateFormData(data);
      if (validationError) {
        setSubmitError(validationError);
        return false;
      }

      // Simulation d'envoi (pour le développement)
      console.log('Données du formulaire:', data);
      
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      return true;

    } catch (error) {
      console.error('Erreur:', error);
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






