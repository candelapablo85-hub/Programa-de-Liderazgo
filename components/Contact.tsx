
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
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                  Completá tus datos para contactarnos por WhatsApp
                </h3>
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

                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3 mt-2 rounded-lg hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] border-b-4 border-[#b45239] text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Solicitar conversación inicial
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2 uppercase tracking-widest font-bold">Respeto total por tu privacidad y tiempo.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
