import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground">
          Content for the About page will be added here.
        </p>
      </main>
    </div>
  );
};

export default About;
