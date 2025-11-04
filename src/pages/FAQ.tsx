import Navigation from "@/components/Navigation";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">FAQ</h1>
        <p className="text-xl text-muted-foreground">
          Frequently asked questions will be added here.
        </p>
      </main>
    </div>
  );
};

export default FAQ;
