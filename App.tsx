import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ServiceModal from './components/ServiceModal';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NewPatients from './pages/NewPatients';
import { Service, Language } from './types';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Auto open appointment modal after 3 seconds on first load
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsAppointmentOpen(true);
        sessionStorage.setItem('hasSeenModal', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleAppointment = () => setIsAppointmentOpen(!isAppointmentOpen);
  const openService = (service: Service) => setSelectedService(service);
  const closeService = () => setSelectedService(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          onOpenAppointment={() => setIsAppointmentOpen(true)} 
        />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} onOpenAppointment={() => setIsAppointmentOpen(true)} onOpenService={openService} />} />
            <Route path="/services" element={<ServicesPage onOpenService={openService} />} />
            <Route path="/about" element={<About onOpenAppointment={() => setIsAppointmentOpen(true)} />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new-patient" element={<NewPatients onOpenAppointment={() => setIsAppointmentOpen(true)} />} />
          </Routes>
        </div>

        <Footer language={language} />

        {/* Global Modals & Floating Buttons */}
        <FloatingButtons onOpenAppointment={() => setIsAppointmentOpen(true)} />
        
        <AppointmentModal 
          isOpen={isAppointmentOpen} 
          onClose={() => setIsAppointmentOpen(false)} 
          language={language} 
        />
        
        <ServiceModal 
            service={selectedService} 
            onClose={closeService}
            onBook={() => setIsAppointmentOpen(true)}
        />
      </div>
    </Router>
  );
}

export default App;