import React, { useState } from "react"

//Styles:
import { IntakeLabel, IntakeMessageInput, IntakeRow } from "../../../styles/owner-form"
import { FlexColDiv, Input } from "../../../styles/contact"
import { FormAsterisk } from "../../../styles/forms"

/** 
    * The component renders the question + answers. If the user clicks "yes", there is a text input that appears for them to explain their answer more.
    * @component
    * @param {string} htmlFor string
    * @param {string} question string
    * @param {string} example optional string
    * @param {array} answers array of strings as given answers
    * @param {object} formData the current formData object from state
    * @param {function} changeInput function from owner_form component to change the key/value pair of the targeted form input
    * @returns {ReactNode}  a react element that renders the question with radio button answers, + a text input appears if "Yes" is selected
*/
export default function RadioQuestion(props){
    let { changeInput, htmlFor, question, example, options, formData } = props
    let [selectedOption, setSelectedOption] = useState(null)

    let optionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    //To get all options and capitalize the first letter of the word:
    let optionMap = options.map(answer => {
        let capitalizeWord = (word) => {
            let firstLetter = word.toUpperCase().charAt(0)
            let remainingLetters = word.slice(1)
            return firstLetter + remainingLetters
        }

        return(
            <>
                <Input 
                    type='radio' 
                    name={htmlFor}
                    value={answer}
                    checked={selectedOption === answer}
                    onChange={optionChange}
                />

                <IntakeLabel htmlFor={htmlFor}>
                    {capitalizeWord(answer)}
                </IntakeLabel>
            </>
        )
    }) 

    //Text input box only shows if "Yes" is selected:
    let explainInput = () => {
        return (
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel htmlFor={`${htmlFor}_explain`}>
                        <FormAsterisk>*</FormAsterisk> Please explain
                        <IntakeMessageInput 
                            type="text" 
                            name={`${htmlFor}_explain`}
                            value={formData[`${htmlFor}_explain`]}
                            onChange={changeInput}
                        />
                    </IntakeLabel>
                </FlexColDiv>
            </IntakeRow>
        )
    }

    //Removes the key/value from the formData object:
    let removeExplain = (remove) => {
        delete formData[remove]
    }


    return(
        <IntakeRow>
            <FlexColDiv>
                <IntakeLabel htmlFor={htmlFor}>
                    <FormAsterisk>*</FormAsterisk> 
                    {question} <br/> {example}
                </IntakeLabel>
                <IntakeRow>
                    {
                        optionMap
                    }
                </IntakeRow>
                    { 
                        selectedOption === 'yes' ?
                        explainInput()
                        : 
                        removeExplain(`${htmlFor}_explain`)
                    }
            </FlexColDiv>
        </IntakeRow>
    )
}