const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path=require('path')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 📬 Email sending route
app.post("/api/v1/portfolio/sendEmail", async (req, res) => {
  const { name, email, msg } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact - Message from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${msg}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ success: false, message: "Failed to send email" });
  }
});


// Other routes
app.use("/api/v1/portfolio", require("./routes/portfolioroute"));


const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
