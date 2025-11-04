import { useState } from "react";
import Navigation from "@/components/Navigation";
import giraffeImage from "@/assets/giraffe-safari.jpg";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ fullName: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#e6e0d0]">
      <Navigation />
      
      <main className="min-h-screen pt-24 md:pt-0">
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Left Column - Image */}
          <div className="relative h-64 md:h-screen">
            <img
              src={giraffeImage}
              alt="Giraffes in Tanzania safari landscape"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex items-center justify-center p-8 md:p-16">
            <div className="w-full max-w-2xl">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#5c8f8f] mb-12 tracking-wider">
                CONTACT
              </h1>

              <div className="bg-[#e6e0d0] p-8 md:p-12 border border-[#5c8f8f]/20 rounded-sm">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="fullName" className="sr-only">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full bg-transparent border-b-2 border-[#2a2a2a] pb-2 text-[#2a2a2a] placeholder:text-[#2a2a2a]/60 focus:outline-none focus:border-[#5c8f8f] transition-colors font-serif"
                        aria-label="Full Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                        className="w-full bg-transparent border-b-2 border-[#2a2a2a] pb-2 text-[#2a2a2a] placeholder:text-[#2a2a2a]/60 focus:outline-none focus:border-[#5c8f8f] transition-colors font-serif"
                        aria-label="E-mail"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-[#2a2a2a] pb-2 text-[#2a2a2a] placeholder:text-[#2a2a2a]/60 focus:outline-none focus:border-[#5c8f8f] transition-colors resize-none font-serif"
                        aria-label="Message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#5c8f8f] hover:bg-[#4a7373] text-white px-8 py-3 rounded-full transition-colors font-serif tracking-wide"
                    >
                      Contact us
                    </button>
                  </form>

                  {/* Business Info */}
                  <div className="space-y-8 font-serif">
                    <div>
                      <h2 className="text-lg font-semibold text-[#2a2a2a] mb-2 tracking-widest">
                        CONTACT
                      </h2>
                      <a
                        href="mailto:info@grantexpedition.com"
                        className="text-[#2a2a2a] hover:text-[#5c8f8f] transition-colors underline"
                      >
                        info@grantexpedition.com
                      </a>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#2a2a2a] mb-2 tracking-widest">
                        BASED IN
                      </h2>
                      <address className="text-[#2a2a2a] not-italic leading-relaxed">
                        Usa River,
                        <br />
                        Arusha, Tanzania
                      </address>
                    </div>
                  </div>
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
