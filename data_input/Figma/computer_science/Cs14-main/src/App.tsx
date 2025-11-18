import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { AboutProgram } from "./components/pages/AboutProgram";
import { Faculty } from "./components/pages/Faculty";
import { Admissions } from "./components/pages/Admissions";
import { Contact } from "./components/pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <AboutProgram />;
      case "faculty":
        return <Faculty />;
      case "admissions":
        return <Admissions />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
