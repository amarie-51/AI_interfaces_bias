import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../App";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage, navigate } = useNavigation();

  const navLinks = [
    { path: "/" as const, label: "Home" },
    { path: "/about" as const, label: "About Program" },
    { path: "/faculty" as const, label: "Faculty" },
    { path: "/admissions" as const, label: "Admissions" },
    { path: "/contact" as const, label: "Contact" },
  ];

  const isActive = (path: string) => currentPage === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 cursor-pointer"
          >
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-gray-900">Bachelor of Science</span>
              <span className="text-blue-600 text-sm">Computer Science</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
