import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSectionV2 = () => {
  return (
    <section id="accueil" className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-16 md:pt-0">
      {/* Background Image - Hidden on mobile - Fond blanc conservé */}
      <div className="absolute inset-0 z-0 hidden md:block bg-white">
        <img 
          src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-[#611427]/30"></div>
      </div>
      
      {/* Overlay rouge bordeaux pour le reste de la section */}
      <div className="absolute inset-0 z-0 bg-[#611427] md:bg-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center" style={{ mixBlendMode: 'normal' }}>
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-futura-bold mb-6 leading-tight md:whitespace-nowrap text-white">
            <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Votre évènement</span>
            <br className="md:hidden" />
            <span style={{ color: '#611427' }}> est né</span>
          </h1>

          <p className="text-xl md:text-2xl font-montserrat font-light mb-12 text-white/90 max-w-2xl mx-auto">
            L'excellence événementielle, sur mesure
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="md:text-white md:bg-[#611427] text-[#611427] bg-white/90 backdrop-blur-md border border-white/20 md:border-none font-montserrat font-semibold text-lg px-10 py-4 animate-scale-in shadow-lg hover:shadow-xl transition-all duration-300 md:hover:bg-[#611427]/90 hover:bg-white"
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

export default HeroSectionV2;

