import Navigation from "@/components/Navigation";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";

const Kilimanjaro = () => {
  const tours = [
    {
      title: "5 Days Mount Kilimanjaro Marangu Route",
      itinerary: [
        "DAY 1: MARANGU GATE – MANDARA HUTS: 7k mi | 4-5 hrs | Rainforest",
        "DAY 2: MANDARA HUTS – HOROMBO HUTS: 11km/6mi | 6-8hrs | Mooreland",
        "DAY 3: HOROMBO HUTS - KIBO HUTS: 10km/6mi | 6-8hrs | Semi-Desert",
        "DAY 4: KIBO HUTS – SUMMIT: 4km /2.5 mi up | 5-7hrs | – HOROMBO HUTS: 14km /9mi down | 6-8hrs | Glaciers, Snow Capped Summit",
        "DAY 5: HOROMBO HUTS – MARANGU GATE – MOSHI: 18km/11mi |6-7hrs | Rainforest"
      ]
    },
    {
      title: "6 Days Mount Kilimanjaro Marangu Route",
      itinerary: [
        "DAY 1: MACHAME GATE – MACHAME CAMP: 10.75k /7mi | 5-6 hrs | Rainforest",
        "DAY 2: MACHAME CAMP – SHIRA CAMP: 5.3km/3mi | 4-6hrs | Morland",
        "DAY 3: SHIRA CAMP – LAVA TOWER – BARRANCO CAMP: 10.75km/6mi | 5-8hrs | Semi-Desert",
        "DAY 4: BARRANCO CAMP – KARANGA CAMP – BARAFU CAMP: 8.5km/5mi | 6-8hrs | Alpine Desert",
        "DAY 5: BARAFU CAMP – SUMMIT: 4.88km /3mi up | 5-7hrs | – MWEKA CAMP: 13km /8mi down | 5-6hrs | Glaciers, Snow Capped Summit",
        "DAY 6: MWEKA CAMP – MWEKA GATE – MOSHI: 9.1km/6mi |3-4hrs | Rainforest"
      ]
    },
    {
      title: "8 Days Mount Kilimanjaro Marangu Route",
      itinerary: [
        "DAY 1: LEMOSHO GATE – MTI MKUBWA CAMP: 4.8km /3mi | 3-4 hrs | Rainforest",
        "DAY 2: MTI MKUBWA CAMP – SHIRA I CAMP: 7.9km/5mi | 4-6hrs | Moorland",
        "DAY 3: SHIRA I CAMP - SHIRA HUT: 6.9km/4.3mi | 5-7hrs | Moorland",
        "DAY 4: SHIRA HUT – LAVA TOWER – BARRANCO CAMP: 10.1km/6.3mi | 4-6hrs | Semi Desert",
        "DAY 5: BARRANCO CAMP – KARANGA CAMP: 5.2km/3mi | 4-5hrs | Alpine Desert",
        "DAY 6: HIKE KARANGA CAMP - BARAFU CAMP: 3.3km /2 mi | 4-5hrs | Alpine Desert",
        "DAY 7: BARAFU CAMP – SUMMIT: 4.86km /3mi up | 5-7hrs | – MWEKA CAMP: 13km /8mi down | 5-6hrs | Glaciers, Snow Capped Summit",
        "DAY 8: MWEKA CAMP – MWEKA GATE – MOSHI: 9.1km/6mi |3-4hrs | Rainforest"
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f8f6' }}>
      <Navigation bgColor="--destinations-bg" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kilimanjaroHero})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mount Kilimanjaro
          </h1>
        </div>
      </section>

      {/* Tours Section */}
      <main className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tours.map((tour, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e3df'
              }}
            >
              {/* Title Bar */}
              <div 
                className="px-5 py-3.5" 
                style={{ backgroundColor: '#d5cdac' }}
              >
                <h3 className="text-base md:text-lg font-bold text-gray-800">
                  {tour.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Itinerary */}
                <div className="space-y-2">
                  {tour.itinerary.map((day, dayIndex) => (
                    <p 
                      key={dayIndex} 
                      className="text-xs md:text-sm leading-relaxed"
                      style={{ color: '#3a3a3a' }}
                    >
                      {day}
                    </p>
                  ))}
                </div>
                
                {/* Book Now Button */}
                <button
                  className="w-full py-3.5 rounded-lg font-semibold text-white text-base transition-all duration-300 hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: '#b1976b',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8c7a4f';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#b1976b';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Kilimanjaro;
