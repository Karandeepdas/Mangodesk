import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn('[WARN] GEMINI_API_KEY is missing. /summarise will fail until it is set.');
}
const genAI = new GoogleGenerativeAI(apiKey || '');

export default async function sendPromptToGemini(req, res) {
  try {
    const { data, prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const promptText = `You are a skilled meeting notes summarizer.\n\nInstruction: ${prompt}\n\nTranscript:\n${data}`;
    const result = await model.generateContent(promptText);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ output: text });
  } catch (err) {
    console.error('[Gemini Error]', err);
    return res.status(500).json({ message: 'Failed to summarize' });
  }
}