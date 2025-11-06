import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import bookingBg from "@/assets/booking-background.jpg";

const Booking = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Full background image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${bookingBg})` }}
      />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start min-h-screen">
          {/* Form Container - Left Side */}
          <div className="bg-[#E8DCC8] rounded-lg shadow-lg p-8 max-w-md mx-auto lg:mx-0 w-full sticky top-24">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-[#2C1810] font-serif">Name *</Label>
                <Input 
                  id="name" 
                  type="text" 
                  required 
                  className="mt-2 bg-white border-none rounded-full"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-[#2C1810] font-serif">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="mt-2 bg-white border-none rounded-full"
                />
              </div>

              {/* Arrival Date & Duration - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="arrival" className="text-[#2C1810] font-serif">Arrival Date *</Label>
                  <Input 
                    id="arrival" 
                    type="date" 
                    required 
                    className="mt-2 bg-white border-none rounded-full"
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="text-[#2C1810] font-serif">Duration *</Label>
                  <Input 
                    id="duration" 
                    type="text" 
                    required 
                    placeholder="e.g. 7 days"
                    className="mt-2 bg-white border-none rounded-full"
                  />
                </div>
              </div>

              {/* Adults & Children - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults" className="text-[#2C1810] font-serif">Adults *</Label>
                  <Input 
                    id="adults" 
                    type="number" 
                    required 
                    min="1"
                    className="mt-2 bg-white border-none rounded-full"
                  />
                </div>
                <div>
                  <Label htmlFor="children" className="text-[#2C1810] font-serif">Children*</Label>
                  <Input 
                    id="children" 
                    type="number" 
                    min="0"
                    defaultValue="0"
                    className="mt-2 bg-white border-none rounded-full"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget" className="text-[#2C1810] font-serif">What's your budget? *</Label>
                <Input 
                  id="budget" 
                  type="text" 
                  required 
                  placeholder="e.g. $5000"
                  className="mt-2 bg-white border-none rounded-full"
                />
              </div>

              {/* Destination */}
              <div>
                <Label htmlFor="destination" className="text-[#2C1810] font-serif">Destination *</Label>
                <Input 
                  id="destination" 
                  type="text" 
                  required 
                  placeholder="e.g. Serengeti, Kilimanjaro"
                  className="mt-2 bg-white border-none rounded-full"
                />
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additional" className="text-[#2C1810] font-serif">Additional Information</Label>
                <Textarea 
                  id="additional" 
                  rows={4}
                  className="mt-2 bg-white border-none rounded-lg"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  className="bg-[#4A9B8E] hover:bg-[#3D8275] text-white px-12 py-6 rounded-full text-base font-medium"
                >
                  Book Now
                </Button>
              </div>
            </form>
          </div>

          {/* Heading - Right Side */}
          <div className="hidden lg:flex items-center justify-center">
            <h1 className="font-serif text-6xl xl:text-7xl text-[#2C1810] italic text-center">
              Booking Form
            </h1>
          </div>

          {/* Mobile Heading - Above Form */}
          <div className="lg:hidden col-span-full order-first">
            <h1 className="font-serif text-5xl text-[#2C1810] italic text-center mb-8">
              Booking Form
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
