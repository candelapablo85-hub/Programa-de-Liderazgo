
import React from 'react';

const About: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="sobre-mi" className="bg-slate-950 py-24 overflow-hidden text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#b45239]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay"></div>
              <img
                src="/imagenes/foto coach.jpeg"
                alt="Pablo Candela - Coach Ejecutivo e Industrial"
                className="w-full object-cover aspect-[4/5] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#b45239] p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-white font-bold text-sm tracking-tighter italic">Liderazgo real para desafíos industriales.</p>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <h2 className="text-[#b45239] font-semibold uppercase tracking-[0.3em] text-xs mb-4">Sobre Pablo Candela</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              De la planta industrial <br />
              <span className="text-slate-400">al coaching de equipos.</span>
            </h3>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Como supervisor en la industria, entendí que el compromiso de un equipo bajo presión es el motor de la operación. Mi fuerte es liderar personas en entornos donde los objetivos son claros y los márgenes de error, mínimos.
              </p>
              <p>
                Acompaño a líderes a mejorar su forma de comunicar, fortalecer sus equipos y abordar los desafíos humanos con criterio, para lograr una conducción más clara, firme y efectiva.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-4xl font-bold text-[#b45239] tracking-tighter">+10</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 leading-relaxed">
                  Años en <br /> Supervisión Industrial
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#b45239] tracking-tight leading-tight">
                  Coach Ontológico <br /> y Ejecutivo
                </p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">
                  Certificación avalada por ICF
                </p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#contacto"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-white font-bold group text-xl"
              >
                <span className="border-b-2 border-[#b45239] pb-1 group-hover:text-[#b45239] group-hover:border-white transition-all">
                  Trabajemos juntos
                </span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform text-[#b45239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
