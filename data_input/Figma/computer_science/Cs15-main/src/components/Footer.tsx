import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { useNavigation } from "../App";

export function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <span className="text-white">BS Computer Science</span>
            </div>
            <p className="text-sm">
              Empowering the next generation of technology leaders through
              cutting-edge education and hands-on experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/about")} className="hover:text-blue-400 transition-colors">
                  About Program
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/faculty")} className="hover:text-blue-400 transition-colors">
                  Faculty
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/admissions")} className="hover:text-blue-400 transition-colors">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")} className="hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Career Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Alumni Network
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Connect With Us</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>123 University Avenue</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: admissions@university.edu</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 University Computer Science Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
