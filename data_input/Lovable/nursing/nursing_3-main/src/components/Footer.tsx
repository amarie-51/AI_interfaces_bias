import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="font-bold text-lg">BSN Program</span>
            </div>
            <p className="text-sm text-navy-foreground/80 mb-4">
              Preparing compassionate, skilled nurses to make a difference in healthcare communities worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  About Program
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Campus Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Financial Aid
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Career Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-navy-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 University Avenue<br />Health Sciences Building<br />Anytown, ST 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:nursing@university.edu" className="hover:text-primary transition-colors">
                  nursing@university.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-8 pt-8 text-center text-sm text-navy-foreground/60">
          <p>&copy; {new Date().getFullYear()} Bachelor of Science in Nursing Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
