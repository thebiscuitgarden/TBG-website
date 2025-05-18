import axios from "axios"
import { logData } from "../../loggerFunc"


export default async function emailForm(props){
    const { formData, pdfBlob, pdfName, setProcessing, setSentErr } = props
    let res
    // 10 secoonds before axios will be aborted + the error modal will popup
    let time = 10000

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
    
    const controller = new AbortController()
    setTimeout(() => controller.abort(), time)
    
    try{
        //Sending form data to BE to send to email service:
        await axios.post(
            `${process.env.REACT_APP_API}/api/email-form`, 
            sendForm,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                signal: controller.signal
            }
        )
        .then(response => {
            setProcessing(false)
            setSentErr(false)
            logData('EMAIL RESPONSE FROM BE', response)
            res = response
            return true
        })
        .catch(err => {
            setProcessing(false)
            setSentErr(true)
            logData('EMAIL ERROR FROM BE', err)
            res = err
            return err
        })
    }
    catch(err){
        setProcessing(false)
        setSentErr(true)
        logData('TRY CATCH ERROR', err)
        res = err
        return err
    }
    
    return res
}