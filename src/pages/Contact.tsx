import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import giraffeImage from "@/assets/giraffe-safari.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="grid md:grid-cols-2 min-h-screen pt-20">
        {/* Left Column - Image */}
        <div className="hidden md:block">
          <img 
            src={giraffeImage} 
            alt="Giraffes in Tanzania" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Form and Contact Info */}
        <div className="bg-[#e8e0cd] px-8 md:px-16 py-20 flex items-center">
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-playfair mb-12 text-[#5B8A8A]">
              CONTACT
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8 mb-12">
              <div>
                <Label htmlFor="fullName" className="text-foreground text-base mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="border-0 border-b-2 border-black rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-b-[#5B8A8A]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground text-base mb-2 block">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-0 border-b-2 border-black rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-b-[#5B8A8A]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground text-base mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-0 border-b-2 border-black rounded-none bg-transparent px-0 min-h-[100px] resize-none focus-visible:ring-0 focus-visible:border-b-[#5B8A8A]"
                />
              </div>

              <Button 
                type="submit"
                className="bg-[#5B8A8A] hover:bg-[#4A7373] text-white px-8 py-6 rounded-full text-base transition-colors"
              >
                Contact us
              </Button>
            </form>

            {/* Contact Information */}
            <div className="space-y-8 text-foreground">
              <div>
                <h3 className="text-xl font-playfair mb-2">CONTACT</h3>
                <a 
                  href="mailto:info@grantexpedition.com" 
                  className="text-base hover:text-[#5B8A8A] transition-colors underline"
                >
                  info@grantexpedition.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-playfair mb-2">BASED IN</h3>
                <p className="text-base">
                  Usa River,<br />
                  Arusha, Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
