import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL || "info@ehmtechservices.com";

        // If Resend is not configured, log and return success anyway (for development)
        if (!apiKey || apiKey === "your_resend_api_key_here") {
            console.log("=== CONTACT FORM SUBMISSION (Email not configured) ===");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Company:", company || "Not provided");
            console.log("Message:", message);
            console.log("=======================================================");

            return NextResponse.json({
                success: true,
                message: "Form submitted successfully (email delivery not configured)",
            });
        }

        const resend = new Resend(apiKey);

        // Send email notification
        await resend.emails.send({
            from: "EHM Website <onboarding@resend.dev>",
            to: contactEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          This message was sent from the EHM Tech Services website contact form.
        </p>
      `,
        });

        // Send confirmation to the user
        await resend.emails.send({
            from: "EHM Tech Services <onboarding@resend.dev>",
            to: email,
            subject: "We received your message - EHM Tech Services",
            html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <hr />
        <h3>Your message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p>Best regards,<br>The EHM Tech Services Team</p>
        <p style="color: #666; font-size: 12px;">
          Email: info@ehmtechservices.com | Phone: +92 322 628 3848
        </p>
      `,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
