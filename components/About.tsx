
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-redCustom/20 rounded-lg blur-xl group-hover:bg-redCustom/30 transition duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Sofia's Gym Coaching" 
            className="relative rounded-lg shadow-2xl border-l-8 border-redCustom transform hover:-translate-y-2 transition duration-500"
          />
        </div>
        
        <div className="space-y-8">
          <div className="border-l-4 border-redCustom pl-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic font-oswald">¿QUIÉNES SOMOS?</h2>
            <div className="w-16 h-1 bg-redCustom"></div>
          </div>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Fundado en el corazón de Moaña, <strong className="text-white">Sofia's Gym</strong> nació con una misión clara: democratizar el fitness de alta calidad. No somos solo un gimnasio, somos una comunidad que busca la excelencia física y mental.
            </p>
            <p>
              Bajo la dirección de <strong className="text-redCustom">Sofia</strong>, atleta profesional con años de experiencia en competición, hemos diseñado un espacio donde tanto principiantes como deportistas de élite se sienten como en casa. 
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
            <div>
              <h4 className="text-4xl font-bold text-redCustom font-oswald">500+</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Socios Activos</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-redCustom font-oswald">10+</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Entrenadores Pro</p>
            </div>
            <div className="hidden sm:block">
              <h4 className="text-4xl font-bold text-redCustom font-oswald">24/7</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Acceso Total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
