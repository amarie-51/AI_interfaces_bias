import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutProgram } from './components/AboutProgram';
import { Faculty } from './components/Faculty';
import { Admissions } from './components/Admissions';
import { Contact } from './components/Contact';
import { ApplicationModal } from './components/ApplicationModal';

type Page = 'home' | 'about' | 'faculty' | 'admissions' | 'contact';
type ModalType = 'apply' | 'request-info' | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [modalOpen, setModalOpen] = useState<ModalType>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleOpenModal = (type: 'apply' | 'request-info') => {
    setModalOpen(type);
  };

  const handleCloseModal = () => {
    setModalOpen(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenModal={handleOpenModal} />;
      case 'about':
        return <AboutProgram />;
      case 'faculty':
        return <Faculty />;
      case 'admissions':
        return <Admissions onOpenModal={handleOpenModal} />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <ApplicationModal
        isOpen={modalOpen !== null}
        onClose={handleCloseModal}
        type={modalOpen || 'apply'}
      />
    </div>
  );
}
