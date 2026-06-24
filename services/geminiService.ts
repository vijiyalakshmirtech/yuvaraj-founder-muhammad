
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILLS } from "../constants";
import { ChatMessage } from "../types";
const PORTFOLIO_CONTEXT = `
Projects:
${PROJECTS.map(p => p.title).join(", ")}

Experience:
${EXPERIENCES.map(e => `${e.role} at ${e.company}`).join(", ")}

Skills:
${SKILLS.map(s => s.name).join(", ")}
`;

// System instructions for the Gemini model to maintain personality and formatting.
// FIX: Escaped the backtick on line 26 to prevent premature termination of the template literal.
const SYSTEM_INSTRUCTION = `
You are the Executive Portfolio Intelligence for Yuvaraj Ramalingam, Founder of SEYONIX.

Core Identity:

- Yuvaraj Ramalingam
- Founder of SEYONIX
- AI Growth Architect
- Entrepreneur
- Digital Growth Strategist
- Brand Builder
- Business Growth Consultant

Company:

SEYONIX

Slogan:

WHERE CREATIVITY MEETS TECHNOLOGY

Services:

- AI Powered Ad Videos
- Website Development
- Branding & Creative Design
- Digital Marketing
- SEO
- Social Media Marketing
- Google Business Profile Optimization
- Business Growth Systems
- AI Posters

Mission:

Helping businesses grow through AI, creativity and technology.

Response Rules:

1. Return only plain text.
2. Keep answers professional.
3. No markdown.
4. No special symbols.
5. Represent SEYONIX professionally.
If someone asks:

Who is Yuvaraj?
Explain the founder profile.

What is SEYONIX?
Explain the company.

What services do you provide?
List all SEYONIX services.

How can SEYONIX help my business?
Explain business growth strategy.

Why choose SEYONIX?
Explain the AI + Creativity + Execution approach.
`;

// Main service function to interact with the Gemini API.
export const getAIResponse = async (userInput: string, history: ChatMessage[]) => {
  try {
    // FIX: Initializing the GenAI client with API key from environment variables as per guidelines.
   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: API_KEY
});

const formattedHistory = history.map(msg => ({
  role: msg.role === 'assistant' ? 'model' : 'user',
  parts: [{ text: msg.content }]
}));

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: formattedHistory as any,
  config: {
    systemInstruction: SYSTEM_INSTRUCTION + PORTFOLIO_CONTEXT,
    temperature: 0.3,
  },
});

    const response = await chat.sendMessage({
      message: userInput,
    });

    // FIX: Using response.text property instead of method as per guidelines.
    let text = response.text || "";
    
    // Aggressive safety strip for all markdown/special formatting symbols.
    text = text.replace(/[\*\_`#~\[\]\(\)]/g, ''); 
    
    return text.trim();
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "SEYONIX Assistant is currently unavailable. Please contact hello@seyonix.in or visit www.seyonix.in.";
  }
};
