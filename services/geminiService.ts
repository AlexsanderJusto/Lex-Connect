import { GoogleGenAI, Type } from "@google/genai";
import { LAWYERS } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface AgentResponse {
  answer: string;
  recommendedLawyerIds: string[];
}

export const askLegalAgent = async (userQuery: string): Promise<AgentResponse> => {
  if (!apiKey) {
    return {
      answer: "Desculpe, não consigo processar sua solicitação porque a chave da API está faltando. Por favor, verifique a configuração do ambiente.",
      recommendedLawyerIds: []
    };
  }

  const model = "gemini-3-flash-preview";
  
  // Provide lawyer context for matching
  const lawyersContext = JSON.stringify(LAWYERS.map(l => ({
    id: l.id,
    name: l.name,
    specialty: l.specialty,
    location: l.location,
    bio: l.bio,
    tags: l.tags
  })));

  const prompt = `
    Você é o Assistente Jurídico de IA da LexConnect Brasil. Um usuário está fazendo uma pergunta jurídica: "${userQuery}".
    
    1. Forneça uma resposta útil, clara e profissional à pergunta em Português do Brasil.
    2. Crucial: Você deve incluir um aviso padrão afirmando que "Isto não é um aconselhamento jurídico oficial e não estabelece uma relação advogado-cliente."
    3. Analise a lista de advogados fornecida e selecione até 3 advogados que sejam MELHORES para ajudar este usuário com base em sua especialidade, tags e biografia. A CORRESPONDÊNCIA É CRÍTICA. Se o usuário perguntar sobre divórcio, não mostre um advogado corporativo.

    Lista de Advogados: ${lawyersContext}

    Retorne sua resposta no formato JSON conforme este esquema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            answer: {
              type: Type.STRING,
              description: "A resposta textual à pergunta jurídica do usuário, incluindo o aviso legal.",
            },
            recommendedLawyerIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Uma lista dos IDs dos até 3 advogados recomendados.",
            }
          },
          required: ["answer", "recommendedLawyerIds"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
       throw new Error("Resposta vazia da IA");
    }

    const data = JSON.parse(jsonText) as AgentResponse;
    return data;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      answer: "Peço desculpas, mas estou enfrentando alto tráfego no momento e não consigo processar sua consulta jurídica. Por favor, tente novamente mais tarde.",
      recommendedLawyerIds: []
    };
  }
};