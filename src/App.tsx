
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Add useEffect to inject the script and create the widget
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Create widget element
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'aGDIPWEQyXk5ZFnlOvI6');
    
    // Create container div
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.right = '0';
    container.style.bottom = '0';
    container.style.zIndex = '9999'; // Very high z-index
    container.style.pointerEvents = 'auto';
    
    // Append widget to container and container to body
    container.appendChild(widget);
    document.body.appendChild(container);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return (
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
