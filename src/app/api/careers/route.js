import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const linkedin = formData.get("linkedin") || "Not provided";
    const position = formData.get("position");
    const file = formData.get("resume");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Admin Email
    await transporter.sendMail({
      from: `"Plan Edge Architect" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Job Application - ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>Position:</strong> ${position}</p>
      `,
      attachments: [
        { filename: file.name, content: buffer },
      ],
    });

    // User Email
    await transporter.sendMail({
      from: `"Plan Edge Architect" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You for Applying",
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>Your application for <strong>${position}</strong> has been received.</p>
        <p>Our HR team will review your resume and contact you soon.</p>
        <br/>
        <p>Warm Regards,<br/>Plan Edge Architect Team</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("CAREERS ERROR:", error);
    return Response.json({ error: "Application failed" }, { status: 500 });
  }
}
