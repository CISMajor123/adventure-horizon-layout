import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location || !formData.message.trim()) {
      setSubmitMessage({ text: "Please fill in all required fields", type: 'error' });
      setTimeout(() => setSubmitMessage(null), 5000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage({ text: "Please enter a valid email address", type: 'error' });
      setTimeout(() => setSubmitMessage(null), 5000);
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            message: formData.message,
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setSubmitMessage({ text: "Failed to submit inquiry. Please try again.", type: 'error' });
        setTimeout(() => setSubmitMessage(null), 5000);
        return;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          message: formData.message,
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
      }

      setSubmitMessage({ text: "Message sent! We'll get back to you soon.", type: 'success' });
      setTimeout(() => setSubmitMessage(null), 5000);

      // Reset form
      setFormData({ fullName: "", email: "", phone: "", location: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage({ text: "An unexpected error occurred. Please try again.", type: 'error' });
      setTimeout(() => setSubmitMessage(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-destinations-bg">
      <Navigation bgColor="--destinations-bg" />
      <main className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 md:pt-40">
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
                      <SelectItem value="zanzibar">Zanzibar</SelectItem>
                      <SelectItem value="mount-kilimanjaro">Mount Kilimanjaro</SelectItem>
                      <SelectItem value="mid-range-safari">Mid-Range Safari</SelectItem>
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
        </div>
      </main>

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
  );
};

export default Contact;
