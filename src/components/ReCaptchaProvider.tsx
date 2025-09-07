import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ReactNode } from 'react';

interface ReCaptchaProviderProps {
  children: ReactNode;
}

const ReCaptchaProvider = ({ children }: ReCaptchaProviderProps) => {
  // Clé publique reCAPTCHA - utilise la variable d'environnement ou une clé de test
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

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
