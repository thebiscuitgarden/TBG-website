/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

//Error  Styles:
import {
    ErrH1, ErrSection,
    ErrBelly, Errp,
    ErrTextDiv, ErrButton
} from "../../styles/errors.js";

//Images:
import bellyScratch from '../../images/error-page/belly-scratch.jpeg'


export default function Err503() {
    let navigate = useNavigate()

    return (
        <>
            <ErrSection id="err503">
                <ErrTextDiv>
                    <ErrH1>
                        This Page is Under Maintenance
                    </ErrH1>
                </ErrTextDiv>

                <ErrBelly src={bellyScratch} alt='' />
                
                <ErrTextDiv>
                    <Errp>
                        Please enjoy some belly scritches while you're here!
                    </Errp>
                </ErrTextDiv>

                <ErrTextDiv>
                    <ErrButton onClick={() => navigate(-1)}>
                        Retrieve Previous Page
                    </ErrButton>
                </ErrTextDiv>            
            </ErrSection>
        </>
    )
}