import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import zebraImage from "@/assets/zebra-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      
      <main className="pt-32 pb-16">
        {/* Heading - Full Width Above Columns */}
        <div className="container mx-auto px-6 mb-12 lg:mb-16">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl italic text-[hsl(var(--contact-teal))] leading-tight">
            What We Do
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Column - Text Content Box Only */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12 py-12 lg:py-16">
            <div className="bg-white border border-black p-8 md:p-12 max-w-xl w-full">
              <div className="space-y-6">
                <p className="font-serif text-base md:text-lg leading-relaxed text-gray-900">
                  At Grant Expedition, we specialize in creating unforgettable safari experiences across Tanzania's most stunning landscapes. From the vast plains of Serengeti to the majestic Mount Kilimanjaro, our expertly crafted tours connect you with nature, culture, and adventure. We deliver personalized itineraries blending luxury, comfort, and authenticity.
                </p>
                
                <p className="font-serif text-base md:text-lg leading-relaxed text-gray-900">
                  Whether you are seeking thrilling wildlife encounters, breathtaking natural wonders, or immersive cultural experiences, Grant Expedition is your trusted partner in discovering the best of Tanzania
                </p>
                
                <Link 
                  to="/destinations"
                  className="inline-block mt-6 bg-[hsl(var(--contact-teal))] text-white font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Plan Your Trip
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image Only */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px]">
            <img 
              src={zebraImage} 
              alt="Zebra on Tanzania savanna landscape" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
