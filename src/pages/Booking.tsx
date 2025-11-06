import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import bookingBg from "@/assets/booking-background.jpg";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  arrival_date: z.string().min(1, "Arrival date is required"),
  duration: z.string().trim().min(1, "Duration is required").max(50),
  adults: z.number().int().min(1, "At least 1 adult required"),
  children: z.number().int().min(0),
  budget: z.string().trim().min(1, "Budget is required").max(100),
  destination: z.string().trim().min(1, "Destination is required").max(200),
  additional_info: z.string().max(1000).optional(),
});

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        arrival_date: formData.get("arrival_date") as string,
        duration: formData.get("duration") as string,
        adults: parseInt(formData.get("adults") as string),
        children: parseInt(formData.get("children") as string) || 0,
        budget: formData.get("budget") as string,
        destination: formData.get("destination") as string,
        additional_info: (formData.get("additional_info") as string) || "",
      };

      // Validate with zod
      const validated = bookingSchema.parse(data);

      // Save to Supabase  
      const { error } = await supabase.from("bookings").insert({
        name: validated.name,
        email: validated.email,
        arrival_date: validated.arrival_date,
        duration: validated.duration,
        adults: validated.adults,
        children: validated.children,
        budget: validated.budget,
        destination: validated.destination,
        additional_info: validated.additional_info || null,
      });

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setSubmitMessage({ 
        type: 'success', 
        text: "Booking submitted successfully! We'll contact you soon." 
      });

      // Reset form after a short delay to ensure state updates
      setTimeout(() => {
        e.currentTarget.reset();
      }, 100);
      
    } catch (error) {
      console.error("Form submission error:", error);
      if (error instanceof z.ZodError) {
        setSubmitMessage({ 
          type: 'error', 
          text: error.errors[0].message 
        });
      } else if (error && typeof error === 'object' && 'message' in error) {
        setSubmitMessage({ 
          type: 'error', 
          text: (error as any).message || "Failed to submit booking. Please try again." 
        });
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: "Failed to submit booking. Please try again." 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Full background image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${bookingBg})` }}
      />
      
      {/* Static Heading */}
      <div className="container mx-auto px-6 pt-32 pb-8">
        <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-[#2C1810] italic text-center">
          Booking Form
        </h1>
      </div>
      
      <div className="container mx-auto px-6 pb-16">
        <div className="flex justify-center">
          {/* Form Container - Centered */}
          <div className="bg-[#E8DCC8] border-2 border-[#2C1810] p-10 max-w-lg w-full">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-[#2C1810] font-serif text-base">Name *</Label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  required 
                  className="mt-1 bg-white border-none rounded-full h-11"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-[#2C1810] font-serif text-base">Email *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  required 
                  className="mt-1 bg-white border-none rounded-full h-11"
                />
              </div>

              {/* Arrival Date & Duration - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="arrival" className="text-[#2C1810] font-serif text-base">Arrival Date *</Label>
                  <Input 
                    id="arrival_date"
                    name="arrival_date"
                    type="date" 
                    required 
                    className="mt-1 bg-white border-none rounded-full h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="text-[#2C1810] font-serif text-base">Duration *</Label>
                  <Input 
                    id="duration"
                    name="duration"
                    type="text" 
                    required 
                    className="mt-1 bg-white border-none rounded-full h-11"
                  />
                </div>
              </div>

              {/* Adults & Children - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults" className="text-[#2C1810] font-serif text-base">Adults *</Label>
                  <Input 
                    id="adults"
                    name="adults"
                    type="number" 
                    required 
                    min="1"
                    className="mt-1 bg-white border-none rounded-full h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="children" className="text-[#2C1810] font-serif text-base">Children*</Label>
                  <Input 
                    id="children"
                    name="children"
                    type="number" 
                    min="0"
                    defaultValue="0"
                    className="mt-1 bg-white border-none rounded-full h-11"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget" className="text-[#2C1810] font-serif text-base">What's your budget? *</Label>
                <Input 
                  id="budget"
                  name="budget"
                  type="text" 
                  required 
                  className="mt-1 bg-white border-none rounded-full h-11"
                />
              </div>

              {/* Destination */}
              <div>
                <Label htmlFor="destination" className="text-[#2C1810] font-serif text-base">Destination *</Label>
                <Input 
                  id="destination"
                  name="destination"
                  type="text" 
                  required 
                  className="mt-1 bg-white border-none rounded-full h-11"
                />
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additional" className="text-[#2C1810] font-serif text-base">Additional Information</Label>
                <Textarea 
                  id="additional_info"
                  name="additional_info"
                  rows={3}
                  className="mt-1 bg-white border-none rounded-2xl resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4A9B8E] hover:bg-[#3D8275] text-white px-10 py-2.5 rounded-full text-base font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Book Now"}
                </Button>
              </div>
            </form>
        </div>
      </div>
      
      {/* Toast notification - bottom right */}
      {submitMessage && (
        <div className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-lg max-w-md z-50 animate-in slide-in-from-bottom-5 ${
          submitMessage.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : 'bg-red-100 text-red-800 border border-red-300'
        }`}>
          {submitMessage.text}
        </div>
      )}
    </div>
    </div>
  );
};

export default Booking;
