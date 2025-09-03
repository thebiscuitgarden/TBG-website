import axios from "axios"
import { logData } from "../../loggerFunc"


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
            return logData('EMAIL RESPONSE FROM BE', response)
        })
        .catch(err => {
            return logData('EMAIL ERROR FROM BE', err)
        })
    }
    catch(err){
        return logData('TRY CATCH ERROR', err)
    }
    
}