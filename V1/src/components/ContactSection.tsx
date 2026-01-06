import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-20 py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-futura-bold text-foreground mb-6">
            Construisons votre projet ensemble
          </h2>
          <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto">
            Partagez-nous votre vision, nous la transformerons en expérience d'exception
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <Card className="bg-card border-border shadow-lg animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat font-futura-bold text-foreground">
                Demander un devis personnalisé
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground font-montserrat">Prénom *</Label>
                  <Input id="firstName" className="border-border focus:ring-primary font-montserrat" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground font-montserrat">Nom *</Label>
                  <Input id="lastName" className="border-border focus:ring-primary font-montserrat" />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-foreground font-montserrat">Société *</Label>
                <Input id="company" className="border-border focus:ring-primary font-montserrat" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground font-montserrat">Email *</Label>
                  <Input id="email" type="email" className="border-border focus:ring-primary font-montserrat" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-montserrat">Téléphone</Label>
                  <Input id="phone" type="tel" className="border-border focus:ring-primary font-montserrat" />
                </div>
              </div>

              <div>
                <Label htmlFor="projectType" className="text-foreground font-montserrat">Type de projet *</Label>
                <Select>
                  <SelectTrigger className="border-border focus:ring-primary font-montserrat">
                    <SelectValue placeholder="Sélectionnez votre besoin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team-building">Team-building</SelectItem>
                    <SelectItem value="seminaire">Séminaire</SelectItem>
                    <SelectItem value="convention">Convention</SelectItem>
                    <SelectItem value="lancement">Lancement produit</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-montserrat">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez-nous votre projet, vos objectifs et vos contraintes..."
                  className="border-border focus:ring-primary font-montserrat min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg py-3">
                Envoyer ma demande
              </Button>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-futura-bold mb-6 text-foreground">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-4">
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold mb-2 text-foreground">Téléphone</h4>
                      <p className="font-montserrat text-foreground/80"><a href="tel:+33668599846" className="hover:text-primary transition-colors">+33 6 68 59 98 46</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold mb-2 text-foreground">Email</h4>
                      <p className="font-montserrat text-foreground/80"><a href="mailto:contact@eclosion-evenements.fr" className="hover:text-primary transition-colors">contact@eclosion-evenements.fr</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold mb-2 text-foreground">Horaires</h4>
                      <p className="font-montserrat text-foreground/80">
                        Lun - Ven : 9h00 - 18h00<br />
                        Sam : Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-futura-bold mb-4 text-primary-foreground">
                  Audit gratuit
                </h3>
                <p className="font-montserrat text-primary-foreground/90 mb-6">
                  Bénéficiez d'un diagnostic personnalisé de vos besoins événementiels. 
                  Notre équipe vous rencontre pour comprendre vos enjeux et vous proposer 
                  des solutions sur-mesure.
                </p>
                <a href="mailto:contact@eclosion-evenements.fr?subject=Demande d'audit gratuit&body=Bonjour,%0D%0A%0D%0AJe souhaite bénéficier d'un audit gratuit pour mes besoins événementiels.%0D%0A%0D%0AMerci de me recontacter.%0D%0A%0D%0ACordialement,">
                  <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-montserrat font-semibold">
                    Prendre rendez-vous
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;