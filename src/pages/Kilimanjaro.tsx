import Navigation from "@/components/Navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import kilimanjaroHero from "@/assets/kilimanjaro-trekking-hero.png";
import experience1 from "@/assets/kilimanjaro-marangu.jpg";
import experience2 from "@/assets/kilimanjaro-machame.jpg";
import experience3 from "@/assets/kilimanjaro-lemosho.jpg";

const experiences = [
  {
    id: "experience-1",
    title: "5 Days Mount Kilimanjaro Marangu Route",
    image: experience1,
    content: `The Marangu (Coca-Cola) Route is one of six established paths up Kilimanjaro, known for its hut accommodations, shorter itinerary, and shared ascent/descent trail. Typically done in 5–6 days, it approaches from the south with medium difficulty, good scenery, and high traffic.

Day 1 travels from the Marangu Gate through rainforest to Mandara Huts. Day 2 continues into moorland toward Horombo Huts. Day 3 crosses the high-altitude saddle to Kibo Huts. Day 4 begins a midnight summit push via Gilman's Point to Uhuru Peak, followed by a long descent back toward Horombo. Day 5 completes the descent to Marangu Gate for transfer to Moshi.

Packages include guides, huts, meals, park fees, water, transfers, and pre/post-climb lodging, with flights, visas, insurance, tips, and personal gear excluded.`,
  },
  {
    id: "experience-2",
    title: "6 Days Mount Kilimanjaro Machame Route",
    image: experience2,
    content: `This 7-day mid-range safari offers an unforgettable journey through Tanzania's most iconic landscapes — from the vast plains of the Serengeti to the breathtaking Ngorongoro Crater rim. You'll enjoy three nights in the Serengeti and explore diverse ecosystems teeming with wildlife, including lions, elephants, leopards, and the famous tree-climbing lions of Manyara. With comfortable lodges and tented camps, you'll experience the perfect balance of adventure and relaxation.

Itinerary Overview

Day 1 – Arrival in Arusha
Pickup from the airport and transfer to Arusha Planet Lodge for rest and preparation.
Meals at own expense.

Day 2 – Tarangire National Park
Game drive among elephants, giraffes, lions, and ancient baobabs. Picnic lunch in the park, then travel to Eileen's Tree Inn in Karatu.
All meals included (drinks not included).

Day 3 – Karatu to Serengeti
Scenic drive through Ngorongoro Conservation Area to the Serengeti. Witness vast grasslands and the Great Migration. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti National Park
Full-day game drives with chances to see lions, cheetahs, leopards, and massive herds. Overnight again at Nyota Luxury Camp.

Day 5 – Serengeti to Ngorongoro (Crater Rim)
Morning game drive, then continue to Rhino Lodge near the Crater Rim for cooler air and panoramic views.

Day 6 – Ngorongoro Crater
Descend into the Crater for one of Africa's most wildlife-rich environments — over 30,000 animals, including the black rhino. Overnight at Eileen's Tree Inn in Karatu.

Day 7 – Lake Manyara National Park
Final game drive through lush forests and lakeside plains. Spot flamingos, elephants, and tree-climbing lions before returning to Arusha or the airport.`,
  },
  {
    id: "experience-3",
    title: "8 Days Mount Kilimanjaro Lemosho Route",
    image: experience3,
    content: `This 8-day mid-range safari follows the path of the Great Migration during its Ndutu and Southern Serengeti season (December–April). Experience Tanzania's most iconic parks — Tarangire, Serengeti, Ndutu, Ngorongoro Crater, and Lake Manyara — while staying in charming lodges and tented camps. Expect diverse landscapes, abundant wildlife, and the unforgettable sight of wildebeest calving season when thousands of young are born on the plains.

Itinerary Overview

Day 1 – Arrival in Arusha: Pickup and transfer to Arusha Planet Lodge for rest and preparation.
Meals at own expense.

Day 2 – Tarangire National Park: Game drive among elephant herds, lions, giraffes, and ancient baobabs. Picnic lunch inside the park, then continue to Eileen's Tree Inn in Karatu.
All meals included (drinks not included).

Day 3 – Karatu to Serengeti National Park: Scenic drive through Ngorongoro Conservation Area to the Serengeti, home to lions, cheetahs, leopards, and vast herds. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti National Park: Morning and afternoon game drives with time to relax at camp between safaris. Overnight at Nyota Luxury Camp.

Day 5 – Central Serengeti to Southern Serengeti & Ndutu: Travel south to Ndutu, following Great Migration herds. Visit Lake Ndutu. Overnight at Serengeti Heritage Ndutu Camp.

Day 6 – Ndutu (Migration & Calving Season): Full-day game drive observing wildebeest calving season and predator activity. Overnight at Serengeti Heritage Ndutu Camp.

Day 7 – Ndutu to Ngorongoro Crater: Drive to Ngorongoro and descend into the Crater. Overnight at Eileen's Tree Inn in Karatu.

Day 8 – Lake Manyara to Arusha: Visit Lake Manyara National Park before drop-off in Arusha or the airport.`,
  },
];

const Kilimanjaro = () => {
  const scrollToExperiences = () => {
    document.getElementById("experiences-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full flex items-center justify-center pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kilimanjaroHero})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white tracking-tight">
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
      <section id="experiences-section" className="bg-white pt-20 pb-10">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center min-h-[120px]">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2418] text-left mb-0">
              Experiences
            </h2>
          </div>
          
          {/* Experience Cards - Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {experiences.map((experience) => (
              <AccordionItem key={experience.id} value={experience.id} className="border-none w-full">
                <AccordionTrigger className="hover:no-underline p-0 w-full [&[data-state=open]>div>div>div>div]:rotate-90">
                  <div
                    className="relative h-64 md:h-80 w-full overflow-hidden"
                    style={{ 
                      backgroundImage: `url(${experience.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <div className="relative h-full flex items-center px-8 md:px-12 max-w-7xl mx-auto">
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
                  <AccordionContent className="bg-white w-full py-6 px-10 md:px-10">
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
