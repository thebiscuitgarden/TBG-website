/* eslint-disable react/prop-types */
import React from "react";
// import { useNavigate } from "react-router-dom";

//Requirements Styles:
import { 
    // RequireChecklistDivs, 
    // RequirementBtn,
     RequirementChecklistSection, 
    RequirementH2, 
    //  RequirementH2, RequirementH3, 
    RequirementSection, 
    //  RequirementsList, RequirementsP 
    } from "../../styles/commonBDG";
import { CommonP} from "../../styles/common-styles";

export default function Requirements(props){
    let { pocket } = props;

    if(pocket){
        return (
            <RequirementSection>
                <RequirementH2> Requirements </RequirementH2>
                <RequirementChecklistSection>
                    <CommonP>
                    All cats over the age of 16 weeks must have current 
Rabies and FVRCP vaccines
                    </CommonP>
                    <CommonP>
                    Please provide your own cage for your pocket pet’s boarding
                    </CommonP>
                </RequirementChecklistSection>
            </RequirementSection>
        )
    }

    return (
        <RequirementSection>
            <RequirementH2> Requirements </RequirementH2>

            <RequirementChecklistSection>
                <CommonP>
                All dogs over the age of 16 weeks must have current Rabies, DHLPP(Distemper) and Bordetella vaccines
                </CommonP>
            </RequirementChecklistSection>
        </RequirementSection>
    )
}
