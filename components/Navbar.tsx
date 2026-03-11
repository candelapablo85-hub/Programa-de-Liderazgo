
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Liderazgo', href: '#liderazgo' },
    { name: 'Propuesta', href: '#propuesta' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Metodología', href: '#metodologia' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center group">
            <a 
              href="#inicio" 
              onClick={(e) => handleScroll(e, '#inicio')}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 leading-none">Pablo Candela</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600 mt-1">Coaching y <span className="text-[#b45239]">Liderazgo</span></span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-slate-600 hover:text-slate-950 px-1 py-2 text-sm font-semibold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b45239] transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => handleScroll(e, '#contacto')}
                className="bg-slate-950 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95 border-b-2 border-[#b45239]"
              >
                Agendar Llamada
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-50 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-slate-600 hover:text-slate-900 px-3 py-3 rounded-md text-base font-semibold border-l-4 border-transparent hover:border-[#b45239] hover:bg-slate-50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleScroll(e, '#contacto')}
            className="block bg-slate-950 text-white text-center px-3 py-4 rounded-md text-base font-bold shadow-lg border-b-4 border-[#b45239]"
          >
            Agendar Llamada
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
