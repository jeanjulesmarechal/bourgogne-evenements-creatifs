import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import MissionSection from "@/components/MissionSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <ExpertiseSection />
      {/* <CaseStudiesSection /> */}
      <MissionSection />
      {/* <PartnersSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;