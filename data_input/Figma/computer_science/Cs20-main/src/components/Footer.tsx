import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
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
              Empowering the next generation of tech leaders through innovative education and hands-on learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-sm hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-sm hover:text-white transition-colors">
                  About Program
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faculty')} className="text-sm hover:text-white transition-colors">
                  Faculty
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="text-sm hover:text-white transition-colors">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-sm hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>Bachelor's Degree</li>
              <li>Master's Degree</li>
              <li>PhD Programs</li>
              <li>Online Courses</li>
              <li>Certifications</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 University Ave, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>admissions@cs.edu</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 Computer Science Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
