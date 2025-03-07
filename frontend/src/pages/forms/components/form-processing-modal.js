import React, { useState } from "react";
import { UnderlineLink } from "../../../styles/common-styles";
import DownloadFormPDF from "./buttons/download-form-btn";

//Styles:


/**
 * @component Widget for the client to wait for the form to send to the email in the env file.
 * @param {*} props 
 */
export default function FormProcessingModal(props){
    const { formSent, setFormSent, sentErr, isProcessing, setProcessing, submitHandler, pdfName, formData, ownerCountArr, countAuth, countEmergencyContacts, countPets } = props
    const [sendCount, setSendCount] = useState(1)

    return (
            <div style={{ 
                border: '2px solid darkorange',
                width: '100%', 
                height: 'calc(100vh - 800px)', 
                display: 'flex', 
                margin: 'auto', 
                position: 'sticky', 
                top: 'calc(50vh - (/* height */100px / 2))', 
                backdropFilter: 'blur(3px)',
                justifyContent: 'center',
            }}>
                {!sentErr && isProcessing ? 
                    <div style={{
                        // border: '2px solid black',
                        width: '40%',
                        // height: '100px',
                        // backgroundColor: 'white',
                        display: 'block',
                        margin: 'auto',
                        // position: 'absolute',
                        // top: 'calc(50vh - (/* height */100px ))',
                        // left: 'calc(50vh - (/* height */100px / 2))',
                        // transform: 'translate(-50 %, -50 %)',
                        // background: 'purple'
                    }}>
                        <p>
                            While we fetch our servers, take a small break and play with your pet!
                        </p>
                    </div>
                : null}
                
                {/* If there is an error, allow user to retry sending the form up to 3 more times */}
                {sentErr && !isProcessing && sendCount < 4 ?
                    <div style={{
                        width: '40%',
                        // border: '2px solid red', 
                        // width: '200px', 
                        // height: '70px', 
                        // backgroundColor: 'white', 
                        // display: 'block', 
                        // margin: 'auto', 
                        // position: 'absolute', 
                        // top: '50%' 
                    }}>
                        <p>
                            Looks like your form got caught in our doggie door! Try sending it again.
                        </p>
                        <button
                            onClick={(event) => {
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
                    null
                }

                {/* If the user has tried 4 times to send the form, instruct them to download the filled out form and email to TBG */}
                {sentErr && !isProcessing && sendCount >= 4 ? 
                    <div
                        style={{
                            // display: 'flex',
                            justifyContent: 'center',
                            width: '40%',
                        }}
                    >
                        <p>
                            Oh no! One of the dogs accidentally chewed up your request. Please download your form and email it to us at {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com</UnderlineLink>}.
                        </p>
                        <DownloadFormPDF
                            pdfName={pdfName}
                            formData={formData}
                            ownerCountArr={ownerCountArr}
                            countAuth={countAuth}
                            countEmergencyContacts={countEmergencyContacts}
                            countPets={countPets}
                        />
                    </div>
                :
                    null
                }
            </div>
    )
}
