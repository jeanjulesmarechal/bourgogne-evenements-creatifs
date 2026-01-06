import { useMemo } from 'react';

// Déclaration des variables globales injectées par Vite
declare const __BUILD_DATE__: string;

interface BuildInfo {
  buildDate: string;
  buildHash: string;
  branch: string;
  environment: string;
}

export const useBuildInfo = (): BuildInfo => {
  return useMemo(() => {
    // Récupération des variables d'environnement Vercel
    const vercelGitCommitSha = import.meta.env.VERCEL_GIT_COMMIT_SHA || 
                               import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA || 
                               'dev-build';
    const vercelGitCommitRef = import.meta.env.VERCEL_GIT_COMMIT_REF || 
                               import.meta.env.VITE_VERCEL_GIT_COMMIT_REF || 
                               'staging';
    const vercelEnv = import.meta.env.VERCEL_ENV || 
                      import.meta.env.VITE_VERCEL_ENV || 
                      'development';
    
    // Date de build (injectée par Vite ou Vercel)
    const buildDate = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ :
                      import.meta.env.VITE_BUILD_DATE || 
                      new Date().toLocaleString('fr-FR');
    
    // Détection de l'environnement basée sur l'URL
    const hostname = window.location.hostname;
    let environment = 'production';
    
    if (hostname.includes('localhost')) {
      environment = 'development';
    } else if (hostname === 'test.eclosion-evenements.fr' || hostname.includes('test.eclosion-evenements')) {
      // Domaine de test staging
      environment = 'staging';
    } else if (hostname.includes('vercel.app') && !hostname.includes('bourgogne-evenements-creatifs-main-cfgteqsvd')) {
      // Preview deployments Vercel
      environment = 'preview';
    } else if (hostname.includes('staging') || vercelEnv === 'preview') {
      // Autres environnements staging
      environment = 'staging';
    }
    
    return {
      buildDate,
      buildHash: vercelGitCommitSha.substring(0, 8), // 8 premiers caractères
      branch: vercelGitCommitRef,
      environment
    };
  }, []);
};
