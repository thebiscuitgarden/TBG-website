import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const { countAuth, countEmergencyContacts, countPets, emailSuccess, formData, isProcessing, modalRef, ownerCountArr, pdfName, sentErr, setEmailSuccess, setProcessing, setSendErr, submitHandler } = props

    const navigate = useNavigate()

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
    const [sendCount, setSendCount] = useState(1)

    useEffect(() => {
        if (modalRef.current){
            modalRef.current.focus()
        }
    }, [isProcessing, modalRef, sentErr])


    const handleEscKey = (evt) => {
        if(evt.key === 'Escape'){
            setProcessing(false)
            setSendErr(false)
            setEmailSuccess(false)
        }
    }

    modalRef?.current?.addEventListener('onkeydown', handleEscKey)

    const handleClose = (evt) => {
        evt.preventDefault()
        const { name } = evt.target

        if (name === 'download_and_email'){
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
        
        if (name === 'success_close' || name === 'success_download' || name === 'download_and_email'){
            setProcessing(false)
            setSendErr(false)
            setEmailSuccess(false)
            return navigate('/forms')
        }

        setProcessing(false)
        setSendErr(false)
        setEmailSuccess(false)
    }

    const handleResend = (evt) => {
        evt.preventDefault()
        submitHandler(evt)
        setSendCount(sendCount + 1)
    }

    return (
        <div
            id="modals"
            style={{
                width: '100%',
                height: document.getElementById('digital-intake').offsetHeight, 
                backdropFilter: 'blur(3px)',
                position: 'absolute',
                lineHeight: '3.2rem'
            }}
        >
            <div 
                style={{ 
                    width: '55%',
                    background: `${bright_blue}`,
                    padding: '40px 0',
                    position: "sticky",
                    top: '40%',
                    transform: 'translateX(41%)',
                    border: '20px ridge black'
                }}
                ref={modalRef}
                onKeyDown={handleEscKey}
                tabIndex={0}
                autoFocus
            >
                <div
                    style={{
                        justifySelf: 'end',
                        width: '20px',
                        fontSize: '40px',
                        margin: '-30px 20px 20px',
                        cursor: 'pointer',
                    }}
                >
                    <button
                        name={emailSuccess ? 'success_close' : 'close'}
                        style={{
                            all: 'unset',
                        }}
                        onClick={evt => handleClose(evt)}
                    >
                        &times;
                    </button>
                </div>

                {/* Loading Modal */}
                {!sentErr && isProcessing ? 
                    <div  
                        id="loading_modal"
                        style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignContent: 'space-between',
                        }}
                    >
                        <p  style={{
                                width: '70%',
                                color: 'white',
                            }}
                            
                        >
                            Please wait while we try to send your form.
                        </p>
                    </div>
                : null}

                {/* On Success Modal */}
                {
                    !isProcessing && emailSuccess ? 
                        <div
                            id="success_modal"
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
                                Your form has been submitted!
                            </p>

                            <button
                                name="success_download"
                                onClick={handleClose}
                                style={styles.downloadResend}
                            >
                                Download Form
                            </button>
                        </div>

                    : null
                }
                
                {/* If there is an error, allow user to retry sending the form up to 1 more time */}
                {sentErr && !isProcessing && sendCount < 2 ?
                    <div 
                        id="resend_modal"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignContent: 'space-between',
                            gap: '25px'
                        }}>
                        <p style={{
                                width: '70%',
                                color: 'white',
                            }}
                        >
                            Looks like your form got caught in our doggie door!
                        </p>
                        <p style={{
                            width: '70%',
                            color: 'white',
                        }}
                        >
                            Please try sending it again.
                        </p>
                        <div style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            <FormBtn
                                onClick={evt => handleResend(evt)}
                                style={styles.downloadResend}
                                name="resend"
                            >
                                Resend Form
                            </FormBtn>
                            <FormBtn
                                onClick={handleClose}
                                style={styles.downloadResend}
                                name='cancel'
                            >
                                Cancel
                            </FormBtn>
                        </div>

                        <p style={{
                                width: '70%',
                                color: 'white',
                                margin: '10px 0'
                            }}
                        >
                            Alternatively, you can <UnderlineLink href={pdfInstance.url} download={pdfName}>download</UnderlineLink> the form and email it to <UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com</UnderlineLink>.
                        </p>
                    </div>
                : 
                    null
                }

                {/* If the user has tried 1 time to resend the form, instruct them to download the filled out form and email to TBG */}
                {sentErr && !isProcessing && sendCount >= 2 ? 
                    <div
                        id="download_and_email_modal"
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
                            Oh no! We're having trouble sending your form.
                        </p>
                        <p style={{
                            width: '95%',
                            color: 'white',
                        }}
                        >
                            Please download your form and email it to us at {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com</UnderlineLink>}.
                        </p>

                        <button
                            name="download_and_email"
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
