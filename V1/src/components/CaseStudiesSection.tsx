import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Séminaire de cohésion pour TechnoBourgogne",
      summary: "Un séminaire d'exception qui a renforcé la cohésion des équipes.",
      client: "TechnoBourgogne",
      image: "/placeholder.svg"
    },
    {
      title: "Convention produit pour InnovaCorp",
      summary: "Une convention qui a marqué les esprits grâce à sa créativité et son expertise technique.",
      client: "InnovaCorp",
      image: "/placeholder.svg"
    },
    {
      title: "Événement sur-mesure pour Excellence PME",
      summary: "Une expérience mémorable qui a su traduire les valeurs de l'entreprise.",
      client: "Excellence PME",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-futura-bold text-foreground mb-6">
            Nos études de cas
          </h2>
          <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto">
            Découvrez comment nous avons transformé les événements de nos clients en succès mémorables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-none animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-futura-bold text-foreground">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 font-montserrat">
                  {study.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary">{study.client}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;