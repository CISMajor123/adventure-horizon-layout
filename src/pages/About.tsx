import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Load CommonNinja script for Google Reviews widget
    const script = document.createElement('script');
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="bg-white border border-foreground/20 rounded-lg p-10 md:p-12 shadow-sm h-full flex flex-col justify-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-destinations-title mb-8 italic">
                What We Do
              </h1>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-base md:text-lg">
                  At Grant Expedition, we specialize in creating unforgettable safari experiences across Tanzania's most stunning landscapes. From the vast plains of Serengeti to the majestic Mount Kilimanjaro, our expertly crafted tours connect you with nature, culture, and adventure. We deliver personalized itineraries blending luxury, comfort, and authenticity.
                </p>
                
                <p className="text-base md:text-lg">
                  Whether you are seeking thrilling wildlife encounters, breathtaking natural wonders, or immersive cultural experiences, Grant Expedition is your trusted partner in discovering the best of Tanzania.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/destinations">
                  <Button 
                    className="bg-destinations-title hover:bg-destinations-title/90 text-white px-8 py-6 text-base rounded-md transition-all duration-300"
                    aria-label="Plan Your Trip — go to Destinations"
                  >
                    Plan Your Trip
                  </Button>
                </Link>
                <a href="https://eu.docs.wps.com/module/common/loadPlatform/?sid=sILb_5f2KAfjsqMgG&v=v2" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="bg-destinations-title hover:bg-destinations-title/90 text-white px-8 py-6 text-base rounded-md transition-all duration-300"
                    aria-label="Link To Certification"
                  >
                    Link To Certification
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Zebra Image */}
          <div className="flex items-stretch">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src={teamPhoto} 
                alt="Grant Expedition team with clients and safari vehicle"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="commonninja_component pid-2e72d824-b5b8-4dc5-bb75-5921103e655b"></div>
        </div>
      </main>
    </div>
  );
};

export default About;
