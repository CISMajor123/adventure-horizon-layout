import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Placeholder for next section */}
      <section id="next-section" className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">More Content Coming Soon</h2>
          <p className="text-muted-foreground">This is where additional content will be added</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
