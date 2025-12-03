import { Binoculars, Footprints, Camera, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    icon: Binoculars,
    title: "Bird Watching",
    description: "Discover Tanzania's incredible birdlife in their natural habitats with expert guidance.",
  },
  {
    icon: Footprints,
    title: "Walking Safaris",
    description: "Get close to the wild on guided walking safaris for an authentic adventure experience.",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture the breathtaking wildlife and landscapes on a professional safari photography tour.",
  },
  {
    icon: Globe,
    title: "Cultural Tours",
    description: "Immerse yourself in Tanzania's rich cultures and meet local communities along your journey.",
  },
];

const PopularActivities = () => {
  return (
    <section className="py-12 md:py-20 bg-[#e8e0cd]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-10 md:mb-16 font-playfair">
          Our Popular Activities
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Left side - Descriptive text */}
          <div className="space-y-4 md:space-y-6 text-foreground order-2 md:order-1">
            <p className="text-base md:text-lg leading-relaxed">
              From bird watching to thrilling walking safaris guided by experienced experts, there is always something exciting to experience. <span className="font-semibold">Let us guide you to the wonders of Africa.</span>
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              Grant Expedition is a destination management company headquartered in Arusha with over 9 years of impeccable service and reputation. We organize epic safaris and hiking adventures in Tanzania's vibrant heartland.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              Our operations are powered by over 250 local specialists and complemented by our global, multilingual team of expert consultants to provide seamless service.
            </p>
          </div>

          {/* Right side - Activity cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 order-1 md:order-2">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={activity.title}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-border bg-card"
                >
                  <CardContent className="p-4 md:p-6 flex flex-col items-center text-center space-y-2 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <Icon className="w-8 h-8 md:w-12 md:h-12 text-desert-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-sm md:text-lg text-foreground">
                      {activity.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularActivities;
