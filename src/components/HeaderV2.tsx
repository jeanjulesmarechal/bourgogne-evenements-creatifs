import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "@/utils/navigation";
import VersionToggle from "@/components/VersionToggle";

interface HeaderV2Props {
  isV2?: boolean;
  onVersionToggle?: () => void;
}

const HeaderV2 = ({ isV2 = false, onVersionToggle }: HeaderV2Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  // Déterminer l'index actif basé sur la route
  useEffect(() => {
    const checkActiveSection = () => {
      if (location.pathname === '/contact') {
        setActiveIndex(2);
      } else if (location.pathname === '/' && (window.location.hash === '#services' || document.getElementById('services'))) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    };
    
    checkActiveSection();
    
    // Vérifier aussi au scroll pour détecter la section visible
    const handleScroll = () => {
      if (location.pathname === '/') {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          const rect = servicesSection.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveIndex(1);
          } else {
            setActiveIndex(0);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Animer l'indicateur vers l'élément actif/survolé
  useEffect(() => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex;
    const link = linkRefs.current[index];
    const indicator = indicatorRef.current;
    const nav = navRef.current;

    if (link && indicator && nav) {
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      
      indicator.style.width = `${linkRect.width}px`;
      indicator.style.height = `${linkRect.height}px`;
      indicator.style.left = `${linkRect.left - navRect.left}px`;
      indicator.style.top = `${linkRect.top - navRect.top}px`;
    }
  }, [activeIndex, hoverIndex]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#611427]/90 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link to="/" className="relative" onClick={scrollToTop}>
            {/* Logo complet - visible au début */}
            <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <img 
                src="/LOGO.svg" 
                alt="ECLOSION" 
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity brightness-0 invert"
              />
            </div>
            
            {/* Roue - visible après scroll */}
            <div className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img 
                src="/ROUE.svg" 
                alt="ECLOSION" 
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity brightness-0 invert"
              />
            </div>
          </Link>
          </div>

          {/* Navigation desktop */}
          <nav 
            ref={navRef}
            className="hidden md:flex items-center space-x-4 relative"
          >
          {/* Indicateur glassmorphism animé */}
          <div
            ref={indicatorRef}
            className="absolute rounded-lg backdrop-blur-md transition-all duration-300 ease-out pointer-events-none"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          />
          
          <Link 
            to="/" 
            ref={(el) => { linkRefs.current[0] = el; }}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            className="text-white hover:text-white/80 transition-colors font-montserrat relative z-10 px-3 py-2"
          >
            Accueil
          </Link>
          <a 
            href="#services" 
            ref={(el) => { linkRefs.current[1] = el; }}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-white hover:text-white/80 transition-colors font-montserrat cursor-pointer relative z-10 px-3 py-2"
          >
            Notre Expertise
          </a>
          <Link 
            to="/contact" 
            ref={(el) => { linkRefs.current[2] = el; }}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
            className="text-white hover:text-white/80 transition-colors font-montserrat relative z-10 px-3 py-2"
          >
            Contact
          </Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-white hover:bg-white/90 text-[#611427] font-montserrat font-semibold">
                Prendre contact
              </Button>
            </Link>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Version Toggle - En bas de la navbar */}
        {onVersionToggle && (
          <div className="flex justify-center mt-2 pb-1">
            <VersionToggle isV2={isV2} onToggle={onVersionToggle} variant="inline" darkMode={true} />
          </div>
        )}

        {/* Navigation mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#611427] border-t border-white/20 md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-white hover:text-white/80 transition-colors font-montserrat">
                Accueil
              </Link>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-white hover:text-white/80 transition-colors font-montserrat cursor-pointer"
              >
                Notre Expertise
              </a>
              <Link to="/contact" className="text-white hover:text-white/80 transition-colors font-montserrat">
                Contact
              </Link>
              <Link to="/contact">
                <Button className="bg-white hover:bg-white/90 text-[#611427] font-montserrat font-semibold w-full">
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

export default HeaderV2;

