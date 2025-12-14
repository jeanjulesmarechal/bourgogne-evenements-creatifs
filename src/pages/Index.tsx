import { useState } from "react";
import Header from "@/components/Header";
import HeaderV2 from "@/components/HeaderV2";
import HeroSection from "@/components/HeroSection";
import HeroSectionV2 from "@/components/HeroSectionV2";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WhyChooseUsSectionV2 from "@/components/WhyChooseUsSectionV2";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExpertiseSectionV2 from "@/components/ExpertiseSectionV2";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import MissionSection from "@/components/MissionSection";
import MissionSectionV2 from "@/components/MissionSectionV2";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import ContactSectionV2 from "@/components/ContactSectionV2";
import Footer from "@/components/Footer";
import FooterV2 from "@/components/FooterV2";
import DynamicBackground from "@/components/DynamicBackground";
import WhiteGradientBackground from "@/components/WhiteGradientBackground";
import VersionToggle from "@/components/VersionToggle";

const Index = () => {
  const [isV2, setIsV2] = useState(false);

  return (
    <div className={`min-h-screen font-montserrat relative ${isV2 ? 'bg-[#611427]' : ''}`}>
      {isV2 ? <WhiteGradientBackground /> : <DynamicBackground />}
      {isV2 ? (
        <HeaderV2 isV2={isV2} onVersionToggle={() => setIsV2(!isV2)} />
      ) : (
        <Header isV2={isV2} onVersionToggle={() => setIsV2(!isV2)} />
      )}
      {isV2 ? <HeroSectionV2 /> : <HeroSection />}
      {isV2 ? <WhyChooseUsSectionV2 /> : <WhyChooseUsSection />}
      {isV2 ? <ExpertiseSectionV2 /> : <ExpertiseSection />}
      {/* <CaseStudiesSection /> */}
      {isV2 ? <MissionSectionV2 /> : <MissionSection />}
      {/* <PartnersSection /> */}
      {isV2 ? <ContactSectionV2 /> : <ContactSection />}
      {isV2 ? <FooterV2 /> : <Footer />}
    </div>
  );
};

export default Index;