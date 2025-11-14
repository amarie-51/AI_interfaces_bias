import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">BSN Program</h3>
            <p className="text-sm opacity-90">
              Preparing compassionate, skilled nurses to meet the healthcare needs of tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Program
                </NavLink>
              </li>
              <li>
                <NavLink to="/faculty" className="opacity-90 hover:opacity-100 transition-opacity">
                  Faculty
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className="opacity-90 hover:opacity-100 transition-opacity">
                  Admissions
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>123 University Ave, City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="h-4 w-4" />
                <span>admissions@bsnprogram.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {currentYear} BSN Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
