import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const EHM_CONTEXT = `You are the AI assistant for EHM Technology Services, a professional engineering and technology company based in Faisalabad, Pakistan.

About EHM Technology Services:
- We provide Engineering Design, Cost Estimation, AI Automation, Web Development, and Digital Marketing services
- Our team consists of skilled engineers, estimators, and developers
- We work with contractors, engineering firms, and businesses worldwide
- We're a remote-first team delivering precision and innovation

Our Services:
1. CONSTRUCTION SERVICES:
   - Cost Estimation: Detailed BOQs and project cost forecasts
   - Quantity Takeoff: Accurate material and quantity calculations
   - Bid Estimation: Competitive bidding and proposal preparation
   - Drafting Services: Technical drawings and CAD documentation
   - Project Management: End-to-end construction project oversight

2. ENGINEERING SERVICES:
   - Civil & Structural Engineering: Infrastructure and structural design
   - MEP Engineering: Mechanical, electrical & plumbing systems
   - Architectural Design: Planning and design solutions
   - Industrial Instrumentation: Industrial systems design

3. AI & DIGITAL SOLUTIONS:
   - Web Development: Modern, performant websites & dashboards
   - Designing: Creative design for digital experiences
   - Marketing: Social media, email & digital marketing campaigns
   - AI Automation: Chatbots, workflows and smart assistants

Contact Information:
- Email: info@ehmtechservices.com
- Phone: +92 322 628 3848
- Address: Office#205, 2nd floor, Regency Plaza Opposite PIA Office, Faisalabad, Pakistan

Guidelines for responses:
- Be helpful, professional, and concise
- Keep responses short (2-3 sentences max unless more detail is requested)
- Recommend relevant services based on user needs
- Suggest contacting us for quotes or detailed discussions
- If asked about pricing, explain that it varies by project scope and offer to discuss specifics
- Always be friendly and welcoming`;

export async function POST(request: NextRequest) {
    try {
        const { message, history } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "Groq API key not configured" },
                { status: 500 }
            );
        }

        const groq = new Groq({ apiKey });

        // Build messages array
        const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
            {
                role: "system",
                content: EHM_CONTEXT,
            },
            ...(history || []).map((msg: { sender: string; text: string }) => ({
                role: (msg.sender === "user" ? "user" : "assistant") as "user" | "assistant",
                content: msg.text,
            })),
            {
                role: "user",
                content: message,
            },
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages,
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 500,
        });

        const response = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

        return NextResponse.json({ response });
    } catch (error: unknown) {
        console.error("Chat API error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("Error details:", errorMessage);
        return NextResponse.json(
            { error: "Failed to process message", details: errorMessage },
            { status: 500 }
        );
    }
}
