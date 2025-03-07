import React, { useState } from "react";
import { UnderlineLink } from "../../../styles/common-styles";
import DownloadFormPDF from "./buttons/download-form-btn";

//Styles:


/**
 * @component Widget for the client to wait for the form to send to the email in the env file.
 * @param {*} props 
 */
export default function FormProcessingModal(props){
    const { formSent, setFormSent, sentErr, setProcessing, submitHandler, pdfName, formData, ownerCountArr, countAuth, countEmergencyContacts, countPets } = props
    const [sendCount, setSendCount] = useState(1)

    return (
            <div style={{ 
                border: '2px solid darkorange',
                width: '100%', 
                // height: '50%', 
                display: 'block', 
                margin: 'auto', 
                position: 'sticky', 
                top: 'calc(50vh - (/* height */100px / 2))', 
                backdropFilter: 'blur(3px)',
            }}>
                <div style={{
                    border: '2px solid black',
                    width: '30%',
                    height: '100px',
                    // backgroundColor: 'white',
                    display: 'block',
                    margin: 'auto',
                    // position: 'absolute',
                    // top: 'calc(50vh - (/* height */100px ))',
                    // left: 'calc(50vh - (/* height */100px / 2))',
                    // transform: 'translate(-50 %, -50 %)',
                    // background: 'purple'
                }}>
                Loading...
                </div>
                {sentErr && sendCount < 4 ?
                    <div style={{ border: '2px solid red', width: '200px', height: '70px', backgroundColor: 'white', display: 'block', margin: 'auto', position: 'absolute', top: '50%' }}>
                        <p>
                            There was an error sending your form. Click the button below to try again.
                        </p>
                        <button
                            onClick={(event) => {
                                console.log('This happens')
                                event.preventDefault()
                                console.log('Sent Count:', sendCount)
                                submitHandler(event)
                                setSendCount(sendCount + 1)
                            }}
                        >
                            Resend Form
                        </button>
                    </div>
                : 
                    <div>
                    <p>Oh no! One of the dogs accidentally chewed up your request. Please download your form and email it to us at {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com</UnderlineLink>}.</p>
                        <DownloadFormPDF
                            pdfName={pdfName} 
                            formData={formData} 
                            ownerCountArr={ownerCountArr} 
                            countAuth={countAuth}
                            countEmergencyContacts={countEmergencyContacts}
                            countPets={countPets}
                        />
                    </div>
                }
            </div>
    )
}
