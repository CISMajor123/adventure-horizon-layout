import Navigation from "@/components/Navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
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

Day 1 travels from the Marangu Gate through rainforest to Mandara Huts.

Day 2 continues into moorland toward Horombo Huts.

Day 3 crosses the high-altitude saddle to Kibo Huts.

Day 4 begins a midnight summit push via Gilman's Point to Uhuru Peak, followed by a long descent back toward Horombo.

Day 5 completes the descent to Marangu Gate for transfer to Moshi.

Packages include guides, huts, meals, park fees, water, transfers, and pre/post-climb lodging, with flights, visas, insurance, tips, and personal gear excluded.`,
  },
  {
    id: "experience-2",
    title: "6 Days Mount Kilimanjaro Machame Route",
    image: experience2,
    content: `The Machame (Whisky) Route is one of Kilimanjaro's most scenic and popular trails, known for its varied landscapes, excellent acclimatization profile, and high summit success rate. Approaching from the south, it begins in lush rainforest before climbing to the Shira Plateau and traversing beneath Kilimanjaro's dramatic Southern Icefields. The route eventually joins the Barafu summit path and descends via Mweka. Typically completed in 6–7 days, it offers excellent scenery, medium difficulty, and high traffic.

Day 1 starts at Machame Gate with a steady climb through dense rainforest to Machame Camp.

Day 2 continues up a rocky ridge into open moorland, ending at Shira Camp.

Day 3 focuses on acclimatization, ascending toward the Lava Tower before descending to Barranco Camp.

Day 4 tackles the Barranco Wall, crosses the Karanga Valley, and climbs to Barafu Camp for the summit preparation.

Day 5 begins a midnight summit push to Uhuru Peak via Stella Point, followed by a long descent to Mweka Camp.

Day 6 completes the trek with a final descent through rainforest to Mweka Gate before returning to Moshi.

Climbing packages typically include certified guides, porters, meals, drinking water, park fees, high-quality equipment, airport transfers, and pre/post-climb lodging. Exclusions generally cover flights, visas, insurance, tips, personal gear, extra nights, and additional personal expenses.`,
  },
  {
    id: "experience-3",
    title: "8 Days Mount Kilimanjaro Lemosho Route",
    image: experience3,
    content: `The Lemosho Route is one of Kilimanjaro's most beautiful and remote trails, beginning on the western side of the mountain and offering excellent scenery, wildlife sightings, and a gradual acclimatization profile. As a newer route, it is quieter than the popular Machame Route and eventually joins the Southern Circuit, giving trekkers sweeping views of Kilimanjaro from multiple angles. Because it is typically completed in 7–8 days, it provides ample acclimatization and has one of the highest summit success rates of all routes. Difficulty is medium, scenery is excellent, and traffic is moderate.

Day 1 begins at Lemosho Gate with a gentle climb through lush rainforest to Mti Mkubwa Camp.

Day 2 continues upward into moorland terrain with expansive views as the trail reaches the Shira Plateau and Shira I Camp.

Day 3 explores the high Shira Plateau, passing Shira II and moving toward Moir Hut for additional acclimatization.

Day 4 ascends toward Lava Tower before descending into the scenic Barranco Valley for an important acclimatization day.

Day 5 climbs the iconic Barranco Wall and crosses into the Karanga Valley for an overnight at Karanga Camp.

Day 6 makes a shorter but steady ascent to Barafu Camp, completing the Southern Circuit and preparing for the summit push.

Day 7 begins a midnight ascent to Uhuru Peak via Stella Point, followed by a long descent to Mweka Camp.

Day 8 ends with a final descent through rainforest to Mweka Gate, where trekkers receive certificates before returning to Moshi.

Climbing packages generally include certified guides, porters, meals, drinking water, high-quality equipment, park and camping fees, airport transfers, and pre/post-climb lodging. Exclusions typically cover flights, visas, insurance, tips, personal gear, extra nights, and personal expenses.`,
  },
];

const Kilimanjaro = () => {
  const [maranGuProduct, setMaranguProduct] = useState<ShopifyProduct | null>(null);
  const addItem = useCartStore(state => state.addItem);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMaranguProduct = async () => {
      try {
        const products = await getProducts();
        const marangu = products.find(p => p.node.title === "5 Days Mount Kilimanjaro Marangu Route");
        if (marangu) {
          setMaranguProduct(marangu);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchMaranguProduct();
  }, []);

  const handleBookMarangu = () => {
    if (!maranGuProduct) return;
    
    const variant = maranGuProduct.node.variants.edges[0].node;
    addItem({
      product: maranGuProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    });

    toast({
      title: "Added to cart",
      description: "5 Days Mount Kilimanjaro Marangu Route has been added to your cart.",
    });
  };

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
                    {experience.id === "experience-1" && maranGuProduct && (
                      <div className="mt-6 flex justify-end">
                        <Button 
                          onClick={handleBookMarangu}
                          size="lg"
                          className="bg-[#3d2418] hover:bg-[#2d1810] text-white"
                        >
                          Book Now
                        </Button>
                      </div>
                    )}
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
