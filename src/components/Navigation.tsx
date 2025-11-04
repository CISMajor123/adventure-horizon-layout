import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--destinations-bg))]">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img src={logo} alt="Grant Expedition Ltd" className="h-16 w-auto" />
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-[hsl(var(--contact-teal))]"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-foreground text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-[hsl(var(--contact-teal))]"
            >
              ABOUT
            </Link>
            <Link
              to="/destinations"
              className="text-foreground text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-[hsl(var(--contact-teal))]"
            >
              DESTINATIONS
            </Link>
            <Link
              to="/contact"
              className="text-foreground text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-[hsl(var(--contact-teal))]"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
