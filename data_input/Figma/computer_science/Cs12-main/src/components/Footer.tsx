import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white">CS</span>
              </div>
              <span className="text-white">BS in Computer Science</span>
            </div>
            <p className="text-sm mb-4">
              Empowering the next generation of computer scientists and technology leaders through innovative education and hands-on experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faculty')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Faculty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Admissions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Undergraduate</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Graduate</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Online Programs</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Research</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Internships</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 University Ave, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>admissions@university.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 University Computer Science Department. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
