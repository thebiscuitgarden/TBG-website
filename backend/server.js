const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios');
const multer  = require('multer');
const { logData } = require('../frontend/src/loggerFunc');

dotenv.config()

//Variables
const endpoint = process.env.EMAIL_DOMAIN
const port = process.env.EMAIL_PORT || 4800
const recipient = process.env.EMAIL_RECIPIENT
const sender = process.env.EMAIL_SENDER
const template = process.env.EMAIL_TEMPLATE
const token = process.env.EMAIL_TOKEN

//Setting up to recieve files from FE
const storage = multer.memoryStorage()
const upload = multer({ storage })


const app = express()

app.use('/', express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get(`/api`, (__, res) => {
    res.status(200).json({
        message: `API is running on port ${port}!`
    })
})

app.get(`/api/email-form`, (__, res) => {
    res.status(200).json({
        message: `/api/email-form is running`
    })
})
app.post(`/api/email-form`, upload.single('file'), async (req, res) => {
    let { formData, pdfName, time } = req.body
    //To get formData information
    formData = JSON.parse(formData)

    logData('PDF NAME', pdfName)
    logData('FORM DATA', formData)

    let base64pdf = req.file.buffer.toString('base64')

    //For email service:
    const data = {
        from: {
            email: sender,
            name: 'TBG Website'
        },
        to: [{
            email: recipient
        }],
        template_uuid: template,
        template_variables: {
            'owner': {
                'first_name': `${formData.owner1_first_name}`,
                'last_name': `${formData.owner1_last_name}`    
            },
        },
        attachments: [
            {
                content: base64pdf, 
                filename: pdfName,
                type: req.file.mimetype
            }]
    }

    let log_email_data = {...data}
    // If base64 is large, then cut for ease of logging data
    log_email_data['attachments'][0]['content'].length > 500 ? 
        log_email_data['attachments'][0]['content'].slice(0, 501) 
        : log_email_data['attachments'][0]['content']

    logData('SENT DATA TO EMAIL PROVIDER - CROPPED ATTACHMENT CONTENT', log_email_data)

    const controller = new AbortController()
    setTimeout(() => controller.abort(), time)

    //Call for email api to send form:
    await axios.post(`${endpoint}/api/send`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Api-Token': token
        },
        signal: controller.signal
    })
        .then(() => {
            logData('EMAIL SUCCESSFUL', '')
            return res.status(200).json({
                message: `Owner form emailed successfully`
            })
        })
        .catch(err =>{
            logData('EMAIL PROVIDER ERROR:', err)
            return res.status(500).json({
                message: `API - error in sending owner form through email`,
                error: err
            })
        })
})

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})