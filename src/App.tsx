import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import Kilimanjaro from "./pages/Kilimanjaro";
import Booking from "./pages/Booking";
import ZanzibarIsland from "./pages/ZanzibarIsland";
import MidRangeSafari from "./pages/MidRangeSafari";
import BuildYourOwnSafari from "./pages/BuildYourOwnSafari";
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
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kilimanjaro" element={<Kilimanjaro />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/zanzibar-island" element={<ZanzibarIsland />} />
          <Route path="/mid-range-safari" element={<MidRangeSafari />} />
          <Route path="/build-your-own-safari" element={<BuildYourOwnSafari />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
