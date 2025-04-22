import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* ElevenLabs Convai Widget: fixed bottom right */}
        <div
          style={{
            position: "fixed",
            right: 0,
            bottom: 0,
            zIndex: 50,
            pointerEvents: "auto"
          }}
        >
          <elevenlabs-convai agent-id="aGDIPWEQyXk5ZFnlOvI6"></elevenlabs-convai>
        </div>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
