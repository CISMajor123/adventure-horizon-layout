import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import kilimanjaroImage from "@/assets/kilimanjaro-hero.jpg";

const routes = [
  {
    title: "5 Days Mount Kilimanjaro Marangu Route",
    itinerary: [
      "DAY 1: MARANGU GATE → MANDARA HUTS: 7km | 4–5 hrs | Rainforest",
      "DAY 2: MANDARA HUTS → HOROMBO HUTS: 11km/6mi | 6–8 hrs | Moorland",
      "DAY 3: HOROMBO HUTS → KIBO HUTS: 10km/6mi | 6–8 hrs | Semi-Desert",
      "DAY 4: KIBO HUTS → SUMMIT → 21.5km | up 7–8 hrs | down 4–5 hrs | Alpine Desert",
      "DAY 5: HOROMBO HUTS → MARANGU GATE → MOSHI: 18km/11mi | 6–7hrs | Rainforest",
    ],
  },
  {
    title: "6 Days Mount Kilimanjaro Marangu Route",
    itinerary: [
      "DAY 1: MACHAME GATE → MACHAME CAMP: 10.75km/7mi | 5–7 hrs | Rainforest",
      "DAY 2: MACHAME CAMP → SHIRA CAMP: 5.3km/3.4mi | 4–5 hrs | Moorland",
      "DAY 3: SHIRA CAMP → LAVA TOWER → BARRANCO CAMP: 10.75km/6mi | 6–8 hrs | Semi-Desert",
      "DAY 4: BARRANCO CAMP → KARANGA CAMP → BARAFU CAMP: 8.5km/5mi | 8–9 hrs | Alpine Desert",
      "DAY 5: BARAFU CAMP → SUMMIT → 18.6km/11.5mi | up 7–8 hrs | down 4–6 hrs | Alpine/Glaciers",
      "DAY 6: MWEKA CAMP → MWEKA GATE → MOSHI: 9.1km/6mi | 3–4 hrs | Rainforest",
    ],
  },
  {
    title: "8 Days Mount Kilimanjaro Marangu Route",
    itinerary: [
      "DAY 1: LEMOSHO GATE → MTI MKUBWA CAMP: 4.8km/3mi | 3–4 hrs | Rainforest",
      "DAY 2: MTI MKUBWA CAMP → SHIRA 1 CAMP: 7.9km/5mi | 5–7 hrs | Moorland",
      "DAY 3: SHIRA CAMP → SHIRA HUT: 6.9km/4.3mi | 5 hrs | Moorland",
      "DAY 4: SHIRA HUT → LAVA TOWER → BARRANCO CAMP: 10km/6mi | 4–6 hrs | Semi-Desert",
      "DAY 5: BARRANCO CAMP → KARANGA CAMP: 5.2km/3.2mi | 4–5 hrs | Alpine Desert",
      "DAY 6: KARANGA CAMP → BARAFU CAMP: 3.9km/2.4mi | 4–5 hrs | Alpine Desert",
      "DAY 7: BARAFU CAMP → SUMMIT → MWEKA CAMP: 13km/8mi | 9–11 hrs",
      "DAY 8: MWEKA CAMP → MWEKA GATE → MOSHI: 9.1km/6mi | 3–4 hrs | Rainforest",
    ],
  },
];

const Kilimanjaro = () => {
  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center mt-20">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kilimanjaroImage})` }}
        >
          <div className="absolute inset-0 bg-hero-overlay/30" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-hero-text tracking-tight">
            Mount Kilimanjaro
          </h1>
        </div>
      </section>
      
      {/* Route Cards Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* First Two Cards */}
          {routes.slice(0, 2).map((route, index) => (
            <div key={index} className="bg-card border border-border rounded-lg shadow-sm overflow-hidden flex flex-col">
              <div className="bg-destinations-title px-6 py-4">
                <h2 className="font-playfair text-2xl text-card font-semibold">
                  {route.title}
                </h2>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="space-y-3 mb-6 flex-grow">
                  {route.itinerary.map((day, dayIndex) => (
                    <p key={dayIndex} className="text-sm text-foreground leading-relaxed">
                      {day}
                    </p>
                  ))}
                </div>
                <Link to="/contact">
                  <Button 
                    className="w-full bg-desert-gold hover:bg-desert-gold/90 text-primary-foreground rounded-full py-6 text-base font-medium"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Third Card Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
          <div className="lg:col-start-1 lg:col-span-2 lg:max-w-[calc(50%-1rem)] lg:mx-auto">
            <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
              <div className="bg-destinations-title px-6 py-4">
                <h2 className="font-playfair text-2xl text-card font-semibold">
                  {routes[2].title}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {routes[2].itinerary.map((day, dayIndex) => (
                    <p key={dayIndex} className="text-sm text-foreground leading-relaxed">
                      {day}
                    </p>
                  ))}
                </div>
                <Link to="/contact">
                  <Button 
                    className="w-full bg-desert-gold hover:bg-desert-gold/90 text-primary-foreground rounded-full py-6 text-base font-medium"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kilimanjaro;
