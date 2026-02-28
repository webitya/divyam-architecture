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
      from: `"Plan Edge Architect" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Subscriber - Plan Edge Architect",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // Send Thank You Email to User
    await transporter.sendMail({
      from: `"Plan Edge Architect" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You for Subscribing!",
      html: `
        <h2>Welcome, ${name}!</h2>
        <p>Thank you for subscribing to Plan Edge Architect.</p>
        <p>You'll start receiving updates very soon.</p>
        <br/>
        <p>Warm Regards,<br/>Plan Edge Architect Team</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("SUBSCRIBE ERROR:", error);
    return Response.json({ error: "Subscription failed" }, { status: 500 });
  }
}
