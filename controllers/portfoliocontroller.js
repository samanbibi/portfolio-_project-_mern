const nodemailer = require("nodemailer");

const sendEmailController = async (req, res) => {
  const { name, email, msg } = req.body;
  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h4>New Message from Portfolio Contact Form</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${msg}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).send({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Email sending failed.",
      error,
    });
  }
};

module.exports = { sendEmailController };
