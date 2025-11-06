import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import bookingBg from "@/assets/booking-background.jpg";

const Booking = () => {
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
            <form className="space-y-5">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-[#2C1810] font-serif text-base">Name *</Label>
                <Input 
                  id="name" 
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
                    id="arrival" 
                    type="date" 
                    required 
                    className="mt-1 bg-white border-none rounded-full h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="text-[#2C1810] font-serif text-base">Duration *</Label>
                  <Input 
                    id="duration" 
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
                  type="text" 
                  required 
                  className="mt-1 bg-white border-none rounded-full h-11"
                />
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additional" className="text-[#2C1810] font-serif text-base">Additional Information</Label>
                <Textarea 
                  id="additional" 
                  rows={3}
                  className="mt-1 bg-white border-none rounded-2xl resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <Button 
                  type="submit"
                  className="bg-[#4A9B8E] hover:bg-[#3D8275] text-white px-10 py-2.5 rounded-full text-base font-medium"
                >
                  Book Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
