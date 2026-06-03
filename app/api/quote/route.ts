import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not defined.")
      return NextResponse.json(
        { error: "Mail service is not configured. Please set RESEND_API_KEY." },
        { status: 500 }
      )
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@nooralwarsan.ae"
    // For Resend, if domain is not verified, it defaults to onboarding@resend.dev
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev"

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: `Noor Al Warsan Website <${senderEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          <h2 style="color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 10px; margin-top: 0;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 130px;">Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Company:</td>
              <td style="padding: 6px 0;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 6px 0;">${phone || "N/A"}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-weight: bold; margin-bottom: 5px;">Message/Requirements:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #15803d; white-space: pre-wrap; font-style: italic;">
            ${message}
          </div>
          <footer style="margin-top: 30px; font-size: 11px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the Noor Al Warsan LLC contact form.
          </footer>
        </div>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("API Route error:", error)
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred." },
      { status: 500 }
    )
  }
}
