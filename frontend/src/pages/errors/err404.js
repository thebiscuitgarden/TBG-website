/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

//Error  Styles:
import {
    ErrH1, ErrSection,
    ErrBelly, Errp,
    ErrTextDiv, ErrButton
} from "../../styles/errors.js";

//import Components:
import Header from '../header-footer/header.js';
import Footer from '../header-footer/footer.js';

//Images:
import bellyScratch from '../../images/error-page/belly-scratch.jpeg'


export default function Err(){
    let navigate = useNavigate()
    
    return(
        <>
        <Header />
        <ErrSection id="err">
            <ErrTextDiv> 
                <ErrH1> 
                    Oh no! We tried fetching what you threw at us, but we lost it... 
                </ErrH1>
                <Errp> 
                    There is a possibility that a dog took it and isn't giving it back. 
                </Errp>
                <Errp> 
                    Please enjoy some belly scritches while you're here!
                </Errp>
            </ErrTextDiv>

            <ErrBelly src={bellyScratch} alt='' />

            <ErrTextDiv>
                <Errp>
                    When you're done, click the button below to go back.
                </Errp>
                <ErrButton onClick={() => navigate(-1)}> 
                    Retrieve Previous Page
                </ErrButton>
            </ErrTextDiv>
        </ErrSection>
        <Footer />
        </>
    )
}