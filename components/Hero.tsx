
import React from 'react';

const Hero: React.FC = () => {
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
    <div className="relative bg-white pt-8 pb-16 lg:pt-10 lg:pb-16 overflow-hidden min-h-[calc(100vh-100px)] flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center lg:items-start">
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#b45239] animate-pulse"></span>
              Coaching de Liderazgo Real
            </div>
            <h1 className="text-2xl tracking-tight font-serif font-bold text-slate-950 sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              Liderá con autoridad, <span className="text-[#b45239]">gestioná con resultados</span>.
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
              Acompaño a líderes y dueños de pymes a desarrollar un liderazgo consciente y práctico, enfocado en los desafíos reales del negocio.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                onClick={scrollToContact}
                className="inline-flex justify-center items-center px-10 py-5 bg-slate-900 text-white rounded-lg text-lg font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl active:scale-95 border-b-4 border-[#b45239]"
              >
                Agendar una conversación
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">+10 años</p>
                <p className="text-sm text-slate-500">En la industria real</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-tight">
                  Coach Ontológico <br className="hidden sm:block" /> y Ejecutivo
                </p>
                <p className="text-[10px] text-[#b45239] uppercase font-bold tracking-widest mt-1">Certificación avalada por ICF</p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative group lg:w-11/12 ml-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200 ring-8 ring-slate-50">
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10"></div>
              <img
                className="w-full h-[60vh] sm:h-[65vh] lg:h-[85vh] object-cover object-center lg:object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                src="/imagenes/Foto%20perfil.png"
                alt="Pablo Candela - Coaching y Liderazgo"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 pt-24 lg:pt-32 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-20">
                <p className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight">
                  "El liderazgo no es un cargo, es una actitud."
                </p>
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs sm:text-[14px] mt-2 sm:mt-4">Pablo Candela — Coaching y Liderazgo</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#b45239]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
