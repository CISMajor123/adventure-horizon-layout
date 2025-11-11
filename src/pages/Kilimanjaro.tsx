import Navigation from "@/components/Navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import kilimanjaroHero from "@/assets/kilimanjaro_hero.png";
import experience1 from "@/assets/experience_1.png";
import experience2 from "@/assets/experience_2.png";
import experience3 from "@/assets/experience_3.png";

const experiences = [
  {
    id: "experience-1",
    title: "6-Day Luxury Highlights of Tanzania Safari",
    image: experience1,
    content: `This six-day luxury adventure showcases Tanzania's most iconic wildlife destinations, offering high-end lodges, gourmet meals, and exceptional safari experiences. Guests enjoy guided game drives through Tarangire, Serengeti, Ngorongoro Crater, and Lake Manyara—each featuring unique landscapes and rich wildlife, with chances to see the Big Five.

Itinerary Overview:

Day 1 – Arusha: Airport pickup, relaxation at Gran Melia.

Day 2 – Tarangire: Game drive among elephants, lions, leopards, and baobabs. Overnight at Kitela Lodge.

Day 3 – Serengeti: Travel via Ngorongoro to Serengeti's vast plains; see the Great Migration. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti: Full-day game drive with sightings of big cats and diverse wildlife.

Day 5 – Ngorongoro: Explore the crater's dense animal population, including black rhinos. Return to Kitela Lodge.

Day 6 – Lake Manyara: Visit lush forests and spot tree-climbing lions before return to Arusha or airport.

Included: Park fees, all accommodations, meals, transport, driver/guide, and airport transfers.
Excluded: International flights, tips, personal expenses, and optional experiences such as balloon safaris or cultural visits.

Highlights:
- Premium lodges and tented camps
- Scenic drives through Tanzania's most famous parks
- Opportunities to witness lions in trees, vast herds of elephants, and the Great Migration
- Countless 'wow' moments and unforgettable wildlife encounters`,
  },
  {
    id: "experience-2",
    title: "7 Day Mid-Range Epic Adventure (Stay on the Crater Rim)",
    image: experience2,
    content: "",
  },
  {
    id: "experience-3",
    title: "8-Day Mid-Range Ndutu Migration Footsteps",
    image: experience3,
    content: "",
  },
];

const Kilimanjaro = () => {
  const scrollToExperiences = () => {
    document.getElementById("experiences-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kilimanjaroHero})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#3d2418] tracking-tight">
            Mount Kilimanjaro
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToExperiences}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#3d2418] animate-bounce hover:text-desert-gold transition-colors"
          aria-label="Scroll to experiences"
        >
          <ChevronDown size={40} />
        </button>
      </section>
      
      {/* Experiences Section */}
      <section id="experiences-section" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2418] text-center mb-16">
            Experiences
          </h2>
          
          {/* Experience Cards - Accordion */}
          <Accordion type="single" collapsible className="space-y-8">
            {experiences.map((experience) => (
              <AccordionItem key={experience.id} value={experience.id} className="border-none">
                <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>div>div>div]:rotate-90">
                  <div
                    className="relative h-64 md:h-80 w-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg"
                    style={{ backgroundImage: `url(${experience.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <div className="relative h-full flex items-center px-8 md:px-12">
                      <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center opacity-90 shadow-lg flex-shrink-0">
                        <ChevronRight size={24} className="text-[#3d2418] transition-transform duration-300" />
                      </div>
                      
                      <h3 className="font-playfair text-white text-xl md:text-2xl font-semibold ml-6 drop-shadow-lg text-left">
                        {experience.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                
                {experience.content && (
                  <AccordionContent className="bg-white px-6 py-6 rounded-b-lg">
                    <div className="prose prose-lg max-w-none text-[#3d2418] whitespace-pre-line">
                      {experience.content}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Kilimanjaro;
