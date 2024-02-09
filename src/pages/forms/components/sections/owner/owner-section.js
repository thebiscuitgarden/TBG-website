import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeDivider, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form.js'

//Components:
import OwnerInfo from './owner-info.js'
import NextPrevBtn from "../../next-section-btn"
import AsteriskHeader from "../../asterisk-header.js"

export default function OwnerSection(props){
        const { ownerBtn, setOwnerBtn, ownerKey, 
                setOwnerKey, storedOwners, setStoredOwners, 
                btnIndex, setBtnIndex, changeInput, formData      
        } = props

        //Function to allow user to add 1 more owner:
        const ownerOnClick = async (event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            await setOwnerKey(ownerKey + 1)
            await setStoredOwners([...storedOwners, <OwnerInfo 
                ownerKey={ownerKey}             
                formData={formData} 
                changeInput={changeInput} />])
        }
    
        return(
            <IntakeHDiv key={`owner_section${ownerKey}`} id={`owner_section${ownerKey}`}>
                <IntakeDivider>
                    <IntakeH3> 
                        Owner Information 
                    </IntakeH3>
    
                    <AsteriskHeader/>
                        
                    <IntakeCol>
                        {storedOwners}
                    </IntakeCol>
    
                    <IntakeRow>
                        {ownerBtn && 
                            <FormBtn onClick={(event) => ownerOnClick(event)}> 
                                Add Owner 
                            </FormBtn>
                        }
                        <NextPrevBtn 
                            next
                            btnIndex={btnIndex}
                            setBtnIndex={setBtnIndex}                     
                        />
                    </IntakeRow>  
                </IntakeDivider> 
            </IntakeHDiv>
        )
}