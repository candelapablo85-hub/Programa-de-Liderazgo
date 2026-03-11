
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Comunicación y Liderazgo',
    description: 'El liderazgo ocurre en las conversaciones. Te ayudo a dominar el arte de las conversaciones difíciles, dar feedback que transforme y ejercer una autoridad basada en la coherencia, no solo en el cargo.',
    icon: '🗣️',
    isFor: ['Conversaciones difíciles', 'Autoridad y presencia', 'Feedback efectivo'],
    isNotFor: []
  },
  {
    id: '2',
    title: 'Gestión operativa y Objetivos',
    description: 'Dejá de ser el cuello de botella. Implementamos metodologías para definir KPIs claros, tomar decisiones basadas en datos y optimizar la productividad sin perder el control de la planta.',
    icon: '⚙️',
    isFor: ['Salida de la operatividad', 'Definición de KPIs', 'Toma de decisiones'],
    isNotFor: []
  },
  {
    id: '3',
    title: 'Potenciar tu equipo',
    description: 'Transformá tu grupo en un equipo de alto desempeño. Aprendé a delegar con confianza, fomentar la autonomía y sostener estándares de calidad y seguridad a través de tu gente.',
    icon: '🚀',
    isFor: ['Delegación inteligente', 'Autonomía de equipo', 'Cultura de compromiso'],
    isNotFor: []
  }
];

const Services: React.FC = () => {
  return (
    <section id="propuesta" className="bg-white py-24 sm:py-32 border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[#b45239] font-bold uppercase tracking-[0.2em] text-xs mb-3">Propuesta de Trabajo</h2>
          <p className="text-4xl font-serif font-bold text-slate-900 sm:text-5xl leading-tight">
            Tres ejes fundamentales para <br />
            <span className="text-[#b45239]">transformar tu gestión.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-slate-50 rounded-[2rem] p-10 border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-[#b45239]/20 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300 shrink-0">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-[#b45239] transition-colors">{service.title}</h3>
              </div>
              <p className="text-slate-600 mb-10 grow leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 pt-8 border-t border-slate-200">
                <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4">Impacto en:</h4>
                  <ul className="text-sm text-slate-700 space-y-3 font-medium">
                    {service.isFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-[#b45239] text-lg">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
