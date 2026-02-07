
import React, { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset submitted state after closing animation
      const timer = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative bg-white rounded-3xl p-8 md:p-12 max-w-xl w-full shadow-2xl transform transition-all duration-300 scale-100">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-6">
            <div className="w-24 h-24 bg-redCustom/10 text-redCustom rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold font-oswald uppercase">¡BIENVENIDO AL EQUIPO!</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hemos recibido tu solicitud. Un asesor se pondrá en contacto contigo en breve para completar tu alta.
            </p>
            <button 
              onClick={onClose}
              className="mt-6 bg-black text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-redCustom transition shadow-xl"
            >
              CERRAR
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold mb-2 font-oswald uppercase tracking-tight">
              ÚNETE AL <span className="text-redCustom">EQUIPO</span>
            </h2>
            <p className="text-gray-500 mb-10 italic text-lg leading-tight border-l-4 border-redCustom pl-4">
              Estás a un paso de tu mejor versión. Rellena el formulario y asegura tu plaza.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Nombre</label>
                  <input type="text" required className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-redCustom/20 outline-none" placeholder="Sofia" />
                </div>
                <div>
                  <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Apellidos</label>
                  <input type="text" required className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-redCustom/20 outline-none" placeholder="Rodríguez" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Email Corporativo / Personal</label>
                <input type="email" required className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-redCustom/20 outline-none" placeholder="tu@email.com" />
              </div>
              
              <div>
                <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Plan de Interés</label>
                <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-redCustom/20 outline-none appearance-none cursor-pointer">
                  <option>Plan Básico - 29€/mes</option>
                  <option selected>Plan Pro - 39€/mes</option>
                  <option>Plan Elite - 59€/mes</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-redCustom text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-redCustom/40 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl"
              >
                INSCRIBIRME AHORA
              </button>
              
              <p className="text-[11px] text-center text-gray-400 mt-4 leading-relaxed px-6">
                Al inscribirte aceptas recibir comunicaciones comerciales sobre tu entrenamiento y promociones exclusivas de Sofia's Gym.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
