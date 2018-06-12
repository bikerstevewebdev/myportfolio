require('dotenv').config()
const express = require('express')
const { PORT } = process.env
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + '/../build'))


const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL, //.env file
        pass: process.env.EMAIL_PASSWORD //.env file
    }
})

// const sendMessage = (req, res) => {
//     let messageBody = `${req.body.name} just sent reached out to you. Their message is as follows: ${req.body.message}.  Their contact info is: ${req.body.email}`
//     const mailOptions = {
//         from: process.env.EMAIL,
//         to: 'bikerstevefitness@gmail.com',
//         subject: `New Contact from ${req.body.name}`,
//         text: messageBody
//     }
//     transport.sendMail(mailOptions).then(emailRes => {
//         res.status(200).send(emailRes)
//     }).catch(err => {
//         res.status(500).send(err)
//     })
// }

app.listen(PORT, () => {
    console.log(`Portfolio is LIVE!!! port ${PORT}`)
})

app.post('/contact', (req, res) => {
    let messageBody = `${req.body.name} just sent reached out to you. Their message is as follows: ${req.body.message}.  Their contact info is: ${req.body.email}`
    const mailOptions = {
        from: process.env.EMAIL,
        to: 'bikerstevefitness@gmail.com',
        subject: `New Contact from ${req.body.name}`,
        text: messageBody
    }
    transport.sendMail(mailOptions).then(emailRes => {
        res.status(200).send(emailRes)
    }).catch(err => {
        res.status(500).send(err)
    })
})
