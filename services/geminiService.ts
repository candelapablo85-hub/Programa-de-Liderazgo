import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string) => {
  // Fix: Initialize GoogleGenAI with process.env.API_KEY directly as a named parameter per SDK guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Eres el asistente virtual de Pablo Candela, Coach de Liderazgo con amplia experiencia como supervisor en la industria.
        
        Misión de Pablo: "Acompaño a líderes y dueños de pymes a desarrollar un liderazgo consciente y práctico, enfocado en los desafíos reales del negocio."
        
        Tus fuertes y temas de asesoría:
        1. Liderazgo de equipos en entornos industriales de alta presión.
        2. Planteo de objetivos estratégicos y operativos.
        3. Aprender a delegar para dejar la operatividad y pasar a la gestión.
        4. Toma de decisiones críticas.
        5. Resolución de conflictos dentro del equipo.

        Tu tono debe ser: Profesional, pragmático, seguro y directo (como un supervisor industrial experimentado).
        Evita: El lenguaje místico o demasiado abstracto. 
        Enfoque: Soluciones prácticas para problemas reales de liderazgo y operación.
        Responde siempre en español de forma concisa.`,
        temperature: 0.5,
      },
    });

    // Fix: Access .text property directly (it is not a method) as per SDK specifications
    return response.text || "Disculpa, no pude procesar tu consulta. ¿Podrías repetirla?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al conectar. Por favor, intenta de nuevo o contacta directamente a Pablo.";
  }
};
