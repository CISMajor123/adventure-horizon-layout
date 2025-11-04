import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import zebraImage from "@/assets/zebra-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="bg-white border border-foreground/20 rounded-lg p-10 md:p-12 shadow-sm">
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
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={zebraImage} 
                alt="Zebra standing on natural terrain"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
