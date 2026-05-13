import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Input Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // If EMAIL_PASS is not set in environmental variables, we simulate success in dev
    // and log a clear instruction so the website never crashes.
    if (!process.env.EMAIL_PASS) {
      console.warn("EMAIL_PASS is not configured in .env.local. Simulating successful message submission.");
      return NextResponse.json({ 
        success: true, 
        isSimulated: true,
        message: "Message received in simulation mode! Configure EMAIL_PASS in .env.local for real emails." 
      });
    }

    // Create SMTP transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "mozammalhaq01@gmail.com",
        pass: process.env.EMAIL_PASS, // Gmail 16-character App Password
      },
    });

    // Email HTML Template
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "mozammalhaq01@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; max-width: 600px; background-color: #ffffff; color: #1e293b; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <h2 style="color: #FFC107; border-bottom: 2px solid #FFC107; padding-bottom: 12px; margin-top: 0; font-size: 22px; font-weight: 800;">
            📬 New Message From Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #64748b; width: 100px;">Name:</td>
              <td style="padding: 6px 0; font-size: 16px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Email:</td>
              <td style="padding: 6px 0; font-size: 16px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #FFC107; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Subject:</td>
              <td style="padding: 6px 0; font-size: 16px; font-weight: 600; color: #0f172a;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; padding: 20px; background-color: #f8fafc; border-left: 4px solid #FFC107; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #334155;">
            <strong style="display: block; margin-bottom: 8px; color: #475569;">Message Content:</strong>
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 35px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 15px; font-style: italic;">
            This email was sent securely via your Next.js Portfolio Server.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully to Gmail!" });
  } catch (error) {
    console.error("Nodemailer API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email through server-side SMTP." },
      { status: 500 }
    );
  }
}
