import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutProgramPage } from "./components/AboutProgramPage";
import { FacultyPage } from "./components/FacultyPage";
import { AdmissionsPage } from "./components/AdmissionsPage";
import { ContactPage } from "./components/ContactPage";
import { ApplicationModal } from "./components/ApplicationModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"general" | "visit" | "info">("general");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleOpenModal = (type: "general" | "visit" | "info") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} onOpenModal={handleOpenModal} />;
      case "about":
        return <AboutProgramPage onOpenModal={handleOpenModal} />;
      case "faculty":
        return <FacultyPage onOpenModal={handleOpenModal} />;
      case "admissions":
        return <AdmissionsPage onOpenModal={handleOpenModal} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      <ApplicationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />
    </div>
  );
}
