import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-8 tracking-tight">
          FILL YOUR LIFE<br />WITH ADVENTURE
        </h1>
        
        <Link to="/about">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-hero-text text-hero-text bg-transparent hover:bg-hero-text hover:text-hero-overlay text-lg px-10 py-6 rounded-full transition-all duration-300"
          >
            Learn More
          </Button>
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#next-section" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-text animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
