import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  slug: string;
}

const DestinationCard = ({
  title,
  location,
  duration,
  price,
  image,
  slug,
}: DestinationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
      <Link to={`/destinations/${slug}`} className="block relative h-[500px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide">
            {title}
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="leading-tight">{location}</span>
            </div>
            
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
        
        {/* Arrow button */}
        <div className="absolute bottom-6 right-6">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
            <ArrowRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-gray-900" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
