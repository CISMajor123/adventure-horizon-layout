import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import midRangeSafariHero from "@/assets/mid-range-safari.jpg";
import giraffeSunsetSafari from "@/assets/giraffe-sunset-safari.jpg";
import elephantSafari from "@/assets/elephant-safari.jpg";
import elephantSavannah from "@/assets/elephant-savannah.jpg";
import giraffeHerd from "@/assets/giraffe-herd.jpg";
import safariSunsetVehicle from "@/assets/safari-sunset-vehicle.jpg";
import gazelleSafari from "@/assets/gazelle-safari.jpg";
import giraffeMountainSunset from "@/assets/giraffe-mountain-sunset.jpg";
import hornbillBird from "@/assets/hornbill-bird.jpg";
import zebraPair from "@/assets/zebra-pair.jpg";

const experiences = [
  {
    id: "experience-1",
    title: "3-Day Taste of Tanzania Safari\n(Tarangire & Ngorongoro)",
    price: "$950",
    image: giraffeSunsetSafari,
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
    title: "4-Day Tanzania Safari:\nTarangire, Ngorongoro & Lake Manyara",
    price: "$1,250",
    image: elephantSafari,
    content: `Discover the best of northern Tanzania on this 4-day mid-range safari, exploring diverse landscapes and incredible wildlife. From elephant herds under ancient baobabs in Tarangire to the vast Ngorongoro Crater teeming with lions, rhinos, and zebras, and finally the tree-climbing lions and flamingos of Lake Manyara — this journey offers a perfect mix of scenery, adventure, and comfort.

Itinerary Highlights:

Day 1 – Arrival in Arusha: Airport pickup and overnight stay at Arusha Planet Lodge. Meals at own expense.

Day 2 – Tarangire National Park: Game drive through elephant country and baobab forests. Picnic lunch and overnight at Eileen's Tree Inn, Karatu.

Day 3 – Ngorongoro Crater: Descend into the world's largest intact caldera to spot the Big Five and over 500 bird species. Return to Eileen's Tree Inn.

Day 4 – Lake Manyara National Park: Explore forests, Rift Valley escarpment, and flamingo-filled lake before returning to Arusha or airport drop-off.

Included: Park fees, accommodation, meals (as listed), transport, guide, taxes, and airport transfers.

Excluded: International flights, tips, personal items, travel insurance, and optional add-ons (e.g., Balloon Safari, Maasai Village Visit, Night Game Drive).`,
  },
  {
    id: "experience-3",
    title: "5-Day Tanzania Safari:\nTarangire, Ngorongoro, Serengeti & Lake Manyara",
    price: "$1,750",
    image: elephantSavannah,
    content: `Experience Tanzania's most iconic parks on this 5-day adventure through the Northern Safari Circuit. Spot elephants beneath ancient baobabs in Tarangire, descend into the wildlife-rich Ngorongoro Crater, witness the vast Serengeti plains and (with luck) the Great Migration, and end at Lake Manyara—home to flamingos and tree-climbing lions. From lush forests to endless savannas, every day brings breathtaking scenery and unforgettable wildlife encounters.

Itinerary Highlights:

Day 1 – Arrival in Arusha: Airport pickup and overnight stay at Arusha Planet Lodge. Meals at own expense.

Day 2 – Tarangire National Park: Game drive through elephant country and baobab forests. Picnic lunch and overnight at Eileen's Tree Inn, Karatu.

Day 3 – Ngorongoro Crater & Serengeti: Descend into the crater to spot the Big Five, then continue to the Serengeti. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti to Karatu: Morning game drive across the Serengeti plains; afternoon return to Eileen's Tree Inn.

Day 5 – Lake Manyara National Park: Explore forests, flamingo-covered lake, and Rift Valley escarpment before returning to Arusha or airport drop-off.

Included: Park fees, accommodation, meals (as listed), transport, professional guide, taxes, and airport transfers.

Excluded: International flights, tips, personal expenses, and optional add-ons (e.g., Balloon Safari, Maasai Village Visit, Night Game Drive).`,
  },
  {
    id: "experience-4",
    title: "6-Day Luxury Highlights of Tanzania Safari",
    price: "$3,200",
    image: giraffeHerd,
    content: `Experience the ultimate Tanzanian adventure on this 6-day luxury safari through the country's most iconic parks. Stay in top-tier lodges and camps while exploring Tarangire's elephant herds, the endless Serengeti plains, and the breathtaking Ngorongoro Crater—home to the Big Five. With two nights in the Serengeti and exceptional comfort throughout, this itinerary blends world-class wildlife encounters with unforgettable luxury.

Itinerary Highlights:

Day 1 – Arrival in Arusha: Airport pickup and overnight stay at Gran Meliá Arusha. Meals at own expense.

Day 2 – Tarangire National Park: Game drive among elephants, baobabs, and diverse wildlife. Overnight at Kitela Lodge, Karatu.

Day 3 – Ngorongoro to Serengeti: Scenic drive through the highlands into the Serengeti. Game drive en route. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti National Park: Full-day game drives in Seronera, known for lions, leopards, and vast herds. Overnight at Nyota Luxury Camp.

Day 5 – Serengeti to Ngorongoro: Morning drive with wildlife viewing, then explore Ngorongoro Crater. Overnight at Kitela Lodge.

Day 6 – Lake Manyara National Park: Discover forests, flamingos, and tree-climbing lions before returning to Arusha or airport drop-off.

Included: Park fees, luxury accommodations, meals and drinks (as listed), private transport, professional guide, taxes, and airport transfers.

Excluded: International flights, tips, personal expenses, and optional activities (e.g., Balloon Safari, Maasai Village Visit, Night Game Drive).`,
  },
  {
    id: "experience-5",
    title: "7-Day Mid-Range Epic Adventure\n(Stay on the Crater Rim)",
    price: "$2,450",
    image: safariSunsetVehicle,
    content: `Experience the best of Tanzania on this 7-day journey through its most famous national parks. From elephant herds beneath Tarangire's ancient baobabs to the endless plains of the Serengeti and the dramatic Ngorongoro Crater teeming with wildlife, this safari delivers unforgettable moments each day. Spend three nights in the Serengeti, where vast herds of wildebeest and zebra roam and predators lie in wait, and finish your adventure at Lake Manyara—home to flamingos and tree-climbing lions.

Itinerary Highlights:

Day 1 – Arrival in Arusha: Airport pickup and transfer to Arusha Planet Lodge. Time to rest and prepare for your safari. Meals at own expense.

Day 2 – Tarangire National Park: Game drive among baobab trees and large elephant herds. Picnic lunch inside the park, then continue to Karatu. Overnight at Eileen's Tree Inn.

Day 3 – Karatu to Serengeti: Drive through the Ngorongoro Conservation Area with a stop at the crater viewpoint before entering the Serengeti. Game drive en route. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti National Park: Full day exploring the Serengeti's diverse wildlife, from lions and leopards to wildebeest herds and hippos. Overnight at Nyota Luxury Camp.

Day 5 – Serengeti to Ngorongoro: Morning game drive as you depart the Serengeti. Continue to the Ngorongoro area for dinner and overnight at Rhino Lodge.

Day 6 – Ngorongoro Crater: Descend into the crater for one of Africa's greatest wildlife spectacles. Spot rhinos, lions, zebras, and flamingos before returning to Karatu. Overnight at Eileen's Tree Inn.

Day 7 – Lake Manyara National Park: Explore this compact park famous for flamingos, elephants, and tree-climbing lions. Picnic lunch and afternoon drive to Arusha or airport drop-off.

Included: Park fees, accommodation, meals (as listed), transport, professional guide, taxes, and airport transfers.

Excluded: International flights, tips, personal expenses, and optional add-ons (Balloon Safari, Maasai Village Visit, Night Game Drive, Crater Rim Walk, Olduvai Gorge visit).`,
  },
  {
    id: "experience-6",
    title: "7-Day Luxury Northern Tanzania Safari",
    price: "$4,500",
    image: gazelleSafari,
    content: `Experience Tanzania's premier wildlife destinations in comfort and style on this 7-day luxury safari. From Tarangire's towering baobabs to the endless plains of the Serengeti and the breathtaking Ngorongoro Crater, this journey offers world-class lodges, diverse landscapes, and unforgettable wildlife encounters.

Itinerary Overview

Day 1 – Arrival in Arusha

Arrive in Tanzania and meet your Grant Expedition representative for transfer to your accommodation. Enjoy time to rest and prepare for the adventure ahead.
Stay: Gran Melia
Meals: At own expense

Day 2 – Tarangire National Park

Travel to Tarangire, famous for its large elephant herds, 500+ bird species, and ancient baobab trees that dominate the landscape. Enjoy a picnic lunch and afternoon game drive before heading to your lodge.
Stay: Kitela Lodge
Meals & Drinks: All meals included (premium drinks excluded)

Day 3 – Lake Manyara National Park

Explore Lake Manyara, a compact but diverse park known for tree-climbing lions, large elephant herds, and over 400 bird species. Enjoy scenic woodlands, Rift Valley views, and wildlife along the lakeshore.
Stay: Kitela Lodge
Meals & Drinks: All meals included (premium drinks excluded)

Day 4 – Serengeti National Park

Drive through the Ngorongoro highlands with a stop at the crater viewpoint before entering the Serengeti. Famous for its vast grasslands and the Great Migration, the Serengeti offers some of the best wildlife viewing on Earth.
Stay: Nyota Luxury Camp
Meals & Drinks: All meals included (premium drinks excluded)

Day 5 – Serengeti National Park

Enjoy a full day in the Serengeti with the option of early morning and late afternoon drives or a full-day safari with picnic lunch. Known for its stable ecosystem and thriving predator populations, the Serengeti is ideal for spotting lions, cheetahs, and leopards.
Stay: Nyota Luxury Camp
Meals & Drinks: All meals included (premium drinks excluded)

Day 6 – Serengeti to Ngorongoro Crater

Descend into the world's largest intact volcanic caldera—home to 30,000 animals, including wildebeest, zebra, gazelle, and the endangered black rhino. After your crater game drive, continue to Karatu for dinner and overnight rest.
Stay: Kitela Lodge
Meals & Drinks: All meals included (premium drinks excluded)

Day 7 – Departure

Transfer to Arusha Town, Arusha Airport, or Kilimanjaro Airport depending on your travel plans. Your luxury safari adventure comes to an end.

Included

Park fees

All activities (unless optional)

All accommodations (unless upgraded)

Professional driver/guide

Transportation

All Taxes/VAT

Roundtrip airport transfer

Meals and drinks as listed

Excluded

International flights

Additional accommodation before/after the tour

Tips (recommended $15 per person/day)

Personal items (souvenirs, insurance, visas, etc.)

Optional activities (Balloon safari, Maasai village visit, Olduvai Gorge, night game drives)`,
  },
  {
    id: "experience-7",
    title: "7-Day Western Serengeti Migration Safari",
    price: "$3,100",
    image: giraffeMountainSunset,
    content: `This 7-day adventure highlights the Great Migration through the Western Corridor of the Serengeti—home to the Grumeti and Mbalageti Rivers, where predator action peaks as herds make daring river crossings.

Itinerary Overview

Day 1 – Arrival in Arusha
Pickup from the airport and transfer to Arusha Planet Lodge for rest.
Meals at own expense.

Day 2 – Tarangire National Park
Travel through the Masai plains to Tarangire and enjoy an afternoon game drive.
Stay: Eileen's Tree Inn – All meals included.

Day 3 – Central Serengeti (Seronera)
Drive through Ngorongoro highlands into the Serengeti. Afternoon game drive among migrating herds and predators.
Stay: Nyota Luxury Camp – All meals included.

Day 4 – Western Serengeti (Grumeti & Mbalageti Rivers)
Witness migration herds gathering along the riverbanks (May–July). Expect intense predator interactions and dramatic landscapes.
Stay: Mbalageti Serengeti – All meals included.

Day 5 – Return to Central Serengeti
Morning game drive in the Western Corridor, then head back to Seronera for more wildlife viewing.
Stay: Nyota Luxury Camp.

Day 6 – Ngorongoro Crater
Descend into the crater for a full-day safari before driving to Karatu.
Stay: Eileen's Tree Inn – All meals included.

Day 7 – Lake Manyara & Departure
Explore Lake Manyara's lush forests and diverse wildlife before returning to Arusha.
Stay: Arusha Planet Lodge – Breakfast & lunch included.

Included
Park fees, accommodations, meals as listed, professional guide, transportation, taxes, and airport transfers.

Excluded
International flights, extra nights, optional excursions, tips, personal expenses.`,
  },
  {
    id: "experience-8",
    title: "8-Day Mid-Range Ndutu Migration Footsteps",
    price: "$3,300",
    image: hornbillBird,
    content: `Follow the path of the Great Migration on this unforgettable 8-day safari through Tanzania's most iconic parks. From the elephant herds of Tarangire and the dramatic Ngorongoro Crater to the legendary plains of the Serengeti and Ndutu—where millions of wildebeest gather to calve between December and April—this journey immerses you in Tanzania's richest wildlife regions. Each day offers breathtaking scenery, diverse habitats, and extraordinary game-viewing opportunities.

Itinerary Highlights:

Day 1 – Arrival in Arusha: Airport pickup and transfer to Arusha Planet Lodge. Time to rest and prepare for your adventure. Meals at own expense.

Day 2 – Tarangire National Park: Game drive among giant baobabs and large elephant herds. Picnic lunch in the park, then continue to Karatu. Overnight at Eileen's Tree Inn.

Day 3 – Karatu to Central Serengeti: Drive through the Ngorongoro Conservation Area, stopping at the crater viewpoint before entering the Serengeti. Game drive en route. Overnight at Nyota Luxury Camp.

Day 4 – Serengeti National Park: Full day of game drives across Serengeti's open plains, spotting lions, cheetahs, elephants, and more. Overnight at Nyota Luxury Camp.

Day 5 – Serengeti to Ndutu (Southern Serengeti): Travel south toward Ndutu, following the Great Migration herds across the plains. Overnight at Serengeti Heritage Ndutu Camp.

Day 6 – Ndutu: Explore the heart of the Migration, where wildebeest calving season takes place (Dec–Apr). Experience predator action and vast herds across the Ndutu landscape. Overnight at Serengeti Heritage Ndutu Camp.

Day 7 – Ngorongoro Crater: Descend into the Crater for a day of incredible wildlife viewing, including black rhinos, lions, and flamingos. Afternoon drive to Karatu. Overnight at Eileen's Tree Inn.

Day 8 – Lake Manyara National Park: Discover this lush, compact park known for its flamingos, elephants, and tree-climbing lions. Picnic lunch and afternoon transfer to Arusha or airport drop-off.

Included: Park fees, accommodation, meals (as listed), transport, professional guide, taxes, and airport transfers.

Excluded: International flights, tips, personal expenses, and optional add-ons (Balloon Safari, Maasai Village Visit, Night Game Drive, Crater Rim Walk, Olduvai Gorge visit).`,
  },
  {
    id: "experience-9",
    title: "10-Day Great Migration Safari Itinerary",
    price: "$4,800",
    image: zebraPair,
    content: `This 10-day safari follows the world-famous Great Migration through Tanzania's most iconic parks, including Tarangire, Serengeti, Ngorongoro Crater, and Lake Manyara. From dramatic Mara River crossings to Big Five encounters, this route showcases the best of northern Tanzania.

Itinerary Overview

Day 1 – Arrival in Arusha
Airport pickup and transfer to Arusha Planet Lodge for rest.
Meals: At own expense.

Day 2 – Tarangire National Park
Scenic drive to Tarangire for a game drive among elephants, lions, and ancient baobabs.
Stay: Eileen's Tree Inn – All meals included.

Day 3 – Central Serengeti (Seronera)
Travel through Ngorongoro highlands into the Serengeti. Game drive to Nyota Luxury Camp.
All meals included.

Days 4–5 – North Serengeti (Migration Region)
Continue to the Mara River region to witness river crossings and large predators during migration season (Aug–Oct).
Stay: Mara Heritage Camp – All meals included.

Day 6 – Central Serengeti
Return to Seronera, home to lions, cheetahs, leopards, and year-round wildlife.
Stay: Nyota Luxury Camp.

Day 7 – Ngorongoro Crater Rim
Scenic drive toward Ngorongoro, overnighting at the crater rim.
Stay: Rhino Lodge – All meals included.

Day 8 – Ngorongoro Crater
Descend into the crater for a full-day game drive—one of the best places to see the Big Five.
Stay: Eileen's Tree Inn – All meals included.

Day 9 – Lake Manyara
Explore Lake Manyara's forests and flamingo-filled lake before returning to Arusha.
Stay: Arusha Planet Lodge – Breakfast & lunch included.

Day 10 – Departure
Transfer to the airport for onward travel.

Included

Park fees, accommodations, listed meals, professional driver/guide, transportation, taxes, and airport transfers.

Excluded

International flights, optional activities, additional nights, tips, personal expenses, visas, insurance.`,
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
                      Book Now - {experience.price}
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
