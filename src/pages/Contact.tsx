import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
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
    setFormData({ fullName: "", email: "", phone: "", location: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
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
        <div className="w-full lg:w-[55%] bg-destinations-bg flex items-center justify-center px-6 py-12 lg:py-24">
          <div className="w-full max-w-4xl">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Send us Your Inquiry
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground font-semibold">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-ring"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">
                      Phone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-ring"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email and Preferred Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-ring"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-foreground font-semibold">
                      Preferred Location
                    </Label>
                    <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                      <SelectTrigger className="bg-muted border-0 focus:ring-1 focus:ring-ring">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="arusha">Arusha</SelectItem>
                        <SelectItem value="serengeti">Serengeti</SelectItem>
                        <SelectItem value="zanzibar">Zanzibar</SelectItem>
                        <SelectItem value="kilimanjaro">Kilimanjaro</SelectItem>
                        <SelectItem value="ngorongoro">Ngorongoro</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, questions, or how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="bg-muted border-0 resize-none focus-visible:ring-1 focus-visible:ring-ring"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-desert-gold hover:bg-desert-gold/90 text-foreground font-semibold text-base px-8 py-6 rounded-lg transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info Below Form */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h2 className="font-semibold text-lg text-foreground mb-2">
                  CONTACT
                </h2>
                <a
                  href="mailto:info@grantexpedition.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@grantexpedition.com
                </a>
              </div>

              <div>
                <h2 className="font-semibold text-lg text-foreground mb-2">
                  BASED IN
                </h2>
                <address className="not-italic text-muted-foreground leading-relaxed">
                  Usa River, Arusha, Tanzania
                </address>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
