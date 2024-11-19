const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Nastavení rate limitu (např. max 10 požadavků za minutu z jedné IP adresy)
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuta
    max: 10, // max 10 požadavků
    message: { error: 'Too many requests, please try again later.' }
  });
  app.use(limiter);

const transporter = nodemailer.createTransport({
    host: 'smtp.seznam.cz',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  app.post('/send-email', async (req, res) => {
    const { from, subject, name, tel, ico, project } = req.body;
  
    try {
      await transporter.sendMail({
        from: from,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: name
      });
  
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  });
  
  // Spuštění serveru
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });