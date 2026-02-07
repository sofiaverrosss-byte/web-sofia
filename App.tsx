
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import GeminiCoach from './components/GeminiCoach';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar onInscribe={openModal} />
      
      <main>
        <Hero onPlanesClick={() => document.getElementById('cuotas')?.scrollIntoView({ behavior: 'smooth' })} />
        <About />
        <Services />
        <Pricing onSelectPlan={openModal} />
        <Contact />
      </main>

      <Footer />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Floating AI Coach Assistant */}
      <GeminiCoach />
    </div>
  );
};

export default App;
