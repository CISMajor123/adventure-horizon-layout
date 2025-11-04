import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import teamPhoto from "@/assets/team-photo.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });

    // Reset form
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation bgColor="--contact-header-bg" />
      <main className="flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-28">
        {/* Left Column - Team Photo */}
        <div className="w-full lg:w-[45%] h-[40vh] lg:h-screen">
          <img
            src={teamPhoto}
            alt="Grant Expedition team with safari vehicle in Tanzania"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full lg:w-[55%] bg-[hsl(var(--contact-bg))] flex items-center justify-center px-6 py-16 lg:py-24">
          <div className="w-full max-w-5xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(var(--contact-teal))] mb-12 tracking-wide">
              CONTACT
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-serif text-lg">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="border-0 border-b border-foreground/30 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--contact-teal))] transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-serif text-lg">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-0 border-b border-foreground/30 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--contact-teal))] transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-serif text-lg">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="border-0 border-b border-foreground/30 rounded-none bg-transparent px-0 resize-none focus-visible:ring-0 focus-visible:border-[hsl(var(--contact-teal))] transition-colors"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[hsl(var(--contact-teal))] hover:bg-[hsl(var(--contact-teal-hover))] text-white font-serif text-lg px-8 py-6 rounded-full transition-colors"
                >
                  Contact us
                </Button>
              </form>

              {/* Business Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4 tracking-wide">
                    CONTACT
                  </h2>
                  <a
                    href="mailto:info@grantexpedition.com"
                    className="text-foreground hover:text-[hsl(var(--contact-teal))] transition-colors underline text-lg"
                  >
                    info@grantexpedition.com
                  </a>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4 tracking-wide">
                    BASED IN
                  </h2>
                  <address className="not-italic text-foreground text-lg leading-relaxed">
                    Usa River,
                    <br />
                    Arusha, Tanzania
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
