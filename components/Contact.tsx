
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-slate-50 py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-[2rem] overflow-hidden lg:flex">
          <div className="p-12 lg:p-20 lg:w-1/2 text-white">
            <h2 className="text-4xl font-serif font-bold mb-8">¿Lo conversamos?</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Agendá una conversación inicial. Un espacio breve para entender tu contexto, intercambiar miradas y evaluar si tiene sentido avanzar en un proceso de trabajo conjunto.
            </p>
            
            <div className="space-y-6">
              {[
                "Entendimiento mutuo de tu contexto actual",
                "Intercambio de miradas sobre los desafíos de tu equipo",
                "Evaluación de viabilidad para un proceso conjunto"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-[#b45239] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 lg:p-20 lg:w-1/2">
            {submitted ? (
              <div className="text-center h-full flex flex-col justify-center animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">Mensaje recibido</h3>
                <p className="text-slate-500">Me pondré en contacto contigo a la brevedad para coordinar el espacio.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tighter">Nombre y Apellido</label>
                  <input required type="text" id="name" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tighter">Cargo / Rol</label>
                  <input required type="text" id="position" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="Ej: Gerente de Operaciones" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tighter">Email</label>
                  <input required type="email" id="email" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="email@ejemplo.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tighter">Teléfono</label>
                  <input required type="tel" id="phone" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="Ej: +54 9 11 ..." />
                </div>
                
                <button type="submit" className="w-full bg-slate-950 text-white font-bold py-5 rounded-lg hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] border-b-4 border-[#b45239]">
                  Solicitar conversación inicial
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-bold">Respeto total por tu privacidad y tiempo.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
