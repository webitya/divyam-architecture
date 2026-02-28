import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // SMTP TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: `"DIVYAM ARCHITECTURE & DESIGN STUDIO" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Enquiry Received - DIVYAM ARCHITECTURE & DESIGN STUDIO",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ----------------------------
    // SEND THANK YOU EMAIL TO USER
    // ----------------------------
    const confirmationMailOptions = {
      from: `"DIVYAM ARCHITECTURE & DESIGN STUDIO" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We have received your enquiry",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out to DIVYAM ARCHITECTURE & DESIGN STUDIO. We have received your enquiry and will get back to you shortly.</p>
        <p><strong>Your Message:</strong><br/>${message}</p>
        <p>Warm Regards,<br/>DIVYAM ARCHITECTURE & DESIGN STUDIO Team</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}
