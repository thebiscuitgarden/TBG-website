/* Title: New Owner Form 
Blurb: Intake forms and medication forms will be filled out at time of checkin

Buttons on intake form: make them stand out
    - red or blue button
    - on hover change gradient of color
    - add shadow behind it

Intake Form: 
Title and blurb outside of the form box (own div)
Make it like the Green beagle lodge with a sections + next -> submit
Intake Form 
    - take out pets on liability waiver
    -Emergency Contact: Take out initials
    - Required info: (Required) in red italics

*/

import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
// import jsPDF from "jspdf";

//Intake Form Styles:
import { FormBtn, IntakeCard, IntakeDivider, IntakeForm, IntakeHeader, IntakeP, IntakePDF, IntakeSection } from '../../styles/new-owner-form.js'
import { ErrorLink, ErrorText } from "../../styles/contact";

//Form PDF:
import intakeForm from './waiver/TBG-Intake-Form-2024.pdf'

//Children Components/Functions:
import OwnerSection from './components/owner-section.js'
import OwnerInfo from '../forms/components/owner-info.js'
import LiabilityWaiver from './components/liability-waiver.js'
import EmergencyInfo from "./components/emergency-info.js";
import EmergencySection from "./components/emergency-section.js";
import AuthorizedPickup from "./components/auth-pickup-info.js";
import PetInfo from "./components/pet-info.js";
import { formTemplate } from "./form-template.js";
import AuthPickupSection from "./components/auth-pickup-section.js";
import PetSection from "./components/pet-section.js";
import { UnderlineLink } from "../../styles/common-styles.js";

export default function DigitalIntake() {
    const form = useRef();
    
    //onChange function changeInput:
    function changeInput(event){
        let { name, value } = event.target
        editFormData({ ...formData, [name]: value })
     }

    //Authorized Pickup States:
    const [authBtn, setAuthBtn] = useState(true)
    const [authNum, setAuthNum] = useState(1)
    const [authorizedKey, setAuthorizedKey] = useState(2)
    const [storedAuthorized, setStoredAuthorized] = useState([<AuthorizedPickup authorizedKey={1}/>])
    const [authSection, setAuthSection] = useState(false)

    //Emergency Contact States:
    const [emergencyKey, setEmergencyKey] = useState(2)
    const [emergencyBtn, setEmergencyBtn] = useState(true)
    const [emergencyNum, setEmergencyNum] = useState(1)
    const [storedEmergencyContacts, setStoredEmergencyContacts] = useState([<EmergencyInfo emergencyKey={1}/>])
    const [emergencySection, setEmergencySection] = useState(false)

    //Form States:
    const [formData, editFormData] = useState(formTemplate)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //Owner Info States:
    const [ownerKey, setOwnerKey] = useState(2)
    const [ownerBtn, setOwnerBtn] = useState(true)
    const [storedOwners, setStoredOwners] = useState([<OwnerInfo ownerKey={1} formData={formData} changeInput={changeInput}/>])
    const [ownerSection, setOwnerSection] = useState(true)

    //Pet Info States:
    const [petKey, setPetKey] = useState(2)
    const [petBtn, setPetBtn] = useState(true)
    const [petNum, setPetNum] = useState(1)
    const [storedPets, setStoredPets] = useState([<PetInfo petKey={1}/>])   
    const [petSection, setPetSection] = useState(false)

    //Waiver States: 
    const [waiverSection, setWaiverSection] = useState(false)

    //Form Submit:
    const submitHandler = async event => {
        event.preventDefault();
        setLoading(false)
        //clears errors if there were any previously
        setError(null)

        // let buttonTag = form.current.getElementsByTagName('button')
        // Array.from(buttonTag).forEach(element => {
        //     if(element.parentNode){
        //         element.parentNode.removeChild(element)
        //     }
        // });

        // let pdf = new jsPDF({
        //     orientation: 'p',
        //     unit: 'px',
        //     format: 'letter',
        //     hotfixes: ["px_scaling"],
        //    })
        
        // let margin = [20, 50]

        // const pdfName = `${formData.owner1_first_name}_${formData.owner1_last_name}'s_intake_form`

        // pdf.setDocumentProperties({
        //     title: pdfName
        // })

        // return pdf.html(form.current, {
        //     margin,
        //     autoPaging: "text",
        //     filename: pdfName,
        //     callback: (doc) => {
        //         const pdfUrl = doc.output('bloburl')

        //         window.open(pdfUrl)
        //         // console.log(form.current.removeChild('button'))
        //         let params = {
        //             intake_form: `${pdfUrl}`,
        //             owner1_first_name: formData.owner1_first_name,
        //             owner1_last_name: formData.owner1_last_name,
        //             owner1_email: formData.owner1_email,
        //             intake_html: form.current
        //         }
        
                // const data = {
                //     service_id: process.env.REACT_APP_SERVICE_ID_INTAKE,
                //     template_id: process.env.REACT_APP_TEMPLATE_ID_INTAKE,
                //     user_id: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
                //     template_params: formData
                // };
            
                // emailjs.send(process.env.REACT_APP_SERVICE_ID_INTAKE,
                //     process.env.REACT_APP_TEMPLATE_ID_INTAKE,
                //     params,
                //     process.env.REACT_APP_EMAIL_PUBLIC_KEY)
                // await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json',
                //     },
                //     body: JSON.stringify(data)
                // })
                //     .then((res) => {
                //         //resets the form after the email is sent 
                //         form.current.reset()
                //         setLoading(false)
                //     }).catch((error) => {
                //         setError(error.text)
                //     }).finally(() => {
                //         //resets the form after the email is sent 
                //         form.current.reset()
                //         setLoading(false)
                //     })
            }

    return (
        <IntakeSection id="digital-intake">
            <IntakeHeader id='intake-header'>
                <h2>
                    New Client Form
                </h2>

                <IntakeDivider>
                    <FontAwesomeIcon icon={faPaw} size="2xl" />
                </IntakeDivider>

                <IntakeP>
                     Before you schedule your first visit or appointment, please fill out the new client form below. 
                </IntakeP>

            </IntakeHeader>
            <IntakeCard>
                <IntakeForm 
                    ref={form}
                    autoComplete="on"
                    onSubmit={submitHandler} 
                    onChange={changeInput} 
                    name="intake_form"
                    id="intake_form"
                >
                    {/* Owners */}
                    {
                        ownerSection ? 
                        <OwnerSection 
                        ownerBtn={ownerBtn}
                        setOwnerBtn={setOwnerBtn}
                        ownerKey={ownerKey}
                        setOwnerKey={setOwnerKey}
                        ownerSection={ownerSection}
                        setOwnerSection={setOwnerSection}
                        storedOwners={storedOwners}
                        setStoredOwners={setStoredOwners}
                        emergencySection={emergencySection}
                        setEmergencySection={setEmergencySection}
                        /> : null
                    }
                    {/* Emergency Contact */}

                    {
                        emergencySection ? 
                        <EmergencySection
                        emergencyBtn={emergencyBtn}
                        setEmergencyBtn={setEmergencyBtn}
                        emergencyKey={emergencyKey}
                        setEmergencyKey={setEmergencyKey}
                        storedEmergencyContacts={storedEmergencyContacts}
                        setStoredEmergencyContacts={setStoredEmergencyContacts}
                        emergencyNum={emergencyNum}
                        setEmergencyNum={setEmergencyNum}
                        storedOwners={storedOwners}
                        setStoredOwners={setStoredOwners}
                        emergencySection={emergencySection}
                        setEmergencySection={setEmergencySection}
                        authSection={authSection}
                        setAuthSection={setAuthSection}
                        /> : null 
                    }

                    {/* Authorized Pick Up */}
                    {
                        authSection ? 
                        <AuthPickupSection 
                        authBtn={authBtn}
                        setAuthBtn={setAuthBtn}
                        authorizedKey={authorizedKey}
                        setAuthorizedKey={setAuthorizedKey}
                        storedAuthorized={storedAuthorized}
                        setStoredAuthorized={setStoredAuthorized}
                        authNum={authNum}
                        setAuthNum={setAuthNum}
                        emergencySection={emergencySection}
                        setEmergencySection={setEmergencySection}
                        authSection={authSection}
                        setAuthSection={setAuthSection}
                        petSection={petSection}
                        setPetSection={setPetSection}
                        /> : null
                    }

                    {/* Pet Info */}
                    {
                        petSection ?
                        <PetSection
                        petBtn={petBtn} 
                        setPetBtn={setPetBtn} 
                        petKey={petKey}
                        setPetKey={setPetKey} 
                        storedPets={storedPets}
                        setStoredPets={setStoredPets}
                        petNum={petNum}
                        setPetNum={setPetNum}
                        authSection={authSection}
                        setAuthSection={setAuthSection}
                        petSection={petSection}
                        setPetSection={setPetSection}
                        waiverSection={waiverSection}
                        setWaiverSection={setWaiverSection}
                        /> : null
                    }
                    
                    
                    {/* Liability Waiver */}
                    {
                        waiverSection ?
                        <LiabilityWaiver 
                        changeInput={changeInput}
                        petSection={petSection}
                        setPetSection={setPetSection}
                        waiverSection={waiverSection}
                        setWaiverSection={setWaiverSection} 
                        loading={loading}
                        setLoading={setLoading}
                        /> : null 
                    }
                </IntakeForm>

                {/* Form Error on Submit */}
                {error && (
                    <div>
                        <ErrorText>
                            There was a problem submitting the form.
                            </ErrorText> 
                            <ErrorText>
                                Please try submitting the form again.
                                </ErrorText>
                        <ErrorText> 
                            If the problem perissts, kindly reach out to us directly at (919) 355 - 2820 or 
                            <ErrorLink className="e-address" href="mailto:thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</ErrorLink>.
                        </ErrorText>
                    </div>
                )}
            </IntakeCard>

            {/* New Client Form PDF Section */}
            <IntakePDF>
                <p>
                    If you cannot fill out the digitial new client form, feel free to download and complete the pdf version.
                </p>
                <p>
                    Once completed, you can either email it to us at <UnderlineLink href="thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</UnderlineLink> or you can bring it in.
                </p>
                <FormBtn className="intake" onClick={() => window.open(intakeForm)}> 
                    New Client Form 
                </FormBtn>
            </IntakePDF>
        </IntakeSection>
    )
}