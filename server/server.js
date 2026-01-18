import express from "express";
import cors from "cors";
import "dotenv/config";
import Groq from "groq-sdk";

const app = express();

/* ======================
   MIDDLEWARE
====================== */

// DEV: permitir todo (evita problemas localhost / 127.0.0.1)
app.use(cors());
app.use(express.json());

// log para debug
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/* ======================
   GROQ CLIENT
====================== */

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* ======================
   ROUTES
====================== */

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { topic, messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

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
      ...messages.map(m => ({
        role: m.from === "user" ? "user" : "assistant",
        content: String(m.text || "")
      }))
    ];

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: chatMessages,
      temperature: 0.3
    });

    const answer =
      completion?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I could not generate a response.";

    res.json({ answer });

  } catch (error) {
    console.error("LLM ERROR:", error);
    res.status(500).json({
      error: "LLM failed",
      details: String(error)
    });
  }
});

/* ======================
   SERVER
====================== */

app.listen(3000, "0.0.0.0", () => {
  console.log("Groq API running on http://localhost:3000");
});
