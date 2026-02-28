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

    // ----------------------------
    // SEND TO ADMIN (same as MAIL_USER)
    // ----------------------------
    await transporter.sendMail({
      from: `"Plan Edge Architect" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Enquiry Received - Plan Edge Architect",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ----------------------------
    // SEND THANK YOU EMAIL TO USER
    // ----------------------------
    await transporter.sendMail({
      from: `"Plan Edge Architect" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You! We Received Your Enquiry",
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>Your enquiry has been received. Our team will reach out soon.</p>
        <br/>
        <h3>Your Submitted Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p>Warm Regards,<br/>Plan Edge Architect Team</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}
