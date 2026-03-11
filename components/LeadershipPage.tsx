
import React, { useEffect } from 'react';

interface LeadershipPageProps {
  onNavigateHome: (section?: string) => void;
}

const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      id: "01",
      title: "El líder como Persona (El Ser)",
      description: "La base de toda autoridad real. No se trata del título en la tarjeta, sino del carácter que sostiene las decisiones.",
      items: ["Autoconocimiento profundo", "Gestión emocional bajo presión", "Coherencia entre valores y acciones", "Fortaleza de carácter"],
      quote: "Sin esto, no hay liderazgo. Hay cargo nomás."
    },
    {
      id: "02",
      title: "El líder en la Comunicación",
      description: "El liderazgo ocurre en las conversaciones. Si la comunicación falla, la operación se detiene.",
      items: ["Escucha activa y asertiva", "Diseño de conversaciones difíciles", "Pedidos y promesas claras", "Feedback que construye resultados"],
      quote: "El 80% de los problemas en equipos son conversacionales, no técnicos."
    },
    {
      id: "03",
      title: "El líder en la Acción",
      description: "Ejecución pura. Es la capacidad de transformar la estrategia en movimiento real en la planta.",
      items: ["Priorización estratégica", "Sostenimiento de estándares", "Toma de decisiones crítica", "Liderazgo visible en el campo"],
      quote: "Esto lo vivís todos los días en la operación, no lo leíste en un libro."
    },
    {
      id: "04",
      title: "El líder con Personas",
      description: "Construcción de equipos de alto desempeño basados en la confianza y la responsabilidad mutua.",
      items: ["Generación de confianza real", "Gestión de conflictos internos", "Influencia sin autoridad formal", "Cultura de equipo sólida"],
      quote: "Motivación auténtica, no frases de taza de café."
    },
    {
      id: "05",
      title: "El líder en Contexto",
      description: "Responder a las demandas de la organización manteniendo el equilibrio humano y operativo.",
      items: ["Enfoque en KPIs y resultados", "Gestión de la productividad", "Seguridad y Calidad innegociables", "Respuesta ante la crisis"],
      quote: "El liderazgo no es inspirar, es responder bien bajo presión."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Page Header */}
      <header className="bg-slate-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigateHome()}
            className="text-indigo-400 hover:text-white mb-8 flex items-center gap-2 transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Volver al inicio
          </button>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">
            Los 5 pilares reales <br />
            <span className="text-indigo-500">del Liderazgo Industrial</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Más allá de los nombres o los enfoques que se utilicen, el liderazgo que funciona se apoya siempre en fundamentos claros y probados. Son estos pilares los que sostienen el día a día de los equipos y la operación, incluso en contextos de presión y decisiones difíciles.
          </p>
        </div>
      </header>

      {/* Pillars Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="space-y-32">
          {pillars.map((pillar, idx) => (
            <div key={pillar.id} className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-serif font-bold text-slate-200">{pillar.id}</span>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-950 mb-6">{pillar.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="p-8 bg-slate-50 rounded-2xl border-l-4 border-indigo-600 italic text-slate-800 text-lg mb-8 font-medium">
                  " {pillar.quote} "
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 h-full">
                  <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-8">Ejes de trabajo:</h3>
                  <ul className="space-y-6">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-700 font-medium text-lg">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
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

      {/* Final CTA */}
      <section className="mt-40 bg-slate-950 py-24 text-center rounded-[3rem] mx-4 sm:mx-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">¿Querés fortalecer estos pilares en tu gestión?</h2>
          <p className="text-xl text-slate-400 mb-12">
            El liderazgo no es una meta, es un proceso constante de ajuste y mejora. Conversemos sobre cómo aplicarlo en tu contexto real.
          </p>
          <button 
            onClick={() => onNavigateHome('contacto')}
            className="px-10 py-5 bg-white text-slate-950 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl"
          >
            Agendar conversación inicial
          </button>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
