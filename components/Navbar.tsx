
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-black py-4'} text-white px-6 flex justify-between items-center border-b-2 border-redCustom`}>
      <div className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="text-redCustom">SOFIA'S</span> GYM
      </div>
      
      <div className="hidden md:flex space-x-8">
        {['inicio', 'nosotros', 'servicios', 'cuotas', 'contacto'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="nav-link text-sm font-bold tracking-wider hover:text-redCustom transition uppercase"
          >
            {item}
          </a>
        ))}
      </div>

      <button
        onClick={onInscribe}
        className="bg-redCustom px-6 py-2 rounded font-bold hover:bg-white hover:text-black transition uppercase text-sm border-2 border-transparent hover:border-black"
      >
        Inscríbete
      </button>
    </nav>
  );
};

export default Navbar;
