
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import SocialModal from './components/SocialModal';
import FAQModal from './components/FAQModal';
import GeminiCoach from './components/GeminiCoach';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [socialPlatform, setSocialPlatform] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openFAQ = () => setIsFAQOpen(true);
  const closeFAQ = () => setIsFAQOpen(false);

  const openSocial = (platform: string) => setSocialPlatform(platform);
  const closeSocial = () => setSocialPlatform(null);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar onInscribe={openModal} />
      
      <main>
        <Hero 
          onPlanesClick={() => scrollToId('cuotas')} 
          onServicesClick={() => scrollToId('servicios')}
        />
        <About />
        <Services />
        <Pricing onSelectPlan={openModal} />
        <Contact onSocialClick={openSocial} />
      </main>

      <Footer onFAQClick={openFAQ} />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
      <SocialModal platform={socialPlatform} onClose={closeSocial} />
      <FAQModal isOpen={isFAQOpen} onClose={closeFAQ} />
      
      {/* Floating AI Coach Assistant */}
      <GeminiCoach />
    </div>
  );
};

export default App;
