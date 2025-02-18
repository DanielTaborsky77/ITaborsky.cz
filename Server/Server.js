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
    console.log('Request body:', req.body); // Log příchozích dat
  
    const { from, service, name, tel, ico, description } = req.body;
  
    try {
      const user = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: from,
        subject: `ITaborsky.cz - Poděkování za poptávku služby: ${service}` ,
        html: `
        <div style="background-color: #07031A; width: auto; padding: 40px; sans-serif; font-size: 18px;">
            <img src="cid:logo" alt="Logo" style="width: 175px; height: auto; padding-bottom: 50px;" />
            <p style="color: #FFFFFF; font-weight: 300; padding-bottom: 25px;">Moc Vám děkuji za Vaši poptávku :).</p>
            <p style="color: #FFFFFF; font-weight: 300; padding-bottom: 50px;">Co nejdříve se ozvu a domluvíme se na online nebo osobní schůzce. </p>
            <p style="color: #FFFFFF; font-weight: 300; line-height: 35px; padding-bottom: 30px;">S přátelským pozdravem, <br>
            <strong>Daniel Táborský</strong></p>
            <p style="color: #FFFFFF; font-weight: 300; line-height: 35px; padding-bottom: 50px;">
                Web: www.Itaborsky.cz <br>
                E-mail: Taborsky@Itaborsky.cz <br>
                Tel: (+420) 731 124 827 <br>
            </p>
            <img src="cid:me" alt="" style="width: 225px; height: auto;">
        </div>
            `,
            attachments: [
              {
                filename: 'logo.png', // Název souboru
                path: '../src/Assets/logo.png', // Cesta k souboru
                cid: 'logo', // Stejný CID jako v HTML
              },
              {
                filename: 'me.png', // Název souboru
                path: '../src/Assets/me.png', // Cesta k souboru
                cid: 'me', // Stejný CID jako v HTML
              }
            ],
      });
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: service,
        text: `
          Jméno a příjmení: ${name}
          E-mail: ${from}
          Telefonní číslo: ${tel}
          IČO: ${ico}
          Popis projektu: ${description}
        `
      });
      console.log('Email sent:', info); // Log úspěšného odeslání
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error while sending email:', error); // Log chyby
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  });
  
  // Spuštění serveru
  const PORT = 8406;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });