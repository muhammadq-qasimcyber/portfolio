import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    const errors: Record<string, string> = {};
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }
    if (!email || typeof email !== "string" || !validateEmail(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters.";
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact me directly at qasimazhar866@gmail.com" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e14; color: #e7edf3; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #54e6d2 0%, #6e7bf2 100%); padding: 24px 32px;">
          <h1 style="margin: 0; color: #0a0e14; font-size: 20px;">New Portfolio Contact</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #96a3b0; font-size: 14px; width: 100px; vertical-align: top;">From</td>
              <td style="padding: 12px 0; color: #e7edf3; font-size: 14px;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #96a3b0; font-size: 14px; vertical-align: top;">Email</td>
              <td style="padding: 12px 0;"><a href="mailto:${email.trim()}" style="color: #54e6d2; text-decoration: none;">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #96a3b0; font-size: 14px; vertical-align: top;">Subject</td>
              <td style="padding: 12px 0; color: #e7edf3; font-size: 14px;">${subject.trim()}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #10151d; border-radius: 8px; border-left: 3px solid #54e6d2;">
            <p style="margin: 0; color: #96a3b0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 12px 0 0; color: #e7edf3; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</p>
          </div>
          <p style="margin-top: 24px; color: #5c6b79; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact me directly." },
      { status: 500 }
    );
  }
}
