import React from "react"

//Intake Form - Owner Styles:
import { AuthPickupH5, FormBtn, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'
import { FlexColDiv } from "../../../../../styles/contact";

//Components:
import AuthorizedPickup from "./auth-pickup-info"
import NextPrevBtn from "../../next-section-btn";

export default function AuthPickupSection(props){
        const { authBtn,
                setAuthBtn, authorizedKey, setAuthorizedKey,
                storedAuthorized, setStoredAuthorized,
                authNum, setAuthNum, btnIndex, setBtnIndex
        } = props

        //Function to allow user to add up to 3 emergency contacts:
        const authorizedOnClick = async (event) => {
            event.preventDefault()
    
            let toggleAuthBtn = () => {
                setAuthBtn(!authBtn)
            }
    
            setAuthNum(authNum + 1)
    
            if(authNum === 4){
                toggleAuthBtn()
            }
            await setAuthorizedKey(authorizedKey + 1)
            await setStoredAuthorized([...storedAuthorized, <AuthorizedPickup authorizedKey={authorizedKey} />])
        }
    
        return(
            <IntakeHDiv>
                <IntakeH3> 
                    Authorized People to Pickup Your Pets
                </IntakeH3>

                <IntakeRow>
                    <FlexColDiv>
                        <AuthPickupH5>
                            First + Last Name
                        </AuthPickupH5>
                    </FlexColDiv>
                    <FlexColDiv>
                        <AuthPickupH5>
                            Relationship
                        </AuthPickupH5>
                    </FlexColDiv>
                    <FlexColDiv>
                        <AuthPickupH5>
                            Phone Number <br/> ex: (###) ### - ####
                        </AuthPickupH5>
                    </FlexColDiv>
                </IntakeRow>
                        
                {storedAuthorized}    

                <IntakeRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                    
                    {
                    authBtn &&
                        <FormBtn onClick={(event) => authorizedOnClick(event)}> 
                            Add Authorized Person
                        </FormBtn>
                    }  

                    <NextPrevBtn
                        next={true}
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                </IntakeRow>
        </IntakeHDiv>
    )
}