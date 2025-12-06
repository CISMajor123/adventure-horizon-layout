import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { CartDrawer } from "./CartDrawer";

interface NavigationProps {
  bgColor?: string;
  solidOnScroll?: boolean;
}

const Navigation = ({ bgColor = "transparent", solidOnScroll = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!solidOnScroll) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [solidOnScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const showSolidBg = solidOnScroll && isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        showSolidBg 
          ? "bg-destinations-bg" 
          : bgColor === "transparent" 
            ? "bg-transparent" 
            : ""
      }`} 
      style={!showSolidBg && bgColor !== "transparent" ? { backgroundColor: `hsl(var(${bgColor}))` } : {}}
    >
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img src={logo} alt="Grant Expedition Ltd" className="h-20 md:h-32 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-hero-text text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-desert-gold"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-hero-text text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-desert-gold"
            >
              ABOUT
            </Link>
            <Link
              to="/destinations"
              className="text-hero-text text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-desert-gold"
            >
              DESTINATIONS
            </Link>
            <Link
              to="/contact"
              className="text-hero-text text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-desert-gold"
            >
              CONTACT
            </Link>
            <CartDrawer />
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-4">
            <CartDrawer />
            <button
              onClick={toggleMenu}
              className="text-hero-text p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-destinations-bg/95 backdrop-blur-sm border-t border-hero-text/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-hero-text text-base font-medium tracking-wider uppercase py-3 transition-all duration-300 hover:text-desert-gold"
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="text-hero-text text-base font-medium tracking-wider uppercase py-3 transition-all duration-300 hover:text-desert-gold"
            >
              ABOUT
            </Link>
            <Link
              to="/destinations"
              onClick={closeMenu}
              className="text-hero-text text-base font-medium tracking-wider uppercase py-3 transition-all duration-300 hover:text-desert-gold"
            >
              DESTINATIONS
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-hero-text text-base font-medium tracking-wider uppercase py-3 transition-all duration-300 hover:text-desert-gold"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
