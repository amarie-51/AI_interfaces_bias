import { NavLink } from "@/components/NavLink";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Program" },
    { to: "/faculty", label: "Faculty" },
    { to: "/admissions", label: "Admissions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <GraduationCap className="w-8 h-8" />
            <span>BSN Program</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-foreground hover:text-primary transition-colors font-medium"
                activeClassName="text-primary border-b-2 border-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <Button size="sm" className="ml-4">Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="w-full">Apply Now</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
