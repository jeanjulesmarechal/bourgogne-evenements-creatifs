import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Un séminaire d'exception qui a renforcé la cohésion de nos équipes. L'approche méthodique a créé une émulation extraordinaire.",
      author: "Marie Dubois",
      position: "DRH",
      company: "TechnoBourgogne",
      rating: 5
    },
    {
      quote: "Professionnalisme et créativité au rendez-vous. Notre convention produit a marqué les esprits grâce à leur expertise technique.",
      author: "Pierre Martin",
      position: "Directeur Commercial",
      company: "InnovaCorp",
      rating: 5
    },
    {
      quote: "Une approche sur-mesure remarquable. Ils ont su traduire nos valeurs d'entreprise en expérience mémorable.",
      author: "Sophie Leroux",
      position: "CEO",
      company: "Excellence PME",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto">
            Découvrez les retours de nos clients qui ont vécu une expérience événementielle d'exception
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-foreground/80 font-montserrat mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-montserrat font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-foreground/60 font-montserrat">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary font-montserrat font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;