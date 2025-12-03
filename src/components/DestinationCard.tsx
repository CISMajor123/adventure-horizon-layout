import { Link } from "react-router-dom";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { useState } from "react";

interface DestinationCardProps {
  title: string;
  duration: string;
  price: string;
  image: string;
  slug: string;
  hoverDescription?: string;
}

const DestinationCard = ({
  title,
  duration,
  price,
  image,
  slug,
  hoverDescription,
}: DestinationCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    setIsActive(!isActive);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handleInteraction}
    >
      <Link to={slug.startsWith('/') ? slug : `/destinations/${slug}`} className="block relative h-[400px] md:h-[500px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay - default state */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
        
        {/* Solid color overlay - active state */}
        <div className={`absolute inset-0 bg-destinations-hover transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Content overlay - default state */}
        {!isActive && (
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10">
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4 tracking-wide">
              {title}
            </h3>
            
            <div className="space-y-1 md:space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{duration}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 flex-shrink-0" />
                <span>{price}</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Hover/tap description overlay - aligned to top */}
        {isActive && hoverDescription && (
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 text-white z-10 animate-fade-in">
            <p className="text-sm md:text-base leading-relaxed line-clamp-[10] md:line-clamp-none">
              {hoverDescription}
            </p>
          </div>
        )}
        
        {/* Arrow button - always visible */}
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-500">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
