import axios from "axios"
import { MailtrapClient } from "mailtrap"

const mailtrap = new MailtrapClient({
  token: process.env.EMAIL_TOKEN,
});

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2bb13247f1a687",
    pass: process.env.EMAIL_TEST_PSWD,
  }
});

export default async function emailForm(props){
    const { pdfBlob, pdfName, formData } = props

    let emailData = {
        formData,
        pdfName,
    }

    const sendForm = new FormData()
    const pdfFile =  new File(
            [pdfBlob], 
            pdfName, 
            {
                type: pdfBlob.type
            }
        )
    
    sendForm.append('file', pdfFile)

    Object.keys(emailData).forEach(key => {
        sendForm.append(key, JSON.stringify(emailData[key]))
    })
    
    
	transport.sendMail({
		from: "Private Person <from@example.com>",
		to: "A Test User <to@example.com>",
		subject: "Hello from Mailtrap",
		text: "This is a test e-mail message."
	}, (error, info) => {
	  if (error) {
		    return console.log(error);
		}
		console.log("Message sent: %s", info.messageId);
	});

	/*
    try{
        //Sending form data to BE to send to email service:
        await axios.post(
            `${process.env.REACT_APP_API}/api/email-form`, 
            sendForm,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        .then(response => {
            console.log(`Axios Response:`, response)
        })
        .catch(err => {
            console.log(`Axios Error:`, err)
        })
    }
    catch(err){
        console.log(`Axios - There was an error:`, err)
    }
	*/
}
