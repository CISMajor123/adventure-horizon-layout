import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.png";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    // Load CommonNinja script for Google Reviews widget
    const commonNinjaScript = document.createElement('script');
    commonNinjaScript.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    commonNinjaScript.defer = true;
    document.body.appendChild(commonNinjaScript);
    
    // Load Elfsight script for TripAdvisor Reviews widget
    const elfsightScript = document.createElement('script');
    elfsightScript.src = "https://elfsightcdn.com/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);
    
    return () => {
      document.body.removeChild(commonNinjaScript);
      document.body.removeChild(elfsightScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      
      <main className="container mx-auto px-4 md:px-6 pt-28 md:pt-40 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto mb-12 md:mb-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="bg-white border border-foreground/20 rounded-lg p-6 md:p-10 lg:p-12 shadow-sm h-full flex flex-col justify-center">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-destinations-title mb-6 md:mb-8 italic">
                What We Do
              </h1>
              
              <div className="space-y-4 md:space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-sm md:text-base lg:text-lg">
                  At Grant Expedition, we specialize in creating unforgettable safari experiences across Tanzania's most stunning landscapes. From the vast plains of Serengeti to the majestic Mount Kilimanjaro, our expertly crafted tours connect you with nature, culture, and adventure. We deliver personalized itineraries blending luxury, comfort, and authenticity.
                </p>
                
                <p className="text-sm md:text-base lg:text-lg">
                  Whether you are seeking thrilling wildlife encounters, breathtaking natural wonders, or immersive cultural experiences, Grant Expedition is your trusted partner in discovering the best of Tanzania.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <Link to="/destinations">
                  <Button 
                    className="w-full sm:w-auto bg-destinations-title hover:bg-destinations-title/90 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-md transition-all duration-300"
                    aria-label="Plan Your Trip — go to Destinations"
                  >
                    Plan Your Trip
                  </Button>
                </Link>
                <a href="https://eu.docs.wps.com/module/common/loadPlatform/?sid=sILb_5f2KAfjsqMgG&v=v2" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full sm:w-auto bg-destinations-title hover:bg-destinations-title/90 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-md transition-all duration-300"
                    aria-label="Link To Certification"
                  >
                    Link To Certification
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Team Image */}
          <div className="flex items-stretch order-first lg:order-last">
            <div className="w-full rounded-lg overflow-hidden shadow-lg h-64 md:h-80 lg:h-auto">
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

        {/* TripAdvisor Reviews Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="elfsight-app-1a198ad5-3e51-4c22-a421-b20046e5fe3a" data-elfsight-app-lazy></div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-destinations-title mb-8 text-center italic">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg border border-foreground/20">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBBS-liBydot5O4OK6gfZmMAqI9G5s1Co4&q=Grant+Expedition+Ltd,Usa+River+23301,Tanzania`}
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
