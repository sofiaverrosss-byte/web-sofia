
import React from 'react';

interface HeroProps {
  onPlanesClick: () => void;
  onServicesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlanesClick, onServicesClick }) => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" 
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-redCustom text-xl md:text-2xl font-bold mb-4 tracking-[0.3em] font-oswald animate-pulse">
          ENTRENA EN MOAÑA
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 font-oswald leading-tight">
          SUPERA TUS <span className="text-redCustom">LÍMITES</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed">
          El centro de alto rendimiento donde tu transformación comienza. Tecnología punta y el mejor ambiente de Galicia para llevarte al siguiente nivel.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={onPlanesClick}
            className="bg-redCustom text-white px-10 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition duration-300 shadow-lg hover:shadow-redCustom/20"
          >
            VER PLANES
          </button>
          <button 
            onClick={onServicesClick}
            className="border-2 border-white px-10 py-4 rounded font-bold text-lg hover:bg-redCustom hover:border-redCustom transition duration-300 backdrop-blur-sm"
          >
            SERVICIOS
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-redCustom to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
