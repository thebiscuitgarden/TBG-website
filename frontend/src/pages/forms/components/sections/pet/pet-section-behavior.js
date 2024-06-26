import React from "react"

//Intake Form - Owner Styles:
import { ButtonRow, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../buttons/next-section-btn"
import PetBehavior from "./pet-behavior"


/**
 * @component The core of the pet behavior section.
 * @param {*} props changeInput, countPets, btnIndex, setBtnIndex, formData
 */
export default function PetBehaviorsSection(props){
        const { changeInput, countPets, btnIndex, setBtnIndex, formData } = props
        let sectionId = 'pet_behavior_section'

        return(
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
                >
                    <IntakeH3> 
                        Pet Behavior Information
                    </IntakeH3>

                    <AsteriskHeader/>

                    <IntakeCol>
                    {
                            countPets.map((__, index) => {
                                return <PetBehavior
                                            key={index + 1}
                                            petKey={index + 1}
                                            formData={formData}
                                            changeInput={changeInput}
                                        />
                            })
                        }
                    </IntakeCol>
                </IntakeHDiv>

                <ButtonRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                        sectionId={sectionId}
                    />

                    <NextPrevBtn
                        next
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                        sectionId={sectionId}
                    />
                </ButtonRow>
            </>
        )
}