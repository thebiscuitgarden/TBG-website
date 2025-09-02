import axios from "axios"
// import { logData } from "../../loggerFunc"


export default async function emailForm(props){
    const { abortAxios, formData, pdfBlob, pdfName, setEmailSuccess, setProcessing, setSentErr } = props

    let res
    // 10 secoonds before axios will be aborted + the error modal will popup
    const timeoutSignal = AbortSignal.timeout(10000)

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
    
    // Gives the user 5 seconds to cancel the request: 
    setTimeout(async () => {
        try {
            //Sending form data to BE to send to email service:
            await axios.post(
                `${process.env.REACT_APP_API}/email-form`,
                sendForm,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    signal: AbortSignal.any([abortAxios.signal, timeoutSignal])
                }
            )
                .then(response => {
                    setProcessing(false)
                    setSentErr(false)
                    setEmailSuccess(true)
                    // logData('EMAIL RESPONSE FROM BE', response)
                    res = response
                    return true
                })
                .catch(err => {
                    if (err.message === 'canceled') {
                        setProcessing(false)
                        setSentErr(false)
                        setEmailSuccess(false)
                        // logData('CANCELED ERROR FROM BE', err)
                        res = err
                        return err
                    }

                    setProcessing(false)
                    setSentErr(true)
                    setEmailSuccess(false)
                    // logData('EMAIL ERROR FROM BE', err)
                    res = err
                    return err
                })
        }
        catch (err) {
            if (err.message === 'canceled') {
                setProcessing(false)
                setSentErr(false)
                setEmailSuccess(false)
                // logData('CANCELED ERROR FROM BE', err)
                res = err
                return err
            }

            setProcessing(false)
            setSentErr(true)
            setEmailSuccess(false)
            // logData('EMAIL TRY CATCH ERROR', err)
            res = err
            return err
        }
    }, 0)
    
    return res
}