const PartnersSection = () => {
  const partners = [
    "Château de Pommard",
    "Domaine Chandon",
    "Traiteur Étoilé Dijon",
    "CCI Côte-d'Or",
    "Hôtel des Ducs",
    "AVS Technique"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-futura-bold text-foreground">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg font-semibold text-gray-400 hover:text-foreground transition-colors duration-300">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;