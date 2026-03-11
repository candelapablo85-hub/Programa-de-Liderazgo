
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { title: "Comunicación sin ruidos", desc: "Aprendé a decir lo que hay que decir para que el equipo actúe." },
    { title: "Toma de decisiones con respaldo", desc: "Bajá el nivel de incertidumbre y actuá con criterio profesional." },
    { title: "Equipos que resuelven solos", desc: "Desarrollá autonomía en tu gente para que vos puedas dirigir, no operar." },
    { title: "Resultados observables", desc: "Impacto directo en KPIs y clima laboral medible." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 lg:flex items-center gap-16">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <h3 className="text-3xl font-serif font-bold text-slate-950 mb-6">Resultados concretos del proceso</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Esta metodología asegura una mejora tangible en tu capacidad de liderazgo, optimizando el desempeño de tu equipo y consolidando resultados estratégicos para la organización.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
