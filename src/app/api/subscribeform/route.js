import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail App Password
      },
    });

    // Send to Admin
    await transporter.sendMail({
      from: `"DIVYAM ARCHITECTURE & DESIGN STUDIO" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Subscriber - DIVYAM ARCHITECTURE & DESIGN STUDIO",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // Send Thank You Email to User
    await transporter.sendMail({
      from: `"DIVYAM ARCHITECTURE & DESIGN STUDIO" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank you for subscribing",
      html: `
        <h3>Hello, ${name}!</h3>
        <p>Thank you for subscribing to DIVYAM ARCHITECTURE & DESIGN STUDIO. You'll now receive our latest updates and design inspirations.</p>
        <p>Warm Regards,<br/>DIVYAM ARCHITECTURE & DESIGN STUDIO Team</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("SUBSCRIBE ERROR:", error);
    return Response.json({ error: "Subscription failed" }, { status: 500 });
  }
}
