
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-500 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold text-slate-900 leading-none">Pablo Candela</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mt-1">Coaching y <span className="text-[#b45239]">Liderazgo</span></span>
            </div>
            <p className="max-w-xs leading-relaxed text-sm">
              Coaching ejecutivo con enfoque pragmático para líderes que buscan resultados sin perder la humanidad.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#liderazgo" className="hover:text-[#b45239] transition-colors">Liderazgo</a></li>
              <li><a href="#propuesta" className="hover:text-[#b45239] transition-colors">Propuesta</a></li>
              <li><a href="#sobre-mi" className="hover:text-[#b45239] transition-colors">Sobre Mí</a></li>
              <li><a href="#metodologia" className="hover:text-[#b45239] transition-colors">Metodología</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/pablo-candela-b646a920a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#b45239] transition-colors group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#b45239] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:candelapablo85@gmail.com" className="hover:text-[#b45239] transition-colors">
                  Email: candelapablo85@gmail.com
                </a>
              </li>
              <li>Ciudad: San Nicolas de los Arroyos</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 Pablo Candela. Coaching y Liderazgo.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-950 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-slate-950 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
