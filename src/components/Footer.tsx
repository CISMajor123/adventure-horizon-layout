import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3d3530] text-[#d4b896] py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Grant Expedition Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grant Expedition</h3>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner in unforgettable Tanzanian adventures. From safaris to trekking, we offer personalized itineraries that connect you with nature, culture, and adventure.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Grant-expedition-ltd/100063871123184/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-[#d4b896] flex items-center justify-center hover:bg-[#d4b896] hover:text-[#3d3530] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/grant_expedition_ltd/?hl=en"
                target="_blank"
                rel="noopener noreferrer nofollow"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-[#d4b896] flex items-center justify-center hover:bg-[#d4b896] hover:text-[#3d3530] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:info@grantexpedition.com" className="hover:text-white transition-colors">
                  info@grantexpedition.com
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <a href="tel:+255766437358" className="hover:text-white transition-colors">
                  +255 766 437 358
                </a>
              </p>
              <p>
                <span className="font-bold">Address:</span> Arusha, Tanzania
              </p>
            </div>
          </div>

          {/* Main Menu Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Main Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d4b896]/30 pt-8">
          <p className="text-center text-sm">
            © 2025 Grant Expedition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
