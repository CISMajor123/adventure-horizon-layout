import { ChevronDown, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import zanzibarSunsetDhow from "@/assets/zanzibar-sunset-dhow.jpg";
import zanzibarBeachPier from "@/assets/zanzibar-beach-pier.jpg";
import zanzibarPalmTrees from "@/assets/zanzibar-palm-trees.jpg";
import zanzibarSandbank from "@/assets/zanzibar-sandbank.jpg";
import zanzibarRockyCoast from "@/assets/zanzibar-rocky-coast.jpg";
import zanzibarPalmSky from "@/assets/zanzibar-palm-sky.jpg";

const experiences = [
  {
    title: "Zanzibar 2 Days / 1 Night",
    subtitle: "Package",
    image: zanzibarSunsetDhow,
    link: "/zanzibar-2-days",
    textColor: "text-black",
  },
  {
    title: "Zanzibar 3 Days/ 2 Nights",
    subtitle: "Package",
    image: zanzibarBeachPier,
    link: "/zanzibar-3-days",
    textColor: "text-white",
  },
  {
    title: "Zanzibar 4 Days/3 Nights",
    subtitle: "Package",
    image: zanzibarPalmTrees,
    link: "/zanzibar-4-days",
    textColor: "text-white",
  },
  {
    title: "Zanzibar 5 Days/ 4 Nights",
    subtitle: "Package",
    image: zanzibarSandbank,
    link: "/zanzibar-5-days",
    textColor: "text-black",
  },
  {
    title: "Zanzibar 6 Days/ 5",
    subtitle: "Nights",
    image: zanzibarRockyCoast,
    link: "/zanzibar-6-days",
    textColor: "text-white",
  },
  {
    title: "Zanzibar 7 Days/6 Nights",
    subtitle: "Package",
    image: zanzibarPalmSky,
    link: "/zanzibar-7-days",
    textColor: "text-white",
  },
];

const ZanzibarIsland = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-start justify-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${zanzibarBeach})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Hero Title */}
        <div className="relative z-10 text-center px-6">
          <h1 
            className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Zanzibar Island
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#experiences" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        >
          <ChevronDown size={40} strokeWidth={2} />
        </a>
      </section>

      {/* Experiences Header Band */}
      <section 
        id="experiences"
        className="relative w-full overflow-hidden"
        style={{ 
          backgroundColor: '#e8e0cd',
          minHeight: '300px'
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${zanzibarBeach})` }}
        />
        <div className="relative z-10 h-full flex items-center px-8 md:px-16 py-12">
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Experiences
          </h2>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="w-full">
        {experiences.map((experience, index) => (
          <a
            key={index}
            href={experience.link}
            className="block relative w-full overflow-hidden transition-all duration-300 hover:scale-[1.01]"
            style={{ minHeight: '300px' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${experience.image})` }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="relative z-10 h-full flex items-center px-8 md:px-16 py-20">
              {/* Circle Button */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg mr-6 md:mr-8">
                <ChevronRight className="text-black" size={28} strokeWidth={2} />
              </div>
              
              {/* Text */}
              <div className={`${experience.textColor} font-bold`}>
                <div className="text-2xl md:text-3xl lg:text-4xl leading-tight" style={{ textShadow: experience.textColor === "text-white" ? '2px 2px 4px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(255,255,255,0.5)' }}>
                  {experience.title}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl leading-tight" style={{ textShadow: experience.textColor === "text-white" ? '2px 2px 4px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(255,255,255,0.5)' }}>
                  {experience.subtitle}
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default ZanzibarIsland;
