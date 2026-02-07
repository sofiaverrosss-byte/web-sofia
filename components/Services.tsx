
import React from 'react';
import { Dumbbell, HeartPulse, UserCircle2 } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="w-12 h-12" />,
    title: "Musculación",
    description: "Zona de peso libre y máquinas de última generación (Hammer Strength, Life Fitness) para hipertrofia y fuerza."
  },
  {
    icon: <HeartPulse className="w-12 h-12" />,
    title: "Clases Dirigidas",
    description: "Crossfit, Yoga, Zumba y Pilates adaptados a todos los niveles por instructores certificados."
  },
  {
    icon: <UserCircle2 className="w-12 h-12" />,
    title: "Entrenamiento Personal",
    description: "Asesoramiento individualizado y planificación nutricional para alcanzar tus objetivos en tiempo récord."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-oswald">LO QUE <span className="text-redCustom">OFRECEMOS</span></h2>
          <div className="w-24 h-1.5 bg-redCustom mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-10 rounded-2xl border-b-4 border-transparent hover:border-redCustom transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center"
            >
              <div className="inline-block p-4 bg-white rounded-xl shadow-sm text-redCustom mb-6 group-hover:bg-redCustom group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-oswald group-hover:text-redCustom transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
