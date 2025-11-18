import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { AboutProgram } from "./components/AboutProgram";
import { Faculty } from "./components/Faculty";
import { Admissions } from "./components/Admissions";
import { Contact } from "./components/Contact";
import { ApplicationModal } from "./components/ApplicationModal";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home onApplyClick={() => setApplicationModalOpen(true)} />;
      case "about":
        return <AboutProgram />;
      case "faculty":
        return <Faculty />;
      case "admissions":
        return <Admissions onApplyClick={() => setApplicationModalOpen(true)} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onApplyClick={() => setApplicationModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer onTabChange={setActiveTab} />

      <ApplicationModal
        open={applicationModalOpen}
        onOpenChange={setApplicationModalOpen}
      />
    </div>
  );
}
