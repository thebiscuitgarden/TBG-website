import React from "react";
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import { tabNamesArr } from "./tab-names"
import { FormTabDiv, FormTabIcon, FormTabP, FormTabSection } from "../../../../styles/forms";

export default function OwnerFormTabs(props){
    let { btnIndex, setBtnIndex } = props

    let col = 1
    let row = 1

    let TabClick = (index) => {
        setBtnIndex(index)
    }

    let tabNamesDivs = tabNamesArr.map((title, index) => {
        let colorState = btnIndex === index

        if(index < 3){
            let row1Div = <FormTabDiv 
                key={`${title}${index}`} 
                id={`${title}${index}`} 
                col={col}
                row={row}
                onClick={() => TabClick(index)}
                tabIndex={0}
            >
                <FormTabIcon 
                    icon={faPaw} 
                    size="2xl" 
                    colorState={colorState}
                />
                <FormTabP
                    colorState={colorState}
                > 
                    { title } 
                </FormTabP>
            </FormTabDiv>

            col += 2

            return (row1Div)
        }
        else if(index === 3){
            let row1Div = <FormTabDiv 
                key={`${title}${index}`} 
                id={`${title}${index}`} 
                col={col}
                row={row}
                onClick={() => TabClick(index)}
                tabIndex={0}
            >
                <FormTabIcon 
                    icon={faPaw} 
                    size="2xl" 
                    colorState={colorState}
                />
                <FormTabP
                    colorState={colorState}
                > 
                    { title } 
                </FormTabP>
            </FormTabDiv>

            col = 1

            return (row1Div)
        }
        else{
            row = 3
            let row3Div = <FormTabDiv 
                key={`${title}${index}`} 
                id={`${title}${index}`} 
                col={col}
                row={row}
                onClick={() => TabClick(index)}
                tabIndex={0}
            >
                <FormTabIcon 
                    icon={faPaw} 
                    size="2xl" 
                    colorState={colorState}
                />
                <FormTabP
                    colorState={colorState}
                > 
                    { title } 
                </FormTabP>
            </FormTabDiv>

            col += 2

            return (row3Div)
        }
    })
    
    return (
        <>
            <FormTabSection>
                {
                    tabNamesDivs
                }
            </FormTabSection>
        </>
    )
}