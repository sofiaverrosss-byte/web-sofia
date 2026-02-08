
import React from 'react';

interface FooterProps {
  onFAQClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onFAQClick }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-bold tracking-tighter mb-4">
              <span className="text-redCustom">SOFIA'S</span> GYM
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              Inspirando a la comunidad de Moaña a alcanzar su máximo potencial físico desde 2018.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm font-bold uppercase tracking-widest">
            <div className="space-y-4">
              <h5 className="text-gray-400">Gimnasio</h5>
              <ul className="space-y-2 text-gray-200 font-normal">
                <li><a href="#inicio" className="hover:text-redCustom transition">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-redCustom transition">Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-redCustom transition">Servicios</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-gray-400">Soporte</h5>
              <ul className="space-y-2 text-gray-200 font-normal">
                <li><a href="#contacto" className="hover:text-redCustom transition">Contacto</a></li>
                <li>
                  <button onClick={onFAQClick} className="hover:text-redCustom transition text-left uppercase tracking-widest font-bold text-xs">
                    Preguntas Frecuentes
                  </button>
                </li>
                <li><a href="#cuotas" className="hover:text-redCustom transition">Precios</a></li>
              </ul>
            </div>
            <div className="hidden sm:block space-y-4">
              <h5 className="text-gray-400">Legal</h5>
              <ul className="space-y-2 text-gray-200 font-normal">
                <li><a href="#" className="hover:text-redCustom transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-redCustom transition">Términos</a></li>
                <li><a href="#" className="hover:text-redCustom transition">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0 uppercase tracking-widest">
          <p>© {currentYear} Sofia's Gym Moaña. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <span className="text-redCustom font-bold">FUERZA & PASIÓN</span>
            <div className="w-1 h-4 bg-gray-800 hidden md:block"></div>
            <span>Diseñado para el alto rendimiento</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
