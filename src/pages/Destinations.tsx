import Navigation from "@/components/Navigation";
import DestinationCard from "@/components/DestinationCard";
import botswanaImage from "@/assets/botswana-safari.jpg";
import giraffeImage from "@/assets/giraffe-safari.jpg";
import okavango from "@/assets/okavango-honeymoon.jpg";

const destinations = [
  {
    title: "Botswana Conservation Safari",
    location: "Makgadikgadi National Park, Khwai Private Game Reserve & Okavango Delta",
    duration: "7 Nights / 8 Days",
    price: "$9,055 to $18,086 Per Person",
    image: botswanaImage,
    slug: "botswana-conservation-safari",
  },
  {
    title: "Giraffe Conservation Safari",
    location: "Etosha Mountain Lodge, Hoanib Valley Camp to Shipwreck Lodge",
    duration: "9 Days",
    price: "NAD 334,930 (price may vary depending on numbers)",
    image: giraffeImage,
    slug: "giraffe-conservation-safari",
  },
  {
    title: "Okavango Delta Honeymoon in the Wild",
    location: "Okavango Delta & Khwai Private Reserve",
    duration: "7 Days",
    price: "From $8,782 to $15,262 Per Couple",
    image: okavango,
    slug: "okavango-delta-honeymoon",
  },
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="font-playfair text-6xl md:text-7xl text-center text-destinations-title mb-16">
          DESTINATIONS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} {...destination} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Destinations;
