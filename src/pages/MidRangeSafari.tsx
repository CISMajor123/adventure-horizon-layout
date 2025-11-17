import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import midRangeSafariHero from "@/assets/mid-range-safari.jpg";

const experiences = [
  {
    id: "experience-1",
    title: "3-Day Taste of Tanzania Safari\n(Tarangire & Ngorongoro)",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Experience the essence of Tanzania's wildlife in just three days. This carefully crafted itinerary takes you to two of Tanzania's most iconic parks: Tarangire National Park, known for its large elephant herds and ancient baobab trees, and the magnificent Ngorongoro Crater, a UNESCO World Heritage Site teeming with wildlife.

Perfect for travelers with limited time, this safari offers an authentic taste of Tanzania's natural wonders with comfortable mid-range accommodations and expert guides to ensure you don't miss any of the action.`,
  },
  {
    id: "experience-2",
    title: "4-Day Tanzania Safari:\nTarangire, Ngorongoro & Lake Manyara",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Discover three of Tanzania's most spectacular wildlife destinations in this comprehensive 4-day safari adventure. From the elephant paradise of Tarangire to the wildlife-rich crater floor of Ngorongoro, and the tree-climbing lions of Lake Manyara, this journey offers diverse landscapes and incredible game viewing opportunities.

Stay in comfortable mid-range lodges with stunning views, enjoy full-board meals, and benefit from the expertise of professional guides who will enhance your safari experience with their knowledge of wildlife behavior and local ecology.`,
  },
  {
    id: "experience-3",
    title: "5-Day Tanzania Safari:\nTarangire, Ngorongoro, Serengeti & Lake Manyara",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Embark on the ultimate Tanzanian safari experience, exploring four of the country's premier wildlife destinations. This 5-day adventure takes you through the diverse ecosystems of Tarangire, the world-famous Serengeti plains, the spectacular Ngorongoro Crater, and the scenic Lake Manyara National Park.

With comfortable mid-range accommodations strategically located for optimal game viewing, this safari offers the perfect balance of adventure and comfort. Experience the Great Migration (seasonal), witness predator-prey interactions, and create memories that will last a lifetime.`,
  },
  {
    id: "experience-4",
    title: "6-Day Luxury Highlights of Tanzania Safari",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Elevate your safari experience with this 6-day luxury adventure through Tanzania's most celebrated wildlife areas. This premium package combines the best game viewing opportunities with top-tier accommodations, gourmet dining, and personalized service.

Visit Tarangire's elephant herds, explore the endless plains of the Serengeti, descend into the Ngorongoro Crater, and discover Lake Manyara's diverse birdlife. Stay in carefully selected luxury lodges and tented camps that offer exceptional comfort, stunning views, and an authentic connection to the wilderness.`,
  },
  {
    id: "experience-5",
    title: "7-Day Mid-Range Epic Adventure\n(Stay on the Crater Rim)",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Experience Tanzania's wildlife wonders with the added luxury of staying on the rim of the magnificent Ngorongoro Crater. This 7-day epic adventure offers extended time in each destination, allowing for more in-depth game viewing and a deeper connection with the landscape.

Your journey includes Tarangire's baobab-dotted plains, multiple days exploring different regions of the vast Serengeti ecosystem, and the unforgettable experience of the Ngorongoro Crater. With comfortable mid-range accommodations and the unique opportunity to wake up to crater views, this safari offers exceptional value and unforgettable experiences.`,
  },
  {
    id: "experience-6",
    title: "7-Day Luxury Northern Tanzania Safari",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Indulge in the ultimate luxury safari experience with this 7-day journey through Northern Tanzania's most iconic wildlife destinations. This premium package offers the perfect combination of world-class game viewing, luxurious accommodations, and personalized service that exceeds expectations.

Explore Tarangire's elephant paradise, witness the Serengeti's incredible wildlife concentrations, experience the wonder of the Ngorongoro Crater, and discover Lake Manyara's unique ecosystems. Stay in exclusive luxury lodges and camps that offer unparalleled comfort, gourmet cuisine, and intimate wildlife encounters, all while enjoying the expertise of your private guide.`,
  },
  {
    id: "experience-7",
    title: "7-Day Western Serengeti Migration Safari",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Witness one of nature's most spectacular events with this specialized 7-day migration safari focused on the Western Serengeti. Timed to coincide with the dramatic river crossings, this itinerary places you in the heart of the action as millions of wildebeest and zebra face the treacherous waters of the Grumeti River.

This unique safari combines prime migration viewing with visits to other Northern Circuit highlights including Tarangire and Ngorongoro Crater. Stay in strategically located mid-range accommodations that offer excellent access to migration routes, ensuring you witness this incredible natural phenomenon from the best vantage points.`,
  },
  {
    id: "experience-8",
    title: "8-Day Mid-Range Ndutu Migration Footsteps",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Follow in the footsteps of the Great Migration with this 8-day safari focused on the Ndutu region in the southern Serengeti. This seasonal safari (typically December to March) offers front-row seats to the calving season when hundreds of thousands of wildebeest give birth on the nutrient-rich short grass plains.

This extended itinerary allows for multiple full days in the Ndutu area, maximizing your chances of witnessing dramatic predator-prey interactions as lions, cheetahs, and hyenas take advantage of the abundance of newborn calves. The safari also includes Tarangire, Ngorongoro Crater, and other highlights, with comfortable mid-range accommodations throughout.`,
  },
  {
    id: "experience-9",
    title: "10-Day Great Migration Safari Itinerary",
    image: midRangeSafariHero, // Placeholder - will be replaced with uploaded image
    content: `Experience the full spectacle of the Great Migration with this comprehensive 10-day safari that follows the movement of over two million wildebeest, zebra, and other animals across the Serengeti ecosystem. This extended itinerary provides ample time to witness different aspects of the migration, from river crossings to calving seasons, depending on the time of year.

Your journey includes multiple destinations across the Northern Circuit, with extended stays in key migration areas to maximize wildlife viewing opportunities. Comfortable mid-range accommodations are strategically selected to place you near the migration action, while also ensuring you experience the diversity of Tanzania's other iconic wildlife destinations including Tarangire, Ngorongoro Crater, and Lake Manyara.`,
  },
];

const MidRangeSafari = () => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (experienceId: string) => {
    // Placeholder for future cart functionality
    toast.success("Coming soon", {
      description: "Safari booking functionality will be added soon"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${midRangeSafariHero})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Title */}
        <div className="relative z-10 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Mid-Range Safari
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#experiences" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        >
          <ChevronDown size={40} strokeWidth={2} />
        </a>
      </section>

      {/* Experiences Header Band */}
      <section 
        id="experiences"
        className="bg-white pt-20 pb-10"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center min-h-[120px]">
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d2418]">
            Experiences
          </h2>
        </div>
      </section>

      {/* Experience Cards with Accordion */}
      <section className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((experience) => (
            <AccordionItem key={experience.id} value={experience.id} className="border-none">
              <div className="relative w-full overflow-hidden h-64 md:h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${experience.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                
                <AccordionTrigger className="relative z-10 h-full flex items-center justify-start px-8 md:px-16 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center w-full">
                    <ChevronDown className="h-8 w-8 text-white mr-6 shrink-0 transition-transform duration-200" />
                    <h3 className="font-playfair text-white text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg text-left whitespace-pre-line">
                      {experience.title}
                    </h3>
                  </div>
                </AccordionTrigger>
              </div>
              
              <AccordionContent className="bg-white">
                <div className="px-8 md:px-16 py-8">
                  <p className="text-[#3d2418] leading-relaxed whitespace-pre-line text-justify">
                    {experience.content}
                  </p>
                  <div className="flex justify-end mt-6">
                    <Button 
                      onClick={() => handleAddToCart(experience.id)}
                      size="lg"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default MidRangeSafari;
