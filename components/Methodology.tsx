
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Diagnóstico",
      desc: "Entrevistas y análisis de tu situación actual, desafíos de equipo y objetivos de negocio."
    },
    {
      step: "02",
      title: "Intervención",
      desc: "Capacitaciones grupales y sesiones de coaching individuales, enfocadas en la acción, reflexión profunda y herramientas prácticas de aplicación inmediata."
    },
    {
      step: "03",
      title: "Consolidación",
      desc: "Seguimiento de resultados, ajustes de rumbo y fijación de nuevos hábitos de liderazgo."
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">Cómo trabajaremos</h2>
          <p className="text-3xl md:text-4xl font-serif font-bold text-slate-950">
            Un camino estructurado hacia tu mejor versión profesional
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((s, idx) => (
              <div key={idx} className="relative bg-white z-10 text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-xl">
                  {s.step}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
