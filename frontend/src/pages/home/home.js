/* eslint-disable react/prop-types */
import React from "react";

// Images:
import homeBannerPic from '../../images/home/home-banner-pic.jpeg'
import collage from '../../images/new/home-collage-1.jpg'

// Components:
import InfoButton from "../general-components/info-buttons.js/info-button";

// Styles:
import { CommonStartDiv } from '../../styles/commonBDG'
import { BannerDiv, BannerImg } from "../../styles/banner";
import { CollageImg, CommonP } from "../../styles/common-styles";

//Variables:
import { home_btns } from "./home-page-btns";
import About from "../about/about";
import { AboutInfoSection, QuoteAuthor, QuoteBody, QuoteHeader } from "../../styles/about";

/*
            <BannerDiv>
                <BannerImg
                    src={homeBannerPic}
                />
            </BannerDiv>
 */

export default function Home(){
    return (
        <>
            <CommonStartDiv>
                <InfoButton array={home_btns}/>

                <AboutInfoSection>
                        <CommonP>
                            The Biscuit Garden is a small, family owned business based out of Wake County, NC.  With over 20+ years in the animal care industry, the staff take great pride in the relationships formed with their community, their clients and their four legged friends.
                        </CommonP>
                    </AboutInfoSection>
            </CommonStartDiv>

            <CollageImg src={collage} alt=""/>

            <About />
        </>
    )
}

/*
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';

export default function Home(){
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Show splash only on initial visit (path === "/") and only once
    if (!showSplash && location.pathname === '/') {
      setShowSplash(true);
    }
  }, [location.pathname, showSplash]);

  return (
    <div className="App">
      {showSplash && <div className="splash-screen"></div>}
      <Outlet />
    </div>
  );
}
*/

