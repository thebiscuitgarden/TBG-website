import React, { useState } from "react";
import PdfDoc from "./make-pdf/new-owner-pdf";
import { usePDF } from "@react-pdf/renderer";

//Styles:
import { bright_blue } from "../../../styles/constants/colors";
import { FormBtn } from "../../../styles/owner-form";
import { styles } from "./make-pdf/new-owner-styles";
import { UnderlineLink } from "../../../styles/common-styles";

/**
 * @component Widget for the client to wait for the form to send to the email in the env file.
 * @param {*} props 
 */
export default function FormProcessingModal(props){
    const { formPageRef, formSent, setFormSent, sentErr, isProcessing, setProcessing, setSendErr, submitHandler, pdfName, formData, ownerCountArr, countAuth, countEmergencyContacts, countPets } = props
    let pageHeight = formPageRef.current.getBoundingClientRect().height
    const [pdfInstance] = usePDF({ 
        document: 
            <PdfDoc
                formData={formData}
                ownerCount={ownerCountArr}
                emergencyCount={countEmergencyContacts}
                authCount={countAuth}
                countPets={countPets}
                pdfName={pdfName}
            />
        })

    const [sendCount, setSendCount] = useState(3)

    window.addEventListener('resize', () => {
        pageHeight = formPageRef.current.getBoundingClientRect().height
    })


    const handleClose = (evt) => {
        evt.preventDefault()
        if(evt.target.name !== 'close'){
            const pdfLink = document.createElement('a')
            pdfLink.href = pdfInstance.url
            pdfLink.download = pdfName

            document.body.appendChild(pdfLink)
            pdfLink.click()

            setTimeout(() => {
                URL.revokeObjectURL(pdfLink.href)
                document.body.removeChild(pdfLink)
            }, 1000)
        }

        setProcessing(false)
        setSendErr(false)
        
    }

    const handleResend = (evt) => {
        evt.preventDefault()
        console.log('Sent Count:', sendCount)
        submitHandler(evt)
        setSendCount(sendCount + 1)
    }


    return (
        <div
            style={{
                border: '2px solid darkorange',
                width: '100%',
                height: pageHeight, 
                backdropFilter: 'blur(3px)',
                position: 'absolute',
            }}
        >
            <div style={{ 
                width: '50%',
                border: '2px solid purple',
                background: `${bright_blue}`,
                padding: '20px 0',
                position: "sticky",
                top: '40%',
                left: '25%'

            }}>
                {!sentErr && isProcessing ? 
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignContent: 'space-between',
                    }}>
                        <p  style={{
                                width: '70%',
                                color: 'white',
                            }}
                        >
                            While we fetch our servers, take a small break and play with your pet!
                        </p>
                    </div>
                : null}
                
                {/* If there is an error, allow user to retry sending the form up to 3 more times */}
                {sentErr && !isProcessing && sendCount < 4 ?
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignContent: 'space-between',
                    }}>
                        <p style={{
                                width: '70%',
                                color: 'white',
                            }}
                        >
                            Looks like your form got caught in our doggie door! Please try sending it again.
                        </p>
                        <div style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            <FormBtn
                                onClick={evt => handleResend(evt)}
                            >
                                Resend Form
                            </FormBtn>
                            <FormBtn
                                onClick={handleClose}
                            >
                                Cancel
                            </FormBtn>
                        </div>

                        <p style={{
                                width: '100%',
                                color: 'white',
                            }}
                        >
                            You can alternatively download and email the form to {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com</UnderlineLink>}.
                        </p>
                    </div>
                : 
                    null
                }

                {/* If the user has tried 4 times to send the form, instruct them to download the filled out form and email to TBG */}
                {sentErr && !isProcessing && sendCount >= 4 ? 
                    <div
                        style={{
                            padding: '60px 20px',
                            margin: '-50px 0',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignContent: 'space-between',
                            gap: '15px'
                        }}
                    >
                        <p style={{
                            width: '100%',
                            color: 'white',
                        }}
                        >
                            Oh no! One of the dogs accidentally chewed up your request.
                        </p>
                        <p style={{
                            width: '95%',
                            color: 'white',
                        }}
                        >
                            Please download your form and email it to us at {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com</UnderlineLink>}.
                        </p>

                        <button
                            name="download_pdf"
                            onClick={handleClose}
                            style={styles.downloadResend}
                        >
                            Download Form
                        </button>
                    </div>
                :
                    null
                }
            </div>
        </div>
    )
}
