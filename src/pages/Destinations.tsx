import Navigation from "@/components/Navigation";
import DestinationCard from "@/components/DestinationCard";
import zanzibarImage from "@/assets/zanzibar-beach.jpg";
import kilimanjaroImage from "@/assets/kilimanjaro-trekking.jpg";
import midRangeSafariImage from "@/assets/mid-range-safari.jpg";

const destinations = [
  {
    title: "Zanzibar Beach Vacation",
    duration: "2–7 Days",
    price: "$1,400 – $4,000",
    image: zanzibarImage,
    slug: "zanzibar-beach-vacation",
    hoverDescription: "Zanzibar is a tropical paradise off Tanzania's coast, known for its white-sand beaches, turquoise waters, and rich blend of African, Arab, and European cultures. Visitors can explore historic Stone Town, tour fragrant spice plantations, or dive among vibrant coral reefs—all while enjoying stunning sunsets and warm island hospitality.",
  },
  {
    title: "Kilimanjaro Trekking Expedition",
    duration: "5–8 Days",
    price: "$1,950 – $3,020",
    image: kilimanjaroImage,
    slug: "/kilimanjaro",
    hoverDescription: "A Kilimanjaro trekking expedition offers the adventure of a lifetime—ascending Africa's highest peak through lush rainforests, alpine meadows, and rugged volcanic terrain. Trekkers experience breathtaking views, diverse ecosystems, and the thrill of reaching Uhuru Peak, the \"Roof of Africa,\" where sunrise over the clouds rewards every step of the journey.",
  },
  {
    title: "Mid-Range Safari",
    duration: "3–10 Days",
    price: "$1,850 – $4,300",
    image: midRangeSafariImage,
    slug: "mid-range-safari",
    hoverDescription: "A Tanzania safari is an unforgettable journey through some of Africa's most iconic landscapes. From the vast plains of the Serengeti—home to the Great Migration—to the wildlife-rich Ngorongoro Crater and the elephants of Tarangire National Park, visitors can witness Africa's Big Five up close. With breathtaking scenery, diverse wildlife, and warm local hospitality, Tanzania offers the ultimate African safari experience.",
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
