/* eslint-disable react/prop-types */
import React from "react";

//Credits Styles:
import '../styles/credits.css'
import { CommonStartDiv } from "../styles/commonBDG";
import { UnderlineLink } from "../styles/common-styles";

//Logos
import emailIcon from '../images/icons/email.png'
import fbIcon from '../images/icons/facebook.png'
import gitHubIcon from '../images/icons/github.png'
import instaIcon from '../images/icons/instagram.png'
import linkedIcon from '../images/icons/linkedin.png'
import phoneIcon from '../images/icons/phone-call.png'
import portfolioIcon from '../images/icons/AED-logo.png'
import tiktokIcon from '../images/icons/tik-tok.png'


export default function Credits(){
    return(
        <CommonStartDiv id="credits">
            <h1> Credits </h1>

            <div className="website icons">
                <h2> Website Design + Developer </h2>
                <p>
                    <UnderlineLink href="https://alexandriaduellswe.netlify.app/" target="_blank" rel="noreferrer">
                        Alexandria Duell
                    </UnderlineLink>
                </p>

                <br />

                <p>Feel free to check out my portfolio and work by clicking the icons below.</p>
                <a href="https://alexandriaduellswe.netlify.app/" title="developers icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={portfolioIcon} width='30' height='30' alt="Purple circle with the uppercase initials of A E D touching in a baby blue color" />
                </a>

                <a href="https://github.com/duellal" title="github icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={gitHubIcon} width='30' height='30' alt="" />
                </a>

                <a href="https://www.linkedin.com/in/alexandria-duell/" title="linkedin icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={linkedIcon} width='35' height='30' alt="Blue square with rounded corners with i and n lowercase in letters in the center" />
                </a>
            </div>
            
            <div className="images">
                <h2> Our Images </h2>
                <p> 
                    All of our images come from our photos from {' '}
                    <UnderlineLink className="facebook" href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                            Facebook
                    </UnderlineLink>
                    {' '} and {' '}
                        <UnderlineLink className="instagram" href="https://www.instagram.com/thebiscuitgarden/" target="_blank" rel="noreferrer"> 
                            Instagram
                    </UnderlineLink>
                    . 
                </p>
                <br/>
                <p>
                    You can find many more candid photos of the animals (and humans) at our facility on our {' '}
                    <UnderlineLink className="facebook" href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                        Facebook
                    </UnderlineLink>
                    {' '} and {' '}
                    <UnderlineLink className="instagram" href="https://www.instagram.com/thebiscuitgarden/" target="_blank" rel="noreferrer">
                        Instagram
                    </UnderlineLink>
                    {' '} pages. 
                </p>
            </div>

            <div className="icons">
                <h4> Icons </h4>
                <p> 
                    We sourced the following icons from {' '}
                    <UnderlineLink href="https://www.flaticon.com/icons" title="flat icon link" target="_blank" rel="noreferrer">
                        Font Awesome
                    </UnderlineLink>
                </p>

                <a href="https://www.flaticon.com/free-icon/phone-call_2936151?term=phone+call&page=1&position=62&origin=search&related_id=2936151" title="phone call icon" target="_blank" rel="noreferrer"> 
                    <img loading="lazy" src={phoneIcon} width='30' height='30' alt="Mobile phone with flat screen showing a landline phone with signals" />
                </a>

                <a href="https://www.flaticon.com/free-icon/email_555012?term=email&page=1&position=93&origin=search&related_id=555012" title="email icon" target="_blank" rel="noreferrer"> 
                    <img loading="lazy" src={emailIcon} width='30' height='30' alt="paper with an at symbol inside an unsealed envelope" /> 
                </a>

                <a href="https://www.flaticon.com/free-icon/facebook_5968764?term=facebook&page=1&position=9&origin=search&related_id=5968764" title="facebook icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={fbIcon} width='30' height='30' alt='an f encircled in blue' />
                </a>

                <a href="https://www.flaticon.com/free-icon/instagram_2111463?term=instagram&related_id=2111463" title="instagram logo icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={instaIcon} width='30' height='30' alt='a camera in a yellow to pink gradient' />
                </a>

                <a href="https://www.flaticon.com/free-icon/tik-tok_3046121?term=tiktok&page=1&position=2&origin=search&related_id=3046121" title="tiktok icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={tiktokIcon} width='30' height='30' alt='a t that looks like a quarter note in black with blue and red shadows' />
                </a>

                <p> and the rest from {' '}
                    <UnderlineLink href="https://fontawesome.com/icons" title="font_awesome_link" target="_blank" rel="noreferrer">
                        Font Awesome
                    </UnderlineLink>
                    .
                </p>
            </div>
        </CommonStartDiv>
    )
}
