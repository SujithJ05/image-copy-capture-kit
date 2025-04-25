
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScriptWritingPage from "./pages/services/ScriptWriting";
import GraphicDesigningPage from "./pages/services/GraphicDesigning";
import VideoEditingPage from "./pages/services/VideoEditing";
import WebsiteDesignPage from "./pages/services/WebsiteDesign";
import SmoExpertPage from "./pages/services/SmoExpert";
import GoogleAdsPage from "./pages/services/GoogleAds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/script-writing" element={<ScriptWritingPage />} />
          <Route path="/services/graphic-designing" element={<GraphicDesigningPage />} />
          <Route path="/services/video-editing" element={<VideoEditingPage />} />
          <Route path="/services/website-design" element={<WebsiteDesignPage />} />
          <Route path="/services/smo-expert" element={<SmoExpertPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
