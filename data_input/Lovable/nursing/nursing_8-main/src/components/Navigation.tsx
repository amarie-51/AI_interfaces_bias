import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Program" },
    { to: "/faculty", label: "Faculty" },
    { to: "/admissions", label: "Admissions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-primary">
            BSN Program
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild size="sm" className="ml-2">
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="w-full mt-4">
              <NavLink to="/admissions" onClick={() => setIsOpen(false)}>
                Apply Now
              </NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
