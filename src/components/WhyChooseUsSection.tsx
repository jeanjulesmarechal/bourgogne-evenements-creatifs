import { Target, Sparkles, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

const WhyChooseUsSection = () => {
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
      icon: Star, // New icon
      title: "Créativité & Sur-Mesure",
      description: "Nous traduisons vos valeurs et vos objectifs en une expérience unique et mémorable, conçue spécialement pour vous.",
    }
  ];

  return (
    <section className="py-20 md:py-20 py-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-futura-bold text-foreground mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-foreground/80 font-montserrat max-w-2xl mx-auto">
              Les piliers qui font de nous votre partenaire privilégié pour des événements d'exception.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <advantage.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-futura-bold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-foreground/80 font-montserrat leading-relaxed">
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
            className="w-full px-6 py-4 flex items-center justify-between bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-montserrat font-futura-bold text-foreground">
              Pourquoi nous choisir ?
            </h2>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isOpen && (
            <div className="mt-4 space-y-6">
              <p className="text-foreground/80 font-montserrat text-center text-sm">
                Les piliers qui font de nous votre partenaire privilégié pour des événements d'exception.
              </p>
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <advantage.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-futura-bold text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-foreground/80 font-montserrat leading-relaxed text-sm">
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

export default WhyChooseUsSection;