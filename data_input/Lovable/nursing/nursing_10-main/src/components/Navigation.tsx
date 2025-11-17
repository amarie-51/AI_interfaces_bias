import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Program" },
    { to: "/faculty", label: "Faculty" },
    { to: "/admissions", label: "Admissions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-primary">
            BSN Program
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-foreground/80 hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/admissions">
              <Button variant="hero" size="sm">
                Apply Now
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/admissions" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="sm" className="w-full">
                Apply Now
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
