import { ChevronDown } from "lucide-react";
import { useState } from "react";

const MissionSectionV2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="mission" className="relative py-32 md:py-32 py-4 bg-[#611427]">
      {/* Desktop Background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src="/placeholder.svg" alt="Notre mission" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-[#611427]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Desktop Version */}
        <div className="hidden md:block max-w-3xl mx-auto">
          <h2 className="mt-2 text-4xl md:text-5xl font-montserrat font-futura-bold text-white mb-6">
            L'Élégance Méthodique
          </h2>
          <p className="text-xl text-white/90 font-montserrat">
            Nous croyons qu'un événement réussi est la somme d'une stratégie rigoureuse et d'une créativité sans compromis. C'est cette dualité qui nous permet de concevoir des expériences mémorables et efficaces.
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 flex items-center justify-between rounded-lg transition-colors backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(97, 20, 39, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <h2 className="text-xl font-montserrat font-futura-bold text-white">
              L'Élégance Méthodique
            </h2>
            <ChevronDown 
              className={`w-5 h-5 text-white transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isOpen && (
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-white/90 font-montserrat text-sm">
                Nous croyons qu'un événement réussi est la somme d'une stratégie rigoureuse et d'une créativité sans compromis. C'est cette dualité qui nous permet de concevoir des expériences mémorables et efficaces.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionSectionV2;

