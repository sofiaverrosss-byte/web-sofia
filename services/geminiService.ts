
import { GoogleGenAI } from "@google/genai";

export class FitnessAIService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing with the exact named parameter and process.env.API_KEY directly as required
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getFitnessAdvice(userMessage: string) {
    try {
      // Calling generateContent with the model name and prompt directly
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "Eres el asistente virtual de Sofia's Gym en Moaña, España. Eres un experto en fitness, nutrición y motivación deportiva. Tu tono es profesional, motivador y directo. Ayudas a los usuarios con dudas sobre ejercicios, rutinas rápidas y consejos nutricionales. Mantén tus respuestas breves y siempre anima al usuario a visitar el gimnasio en Moaña para recibir atención personalizada.",
          temperature: 0.7,
        }
      });
      // Extracting generated text using the .text property getter
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Lo siento, mi conexión con el servidor de entrenamiento está fallando. ¡Ven al gimnasio y pregunta por Sofia!";
    }
  }
}

export const fitnessAIService = new FitnessAIService();
