import Groq from "groq-sdk";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ error: "Missing GROQ_API_KEY" });
    }

    const { topic, messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const systemPrompt = `
You are a helpful assistant for a Canada newcomer website.
Be clear and simple. Do not invent info. If unsure, say so.
Topic: ${topic || "general"}
`;

    const chatMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
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
      completion?.choices?.[0]?.message?.content?.trim() || "No response.";

    return res.status(200).json({ answer });
  } catch (err) {
    console.error("FUNCTION ERROR:", err);
    return res.status(500).json({
      error: "Function crashed",
      details: String(err?.message || err),
    });
  }
}
