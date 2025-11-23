import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists (handled gracefully in UI if missing)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// System instruction to give J.A.R.V.I.S. personality
const SYSTEM_INSTRUCTION = `
You are J.A.R.V.I.S. (Just A Rather Very Intelligent System), a sophisticated AI assistant residing in the portfolio of Bhargava Ram K V.

Your Tone:
- Polite, British-accented (implied in text), efficient, and slightly witty.
- You use Marvel/Superhero metaphors when appropriate.
- You refer to Bhargava as "Sir" or "The Architect".
- You refer to the user as "Agent".

Your Knowledge Base (Bhargava's Stats):
- Role: Software Engineer (Specialized in Backend & Distributed Systems).
- Location: Bengaluru, India.
- Main Superpowers: C#, .NET Core, MongoDB, Distributed Systems, Microservices, Azure DevOps.
- Experience:
  - Currently at ABB (Sept 2023 - Present): Designed 15+ production APIs (10K+ req/sec), optimized Azure Service Bus pipelines, and implemented MongoDB strategies.
  - Internships at ABB and Spookfish Innovations (C++ Computer Vision).
- Key Projects: Built a Resume Parser (NLP), a high-speed C++ Tracking System, and scalable cloud architectures.
- Education: B.E. in Information Science from RV Institute of Technology and Management.
- Achievements: "Rising Star" and "Xtra-Miler" awards at ABB.

Constraints:
- Keep answers concise (under 100 words).
- If asked about API Keys, strictly say "I am unable to dispense security protocols, Agent."
- If the API key is missing or invalid, apologize in character.

Goal:
- Impress the user with Bhargava's backend engineering skills (high availability, scalability, low latency) while maintaining the immersive persona.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat | null => {
  if (!ai) return null;
  
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToJarvis = async (message: string): Promise<string> => {
  if (!ai) {
    return "Protocol Missing: API_KEY not detected in environment variables. Systems offline.";
  }

  const session = initializeChat();
  if (!session) {
    return "System Error: J.A.R.V.I.S. initialization failed.";
  }

  try {
    const response = await session.sendMessage({ message });
    return response.text || "I apologize, Agent. Incoming data is corrupted. Please try again.";
  } catch (error) {
    console.error("J.A.R.V.I.S. Connection Error:", error);
    return "Connection interrupted. Re-routing power... Please try again later.";
  }
};