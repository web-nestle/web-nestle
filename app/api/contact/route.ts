
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      instagram,
      business,
      service,
      budget,
      message,
    } = body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof business !== "string" ||
      !business.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your name, email and business name.",
        },
        { status: 400 }
      );
    }

    // Generate a unique-looking enquiry reference.
    // It is NOT a password or proof of identity.
    const trackingId =
      `WNE-${Date.now().toString(36).toUpperCase()}-` +
      crypto.randomUUID().slice(0, 8).toUpperCase();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Web3Forms access key is not configured.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    const web3FormsData = {
      access_key: accessKey,
      subject: `New Enquiry: ${trackingId} - ${name}`,
      from_name: "Web Nestle Website Enquiry",
      email: email.trim(),
      message: `
NEW WEB NESTLE ENQUIRY
======================

Enquiry ID: ${trackingId}

Client Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Instagram: ${instagram || "Not provided"}
Business Name: ${business}
Requested Service: ${service || "General Enquiry"}
Budget Range: ${budget || "Not specified"}

Project Message:
${message || "Not provided"}

Use the enquiry ID above when following up with this client.
      `,
    };

    const web3Response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3FormsData),
      }
    );

    const web3Result = await web3Response.json();

    if (!web3Response.ok || !web3Result.success) {
      console.error("Web3Forms submission failed.");

      return NextResponse.json(
        {
          success: false,
          error: "Your enquiry could not be sent. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      trackingId,
      message: "Enquiry submitted successfully.",
    });
  } catch {
    console.error("Contact API request failed.");

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
