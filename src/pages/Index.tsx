import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PopularActivities from "@/components/PopularActivities";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PopularActivities />
    </div>
  );
};

export default Index;
