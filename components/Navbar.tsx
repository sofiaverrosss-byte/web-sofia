
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onInscribe: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInscribe }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajuste para el navbar sticky
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-xl' : 'bg-black py-4'} text-white px-6 flex justify-between items-center border-b-2 border-redCustom`}>
      <div 
        className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-redCustom">SOFIA'S</span>&nbsp;GYM
      </div>
      
      <div className="hidden md:flex space-x-8">
        {[
          { name: 'inicio', id: 'inicio' },
          { name: 'nosotros', id: 'nosotros' },
          { name: 'servicios', id: 'servicios' },
          { name: 'cuotas', id: 'cuotas' },
          { name: 'contacto', id: 'contacto' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className="nav-link text-sm font-bold tracking-wider hover:text-redCustom transition uppercase"
          >
            {item.name}
          </a>
        ))}
      </div>

      <button
        onClick={onInscribe}
        className="bg-redCustom px-6 py-2 rounded font-bold hover:bg-white hover:text-black transition uppercase text-sm border-2 border-transparent hover:border-black shadow-lg active:scale-95"
      >
        Inscríbete
      </button>
    </nav>
  );
};

export default Navbar;
