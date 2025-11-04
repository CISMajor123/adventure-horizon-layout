import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import zebraImage from "@/assets/zebra-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      
      <main className="min-h-screen flex flex-col pt-24 px-8 lg:px-16">
        {/* Heading spanning full width */}
        <h1 className="text-6xl lg:text-7xl font-serif italic text-destinations-accent mb-12 lg:mb-16">
          What We Do
        </h1>
        
        {/* Two-column layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12 pb-16">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 flex items-center">
            <div className="bg-white border border-black p-8 lg:p-12 max-w-md">
              <p className="text-lg font-serif mb-6 leading-relaxed">
                At Grant Expedition, we specialize in creating unforgettable safari experiences across Tanzania's most stunning landscapes. From the vast plains of Serengeti to the majestic Mount Kilimanjaro, our expertly crafted tours connect you with nature, culture, and adventure. We deliver personalized itineraries blending luxury, comfort, and authenticity.
              </p>
              <p className="text-lg font-serif mb-8 leading-relaxed">
                Whether you are seeking thrilling wildlife encounters, breathtaking natural wonders, or immersive cultural experiences, Grant Expedition is your trusted partner in discovering the best of Tanzania
              </p>
              <Link to="/destinations">
                <button className="bg-destinations-accent text-white px-8 py-3 rounded-lg font-serif text-lg hover:opacity-90 transition-opacity">
                  Plan Your Trip
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right column - Zebra image */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img 
              src={zebraImage} 
              alt="Zebra in Tanzania savanna" 
              className="w-full h-full object-cover object-center rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
