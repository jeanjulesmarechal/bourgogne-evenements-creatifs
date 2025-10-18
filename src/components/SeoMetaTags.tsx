import { useEffect } from 'react';
import { useBuildInfo } from '@/hooks/useBuildInfo';

/**
 * Composant qui gère les meta tags SEO de manière dynamique
 * Bloque l'indexation sur les environnements staging/preview
 */
const SeoMetaTags = () => {
  const buildInfo = useBuildInfo();
  
  useEffect(() => {
    // Détection si on est en staging/preview
    const isStaging = buildInfo.environment === 'staging' || 
                     buildInfo.environment === 'preview' ||
                     buildInfo.environment === 'development';
    
    if (isStaging) {
      // Bloquer complètement l'indexation sur staging
      
      // Meta robots : noindex, nofollow, noarchive, nosnippet
      let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, nofollow, noarchive, nosnippet');
      
      // Meta googlebot spécifique
      let metaGooglebot = document.querySelector('meta[name="googlebot"]');
      if (!metaGooglebot) {
        metaGooglebot = document.createElement('meta');
        metaGooglebot.setAttribute('name', 'googlebot');
        document.head.appendChild(metaGooglebot);
      }
      metaGooglebot.setAttribute('content', 'noindex, nofollow');
      
      // Empêcher la mise en cache
      let metaCache = document.querySelector('meta[http-equiv="cache-control"]');
      if (!metaCache) {
        metaCache = document.createElement('meta');
        metaCache.setAttribute('http-equiv', 'cache-control');
        document.head.appendChild(metaCache);
      }
      metaCache.setAttribute('content', 'no-cache, no-store, must-revalidate');
      
      // Supprimer les Open Graph tags sur staging (pour éviter les previews sociaux)
      document.querySelectorAll('meta[property^="og:"]').forEach(tag => {
        tag.remove();
      });
      
      // Supprimer les Twitter cards sur staging
      document.querySelectorAll('meta[name^="twitter:"]').forEach(tag => {
        tag.remove();
      });
      
      // Modifier le titre pour indiquer clairement que c'est du staging
      document.title = `[TEST] ${document.title}`;
      
      console.log('🔒 Mode STAGING : Indexation bloquée sur tous les moteurs de recherche');
    } else {
      // En production : s'assurer qu'il n'y a pas de tags noindex
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots && metaRobots.getAttribute('content')?.includes('noindex')) {
        metaRobots.remove();
      }
      
      console.log('✅ Mode PRODUCTION : Indexation autorisée');
    }
  }, [buildInfo.environment]);
  
  return null; // Ce composant ne rend rien visuellement
};

export default SeoMetaTags;

