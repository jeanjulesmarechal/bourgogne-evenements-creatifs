import React from 'react';
import { AlertTriangle, Calendar, GitBranch, Hash } from 'lucide-react';

interface StagingBannerProps {
  buildDate?: string;
  buildHash?: string;
  branch?: string;
}

const StagingBanner: React.FC<StagingBannerProps> = ({ 
  buildDate = new Date().toLocaleString('fr-FR'),
  buildHash = 'dev-build',
  branch = 'staging'
}) => {
  // Ne s'affiche que si on est sur un environnement de staging/preview
  const hostname = window.location.hostname;
  const isStaging = hostname === 'test.eclosion-evenements.fr' || 
                   hostname.includes('test.eclosion-evenements') ||
                   (hostname.includes('vercel.app') && !hostname.includes('bourgogne-evenements-creatifs-main-cfgteqsvd'));

  if (!isStaging) return null;

  return (
    <>
      {/* Barre rouge en haut de la page */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-red-600 z-[100]"></div>
      
      {/* Bannière avec infos */}
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-[100] m-4 bg-yellow-500 text-black p-3 rounded-lg shadow-lg border-2 border-yellow-600">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="font-bold text-sm">VERSION STAGING</span>
      </div>
      
      <div className="text-xs space-y-1">
        <div className="flex items-center gap-2">
          <Calendar className="h-3 w-3" />
          <span>Build: {buildDate}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <GitBranch className="h-3 w-3" />
          <span>Branche: {branch}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Hash className="h-3 w-3" />
          <span>Hash: {buildHash}</span>
        </div>
      </div>
    </>
  );
};

export default StagingBanner;
