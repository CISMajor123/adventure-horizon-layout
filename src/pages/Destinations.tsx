import Navigation from "@/components/Navigation";
import DestinationCard from "@/components/DestinationCard";
import zanzibarImage from "@/assets/zanzibar-beach.jpg";
import kilimanjaroImage from "@/assets/kilimanjaro-trekking.jpg";
import midRangeSafariImage from "@/assets/mid-range-safari.jpg";
import buildYourSafariImage from "@/assets/build-your-safari.png";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const destinations = [
  {
    title: "Zanzibar Beach Vacation",
    duration: "2–7 Days",
    price: "$1,400 – $4,000",
    image: zanzibarImage,
    slug: "/zanzibar-island",
    hoverDescription: "Zanzibar is a tropical paradise off Tanzania's coast, known for its white-sand beaches, turquoise waters, and rich blend of African, Arab, and European cultures. Visitors can explore historic Stone Town, tour fragrant spice plantations, or dive among vibrant coral reefs—all while enjoying stunning sunsets and warm island hospitality.",
  },
  {
    title: "Kilimanjaro Trekking Expedition",
    duration: "5–8 Days",
    price: "$1,950 – $3,020",
    image: kilimanjaroImage,
    slug: "../kilimanjaro",
    hoverDescription: "A Kilimanjaro trekking expedition offers the adventure of a lifetime—ascending Africa's highest peak through lush rainforests, alpine meadows, and rugged volcanic terrain. Trekkers experience breathtaking views, diverse ecosystems, and the thrill of reaching Uhuru Peak, the \"Roof of Africa,\" where sunrise over the clouds rewards every step of the journey.",
  },
  {
    title: "Mid-Range Safari",
    duration: "3–10 Days",
    price: "$1,850 – $4,300",
    image: midRangeSafariImage,
    slug: "/mid-range-safari",
    hoverDescription: "A Tanzania safari is an unforgettable journey through some of Africa's most iconic landscapes. From the vast plains of the Serengeti—home to the Great Migration—to the wildlife-rich Ngorongoro Crater and the elephants of Tarangire National Park, visitors can witness Africa's Big Five up close. With breathtaking scenery, diverse wildlife, and warm local hospitality, Tanzania offers the ultimate African safari experience.",
  },
  {
    title: "Build Your Own Safari",
    duration: "Custom",
    price: "Contact Us",
    image: buildYourSafariImage,
    slug: "/build-your-own-safari",
    hoverDescription: "Get a custom safari trip to your specific requested locations! Work with our expert team to design your perfect African adventure, tailored to your interests, timeline, and budget.",
  },
];

const Destinations = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      <main className="container mx-auto px-4 md:px-6 pt-28 md:pt-40 pb-12 md:pb-20">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-destinations-title mb-8 md:mb-16">
          DESTINATIONS
        </h1>
        
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-4">
              {destinations.map((destination) => (
                <CarouselItem key={destination.slug} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <DestinationCard {...destination} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-destinations-title/20 border-destinations-title/30 text-destinations-title hover:bg-destinations-title/40" />
            <CarouselNext className="hidden md:flex -right-12 bg-destinations-title/20 border-destinations-title/30 text-destinations-title hover:bg-destinations-title/40" />
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
