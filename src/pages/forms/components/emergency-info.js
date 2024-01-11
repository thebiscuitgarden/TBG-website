import React from "react";

import { Bold, IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeLabelRow, IntakeRow, PhoneInput } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";

export default function EmergencyInfo(props){
    const { emergencyKey } = props
    
    return(
        <IntakeHDiv key={`emergency${emergencyKey}`} id={`emergency${emergencyKey}`}>
            <IntakeDivider>
                <Bold>
                    <IntakeH4>
                        Emergency Contact {emergencyKey}
                    </IntakeH4>
                </Bold>
            </IntakeDivider>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Emergency Contact First + Last Name
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_name`} required />
                </FlexColDiv>
            </IntakeRow>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Emergency Contact Phone Number <br/> ex: (###) ###-####
                    </IntakeLabel>
                    <PhoneInput 
                        type="tel" 
                        name={`emergency${emergencyKey}_phone`} 
                        placeholder="(___) ___-____"
                        format="(###) ###-####" 
                        mask="_"  
                        required />
                </FlexColDiv>

                <FlexColDiv>
                    <IntakeLabel>
                        *Relationship
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_relation`} required />
                </FlexColDiv>
            </IntakeRow>

            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Does this person have permission to make decisions regarding your pet(s)?
                    </IntakeLabel>
                    
                    <IntakeLabelRow>
                        <Input type="checkbox" name={`emergency${emergencyKey}_permission_yes`} />
                            <IntakeLabel>
                                Yes
                            </IntakeLabel>
  
                        <Input type="checkbox" name={`emergency${emergencyKey}_permission_no`}  />
                            <IntakeLabel>
                                No
                            </IntakeLabel>
                    </IntakeLabelRow>

                    <IntakeLabel id="yes-show">
                        *If yes, type your intials (ex: HJ or HEJ) 
                        <Input type="text" name={`emergency${emergencyKey}_initials`} pattern="^[A-Z]{2}$|^[A-Z]{3}$" required />
                    </IntakeLabel>
                
                </FlexColDiv>
            </IntakeRow>
        </IntakeHDiv>
    )
}