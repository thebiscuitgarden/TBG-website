import axios from "axios"
import { logData } from "../../loggerFunc"


export default async function emailForm(props){
    const { pdfBlob, pdfName, formData, setError, setProcessing, setFormSent, setSentErr, setBlurBackground } = props
    let res

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
            setProcessing(false)
            setFormSent(true)
            setError(false)
            setSentErr(false)
            setBlurBackground(false)
            logData('EMAIL RESPONSE FROM BE', response)
            res = response
            return true
        })
        .catch(err => {
            console.log('HERE')
            setProcessing(false)
            setFormSent(false)
            setSentErr(true)
            setError(true)
            setBlurBackground(true)
            logData('EMAIL ERROR FROM BE', err)
            res = err
            return err
        })
    }
    catch(err){
        setProcessing(false)
        setFormSent(false)
        setSentErr(true)
        setError(true)
        setBlurBackground(true)
        logData('TRY CATCH ERROR', err)
        res = err
        return err
    }
    
    return res
}