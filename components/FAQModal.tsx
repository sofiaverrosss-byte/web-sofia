
import React, { useEffect } from 'react';
import { X, ChevronDown, HelpCircle } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: "¿Necesito experiencia previa para empezar?",
    answer: "¡Para nada! En Sofia's Gym Moaña tenemos programas para todos los niveles. Nuestros entrenadores te guiarán desde el primer día para que aprendas la técnica correcta y evites lesiones."
  },
  {
    question: "¿Cuál es el horario del gimnasio?",
    answer: "Abrimos de Lunes a Viernes de 06:00 a 23:00. Los Sábados y Domingos estamos operativos de 08:00 a 20:00 para que el fin de semana no sea una excusa."
  },
  {
    question: "¿Tienen vestuarios y duchas?",
    answer: "Sí, disponemos de vestuarios completos, duchas individuales y taquillas seguras para todos nuestros socios."
  },
  {
    question: "¿Hay algún compromiso de permanencia?",
    answer: "No creemos en las ataduras. Puedes cancelar tu suscripción en cualquier momento avisando con 5 días de antelación al fin de tu ciclo de facturación."
  },
  {
    question: "¿Puedo probar un día antes de apuntarme?",
    answer: "¡Claro! Ofrecemos un pase de día por 10€ que se te descontará de tu primera cuota si decides inscribirte el mismo día."
  }
];

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      {/* Backdrop con desenfoque */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Contenedor del Modal */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header del Modal */}
        <div className="p-6 bg-black text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-redCustom p-2 rounded-lg">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-oswald uppercase tracking-tight">Preguntas Frecuentes</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group"
            aria-label="Cerrar pestaña"
          >
            <X className="w-8 h-8 text-gray-400 group-hover:text-white" />
          </button>
        </div>

        {/* Cuerpo del Modal (Scrollable) */}
        <div className="overflow-y-auto p-8 space-y-6">
          <p className="text-gray-500 italic mb-8 border-l-4 border-redCustom pl-4">
            Todo lo que necesitas saber sobre tu nuevo centro de entrenamiento en Moaña.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                  <span className="text-redCustom font-oswald text-xl">0{index + 1}.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Botón de cierre inferior solicitado */}
          <div className="pt-10 pb-4">
            <button 
              onClick={onClose}
              className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-redCustom transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              CERRAR PESTAÑA
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 uppercase font-bold tracking-widest">
              Sofia's Gym Moaña • Tu éxito es nuestro objetivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
