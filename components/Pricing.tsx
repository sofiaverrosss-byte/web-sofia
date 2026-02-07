
import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingProps {
  onSelectPlan: () => void;
}

const plans = [
  {
    name: "BÁSICO",
    price: "29",
    features: [
      { text: "Acceso Sala Fitness", included: true },
      { text: "Vestuarios y Duchas", included: true },
      { text: "Clases Dirigidas", included: false },
      { text: "App de Entrenamiento", included: false },
    ],
    popular: false
  },
  {
    name: "PRO",
    price: "39",
    features: [
      { text: "Acceso Ilimitado 24/7", included: true },
      { text: "Todas las Clases Dirigidas", included: true },
      { text: "App Personalizada", included: true },
      { text: "1 Sesión con PT/mes", included: true },
    ],
    popular: true
  },
  {
    name: "ELITE",
    price: "59",
    features: [
      { text: "Todo el Plan Pro", included: true },
      { text: "Nutrición Deportiva", included: true },
      { text: "Acceso a Spa/Sauna", included: true },
      { text: "Toalla y Lavandería", included: true },
    ],
    popular: false
  }
];

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="cuotas" className="py-24 px-6 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic font-oswald">ELIGE TU <span className="text-redCustom">PLAN</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Sin permanencias ocultas. Transparencia total para tu entrenamiento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`pricing-card relative flex flex-col p-10 rounded-3xl transition-all duration-500 
                ${plan.popular 
                  ? 'bg-redCustom transform md:scale-105 z-10 shadow-2xl' 
                  : 'bg-black border border-gray-800 hover:bg-redCustom hover:border-transparent group'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  Más popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-4 font-oswald ${plan.popular ? 'text-white' : 'text-gray-100 group-hover:text-white'}`}>
                {plan.name}
              </h3>
              
              <div className={`text-6xl font-bold mb-8 font-oswald flex items-baseline ${plan.popular ? 'text-white' : 'text-redCustom group-hover:text-white'}`}>
                {plan.price}€<span className="text-sm font-roboto font-normal opacity-70 ml-1">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.popular ? 'text-white' : 'text-redCustom group-hover:text-white'}`} />
                    ) : (
                      <X className={`w-5 h-5 mr-3 shrink-0 ${plan.popular ? 'text-red-200' : 'text-gray-600 group-hover:text-red-200'}`} />
                    )}
                    <span className={plan.popular ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onSelectPlan}
                className={`w-full py-4 rounded-xl font-bold transition duration-300 uppercase tracking-wider
                  ${plan.popular 
                    ? 'bg-white text-redCustom hover:bg-black hover:text-white' 
                    : 'border-2 border-redCustom text-redCustom hover:bg-white hover:text-redCustom group-hover:bg-white group-hover:text-redCustom group-hover:border-white'}`}
              >
                ELEGIR PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
