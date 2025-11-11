import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import kilimanjaroHero from "@/assets/kilimanjaro_hero.png";
import experience1 from "@/assets/experience_1.png";
import experience2 from "@/assets/experience_2.png";
import experience3 from "@/assets/experience_3.png";

const experiences = [
  {
    title: "6-Day Luxury Highlights of Tanzania Safari",
    image: experience1,
    link: "/luxury-highlights",
  },
  {
    title: "7 Day Mid-Range Epic Adventure (Stay on the Crater Rim)",
    image: experience2,
    link: "/midrange-epic",
  },
  {
    title: "8-Day Mid-Range Ndutu Migration Footsteps",
    image: experience3,
    link: "/ndutu-footsteps",
  },
];

const Kilimanjaro = () => {
  const scrollToExperiences = () => {
    document.getElementById("experiences-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation bgColor="--background" />
      
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kilimanjaroHero})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#3d2418] tracking-tight">
            Mount Kilimanjaro
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToExperiences}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#3d2418] animate-bounce hover:text-desert-gold transition-colors"
          aria-label="Scroll to experiences"
        >
          <ChevronDown size={40} />
        </button>
      </section>
      
      {/* Experiences Section */}
      <section id="experiences-section" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2418] text-center mb-16">
            Experiences
          </h2>
          
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Link
                key={index}
                to={experience.link}
                className="block group"
              >
                <div
                  className="relative h-64 md:h-80 w-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${experience.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  
                  <div className="relative h-full flex items-center px-8 md:px-12">
                    <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity shadow-lg flex-shrink-0">
                      <ChevronRight size={24} className="text-[#3d2418]" />
                    </button>
                    
                    <h3 className="font-playfair text-white text-xl md:text-2xl font-semibold ml-6 drop-shadow-lg">
                      {experience.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kilimanjaro;
