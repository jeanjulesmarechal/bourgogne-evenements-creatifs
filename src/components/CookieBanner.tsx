import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X, Settings, Cookie } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('eclosion-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(onlyNecessary);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('eclosion-cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('eclosion-cookie-consent-date', new Date().toISOString());
    
    // Initialiser Google Analytics si accepté
    if (prefs.analytics) {
      initializeAnalytics();
    }
    
    setIsVisible(false);
    setShowSettings(false);
  };

  const initializeAnalytics = () => {
    // Script Google Analytics (à remplacer par votre ID de tracking)
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    // Déclaration des types pour Google Analytics
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-2xl">
        <CardContent className="p-6">
          {!showSettings ? (
            // Vue principale du banner
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Gestion des cookies</h3>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
                cookies accepter.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1"
                >
                  Accepter tout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleRejectAll}
                  className="flex-1"
                >
                  Refuser tout
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Personnaliser
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                En continuant à naviguer, vous acceptez notre utilisation des cookies. 
                Consultez notre{" "}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </a>{" "}
                pour plus d'informations.
              </p>
            </div>
          ) : (
            // Vue des paramètres détaillés
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Paramètres des cookies</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Cookies nécessaires */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Cookies nécessaires</Label>
                    <p className="text-xs text-muted-foreground">
                      Essentiels au fonctionnement du site (toujours activés)
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                {/* Cookies analytiques */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Cookies analytiques</Label>
                    <p className="text-xs text-muted-foreground">
                      Nous aident à comprendre comment vous utilisez notre site
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference('analytics', checked)}
                  />
                </div>

                {/* Cookies marketing */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Cookies marketing</Label>
                    <p className="text-xs text-muted-foreground">
                      Utilisés pour vous proposer des publicités personnalisées
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => updatePreference('marketing', checked)}
                  />
                </div>

                {/* Cookies fonctionnels */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Cookies fonctionnels</Label>
                    <p className="text-xs text-muted-foreground">
                      Améliorent votre expérience utilisateur
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.functional}
                    onCheckedChange={(checked) => updatePreference('functional', checked)}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={handleSavePreferences}
                  className="flex-1"
                >
                  Sauvegarder mes préférences
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowSettings(false)}
                  className="flex-1"
                >
                  Annuler
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;
