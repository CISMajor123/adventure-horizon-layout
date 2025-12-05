import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import buildSafariBg from "@/assets/build-your-safari.png";

const buildSafariSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  nationality: z.string().min(1, "Please select your nationality"),
  phone: z.string().trim().min(1, "Phone number is required").max(50),
  arrivalDate: z.string().min(1, "Arrival date is required"),
  adults: z.number().min(1, "At least 1 adult is required"),
  children: z.number().min(0),
  budget: z.string().trim().min(1, "Budget is required"),
  additionalInfo: z.string().max(2000).optional(),
});

const nationalities = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", 
  "France", "Italy", "Spain", "Netherlands", "Belgium", "Switzerland",
  "Austria", "Sweden", "Norway", "Denmark", "Finland", "Ireland",
  "New Zealand", "South Africa", "Japan", "China", "India", "Brazil",
  "Mexico", "Argentina", "Other"
];

const BuildYourOwnSafari = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      nationality: formData.get("nationality") as string,
      phone: formData.get("phone") as string,
      arrivalDate: formData.get("arrivalDate") as string,
      adults: parseInt(formData.get("adults") as string) || 1,
      children: parseInt(formData.get("children") as string) || 0,
      budget: formData.get("budget") as string,
      additionalInfo: formData.get("additionalInfo") as string,
    };

    try {
      const validatedData = buildSafariSchema.parse(data);

      // Save to database
      const { error: dbError } = await supabase.from("safari_inquiries").insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        nationality: validatedData.nationality,
        phone: validatedData.phone,
        arrival_date: validatedData.arrivalDate,
        adults: validatedData.adults,
        children: validatedData.children,
        budget: validatedData.budget,
        additional_info: validatedData.additionalInfo || null,
      });

      if (dbError) {
        console.error("Database error:", dbError);
        throw dbError;
      }

      // Send email notifications
      const { error: emailError } = await supabase.functions.invoke("send-safari-booking-email", {
        body: validatedData,
      });

      if (emailError) {
        console.error("Email error:", emailError);
        // Don't throw - booking was saved successfully
      }

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you soon to plan your custom safari adventure.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative min-h-[55vh] md:min-h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${buildSafariBg})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay/50" />
        <Navigation bgColor="--destinations-bg" />
        <div className="relative z-10 text-center pt-36 md:pt-44 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-hero-text tracking-wide">
            Build Your Own Safari
          </h1>
          <p className="text-hero-text/80 mt-4 text-lg max-w-2xl mx-auto px-4">
            Design your perfect African adventure tailored to your dreams
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-secondary py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            {/* Form Header */}
            <div 
              className="py-6 px-8 text-center"
              style={{ background: "linear-gradient(135deg, hsl(30, 45%, 35%), hsl(40, 55%, 45%))" }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide">
                Build Your Own Safari
              </h2>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Nationality <span className="text-destructive">*</span>
                </Label>
                <Select name="nationality" required>
                  <SelectTrigger className="border-foreground/30 focus:border-primary">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    {nationalities.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="arrivalDate" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Arrival Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="arrivalDate"
                  name="arrivalDate"
                  type="date"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adults" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Number of Adults <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="adults"
                  name="adults"
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="children" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Number of Children <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="children"
                  name="children"
                  type="number"
                  min="0"
                  defaultValue="0"
                  required
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  What is your budget in US-Dollars <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  required
                  placeholder="e.g. $5,000 - $10,000"
                  className="border-foreground/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Any useful information you want to share with us?
                </Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  className="border-foreground/30 focus:border-primary resize-y"
                  placeholder="Tell us about your dream safari..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-base font-semibold tracking-wider uppercase"
                style={{ background: "linear-gradient(135deg, hsl(40, 55%, 45%), hsl(35, 45%, 55%))" }}
              >
                {isSubmitting ? "Submitting..." : "Book Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildYourOwnSafari;
