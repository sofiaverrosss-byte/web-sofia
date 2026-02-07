
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-oswald">ENCUÉNTRANOS EN <span className="text-redCustom">MOAÑA</span></h2>
          
          <div className="space-y-8">
            <div className="flex items-start group">
              <div className="p-3 bg-gray-100 rounded-lg text-redCustom group-hover:bg-redCustom group-hover:text-white transition duration-300 mr-5">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-oswald">Dirección</h4>
                <p className="text-gray-600">Rúa Concepción Arenal, 45, 36950 Moaña, Pontevedra</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-3 bg-gray-100 rounded-lg text-redCustom group-hover:bg-redCustom group-hover:text-white transition duration-300 mr-5">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-oswald">Teléfono</h4>
                <p className="text-gray-600">+34 986 00 00 00</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-3 bg-gray-100 rounded-lg text-redCustom group-hover:bg-redCustom group-hover:text-white transition duration-300 mr-5">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-oswald">Horario</h4>
                <p className="text-gray-600">Lunes - Viernes: 06:00 - 23:00</p>
                <p className="text-gray-600">Sábados - Domingos: 08:00 - 20:00</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="font-bold mb-6 font-oswald uppercase tracking-widest text-sm text-gray-500">Síguenos</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="social-btn flex items-center justify-center h-12 bg-black text-white rounded-full px-4 group hover:bg-redCustom overflow-hidden whitespace-nowrap">
                <Instagram className="w-5 h-5 shrink-0" />
                <span className="font-bold uppercase text-xs">Instagram</span>
              </a>
              <a href="#" className="social-btn flex items-center justify-center h-12 bg-black text-white rounded-full px-4 group hover:bg-redCustom overflow-hidden whitespace-nowrap">
                <Facebook className="w-5 h-5 shrink-0" />
                <span className="font-bold uppercase text-xs">Facebook</span>
              </a>
              <a href="#" className="social-btn flex items-center justify-center h-12 bg-black text-white rounded-full px-4 group hover:bg-redCustom overflow-hidden whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                <span className="font-bold uppercase text-xs">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-3xl shadow-inner border border-gray-100">
          {formStatus === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                {/* Fixed: Added Check to lucide-react imports above */}
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold font-oswald uppercase">¡Mensaje Enviado!</h3>
              <p className="text-gray-600">Gracias por contactarnos. Nuestro equipo te responderá en menos de 24 horas.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-redCustom font-bold hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold mb-2 font-oswald uppercase">Escríbenos</h3>
              <p className="text-gray-500 mb-6 italic text-sm">¿Dudas sobre el entrenamiento? Estamos aquí para ayudarte.</p>
              
              <div>
                <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Nombre Completo</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-redCustom/20 focus:border-redCustom transition-all"
                  placeholder="Tu nombre..."
                />
              </div>
              
              <div>
                <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Email de Contacto</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-redCustom/20 focus:border-redCustom transition-all"
                  placeholder="ejemplo@email.com"
                />
              </div>
              
              <div>
                <label className="block text-xs font-black mb-2 uppercase tracking-widest text-gray-700">Tu Consulta</label>
                <textarea 
                  rows={4} 
                  required 
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-redCustom/20 focus:border-redCustom transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus === 'loading'}
                className="w-full bg-black text-white py-5 rounded-xl font-bold text-lg hover:bg-redCustom transition-colors duration-300 flex items-center justify-center group disabled:opacity-50"
              >
                {formStatus === 'loading' ? 'ENVIANDO...' : (
                  <>
                    ENVIAR CONSULTA
                    <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
