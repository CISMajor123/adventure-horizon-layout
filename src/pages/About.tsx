import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import safariVehicle from "@/assets/safari-vehicle.png";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="bg-white border border-foreground/20 rounded-lg p-10 md:p-12 shadow-sm h-full flex flex-col justify-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-destinations-title mb-8 italic">
                What We Do
              </h1>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-base md:text-lg">
                  Grant Expedition crafts unforgettable safaris across Tanzania—combining luxury, comfort, and authenticity. 
                  From the vast plains of the Serengeti to the majesty of Mount Kilimanjaro, our personalized itineraries 
                  connect you with wildlife, culture, and adventure.
                </p>
                
                <p className="text-base md:text-lg">
                  With expert guides and seamless planning, we are your trusted partner in discovering the real Tanzania, your way.
                </p>
              </div>
              
              <Link to="/destinations">
                <Button 
                  className="mt-8 bg-destinations-title hover:bg-destinations-title/90 text-white px-8 py-6 text-base rounded-md transition-all duration-300"
                  aria-label="Plan Your Trip — go to Destinations"
                >
                  Plan Your Trip
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Zebra Image */}
          <div className="flex items-stretch">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src={safariVehicle} 
                alt="Grant Expedition safari vehicle in the wilderness"
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
