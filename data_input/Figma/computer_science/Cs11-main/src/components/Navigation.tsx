import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigation } from '../App';

type Page = 'home' | 'about' | 'faculty' | 'admissions' | 'contact';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage, navigate } = useNavigation();

  const links: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About Program', page: 'about' },
    { name: 'Faculty', page: 'faculty' },
    { name: 'Admissions', page: 'admissions' },
    { name: 'Contact', page: 'contact' },
  ];

  const isActive = (page: Page) => currentPage === page;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => navigate('home')} className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-gray-900">CS Bachelor's Program</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={`transition-colors ${
                  isActive(link.page)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => navigate('admissions')}>
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigate(link.page);
                  setIsOpen(false);
                }}
                className={`block py-2 transition-colors w-full text-left ${
                  isActive(link.page)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="w-full"
              onClick={() => {
                navigate('admissions');
                setIsOpen(false);
              }}
            >
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
