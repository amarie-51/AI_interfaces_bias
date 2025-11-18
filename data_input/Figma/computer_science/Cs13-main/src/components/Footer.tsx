import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">CS</span>
              </div>
              <span className="text-white">Computer Science</span>
            </div>
            <p className="text-sm">
              Empowering the next generation of tech leaders through innovative education and hands-on experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('home')} className="hover:text-blue-400 transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-blue-400 transition-colors text-sm">
                  About Program
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('faculty')} className="hover:text-blue-400 transition-colors text-sm">
                  Faculty
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('admissions')} className="hover:text-blue-400 transition-colors text-sm">
                  Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 University Drive, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>cs.admissions@university.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6">
              <button 
                onClick={() => handleNavigate('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 Computer Science Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
