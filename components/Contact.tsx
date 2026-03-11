
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with the actual phone number meant to receive the WhatsApp messages
    // The format should be the country code without the '+' followed by the number
    // Example for Argentina: 5491123456789
    // As per user message, he only provided email candelapablo85@gmail.com, so we need to ask for his phone number
    // For now, I will use a placeholder and instruct him.
    const phoneNumber = "543364012374";

    const message = `Hola Pablo, te contacto por el programa de Liderazgo 5 Pilares.%0A%0A*Mis datos:*%0A- Nombre: ${name}%0A- Empresa: ${company}%0A- Cargo: ${position}%0A- Email: ${email}%0A`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-slate-50 py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-[2rem] overflow-hidden lg:flex">
          <div className="p-6 lg:p-10 lg:w-1/2 text-white flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">¿Lo conversamos?</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Agendá una conversación inicial. Un espacio breve para entender tu contexto, intercambiar miradas y evaluar si tiene sentido avanzar en un proceso de trabajo conjunto.
            </p>

            <div className="space-y-4">
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

          <div className="bg-white p-6 lg:p-10 lg:w-1/2">
            {submitted ? (
              <div className="text-center h-full flex flex-col justify-center animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">¡Redirigiendo a WhatsApp!</h3>
                <p className="text-slate-500">Se abrirá una ventana para que puedas enviar tu mensaje.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-tighter">Nombre y Apellido</label>
                  <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-tighter">Empresa</label>
                  <input required type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-3 py-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="Tu empresa" />
                </div>
                <div>
                  <label htmlFor="position" className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-tighter">Cargo / Rol</label>
                  <input required type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full px-3 py-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="Ej: Gerente de Operaciones" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-tighter">Email</label>
                  <input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none transition-all" placeholder="email@ejemplo.com" />
                </div>

                <button type="submit" className="w-full bg-slate-950 text-white font-bold py-3 mt-2 rounded-lg hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] border-b-4 border-[#b45239] text-sm">
                  Solicitar conversación inicial
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2 uppercase tracking-widest font-bold">Respeto total por tu privacidad y tiempo.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
