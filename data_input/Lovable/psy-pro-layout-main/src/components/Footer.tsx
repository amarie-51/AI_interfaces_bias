import { NavLink } from "@/components/NavLink";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Psychology BA</h3>
            <p className="text-sm text-primary-foreground/80">
              Excellence in psychological education and research since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Program
                </NavLink>
              </li>
              <li>
                <NavLink to="/faculty" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Faculty
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-semibold mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Apply Now
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Requirements
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-sm text-primary-foreground/80 not-italic space-y-1">
              <p>University Campus</p>
              <p>123 Education Street</p>
              <p>Academic City, ST 12345</p>
              <p className="mt-3">
                <a href="tel:+15551234567" className="hover:text-primary-foreground transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@psychology.edu" className="hover:text-primary-foreground transition-colors">
                  info@psychology.edu
                </a>
              </p>
            </address>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} Psychology Bachelor's Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
