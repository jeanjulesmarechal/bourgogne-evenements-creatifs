import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ReactNode } from 'react';

interface ReCaptchaProviderProps {
  children: ReactNode;
}

const ReCaptchaProvider = ({ children }: ReCaptchaProviderProps) => {
  // Clé publique reCAPTCHA (à remplacer par votre vraie clé)
  // Pour le développement local, utilisez une clé de test ou désactivez temporairement
  const recaptchaSiteKey = process.env.NODE_ENV === 'development' 
    ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // Clé de test pour localhost
    : 'votre_cle_production'; // Clé de production

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
      useRecaptchaNet={false}
      useEnterprise={false}
      container={{
        element: undefined,
        parameters: {
          badge: 'bottomright',
          theme: 'light',
        },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;
