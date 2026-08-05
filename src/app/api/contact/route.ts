import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

function validateField(value: string | undefined, name: string, required = true): string | null {
  if (required && (!value || !value.trim())) {
    return `${name} is required`;
  }
  return null;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[+]?[\d\s()-]{7,20}$/.test(phone);
}

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 1000);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const errors: Record<string, string> = {};

    const nameError = validateField(body.name, "Name");
    if (nameError) errors.name = nameError;

    const emailError = validateField(body.email, "Email");
    if (emailError) {
      errors.email = emailError;
    } else if (!validateEmail(body.email)) {
      errors.email = "Invalid email format";
    }

    const phoneError = validateField(body.phone, "Phone");
    if (phoneError) {
      errors.phone = phoneError;
    } else if (!validatePhone(body.phone)) {
      errors.phone = "Invalid phone format";
    }

    const messageError = validateField(body.message, "Message");
    if (messageError) {
      errors.message = messageError;
    } else if (body.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      company: body.company ? sanitize(body.company) : "",
      message: sanitize(body.message),
      submittedAt: new Date().toISOString(),
    };

    // =============================================
    // TODO: Connect to your email service here
    // Examples:
    //   - SendGrid: await sgMail.send(...)
    //   - Resend: await resend.emails.send(...)
    //   - Nodemailer: await transporter.sendMail(...)
    // =============================================

    // Log for now (replace with email service in production)
    console.log("📧 New contact form submission:", sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
