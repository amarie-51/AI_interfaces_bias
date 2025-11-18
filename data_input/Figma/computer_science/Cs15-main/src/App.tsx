import { useState, createContext, useContext } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { AboutProgram } from "./components/pages/AboutProgram";
import { Faculty } from "./components/pages/Faculty";
import { Admissions } from "./components/pages/Admissions";
import { Contact } from "./components/pages/Contact";

type Page = "/" | "/about" | "/faculty" | "/admissions" | "/contact";

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("/");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <Home />;
      case "/about":
        return <AboutProgram />;
      case "/faculty":
        return <Faculty />;
      case "/admissions":
        return <Admissions />;
      case "/contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{renderPage()}</main>
        <Footer />
      </div>
    </NavigationContext.Provider>
  );
}
