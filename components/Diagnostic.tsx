import React, { useState } from 'react';

// === DATA ===
const PILLARS = [
  { id: 1, name: "El Ser" },
  { id: 2, name: "La Comunicación" },
  { id: 3, name: "La Acción" },
  { id: 4, name: "El Equipo" },
  { id: 5, name: "El Contexto" }
];

const QUESTIONS = [
  {
    id: 1,
    pillarId: 1,
    text: "En situaciones de mucha presión o crisis, ¿logras gestionar tus emociones para transmitir calma en lugar de ansiedad o frustración a tu equipo?"
  },
  {
    id: 2,
    pillarId: 1,
    text: "¿Tienes la capacidad de reconocer y asumir, abierta y responsablemente, tus errores frente a tus colaboradores, sin buscar excusas externas?"
  },
  {
    id: 3,
    pillarId: 2,
    text: "¿Afrontas las conversaciones difíciles (sobre bajo desempeño o actitudes) de forma oportuna y directa, sin postergarlas?"
  },
  {
    id: 4,
    pillarId: 2,
    text: "¿Aseguras que tus pedidos sean claros y específicos, de manera que tu equipo sepa exactamente qué esperas, para cuándo y con qué estándar?"
  },
  {
    id: 5,
    pillarId: 3,
    text: "¿Dedicas tiempo a liderar desde el lugar de trabajo (Línea/planta/terreno), asegurando el cumplimiento de los estándares de rutina?"
  },
  {
    id: 6,
    pillarId: 3,
    text: "Al planificar la semana o el turno, ¿logras enfocar a tu equipo en las prioridades críticas en lugar de que el día a día (apagar incendios) consuma todo el tiempo?"
  },
  {
    id: 7,
    pillarId: 4,
    text: "¿Confías en delegar tareas importantes a operarios o mandos intermedios sin sentir la necesidad de controlar o revisar todo el proceso continuamente?"
  },
  {
    id: 8,
    pillarId: 4,
    text: "Cuando surgen conflictos internos o roces en tu equipo, ¿intervienes proactivamente para mediar y construir confianza en lugar de ignorarlos?"
  },
  {
    id: 9,
    pillarId: 5,
    text: "¿Mantienes la exigencia y el cumplimiento de los indicadores clave (KPIs), como calidad y seguridad, incluso cuando hay mucha presión por entregar la producción?"
  },
  {
    id: 10,
    pillarId: 5,
    text: "¿Tus colaboradores comprenden claramente cómo su trabajo del día a día impacta directamente en los resultados globales de la empresa?"
  }
];

const OPTIONS = [
  { label: "Nunca", value: 0 },
  { label: "A veces", value: 3 },
  { label: "Casi siempre", value: 7 },
  { label: "Siempre", value: 10 }
];

// === COMPONENT ===
const Diagnostic: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'lead' | 'result'>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const [leadData, setLeadData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scoreResult, setScoreResult] = useState<{
    totalScore: number;
    level: string;
    strongest: string;
    weakest: string;
  } | null>(null);

  const currentQuestion = QUESTIONS[currentQuestionIdx];
  const progress = ((currentQuestionIdx + 1) / QUESTIONS.length) * 100;

  const handleStart = () => setStep('quiz');

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));

    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQuestionIdx(prev => prev + 1), 300); // Pequeño delay para la animación
    } else {
      setTimeout(() => setStep('lead'), 300);
    }
  };

  const calculateScore = () => {
    let total = 0;
    const pillarScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    QUESTIONS.forEach(q => {
      const pts = answers[q.id] || 0;
      total += pts;
      pillarScores[q.pillarId as keyof typeof pillarScores] += pts;
    });

    let level = "Liderazgo Reactivo";
    if (total > 40 && total <= 75) level = "Liderazgo en Desarrollo";
    if (total > 75) level = "Liderazgo Estratégico Consolidado";

    // Encontrar pillar más fuerte y más débil
    let max = -1, min = 100;
    let strongestPillarId = 1, weakestPillarId = 1;

    Object.entries(pillarScores).forEach(([pId, score]) => {
      if (score > max) { max = score; strongestPillarId = Number(pId); }
      if (score < min) { min = score; weakestPillarId = Number(pId); }
    });

    return {
      totalScore: total,
      level,
      strongest: PILLARS.find(p => p.id === strongestPillarId)?.name || "",
      weakest: PILLARS.find(p => p.id === weakestPillarId)?.name || ""
    };
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = calculateScore();
    setScoreResult(result);

    // TODO: Aquí conectaremos con Supabase u otra Base de Datos
    // Por ahora simulamos una petición de red
    const payload = {
      ...leadData,
      answers,
      result
    };

    console.log("Guardando en Base de Datos...", payload);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep('result');
    }, 1200);
  };

  return (
    <section id="diagnostico" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ENCABEZADO GLOBAl */}
        <div className="text-center mb-12">
          <h2 className="text-[#b45239] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4">Herramienta Gratuita</h2>
          <h3 className="text-3xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Diagnóstico de Liderazgo
          </h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Descubre tus fortalezas y tu zona de riesgo como líder en menos de 1 minuto.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[400px] flex flex-col justify-center">

          {/* PASO 1: INTRO */}
          {step === 'intro' && (
            <div className="text-center max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-[#b45239]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#b45239]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">¿Estás liderando tu operación, o la operación te lidera a ti?</h4>
              <p className="text-slate-600 mb-8">
                Responde 10 preguntas rápidas y obtén un diagnóstico claro sobre tu nivel actual y qué pilar necesitas reforzar con urgencia.
              </p>
              <button
                onClick={handleStart}
                className="bg-[#b45239] text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-[#9a432e] transition-all shadow-lg active:scale-95"
              >
                Comenzar Diagnóstico
              </button>
            </div>
          )}

          {/* PASO 2: QUIZ */}
          {step === 'quiz' && (
            <div className="max-w-2xl mx-auto w-full animate-in fade-in zoom-in-95 duration-300">
              {/* Barra de progreso */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  <span>Pregunta {currentQuestionIdx + 1} de {QUESTIONS.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#b45239] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div key={currentQuestion.id} className="animate-in fade-in slide-in-from-right-8 duration-500">
                <p className="text-sm font-bold text-[#b45239] mb-3 uppercase tracking-wider">
                  Pilar: {PILLARS.find(p => p.id === currentQuestion.pillarId)?.name}
                </p>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
                  {currentQuestion.text}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.value)}
                      className="text-left px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-[#b45239] hover:bg-[#b45239]/5 transition-all font-medium text-slate-700 hover:text-[#b45239] active:scale-[0.98]"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PASO 3: LEAD CAPTURE */}
          {step === 'lead' && (
            <div className="max-w-md mx-auto w-full text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">¡Cálculo finalizado!</h4>
              <p className="text-slate-600 mb-8">
                Para ver tu puntuación exacta y el análisis de tus Pilares, déjanos tu correo.
              </p>

              <form onSubmit={handleSubmitLead} className="space-y-4 text-left">
                <div>
                  <label htmlFor="d-name" className="block text-xs font-bold text-slate-700 mb-1 uppercase">Nombre completo</label>
                  <input required id="d-name" type="text" value={leadData.name} onChange={e => setLeadData({ ...leadData, name: e.target.value })} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="d-email" className="block text-xs font-bold text-slate-700 mb-1 uppercase">Email profesional</label>
                  <input required id="d-email" type="email" value={leadData.email} onChange={e => setLeadData({ ...leadData, email: e.target.value })} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none" placeholder="email@empresa.com" />
                </div>
                <div>
                  <label htmlFor="d-company" className="block text-xs font-bold text-slate-700 mb-1 uppercase">Empresa</label>
                  <input id="d-company" type="text" value={leadData.company} onChange={e => setLeadData({ ...leadData, company: e.target.value })} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#b45239] outline-none" placeholder="Nombre de tu empresa" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-[#b45239] text-white py-4 rounded-xl font-bold hover:bg-[#9a432e] transition-all flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Procesando...
                    </>
                  ) : "Ver mis resultados"}
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">Al enviar, aceptas que Pablo Candela te contacte con información de valor.</p>
              </form>
            </div>
          )}

          {/* PASO 4: RESULTADOS */}
          {step === 'result' && scoreResult && (
            <div className="max-w-2xl mx-auto w-full animate-in fade-in zoom-in-95 duration-700">

              <div className="text-center mb-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Tu Score de Liderazgo</p>
                <div className="flex items-end justify-center gap-2 text-[#b45239] mb-2">
                  <span className="text-6xl md:text-8xl font-black font-serif leading-none">{scoreResult.totalScore}</span>
                  <span className="text-2xl font-bold pb-2">/ 100</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{scoreResult.level}</h4>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
                  <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Pilar más fuerte 💪</p>
                  <p className="text-lg font-bold text-slate-900">{scoreResult.strongest}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
                  <p className="text-xs font-bold text-red-600 uppercase mb-1">Riesgo Detectado ⚠️</p>
                  <p className="text-lg font-bold text-slate-900">{scoreResult.weakest}</p>
                </div>
              </div>

              <div className="bg-slate-900 p-6 md:p-8 rounded-2xl text-white text-center">
                <h5 className="text-xl font-bold mb-4">¿Quieres mejorar tu pilar de {scoreResult.weakest}?</h5>
                <p className="text-slate-400 mb-6 text-sm md:text-base">
                  Agenda una sesión estratégica gratuita de 15 minutos conmigo. Analizaremos tu diagnóstico completo y te daré 2 acciones aplicables mañana mismo en tu planta.
                </p>
                <a
                  href={`https://wa.me/543364012374?text=Hola Pablo! Completé el diagnóstico en la web. Mi score fue ${scoreResult.totalScore}/100 y mi pilar a mejorar es ${scoreResult.weakest}. Quiero agendar los 15 min.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20ba59] transition-all"
                >
                  Agendar por WhatsApp
                </a>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
