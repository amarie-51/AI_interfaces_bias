import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useNavigation } from '../App';

type Page = 'home' | 'about' | 'faculty' | 'admissions' | 'contact';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { navigate } = useNavigation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="text-white">CS Program</span>
            </div>
            <p className="text-sm">
              Empowering the next generation of computer scientists and technology leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('home')} className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="text-sm hover:text-blue-400 transition-colors">
                  About Program
                </button>
              </li>
              <li>
                <button onClick={() => navigate('faculty')} className="text-sm hover:text-blue-400 transition-colors">
                  Faculty
                </button>
              </li>
              <li>
                <button onClick={() => navigate('admissions')} className="text-sm hover:text-blue-400 transition-colors">
                  Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Career Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white mb-4">Connect With Us</h3>
            <div className="space-y-2 mb-4">
              <p className="text-sm">123 University Avenue</p>
              <p className="text-sm">College Town, ST 12345</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
              <p className="text-sm">Email: cs@university.edu</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Computer Science Bachelor's Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
