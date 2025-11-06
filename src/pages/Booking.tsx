import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import bookingBackground from "@/assets/booking-background.jpg";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    arrivalDate: "",
    duration: "",
    adults: "",
    children: "",
    budget: "",
    destination: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "We'll get back to you shortly with a customized itinerary.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${bookingBackground})` }}
      >
        {/* Form Container - Left Side */}
        <div className="container mx-auto px-6 py-20 flex items-center justify-between">
          <div className="w-full max-w-md bg-[hsl(var(--secondary))] rounded-lg shadow-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-normal text-foreground mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-full bg-white border-none"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-normal text-foreground mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-full bg-white border-none"
                />
              </div>

              {/* Arrival Date & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="arrivalDate" className="text-sm font-normal text-foreground mb-2 block">
                    Arrival Date *
                  </Label>
                  <Input
                    id="arrivalDate"
                    name="arrivalDate"
                    type="date"
                    required
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    className="rounded-full bg-white border-none"
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="text-sm font-normal text-foreground mb-2 block">
                    Duration *
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    placeholder="e.g., 7 days"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                    className="rounded-full bg-white border-none"
                  />
                </div>
              </div>

              {/* Adults & Children */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults" className="text-sm font-normal text-foreground mb-2 block">
                    Adults *
                  </Label>
                  <Input
                    id="adults"
                    name="adults"
                    type="number"
                    min="1"
                    required
                    value={formData.adults}
                    onChange={handleChange}
                    className="rounded-full bg-white border-none"
                  />
                </div>
                <div>
                  <Label htmlFor="children" className="text-sm font-normal text-foreground mb-2 block">
                    Children*
                  </Label>
                  <Input
                    id="children"
                    name="children"
                    type="number"
                    min="0"
                    required
                    value={formData.children}
                    onChange={handleChange}
                    className="rounded-full bg-white border-none"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget" className="text-sm font-normal text-foreground mb-2 block">
                  What's your budget? *
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="e.g., $5000"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="rounded-full bg-white border-none"
                />
              </div>

              {/* Destination */}
              <div>
                <Label htmlFor="destination" className="text-sm font-normal text-foreground mb-2 block">
                  Destination *
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  placeholder="e.g., Serengeti, Zanzibar"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  className="rounded-full bg-white border-none"
                />
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo" className="text-sm font-normal text-foreground mb-2 block">
                  Additional Information
                </Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-3xl bg-white border-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  className="bg-[hsl(var(--contact-teal))] hover:bg-[hsl(var(--contact-teal-hover))] text-white px-12 py-5 rounded-full text-base font-medium"
                >
                  Book Now
                </Button>
              </div>
            </form>
          </div>

          {/* Title - Right Side (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <h1 className="font-['Playfair_Display'] text-7xl lg:text-8xl text-center italic text-foreground">
              Booking Form
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
