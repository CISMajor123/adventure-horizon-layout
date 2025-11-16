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
    content: `Experience the highlights of Tanzania's northern safari circuit on this 3-day adventure. Begin in Arusha, where you'll rest before setting out to explore Tarangire National Park—famous for its vast elephant herds, baobab trees, and rich wildlife. Continue to the breathtaking Ngorongoro Crater, a UNESCO World Heritage Site and home to the Big Five, zebras, wildebeest, and over 500 bird species. Enjoy scenic drives, full-day game viewing, and comfortable lodge stays before returning to Arusha. 

Itinerary Highlights: 

Day 1 – Arrival in Arusha: Airport pickup, overnight stay at your choice of luxury, mid-range, or budget lodge. 

Day 2 – Tarangire National Park: Full-day game drive through savannas and swamps; possible sightings of elephants, lions, and leopards. Overnight near Karatu or Ngorongoro. 

Day 3 – Ngorongoro Crater: Descend into the caldera for a wildlife-packed game drive and picnic lunch before returning to Arusha. 

Included: Park fees, guided safari, accommodation, meals, transport, taxes, and airport transfers. 

Excluded: International flights, tips, travel insurance, and optional add-ons (e.g., Balloon Safari, Maasai Village Visit, Night Game Drive).`,
  },
  {
    id: "experience-2",
    title: "Zanzibar 3 Days / 2 Nights Package",
    image: zanzibarBeachPier,
    content: `Coming soon - detailed itinerary for this package.`,
  },
  {
    id: "experience-3",
    title: "Zanzibar 4 Days / 3 Nights Package",
    image: zanzibarPalmTrees,
    content: `Coming soon - detailed itinerary for this package.`,
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
