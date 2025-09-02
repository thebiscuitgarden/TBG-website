const cors = require('cors');
const dotenv = require('dotenv')
const express = require('express')
const multer  = require('multer');
const nodemailer = require('nodemailer')

// Cron Job
const healthCronJob = require('./healthCronJob')
if (process.env.API_STAGE !== 'development'){
    healthCronJob.start()
}
if (process.env.API_STAGE === 'development') {
    healthCronJob.stop()
}

// Console logger
const { logData } = require('../frontend/src/loggerFunc');

dotenv.config()

//Variables
const host = process.env.EMAIL_HOST
const port = process.env.PORT || 4800
const recipient = process.env.EMAIL_RECIPIENT
const sender = process.env.EMAIL_SENDER
const sender_pass = process.env.SENDER_PASS

//Setting up to recieve files from FE
const storage = multer.memoryStorage()
const upload = multer({ storage })



const app = express()

app.use('/', express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get(`/`, (__, res) => {
    res.status(200).json({
        message: `API is running on port ${port}!`
    })
})

app.get(`/email-form`, (__, res) => {
    res.status(200).json({
        message: `/email-form is running`
    })
})

app.post(`/email-form`, upload.single('file'), async (req, res) => {
    logData('Email Send Start')
    let { formData, pdfName, time } = req.body
    time = time ? time : 0
    //To get formData information
    formData = JSON.parse(formData)

    logData('PDF NAME', pdfName)
    logData('FORM DATA', formData)
    logData('PDF Blob:\nFieldname', req.file.fieldname)
    logData('\nOriginal Name', req.file.originalname)
    logData('\nmimetype', req.file.mimetype)
    logData('\nSize', req.file.size)

    let pdf = Buffer.from(req.file.buffer)

    try{
        const controller = new AbortController()
        setTimeout(() => controller.abort(), time)
        
        //For emailing with nodemailer:
        const transporter = nodemailer.createTransport({
            host: host,
            port: 587,
            secure: false,
            auth: {
                user: sender,
                pass: sender_pass
            }
        })

        const info = await transporter.sendMail({
            from: `TBG Website ${sender}`,
            to: recipient,
            subject: `${formData.owner1_first_name} ${formData.owner1_last_name}'s Intake Form Submission`,
            text: `Attached is ${formData.owner1_first_name} ${formData.owner1_last_name}'s intake form.`,
            html: `<p> Attached is ${formData.owner1_first_name} ${formData.owner1_last_name}'s intake form. </p >`,
            attachments: [
                {
                    filename: `${pdfName}.pdf`,
                    content: pdf
                }
            ]
        })

        logData('INFO from mailer:', info)
    }
    catch(error){
        return res.status(500).json({
            error,
            message: "Email could not be sent"
        })
    }
    
    logData('Email Sent Successfully!')
    return res.status(200).json({
        message: "Email sent successfully!"
    })
})

app.listen(port, () => {
    logData(`Server on port ${port}`)
})