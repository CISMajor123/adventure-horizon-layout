import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import zanzibarAerial from "@/assets/zanzibar-aerial.jpg";
import zanzibarSunsetDhow from "@/assets/zanzibar-sunset-dhow.jpg";
import zanzibarBeachPier from "@/assets/zanzibar-beach-pier.jpg";
import zanzibarPalmTrees from "@/assets/zanzibar-palm-trees.jpg";
import zanzibarSandbank from "@/assets/zanzibar-sandbank.jpg";
import zanzibarRockyCoast from "@/assets/zanzibar-rocky-coast.jpg";
import zanzibarPalmSky from "@/assets/zanzibar-palm-sky.jpg";

const experiences = [
  {
    id: "experience-1",
    title: "Zanzibar 2 Days / 1 Night Package",
    image: zanzibarSunsetDhow,
    content: `Short on time but still want to experience the heart of Zanzibar? This 2-day package is perfect for travelers with limited time who still want to explore, learn, and relax. Enjoy a comfortable stay at Mizingani Seafront Hotel in historic Stone Town, round-trip airport transfers, and carefully selected activities that showcase Zanzibar's culture, history, and natural beauty. 

Your experience includes a Spice Farm Tour, a visit to Prison Island with Snorkeling, and a guided Stone Town tour with shopping. We coordinate the schedule with your flight times, ensuring a smooth and enjoyable stay from start to finish. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
  {
    id: "experience-2",
    title: "Zanzibar 3 Days / 2 Nights Package",
    image: zanzibarBeachPier,
    content: `Visiting Zanzibar for just a few days? This 3-day package is designed to give you a full and meaningful experience without the stress of planning. Your stay at Mizingani Seafront Hotel in historic Stone Town includes airport transfers, full-board meals, and guided excursions—allowing you to relax and enjoy Zanzibar's culture, history, and natural beauty. 

Over the three days, you'll explore the flavors of a Spice Farm Tour, learn the stories and architecture of Stone Town, and visit Prison Island to see the Aldabra giant tortoises. We align all activities with your arrival and departure times to ensure a seamless and enjoyable trip. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
  {
    id: "experience-3",
    title: "Zanzibar 4 Days / 3 Nights Package",
    image: zanzibarPalmTrees,
    content: `Have a bit more time to explore Zanzibar? This 4-day package is designed to give you a rich and memorable experience without the stress of planning. Your stay at Mizingani Seafront Hotel in Stone Town includes round-trip airport transfers, full-board meals, and immersive guided activities—allowing you to fully enjoy Zanzibar's culture, cuisine, and tropical beauty. 

During your stay, you'll snorkel and sail the clear waters of Safari Blue, take in the spices and aromas of a Spice Farm Tour, uncover history on a guided Stone Town Tour, and visit Prison Island to meet the Aldabra giant tortoises. All activities are scheduled around your arrival and departure for a smooth, easy trip. Contact us via WhatsApp or Email to customize this package to your interests.`,
  },
  {
    id: "experience-4",
    title: "Zanzibar 5 Days / 4 Nights Package",
    image: zanzibarSandbank,
    content: `Coming soon - detailed itinerary for this package.`,
  },
  {
    id: "experience-5",
    title: "Zanzibar 6 Days / 5 Nights Package",
    image: zanzibarRockyCoast,
    content: `Coming soon - detailed itinerary for this package.`,
  },
  {
    id: "experience-6",
    title: "Zanzibar 7 Days / 6 Nights Package",
    image: zanzibarPalmSky,
    content: `Coming soon - detailed itinerary for this package.`,
  },
];

const ZanzibarIsland = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-start justify-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${zanzibarAerial})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
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
                    <h3 className="font-playfair text-white text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg text-left">
                      {experience.title}
                    </h3>
                  </div>
                </AccordionTrigger>
              </div>
              
              <AccordionContent className="bg-white">
                <div className="px-8 md:px-16 py-8 max-w-5xl">
                  <p className="text-[#3d2418] leading-relaxed whitespace-pre-line">
                    {experience.content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default ZanzibarIsland;
