import Groq from "groq-sdk";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { topic, messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const systemPrompt = `
You are a helpful assistant for a Canada newcomer website.

Rules:
- Be clear and simple.
- Do not invent information.
- If unsure, say you are not sure.
- Suggest official Canada.ca links when relevant.

Current topic: ${topic || "general"}
`;

    const chatMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: String(m.text || ""),
      })),
    ];

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: chatMessages,
      temperature: 0.3,
    });

    const answer =
      completion?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I could not generate a response.";

    return res.status(200).json({ answer });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return res.status(500).json({
      error: "LLM error",
      details: String(error),
    });
  }
}
