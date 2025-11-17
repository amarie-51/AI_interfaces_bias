import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Program", path: "/about" },
    { name: "Faculty", path: "/faculty" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">CS Bachelor's Program</h3>
            <p className="text-sm opacity-90 mb-4">
              Empowering the next generation of computer science innovators with cutting-edge
              education and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 University Drive, Campus City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>admissions@university.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} CS Bachelor's Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
