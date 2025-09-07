import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useEmailJS } from "../hooks/useEmailJS";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    honeypot: '', // Champ piège à spam
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const { isSubmitting, submitError, submitSuccess, submitForm, resetForm } = useEmailJS();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // if (!executeRecaptcha) {
    //   console.error('reCAPTCHA non disponible');
    //   return;
    // }

    try {
      // const recaptchaToken = await executeRecaptcha('contact_form');
      const success = await submitForm(formData);
      
      if (success) {
        setIsSubmitted(true);
        // Reset du formulaire après succès
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          message: '',
          honeypot: '',
        });
      }
    } catch (error) {
      console.error('Erreur reCAPTCHA:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-montserrat font-futura-bold text-foreground mb-6 animate-fade-in">
              <span style={{ color: '#000000' }}>Parlons de votre </span>
              <span style={{ color: '#611427' }}>projet</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-montserrat mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Transformons ensemble votre vision en expérience d'exception
            </p>
            <div className="w-24 h-1 bg-primary mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      {/* Formulaire et Informations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Formulaire de contact */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-montserrat font-futura-bold text-foreground mb-4">
                  Créons votre événement
                </h2>
                <p className="text-lg text-foreground/70 font-montserrat">
                  Partagez-nous vos idées, nous les concrétiserons avec excellence
                </p>
              </div>

              {!isSubmitted ? (
                <Card className="bg-card border-border shadow-xl animate-scale-in">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardTitle className="text-2xl font-montserrat font-futura-bold text-foreground flex items-center">
                      <Send className="w-6 h-6 mr-3 text-primary" />
                      Demande personnalisée
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    {/* Champ piège à spam (caché) */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => handleInputChange('honeypot', e.target.value)}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    {/* Message d'erreur */}
                    {submitError && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                        <p className="text-red-700 font-montserrat">{submitError}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-foreground font-montserrat font-semibold">Prénom *</Label>
                          <Input 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="border-border focus:ring-primary font-montserrat mt-2" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-foreground font-montserrat font-semibold">Nom *</Label>
                          <Input 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="border-border focus:ring-primary font-montserrat mt-2" 
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-foreground font-montserrat font-semibold">Société *</Label>
                        <Input 
                          id="company" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="border-border focus:ring-primary font-montserrat mt-2" 
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-foreground font-montserrat font-semibold">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="border-border focus:ring-primary font-montserrat mt-2" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-foreground font-montserrat font-semibold">Téléphone</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="border-border focus:ring-primary font-montserrat mt-2" 
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="projectType" className="text-foreground font-montserrat font-semibold">Type de projet *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)} required>
                          <SelectTrigger className="border-border focus:ring-primary font-montserrat mt-2">
                            <SelectValue placeholder="Sélectionnez votre besoin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="team-building">Team-building</SelectItem>
                            <SelectItem value="seminaire">Séminaire</SelectItem>
                            <SelectItem value="convention">Convention</SelectItem>
                            <SelectItem value="lancement">Lancement produit</SelectItem>
                            <SelectItem value="formation">Formation</SelectItem>
                            <SelectItem value="conference">Conférence</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="budget" className="text-foreground font-montserrat font-semibold">Budget estimé</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="border-border focus:ring-primary font-montserrat mt-2">
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<5k">Moins de 5 000€</SelectItem>
                            <SelectItem value="5k-10k">5 000€ - 10 000€</SelectItem>
                            <SelectItem value="10k-25k">10 000€ - 25 000€</SelectItem>
                            <SelectItem value="25k-50k">25 000€ - 50 000€</SelectItem>
                            <SelectItem value=">50k">Plus de 50 000€</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground font-montserrat font-semibold">Décrivez votre projet</Label>
                        <Textarea 
                          id="message" 
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Parlez-nous de votre événement : objectifs, nombre de participants, date souhaitée, contraintes particulières..."
                          className="border-border focus:ring-primary font-montserrat mt-2 min-h-[140px]"
                        />
                      </div>

                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg py-4 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: '#611427' }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Envoyer ma demande
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card border-border shadow-xl animate-scale-in">
                  <CardContent className="p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-montserrat font-futura-bold text-foreground mb-4">
                      Demande envoyée !
                    </h3>
                    <p className="text-foreground/70 font-montserrat mb-6">
                      Merci pour votre confiance. Notre équipe vous contactera dans les plus brefs délais.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        resetForm();
                      }}
                      variant="outline"
                      className="font-montserrat"
                    >
                      Nouvelle demande
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-montserrat font-futura-bold text-foreground mb-4">
                  Nos coordonnées
                </h2>
                <p className="text-lg text-foreground/70 font-montserrat">
                  Plusieurs façons de nous joindre
                </p>
              </div>

              <div className="space-y-6">

                <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-futura-bold text-lg mb-2 text-foreground">Téléphone</h4>
                        <p className="font-montserrat text-foreground/80">+33 6 68 59 98 46</p>
                        <p className="font-montserrat text-sm text-foreground/60 mt-1">Lun - Ven : 9h00 - 18h00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-futura-bold text-lg mb-2 text-foreground">Email</h4>
                        <p className="font-montserrat text-foreground/80">contact@eclosion-events.fr</p>
                        <p className="font-montserrat text-sm text-foreground/60 mt-1">Réponse sous 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-futura-bold text-lg mb-2 text-foreground">Horaires</h4>
                        <p className="font-montserrat text-foreground/80">
                          Lun - Ven : 9h00 - 18h00<br />
                          Sam : Sur rendez-vous<br />
                          Dim : Fermé
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Audit gratuit */}
              <Card className="bg-gradient-to-r from-primary to-primary/90 border-primary shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-montserrat font-futura-bold mb-4 text-primary-foreground">
                    Audit gratuit
                  </h3>
                  <p className="font-montserrat text-primary-foreground/90 mb-6">
                    Bénéficiez d'un diagnostic personnalisé de vos besoins événementiels. 
                    Notre équipe vous rencontre pour comprendre vos enjeux et vous proposer 
                    des solutions sur-mesure.
                  </p>
                  <a href="mailto:contact@eclosion-events.fr?subject=Demande d'audit gratuit&body=Bonjour,%0D%0A%0D%0AJe souhaite bénéficier d'un audit gratuit pour mes besoins événementiels.%0D%0A%0D%0AMerci de me recontacter.%0D%0A%0D%0ACordialement,">
                    <Button 
                      className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-montserrat font-semibold px-8 py-3"
                    >
                      Prendre rendez-vous
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ ou Processus */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-futura-bold text-foreground mb-8">
              Notre processus
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-futura-bold text-primary-foreground">1</span>
                </div>
                <h3 className="font-montserrat font-futura-bold text-xl mb-2 text-foreground">Échange</h3>
                <p className="font-montserrat text-foreground/70">
                  Nous écoutons vos besoins et analysons votre projet
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-futura-bold text-primary-foreground">2</span>
                </div>
                <h3 className="font-montserrat font-futura-bold text-xl mb-2 text-foreground">Conception</h3>
                <p className="font-montserrat text-foreground/70">
                  Nous créons une solution sur-mesure adaptée à vos objectifs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-futura-bold text-primary-foreground">3</span>
                </div>
                <h3 className="font-montserrat font-futura-bold text-xl mb-2 text-foreground">Réalisation</h3>
                <p className="font-montserrat text-foreground/70">
                  Nous orchestrons votre événement avec excellence opérationnelle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
