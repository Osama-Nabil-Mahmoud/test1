
import { GoogleGenAI } from "@google/genai";
import { projects } from "../data/projects";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI BIM Consultant for Alex ArchiBIM's portfolio. 
Your goal is to help recruiters and HR professionals understand Alex's technical expertise.

Alex's Profile:
- Based in: Coventry, UK
- Right to Work: Yes (UK Citizen/Permit Holder)
- Experience: 7+ years in Technical Architecture & BIM
- Core Tech: Revit, Navisworks, ISO 19650, Dynamo, Grasshopper

Projects Knowledge Base:
${projects.map(p => `- ${p.title} (${p.location}): ${p.summary}. Role: ${p.snapshot.role}. Tech: ${p.techStack.join(', ')}`).join('\n')}

Guidelines:
1. Be professional, technical, yet concise.
2. If asked about availability, emphasize Alex is based in Coventry and ready for UK-wide or remote roles.
3. If asked about a technical term (like LOD or BEP), explain it using one of Alex's projects as an example.
4. Encourage recruiters to download the PDF Portfolio or Contact Alex via the form.
5. Do not invent details not present in the data. If unsure, suggest contacting Alex.
`;

export async function askAI(message: string, currentProjectSlug?: string) {
  try {
    const context = currentProjectSlug 
      ? `The user is currently viewing the project: ${currentProjectSlug}. ` 
      : "";

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: context + message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having a brief technical moment. Please feel free to reach out to Alex directly via the contact form!";
  }
}
