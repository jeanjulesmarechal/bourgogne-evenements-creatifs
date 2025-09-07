import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ExpertiseSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Team-building Premium",
      description: "Expérience immersive sur-mesure",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Séminaire d'Entreprise",
      description: "Réunions stratégiques d'exception",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Convention Corporate",
      description: "Événements d'envergure professionnels",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-20 py-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-futura-bold text-foreground mb-6">
              Notre Expertise
            </h2>
            <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto">
              Des formats sur-mesure pour révéler l'excellence de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-none animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat font-futura-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 font-montserrat">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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
              Notre Expertise
            </h2>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isOpen && (
            <div className="mt-4 space-y-4">
              <p className="text-foreground/80 font-montserrat text-center text-sm">
                Des formats sur-mesure pour révéler l'excellence de votre entreprise.
              </p>
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="relative overflow-hidden h-32">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-montserrat font-futura-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 font-montserrat text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;