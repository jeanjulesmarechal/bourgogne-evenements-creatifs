
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/navigation";
import VersionToggle from "@/components/VersionToggle";

interface HeaderProps {
  isV2?: boolean;
  onVersionToggle?: () => void;
}

const Header = ({ isV2 = false, onVersionToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link to="/" className="relative" onClick={scrollToTop}>
            {/* Logo complet - visible au début */}
            <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <img 
                src="/LOGO.svg" 
                alt="ECLOSION" 
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
            
            {/* Roue - visible après scroll */}
            <div className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img 
                src="/ROUE.svg" 
                alt="ECLOSION" 
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-montserrat">
            Accueil
          </Link>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-foreground hover:text-primary transition-colors font-montserrat cursor-pointer"
          >
            Notre Expertise
          </a>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-montserrat">
            Contact
          </Link>
        </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-foreground hover:bg-foreground/90 text-background font-montserrat font-semibold">
                Prendre contact
              </Button>
            </Link>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Version Toggle - En bas de la navbar */}
        {onVersionToggle && (
          <div className="flex justify-center mt-2 pb-1">
            <VersionToggle isV2={isV2} onToggle={onVersionToggle} variant="inline" darkMode={false} />
          </div>
        )}

        {/* Navigation mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-montserrat">
                Accueil
              </Link>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-foreground hover:text-primary transition-colors font-montserrat cursor-pointer"
              >
                Notre Expertise
              </a>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-montserrat">
                Contact
              </Link>
              <Link to="/contact">
                <Button className="bg-foreground hover:bg-foreground/90 text-background font-montserrat font-semibold w-full">
                  Prendre contact
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
