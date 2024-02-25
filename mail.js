const nodemailer = require("nodemailer");

// Create a transporter with enhanced security and error handling
const transporter = nodemailer.createTransport({
  service: "gmail",
  port:465,
  secure:true,
  secureConnection: false,
  auth: {
    user: "arka9791chakraborty@gmail.com",
    pass: "pqekcnudstwndcfr", // Replace with your actual password
  },
  tls: {
    rejectUnauthorized: false, // Optional for self-signed certificates
  },
});

// Email content
const info = {
  from: "arka9791chakraborty@gmail.com",
  to: "arka5367chakraborty@gmail.com",
  subject: "Hello Arka",
  text: "Hello",
};

// Send the email with informative error handling
transporter.sendMail(info, (err, info) => {
  if (err) {
    console.error("Error sending email:", err);
    console.error("Check for authentication issues, network connectivity, or Gmail restrictions.");
  } else {
    console.log("Email sent:", info.response);
  }
});
