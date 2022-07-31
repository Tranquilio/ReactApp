require('dotenv').config()

const express = require('express');
const generateKeyBuffer = require('../helpers/generateKeyBuffer')
const verifyRedirectToken = require('../controllers/login-controller')
const redirectToken = require('../helpers/generateRedirectToken')
const nodemailer = require("nodemailer");
const Verifier = require("email-verifier");
const router = express.Router();

const { PRIVATE_KEY, NODEMAILER_EMAIL, NODEMAILER_PASSWORD, EMAIL_VERIFIER_API_KEY } = process.env

router.post('/verify-redirect-token', verifyRedirectToken.verifyRedirectToken)

router.post('/generate-redirect-token', (req, res, next) => {
    const privateKeyBuffer = generateKeyBuffer.generateKeyBuffer(PRIVATE_KEY)
    res.json(redirectToken.generateRedirectToken(privateKeyBuffer))
})

router.post('/verify-email-address', (req, res, next) => {
    const { email } = req.body
    let verifier = new Verifier(EMAIL_VERIFIER_API_KEY);
    verifier.verify(email, (err, data) => {
        if (err) res.json({message: "Email is invalid"})
        else res.json({message: "Email is valid"})
    });
})

router.post('/login-init', async (req, res, next) => {
    const { email, otp } = req.body
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: NODEMAILER_EMAIL, // generated ethereal user
          pass: NODEMAILER_PASSWORD, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'Tranquilio <help@tranquilio>', // sender address
        to: `${email}`, // list of receivers
        subject: "Here is your OTP!", // Subject line
        text: `${otp}`, // plain text body
      });
    
      console.log("Message sent: %s", info.messageId);
})

module.exports = router;