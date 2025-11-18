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
    
    // Load Google Maps Extended Component Library
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js";
    googleMapsScript.type = "module";
    document.body.appendChild(googleMapsScript);
    
    return () => {
      document.body.removeChild(commonNinjaScript);
      document.body.removeChild(elfsightScript);
      document.body.removeChild(googleMapsScript);
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

        {/* Google Maps Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <gmpx-api-loader key="AIzaSyBBS-liBydot5O4OK6gfZmMAqI9G5s1Co4" solution-channel="GMP_GE_mapsandplacesautocomplete_v2"></gmpx-api-loader>
          <gmp-map center="40.749933,-73.98633" zoom="13" map-id="DEMO_MAP_ID" style={{ width: '100%', height: '500px' }}>
            <div slot="control-block-start-inline-start" className="place-picker-container">
              <gmpx-place-picker placeholder="Enter an address"></gmpx-place-picker>
            </div>
            <gmp-advanced-marker></gmp-advanced-marker>
          </gmp-map>
        </div>

        {/* Google Reviews Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="commonninja_component pid-2e72d824-b5b8-4dc5-bb75-5921103e655b"></div>
        </div>

        {/* TripAdvisor Reviews Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="elfsight-app-1a198ad5-3e51-4c22-a421-b20046e5fe3a" data-elfsight-app-lazy></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
