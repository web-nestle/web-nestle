
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured.");

      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      name,
      business,
      email,
      phone,
      instagram,
      projectType,
      message,
      budget,
    } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !business?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide your name, email, and business name.",
        },
        { status: 400 }
      );
    }

    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const uniquePart = randomUUID().replace(/-/g, "").slice(0, 12).toUpperCase();
    const trackingId = `WNE-${date}-${uniquePart}`;

    const emailMessage = `
NEW WEB NESTLE ENQUIRY

Enquiry ID: ${trackingId}

Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone || "Not provided"}
Instagram: ${instagram || "Not provided"}
Project Type: ${projectType || "Not provided"}
Budget: ${budget || "Not provided"}

Project Details:
${message || "No additional details provided."}
`;

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", `New Web Nestle Enquiry - ${trackingId}`);
    formData.append("from_name", "Web Nestle Website");
    formData.append("email", email);
    formData.append("message", emailMessage);

    const web3formsResponse = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await web3formsResponse.json();

    if (!web3formsResponse.ok || !result.success) {
      console.error("Web3Forms submission failed:", result);

      return NextResponse.json(
        {
          success: false,
          message: "Your enquiry could not be sent. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      trackingId,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
