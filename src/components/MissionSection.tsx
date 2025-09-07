import { ChevronDown } from "lucide-react";
import { useState } from "react";

const MissionSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="mission" className="relative py-32 md:py-32 py-4 bg-secondary md:bg-secondary bg-white">
      {/* Desktop Background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src="/placeholder.svg" alt="Notre mission" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0" style={{ backgroundColor: '#611427' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Desktop Version */}
        <div className="hidden md:block max-w-3xl mx-auto">
          <h2 className="mt-2 text-4xl md:text-5xl font-montserrat font-futura-bold text-white mb-6">
            L'Élégance Méthodique
          </h2>
          <p className="text-xl text-primary-foreground/90 font-montserrat">
            Nous croyons qu'un événement réussi est la somme d'une stratégie rigoureuse et d'une créativité sans compromis. C'est cette dualité qui nous permet de concevoir des expériences mémorables et efficaces.
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-montserrat font-futura-bold text-foreground">
              L'Élégance Méthodique
            </h2>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isOpen && (
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-foreground/80 font-montserrat text-sm">
                Nous croyons qu'un événement réussi est la somme d'une stratégie rigoureuse et d'une créativité sans compromis. C'est cette dualité qui nous permet de concevoir des expériences mémorables et efficaces.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;