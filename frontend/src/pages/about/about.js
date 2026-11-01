/* eslint-disable react/prop-types */
import React from "react";

// Components: 
import InfoButton from "../general-components/info-buttons.js/info-button";
import TeamCareers from "./team-careers";

// Images:
// import graffiti2 from '../../images/grafitti-wall2.jpg'

// Styles:
import { CommonH2 } from "../../styles/commonBDG";
import { AboutInfoSection, AboutStartDiv, GraffitiDiv, GraffitiImg,ValuesSection, QuoteAuthor, QuoteBody, QuoteHeader  } from "../../styles/about";

// Variables:
import { values } from "./values-arr";

export default function About(){
    return (
        <>
            <AboutStartDiv>
                <AboutInfoSection>
                    <CommonH2>
                        We base everything that we do around 4 simple values:
                    </CommonH2>
                    <ValuesSection>
                        <InfoButton 
                            array={values}
                        />
                    </ValuesSection>

                        <QuoteHeader>
                            A note from the owner:
                        </QuoteHeader>
                        <QuoteBody>
                            "The purpose of The Biscuit Garden has always been to provide a place that owners feel comfortable and confident in leaving their beloved pets while they are away and a place where the pets themselves are so excited to come that they drag their owners in the door.  That simple act, is in fact, our greatest compliment.  We hope that you will find  our sincerest love for our clients and guests welcoming and reassuring and we look forward to having you become part of our Biscuit Garden family."
                        </QuoteBody>
                        <QuoteAuthor>
                            Beth Ann Young
                        </QuoteAuthor>


                    <TeamCareers/>
                    
                </AboutInfoSection>
            </AboutStartDiv>
        </>
    )
}
