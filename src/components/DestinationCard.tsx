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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={slug.startsWith('/') ? slug : `/destinations/${slug}`} className="block relative h-[500px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay - default state */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
        
        {/* Solid color overlay - hover state */}
        <div className="absolute inset-0 bg-destinations-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Content overlay - default state */}
        {!isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide">
              {title}
            </h3>
            
            <div className="space-y-2 text-sm">
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
        
        {/* Hover description overlay - aligned to top */}
        {isHovered && hoverDescription && (
          <div className="absolute top-0 left-0 right-0 p-6 text-white z-10 animate-fade-in">
            <p className="text-base leading-relaxed">
              {hoverDescription}
            </p>
          </div>
        )}
        
        {/* Arrow button - always visible */}
        <div className="absolute bottom-6 right-6 z-10">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-500">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
