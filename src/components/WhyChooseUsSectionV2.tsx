import { Target, Sparkles, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

const WhyChooseUsSectionV2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const advantages = [
    {
      icon: Target,
      title: "Excellence Opérationnelle",
      description: "Une maîtrise parfaite de la logistique événementielle avec des processus éprouvés et une attention aux moindres détails pour garantir le succès.",
    },
    {
      icon: Sparkles,
      title: "Studio-Conseil Interne",
      description: "Notre équipe pluridisciplinaire vous accompagne de la stratégie à la coordination pour un événement maîtrisé de A à Z.",
    },
    {
      icon: Star,
      title: "Créativité & Sur-Mesure",
      description: "Nous traduisons vos valeurs et vos objectifs en une expérience unique et mémorable, conçue spécialement pour vous.",
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-20 md:py-20 py-4 bg-[#611427]">
      <div className="container mx-auto px-4">
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-futura-bold text-white mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-white/90 font-montserrat max-w-2xl mx-auto">
              Les piliers qui font de nous votre partenaire privilégié pour des événements d'exception.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center animate-scale-in p-6 rounded-lg transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="flex justify-center mb-4">
                  <advantage.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-futura-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                  {advantage.title}
                </h3>
                <p className="text-white/90 font-montserrat leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)' }}>
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
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
              Pourquoi nous choisir ?
            </h2>
            <ChevronDown 
              className={`w-5 h-5 text-white transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isOpen && (
            <div className="mt-4 space-y-6">
              <p className="text-white/90 font-montserrat text-center text-sm">
                Les piliers qui font de nous votre partenaire privilégié pour des événements d'exception.
              </p>
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <advantage.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-montserrat font-futura-bold text-white mb-2" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.3)' }}>
                    {advantage.title}
                  </h3>
                  <p className="text-white/90 font-montserrat leading-relaxed text-sm" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}>
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSectionV2;

