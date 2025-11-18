import { useState, createContext, useContext } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutProgram } from './pages/AboutProgram';
import { Faculty } from './pages/Faculty';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';

type Page = 'home' | 'about' | 'faculty' | 'admissions' | 'contact';

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutProgram />;
      case 'faculty':
        return <Faculty />;
      case 'admissions':
        return <Admissions />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </NavigationContext.Provider>
  );
}
