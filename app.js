const express = require("express");
const nodemailer = require("nodemailer");
const m = require("./mongodb");
const otpGenerator = require('otp-generator')
var cors=require("cors");
const app = express();
app.use(cors());
app.use(express.json());
var crypto = require("crypto");//to decrypt the password
const key = "adnan-tech-programming-computers";
const algo = "aes-256-cbc";
app.post("/mail",(req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow these methods
  res.header("Access-Control-Allow-Headers", "Content-Type");
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
  
  

app.post("/reset",async(req,res)=>{
  const password = req.body.password;
  const cipher = crypto.createCipher(algo, key); // Use createCipheriv for IV
  const encrypted = cipher.update(password, "utf-8", "hex") + cipher.final("hex");
  
  const result = await m.updateOne(
    { email: req.body.email },
    { $set: { password: encrypted } },
    { new: true } // Return updated document
  );
     res.status(201).json({ message: "Password  Update Succesfull!!" });
});

})

app.listen(5000);