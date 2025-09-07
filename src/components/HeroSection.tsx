
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-16 md:pt-0">
      {/* Background Logo - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center">
        <img 
          src="/LOGO.svg" 
          alt="ECLOSION Logo" 
          className="w-1/2 h-auto opacity-20" 
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-futura-bold mb-6 leading-tight md:whitespace-nowrap">
            <span style={{ color: '#000000' }}>Votre évènement</span>
            <br className="md:hidden" />
            <span style={{ color: '#611427' }}> est né</span>
          </h1>

          <p className="text-xl md:text-2xl font-montserrat mb-12 text-foreground/80 max-w-2xl mx-auto">
            L'excellence événementielle, sur mesure
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="text-white font-montserrat font-semibold text-lg px-10 py-4 animate-scale-in shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#611427' }}
              >
                Prendre contact
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
