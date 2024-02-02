/* 
    Put intake form where button to digital form goes
    Have a small box for intake form
        User puts in info + clicks next for the next section
        At the end will submit the form

    Intake Form:    
        - Title: New Owner Form
        - Blurb: Intake and medication forms will be filled out at time of checkout
        - Buttons: make them stand out
            - red or blue button
            - on hover change gradient of color
            - add shadow behind it
        - Make it like the Green beagle lodge with a sections + next -> submit
        - Intake Form PDF + digital:
            - Liability waiver: take out pets on
            - Emergency Contact: Take out initials
            - Required info: (Required) in red italics (digital only)
    
        LEAVE THESE TWO COMMENTS TO ASK BAY LATER ABOUT:
        ** See if I can link form information to TBG Gingr's client form
        ** Possibly just forward clients to the client portal to create an account + do forms there
*/

/* eslint-disable react/prop-types */
import React from "react";
// import { useNavigate } from "react-router-dom";

//Forms Styles:
import '../../styles/forms.css'
import { FormPageRedBox } from "../../styles/formPage";

//Import Form PDF:
// import intakeForm from './waiver/TBG-Intake-Form-2024.pdf'

export default function Forms(){
    // let navigate = useNavigate();

    return (
        <div id="forms">
            {/* <h1> Forms  </h1> */}
            <h2> new client form </h2>


            <div id="digital">
                <FormPageRedBox>
                    <p> 
                        We require all owners to fill out an intake form to insure we have your contact information and all of your pets information. 
                    </p>
                    <br/>
                    <p>
                        You can contact us at {' '}
                            <a href="mailto:thebiscuitgarden@gmail.com">
                                thebiscuitgarden@gmail.com
                            </a>
                        {' '}and we can email you a copy or you can come by and fill one out!
                    </p>

                    {/* Need button to navigate to Intake Form Page once in router */}
                    {/* <button className="intake" onClick={() => navigate('/forms/intake')}> Digital Intake Form </button> */}
                </FormPageRedBox>
            </div>

            {/* <div id="pdf">
                <h2> Having Trouble Completing the Form Digitally? </h2>
                <p>
                    If any of our forms do not work for you, please download a printable version by clicking the buttons below. You are more than welcome to complete them by hand and bring them in with you on your next visit, or you may email it to us at thebiscuitgarden.com.
                </p>

                <div className="btns">
                    <button className="intake" onClick={() => window.open(intakeForm)}> Intake Form </button>
                </div>
            </div> */}
        </div>
    )
}