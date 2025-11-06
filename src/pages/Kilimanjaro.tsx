import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";

const Kilimanjaro = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kilimanjaroHero})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white font-playfair tracking-tight">
            Mount Kilimanjaro
          </h1>
        </div>
      </section>
      
      {/* Routes Section */}
      <section className="bg-secondary py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* First Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Card 1 - 5 Days */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-destinations-title px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  5 Days Mount Kilimanjaro Marangu Route
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-foreground mb-6">
                  <p>DAY 1: MARANGU GATE → MANDARA HUTS: 7km | 4–5 hrs | Rainforest</p>
                  <p>DAY 2: MANDARA HUTS → HOROMBO HUTS: 11km/6mi | 6–8 hrs | Moorland</p>
                  <p>DAY 3: HOROMBO HUTS → KIBO HUTS: 10km/6mi | 6–8 hrs | Semi-Desert</p>
                  <p>DAY 4: KIBO HUTS → SUMMIT → 21.5km | up 7–8 hrs | down 4–5 hrs | Alpine Desert</p>
                  <p>DAY 5: HOROMBO HUTS → MARANGU GATE → MOSHI: 18km/11mi | 6–7hrs | Rainforest</p>
                </div>
                <Link to="/contact">
                  <Button 
                    className="w-full bg-desert-gold hover:bg-desert-gold/90 text-white font-semibold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Card 2 - 6 Days */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-destinations-title px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  6 Days Mount Kilimanjaro Marangu Route
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-foreground mb-6">
                  <p>DAY 1: MACHAME GATE → MACHAME CAMP: 10.75km/7mi | 5–7 hrs | Rainforest</p>
                  <p>DAY 2: MACHAME CAMP → SHIRA CAMP: 5.3km/3.4mi | 4–5 hrs | Moorland</p>
                  <p>DAY 3: SHIRA CAMP → LAVA TOWER → BARRANCO CAMP: 10.75km/6mi | 6–8 hrs | Semi-Desert</p>
                  <p>DAY 4: BARRANCO CAMP → KARANGA CAMP → BARAFU CAMP: 8.5km/5mi | 8–9 hrs | Alpine Desert</p>
                  <p>DAY 5: BARAFU CAMP → SUMMIT → 18.6km/11.5mi | up 7–8 hrs | down 4–6 hrs | Alpine/Glaciers</p>
                  <p>DAY 6: MWEKA CAMP → MWEKA GATE → MOSHI: 9.1km/6mi | 3–4 hrs | Rainforest</p>
                </div>
                <Link to="/contact">
                  <Button 
                    className="w-full bg-desert-gold hover:bg-desert-gold/90 text-white font-semibold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Second Row - 1 Card Centered */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2">
              <div className="bg-destinations-title px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  8 Days Mount Kilimanjaro Marangu Route
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-foreground mb-6">
                  <p>DAY 1: LEMOSHO GATE → MTI MKUBWA CAMP: 4.8km/3mi | 3–4 hrs | Rainforest</p>
                  <p>DAY 2: MTI MKUBWA CAMP → SHIRA 1 CAMP: 7.9km/5mi | 5–7 hrs | Moorland</p>
                  <p>DAY 3: SHIRA CAMP → SHIRA HUT: 6.9km/4.3mi | 5 hrs | Moorland</p>
                  <p>DAY 4: SHIRA HUT → LAVA TOWER → BARRANCO CAMP: 10km/6mi | 4–6 hrs | Semi-Desert</p>
                  <p>DAY 5: BARRANCO CAMP → KARANGA CAMP: 5.2km/3.2mi | 4–5 hrs | Alpine Desert</p>
                  <p>DAY 6: KARANGA CAMP → BARAFU CAMP: 3.9km/2.4mi | 4–5 hrs | Alpine Desert</p>
                  <p>DAY 7: BARAFU CAMP → SUMMIT → MWEKA CAMP: 13km/8mi | 9–11 hrs</p>
                  <p>DAY 8: MWEKA CAMP → MWEKA GATE → MOSHI: 9.1km/6mi | 3–4 hrs | Rainforest</p>
                </div>
                <Link to="/contact">
                  <Button 
                    className="w-full bg-desert-gold hover:bg-desert-gold/90 text-white font-semibold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                    size="lg"
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
