/**
 * Utilitaire pour gérer la navigation avec scroll vers les sections
 * Fonctionne depuis n'importe quelle page
 */

export const scrollToSection = (sectionId: string) => {
  // Si on n'est pas sur la page d'accueil, rediriger d'abord
  if (window.location.pathname !== '/') {
    window.location.href = `/#${sectionId}`;
    return;
  }

  // Sinon, scroll vers la section
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Hauteur de la navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

