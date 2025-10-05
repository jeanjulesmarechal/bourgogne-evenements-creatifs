import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReCaptchaProvider from "./components/ReCaptchaProvider";
import StagingBanner from "./components/StagingBanner";
import { useBuildInfo } from "./hooks/useBuildInfo";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";

const queryClient = new QueryClient();

const AppContent = () => {
  const buildInfo = useBuildInfo();
  
  return (
    <>
      <StagingBanner 
        buildDate={buildInfo.buildDate}
        buildHash={buildInfo.buildHash}
        branch={buildInfo.branch}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ReCaptchaProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </ReCaptchaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
