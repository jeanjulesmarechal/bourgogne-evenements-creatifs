import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="container mx-auto px-4">

        <div className="border-t border-border pt-12 grid md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="col-span-1">
            <h3 className="text-xl font-montserrat font-futura-bold mb-4">
              ECLOSION
            </h3>
            <p className="font-montserrat text-foreground/80 text-sm leading-relaxed">
              L'agence événementielle qui révèle l'excellence de votre entreprise avec méthode et élégance.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Plan du site</h4>
            <ul className="space-y-2 font-montserrat text-sm">
              <li><a href="#accueil" className="text-foreground/80 hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#realisations" className="text-foreground/80 hover:text-primary transition-colors">Réalisations</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact et réseaux */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Contact</h4>
            <div className="space-y-2 font-montserrat text-sm text-foreground/80">
              <p>📞 <a href="tel:+33668599846" className="hover:text-primary transition-colors">+33 6 68 59 98 46</a></p>
              <p>✉️ <a href="mailto:contact@eclosion-evenements.fr" className="hover:text-primary transition-colors">contact@eclosion-evenements.fr</a></p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/eclosion-evenement/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors font-montserrat">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/eclosionevenement/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors font-montserrat">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-montserrat text-sm text-foreground/60">
            © 2025 ECLOSION. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-montserrat text-sm text-foreground/60 hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="font-montserrat text-sm text-foreground/60 hover:text-primary transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;