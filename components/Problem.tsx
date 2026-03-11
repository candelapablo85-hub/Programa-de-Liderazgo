
import React from 'react';

const LeadershipPillars: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "El líder como Persona (El Ser)",
      description: "La base de toda autoridad real. El carácter sobre el cargo.",
      items: ["Autoconocimiento profundo", "Gestión emocional", "Coherencia y valores"],
      note: "Sin esto no hay liderazgo. Solo hay un cargo."
    },
    {
      id: "02",
      title: "El líder en la Comunicación",
      description: "El liderazgo ocurre en las conversaciones. Si fallan, nada avanza.",
      items: ["Conversaciones difíciles", "Feedback efectivo", "Límites y pedidos claros"],
      note: "El 80% de los problemas son conversacionales."
    },
    {
      id: "03",
      title: "El líder en la Acción",
      description: "Transformar estrategia en movimiento real en la planta.",
      items: ["Priorización crítica", "Sostener estándares", "Liderazgo visible"],
      note: "Esto lo vivís en la planta, no en un libro."
    },
    {
      id: "04",
      title: "El líder con Personas",
      description: "Construir equipos de alto desempeño bajo presión.",
      items: ["Confianza y responsabilidad", "Manejo de conflictos", "Influencia real"],
      note: "Motivación auténtica creando confianza."
    },
    {
      id: "05",
      title: "El líder en Contexto",
      description: "Resultados innegociables manteniendo el equilibrio operativo.",
      items: ["Foco en KPIs y Resultados", "Seguridad y Calidad", "Productividad bajo presión"],
      note: "El liderazgo es responder bien bajo presión."
    }
  ];

  return (
    <section id="liderazgo" className="py-24 bg-slate-950 text-white overflow-hidden relative border-b border-white/5 scroll-mt-20">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b45239]/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl lg:max-w-[1000px] mb-12 lg:mb-16">
          <h2 className="text-[#b45239] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-6">Manifiesto de Gestión Industrial</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 lg:mb-8 leading-[1.1]">
            Los 5 pilares reales <br />
            <span className="text-slate-300">del liderazgo.</span>
          </h3>
          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed border-l-4 border-[#b45239] pl-6 lg:pl-8 py-2">
            Más allá de los nombres o los enfoques que se utilicen, el liderazgo que funciona se apoya siempre en fundamentos claros y probados. Son estos pilares los que sostienen el día a día de los equipos y la operación, incluso en contextos de presión y decisiones difíciles.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`group flex flex-col p-6 lg:p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-1 ${idx === 4
                ? 'bg-[#b45239]/10 border-[#b45239]/30'
                : 'bg-white/[0.02] border-white/10 hover:border-[#b45239]/30'
                }`}
            >
              <div className="flex justify-between items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div className="flex items-center gap-4 lg:gap-6">
                  <span className="text-4xl lg:text-5xl font-serif font-black text-white/10 group-hover:text-[#b45239] transition-colors shrink-0">
                    {pillar.id}
                  </span>
                  <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#b45239] transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <div className="w-10 lg:w-12 h-1.5 bg-[#b45239]/30 rounded-full group-hover:bg-[#b45239] transition-colors shrink-0 hidden sm:block"></div>
              </div>

              <div className="mb-6 lg:mb-8">
                <p className="text-slate-400 text-base mb-6 lg:mb-8 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3 md:gap-8">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 font-medium text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b45239] shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="bg-white/5 rounded-xl p-3 group-hover:bg-[#b45239]/20 transition-all">
                  <p className="text-sm font-bold text-[#b45239] italic text-center">
                    👉 {pillar.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-2xl md:text-4xl font-serif italic text-slate-300 max-w-4xl mx-auto leading-relaxed">
            “El liderazgo nace en la forma de <span className="text-[#b45239]">estar</span>, se sostiene en la <span className="text-[#b45239]">comunicación</span>, se construye con el <span className="text-[#b45239]">equipo</span> y se prueba en cada decisión asumida con <span className="text-[#b45239]">responsabilidad</span>.”
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#propuesta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('propuesta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#b45239] font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
            >
              Ver propuesta de trabajo ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPillars;
