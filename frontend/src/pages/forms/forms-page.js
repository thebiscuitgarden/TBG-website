/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Forms Styles:
import '../../styles/forms.css'
import { FormPageInfoSection, FormPageRedBox, FormPageBtn, FormPagePdfBtn } from "../../styles/forms-page";
import { CommonP, UnderlineLink } from "../../styles/common-styles";
import { CommonH2, CommonStartDiv } from '../../styles/commonBDG'

//Import Form PDF:
import intakeForm from './TBG-Intake-Form-2024.pdf'


export default function Forms(){
    let navigate = useNavigate();

    // To make sure the BE API does not spin down after 15 minutes
    // Set Interval for 14 minutes if the user is still on the web page
    useEffect(() => {
        const ping_interval = 14 * 60 * 1000

        const health_ping = async () => {
            try {
                console.log('Ping BE API')
                await axios.get(`${process.env.REACT_APP_API}/email-form`)
            }
            catch (err) {
                console.error("Keep-alive ping failed:", err)
            }
        }

        // Initial ping when user opens web page
        health_ping()
        // 14 Minute Interval Pings after while web page is open
        const interval = setInterval(health_ping, ping_interval);
        return () => clearInterval(interval)
    }, [])

    return (
        <CommonStartDiv>
            <CommonH2> 
                new client form 
            </CommonH2>

            <FormPageInfoSection>
                <FormPageRedBox>
                    <p> 
                        We require all owners to fill out a new client form to insure that we have your contact information and all of your pets information. 
                    </p>
                </FormPageRedBox>
                <FormPageBtn onClick={() => navigate('/forms/new-owner')}> 
                    Click HERE to fill out the New Client Form
                </FormPageBtn>

                <CommonH2 style={{marginBottom: '40px'}}> 
                    Having Trouble Completing the Form Digitally? 
                </CommonH2>

                <FormPageRedBox>
                    <CommonP>
                        If the form does not work for you, please download a printable version by clicking the button below. 
                    </CommonP>
                    <CommonP>
                        You are more than welcome to complete the form by hand and bring it in, or you may email it to us at 
                        {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com" target="_blank" rel="noreferrer"> thebiscuitgarden@gmail.com.</UnderlineLink>}
                    </CommonP>
                </FormPageRedBox>

                <FormPagePdfBtn onClick={() => window.open(intakeForm)}> 
                        New Client Form PDF
                    </FormPagePdfBtn>
            </FormPageInfoSection>
        </CommonStartDiv>
    )
}