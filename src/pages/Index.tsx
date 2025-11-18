import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PopularActivities from "@/components/PopularActivities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PopularActivities />
      <Footer />
    </div>
  );
};

export default Index;
