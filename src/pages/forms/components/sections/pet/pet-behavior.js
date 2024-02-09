import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH4, IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow } from '../../../../../styles/owner-form'
import { FlexColDiv } from "../../../../../styles/contact";
import RadioQuestion from "../../radio-questions";


export default function PetBehavior(props){
    const { petKey } = props

    console.log(document.getElementsByName(`pet${petKey}_destructive_yes`))

    return(
        <div key={`pet${petKey}Behavior`} id={`pet${petKey}Behavior`}>
            <IntakeDivider>
                <IntakeH4>
                    Pet {petKey}
                </IntakeH4>
                
                {/* Behavior Section */}
                <IntakeDivider>
                    <IntakeCol>
                        <RadioQuestion
                            htmlFor={`pet${petKey}_destructive`}
                            question={`Does your pet have any destructive habits when left alone?`}
                            options={['yes', 'no']}
                        />

                        <RadioQuestion
                            htmlFor={`pet${petKey}_fence`}
                            question={'Has your pet ever jumped, climbed, or dug out of a fence?'}
                            options={['yes', 'no']}
                        /> 

                        <RadioQuestion
                            htmlFor={`pet${petKey}_guard`}
                            question={`Does your pet ever guard toys, food, water, or people?`}
                            options={['yes', 'no']}
                        />
                    
                        <RadioQuestion
                            htmlFor={`pet${petKey}_socialized`}
                            question={`Has your pet ever socialized in a group of 6 or more pets?`}
                            options={['yes', 'no']}
                        />
                    
                        <RadioQuestion
                            htmlFor={`pet${petKey}_kennel`}
                            question={`Does your pet have experience in a kennel environment?`}
                            options={['yes', 'no']}
                        />

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_extra_info`}>
                                    Is there anything else we should know about your pet's behavior?
                                </IntakeLabel>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_extra_behavior`}/>
                                    </FlexColDiv>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>
                    </IntakeCol>
                </IntakeDivider>
            </IntakeDivider>
        </div>
    )
}