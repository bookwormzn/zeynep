const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // .env dosyasını okuyabilmek için

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Gmail SMTP transporter ayarı
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,        // .env'den okunur
    pass: process.env.MAIL_APP_PASSWORD // uygulama şifresi de buradan alınır
  }
});

// ✅ Mail gönderme endpoint'i
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form verisi geldi:", name, email, message);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER, // mesaj kendine gelsin
    subject: `Yeni mesaj - ${name}`,
    text: `
Yeni bir mesaj aldınız:

İsim: ${name}
E-posta: ${email}
Mesaj: ${message}
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`✅ Server http://localhost:${PORT} adresinde çalışıyor`);
});
