import React from "react"

//I ntake Form - Owner Styles:
import { IntakeDivider, IntakeH4, IntakeLabel, IntakeRow } from '../../../styles/intake-form'
import { FlexColDiv, Input } from "../../../styles/contact";

export default function OwnerInfo(ownerKey, changeInput, ownerInfo){
    console.log(`Owner Info?`, ownerInfo)
    return(
        <div key={`owner${ownerKey}`} id={`owner${ownerKey}`}>
            <IntakeDivider>
                <IntakeH4>
                    Owner {ownerKey}
                </IntakeH4>
            </IntakeDivider>
            
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_first_name`}>
                            *First Name
                        </IntakeLabel>
                        <Input 
                            type="text" 
                            name={`owner${ownerKey}_first_name`}
                            onChange={changeInput} 
                            // value={ownerInfo[`owner${ownerKey}_first_name`]}
                            required />
                
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                                *Last Name
                            </IntakeLabel>
                            <Input 
                                type="text" 
                                name={`owner${ownerKey}_last_name`} 
                                value={ownerInfo[`owner${ownerKey}_last_name`]}
                                onChange={changeInput} 
                                required />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                            *Email <br/> ex: someemail@server.com
                        </IntakeLabel>
                        <Input 
                            type="email" 
                            name={`owner${ownerKey}_email`} 
                            onChange={changeInput} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            *Phone <br/> ex: (###) ###-####
                        </IntakeLabel>
                        <Input 
                            type="tel" 
                            name={`owner${ownerKey}_phone`} 
                            pattern="^\(\d{3}\)\s\d{3}-\d{4}" 
                            onChange={changeInput} 
                            required />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Address
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address1`} 
                            onChange={changeInput} 
                            required />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address2`}
                            onChange={changeInput} />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *City
                        </IntakeLabel>
                        <Input 
                            type="city" 
                            name={`owner${ownerKey}_city`} 
                            onChange={changeInput} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *State
                        </IntakeLabel>
                        <Input 
                            type="state" 
                            name={`owner${ownerKey}_state`} 
                            onChange={changeInput} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Zip Code
                        </IntakeLabel>
                        <Input 
                            type="zipcode" 
                            name={`owner${ownerKey}_zipcode`} 
                            onChange={changeInput} 
                            required />
                    </FlexColDiv>
                </IntakeRow>
        </div>
    )
}