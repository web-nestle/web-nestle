import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, instagram, business, service, budget, message } = body;

    // 1. Generate Unique Tracking Credentials
    const trackingId = "WNE-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const tempPassword = Math.random().toString(36).substring(2, 10);

    // 2. Direct Web3Forms Access Key
    const accessKey = "e476b122-ac3d-4555-803c-df206bea2921";

    // 3. Prepare Web3Forms Payload
    const web3FormsData = {
      access_key: accessKey,
      subject: `New Lead Submission: ${name} (${service})`,
      from_name: name,
      email: email,
      message: `
NEW ENQUIRY DETAILS:
-------------------
Client Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Instagram: ${instagram || "N/A"}
Business Name: ${business || "N/A"}
Requested Service: ${service || "General Enquiry"}
Budget Range: ${budget || "Not specified"}

Message:
${message}

-------------------
GENERATED CLIENT CREDENTIALS:
Tracking ID: ${trackingId}
Temporary Password: ${tempPassword}
      `,
    };

    // 4. Send to Web3Forms API
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(web3FormsData),
    });

    const web3Result = await web3Response.json();

    if (!web3Result.success) {
      return NextResponse.json(
        { success: false, error: web3Result.message || "Web3Forms submission failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      trackingId,
      tempPassword,
      message: "Form processed successfully!",
    });
  } catch (err: any) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
