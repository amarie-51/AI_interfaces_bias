import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white">BSN Program</h3>
            <p className="text-sm">
              Empowering the next generation of healthcare professionals through 
              excellence in nursing education and clinical practice.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-white transition-colors">
                About Program
              </Link>
              <Link to="/faculty" className="text-sm hover:text-white transition-colors">
                Faculty
              </Link>
              <Link to="/admissions" className="text-sm hover:text-white transition-colors">
                Admissions
              </Link>
              <Link to="/contact" className="text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 University Drive<br />Medical Campus, MC 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>bsn@university.edu</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2024 Bachelor of Science in Nursing Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
