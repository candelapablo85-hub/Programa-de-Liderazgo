
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carla Paez E.',
    role: 'Encargada Administracion AUDI UB Motors',
    content: 'Antes sentía enojo porque la gente no actuaba como yo esperaba. Con Pablo aprendí a gestionar mis emociones y mejorar la comunicación para obtener los resultados que esperaba.',
    avatar: '/imagenes/avatar carla.jpeg'
  },
  {
    id: '2',
    name: 'Gladys G.',
    role: 'Responsable RRHH',
    content: 'Su conocimiento real en gestion de equipos me ayudó delegar con mas confianza. Pude equilibrar mi vida personal, mejorar mi salud y bajar el estres diario.',
    avatar: '/imagenes/avatar gladys.jpeg'
  },
  {
    id: '3',
    name: 'Carlos R.',
    role: 'Supervisor Operativo',
    content: 'La comunicación con mi equipo era un desastre de malentendidos. Hoy tenemos reuniones efectivas de 20 minutos donde todo queda claro y obtenemos mejores resultados.',
    avatar: '/imagenes/avatar carlos.jpeg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Lo que dicen los líderes que ya pasaron por acá</h2>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Resultados reales de personas que enfrentan desafíos similares a los tuyos.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-10 rounded-2xl flex flex-col items-center text-center">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-6 grayscale" />
              <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-slate-950">{t.name}</h4>
                <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
