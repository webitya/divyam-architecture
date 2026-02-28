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
      from: `"DIVYAM STUDIO" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Lead: ${name} - DIVYAM ARCHITECTURE & DESIGN STUDIO`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #000; margin: 0; letter-spacing: 2px;">DIVYAM</h1>
            <p style="color: #666; font-size: 10px; margin-top: 5px; text-transform: uppercase; letter-spacing: 3px;">Architecture & Design Studio</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 8px;">
            <h2 style="color: #333; font-size: 20px; margin-top: 0; border-bottom: 2px solid #C18F08; padding-bottom: 10px; display: inline-block;">New Project Enquiry</h2>
            <div style="margin-top: 25px;">
              <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> <span style="color: #000;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #C18F08; text-decoration: none;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> <a href="tel:${phone}" style="color: #C18F08; text-decoration: none;">${phone}</a></p>
              <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #ddd;">
                <p style="color: #555; margin-bottom: 10px;"><strong>Project Details:</strong></p>
                <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message || 'No details provided.'}</p>
              </div>
            </div>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            This enquiry was sent from the DIVYAM ARCHITECTURE website homepage.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ----------------------------
    // SEND THANK YOU EMAIL TO USER
    // ----------------------------
    const confirmationMailOptions = {
      from: `"DIVYAM STUDIO" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We've Received Your Dream Project Enquiry - DIVYAM ARCHITECTURE",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #000; margin: 0; letter-spacing: 2px;">DIVYAM</h1>
            <p style="color: #666; font-size: 10px; margin-top: 5px; text-transform: uppercase; letter-spacing: 3px;">Architecture & Design Studio</p>
          </div>
          <div style="padding: 20px; text-align: center;">
            <h2 style="color: #333; font-weight: 300;">Hello ${name},</h2>
            <p style="color: #555; line-height: 1.8; font-size: 16px;">
              Thank you for reaching out to <strong>DIVYAM ARCHITECTURE & DESIGN STUDIO</strong>. <br/>
              We have received your enquiry regarding your project and our team is already reviewing the details.
            </p>
            <div style="background-color: #fcfcfc; border: 1px dashed #C18F08; padding: 20px; margin: 30px 0; border-radius: 8px; text-align: left;">
              <p style="color: #888; font-size: 12px; margin: 0 0 10px 0; text-transform: uppercase;">Your Message Summary</p>
              <p style="color: #333; margin: 0; line-height: 1.5; font-style: italic;">"${message}"</p>
            </div>
            <p style="color: #555; line-height: 1.8; font-size: 16px;">
              One of our lead architects will contact you shortly to discuss how we can bring your vision to life.
            </p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #333; margin: 0; font-weight: 600;">Divyam Gupta</p>
              <p style="color: #888; font-size: 13px; margin: 5px 0;">Principal Architect</p>
              <p style="color: #C18F08; font-size: 14px; margin: 10px 0;">
                <a href="https://divyamarchitecture.com" style="color: #C18F08; text-decoration: none;">divyamarchitecture.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}
