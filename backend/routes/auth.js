require('dotenv').config()

const express = require('express');
const generateKeyBuffer = require('../helpers/generateKeyBuffer')
const verifyRedirectToken = require('../controllers/login-controller')
const redirectToken = require('../helpers/generateRedirectToken')
const router = express.Router();

const { PRIVATE_KEY } = process.env

router.post('/verify-redirect-token', verifyRedirectToken.verifyRedirectToken)

router.post('/generate-redirect-token', (req, res, next) => {
    const email = req.body.email
    let token;
    try {
        const privateKeyBuffer = generateKeyBuffer.generateKeyBuffer(PRIVATE_KEY)
        token = redirectToken.generateRedirectToken(privateKeyBuffer, email)
    } catch (err) {
        console.log(err)
    }
    res.status(201).json({ token: token, email: email })
})

module.exports = router;