import styled from "styled-components";
import { grey } from "./constants/colors";
import { devicesWidth } from "./constants/device-size";

const { laptopL, laptop, laptopS, laptopXS, mobileL, mobileXL, tablet, tabletL, tabletXL } = devicesWidth

export const FooterStyle = styled.footer`
    bottom: 0;
    padding: 2% 0; 
    margin-top: 1%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: ${grey};

    p, a, .nav-item {
        font-size: 2.2rem;
    }

    @media ${laptopL}{
        p, a, .nav-item{
            font-size: 1.8rem;
        }
    }

    @media ${laptop}{
        p, a, .nav-item{
            font-size: 1.6rem;
        }
    }

    @media ${tablet}{
        text-align: center; 
    }
`

export const FooterInfo = styled.div`
    width: 78%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // border: 1px solid red;

    @media ${laptopXS}{
        width: 70%;
        justify-content: space-between;
    }

    @media ${tabletXL}{
        width: 60%;
        justify-content: center;
    }

    @media ${tabletL}{
        width: 70%;
    }
`

export const FooterTitle = styled.div`
    font-size: 2.8rem;
    font-weight: bolder;
    width: 100%;

    @media ${laptopL}{
        font-size: 2.4rem;
    }

    @media ${laptop}{
        font-size: 2.2rem;
    }

    @media ${laptopS}{
        font-size: 2rem;
    }
`

export const FooterFirstCol = styled.div`
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    width: 220px;
    min-width: 160px;
    height: 660px; 
    // border: 1px solid red;

    @media ${laptopL}{
        width: 185px;
        height: 600px;
    }

    @media ${laptop}{
        width: 175px;
        height: 555px;
    }

    @media ${laptopXS}{
        width: 160px;
        height: 490px;
        align-content: flex-start;
    }

    @media ${tabletXL}{
        width: 80%;
        height: 250px;
    }

    @media ${tablet}{
        width: 65%;
        height: 400px;
        margin-top: 5px;
        justify-content: space-evenly;
    }

    @media ${mobileXL}{
       width: 100%;
    }
`

export const DivHours = styled.div`
    max-height: 200px;
    min-height: 150px;
    min-width: 150px;
    width: 100%;
    // border: 1px solid blue;

    @media ${tabletXL}{
        width: 50%;
    }

    @media ${tablet}{
        width: 100%;
    }
`

export const DivAdjustHours = styled.div`
    min-width: 150px;
    width: 100%;

    @media ${laptopXS}{
        margin-top: 50px;
    }

    @media ${tabletXL}{
        text-align: right;
        margin: 0;
        width: 50%;
    }

    @media ${tablet}{
        width: 100%; 
        text-align: center;
    }
`

export const FooterSecondCol = styled.div`
    display:flex;
    width: 550px;
    align-content: space-between;
    height: 580px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    // border: 1px solid purple;

    @media ${laptop}{
        width: 500px;
        height: 555px;
    }

    @media ${laptopS}{
        width: 350px;
    }

    @media ${laptopXS}{
        height: 490px;
        width: 500px;
    }

    @media ${tabletXL}{
        width: 80%;
        height: 505px;
        margin-top: 10px;
    }

    @media ${tablet}{
        width: 100%;
        justify-content: space-around;
        align-items: center;
        height: 430px;
    }

    @media ${mobileXL}{
        height: 325px;
        justify-content: center;
     }
`

export const DivContactSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100px;
    // border: 1px solid salmon;

    @media ${laptop}{
        min-height: 90px;
    }

    @media ${tabletXL}{
        margin-top: 10px;
    }

    @media ${tablet}{
        align-items: center;
        margin-top: -10px;
    }
`

export const DivContactIconSection = styled.section`
    width: 10%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;
    // border: 1px solid blue;

    @media ${tablet}{
        min-height: 80px;
        align-content: space-between;
    }
`

export const DivContactIcon = styled.div`
    width: 100%;
`

export const DivContactInfo = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;
    // border: 1px solid indigo;

    @media ${tabletXL}{
        width: 50%;
    }

    @media ${tablet}{
        min-width: 250px;
        min-height: 90px;
    }
`

export const FooterIframe = styled.iframe`
    margin-top: 25px;
    width: 500px;
    min-width: 280px;
    height: 350px;
    min-height: 200px;
    border: 1px solid black;

    @media ${laptop}{
        width: 500px;
    }

    @media ${laptopXS}{
        margin-top: 0;
    }

    @media ${tablet}{
        height: 305px;
    }

    @media ${mobileXL}{
        width: 350px;
        height: 200px;
    }

    @media ${mobileL}{
        width: 300px;
    }
`

export const FooterThirdCol = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 200px;
    height: 660px;
    align-content: space-between;
    // border: 2px solid blue;

    @media ${laptopL}{
        height: 600px;
    }

    @media ${laptop}{
        width: 170px;
        height: 555px;
    }

    @media ${laptopXS}{
        flex-wrap: nowrap;
        height: 220px;
        width: 100%;
        margin-top: 25px;
        justify-content: space-between;
    }

    @media ${tabletXL}{
        width: 80%;
        justify-content: space-between;
        height: 250px;
    }

    @media ${tablet}{
        width: 65%;
        height: 600px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    @media ${mobileXL}{
        width: 100%;
        height: 580px;
    }

    .navbar{
        text-align: center;
        width: 100%;
        min-width: 130px;
        // border: 1px solid orange;

        @media ${laptopXS}{
            width: 130px;
        }

        @media ${tabletXL}{
            min-height: 190px;
            align-content: center;
            text-align: right;
        }

        @media ${tablet}{
            width: 100%;
            text-align: center;
            height: 100px;
        }
    }

    .nav{
        @media ${tablet}{
            min-height: 100%;
        }
    }

    .nav-item{
        cursor: pointer;
        padding: 4px 0;
    }
`

export const FooterSocials = styled.div`
    width: 100%;
    min-width: 170px;
    text-align: center;
    // border: 1px solid hotpink;

    @media ${laptopXS}{
        width: 170px;
        text-align: left;
    }

    @media ${tablet}{
        width: 100%;
        text-align: center;
    }
`

export const FooterIndvSocials = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px 0;
    align-items: center;
    // border: 1px solid red;

    @media ${laptopXS}{
        justify-content: flex-start;
    }

    @media ${tablet}{
        justify-content: center;
    }
`

export const FooterSocialImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;

    @media ${laptopXS}{
        margin: 0 0 5px 0;
    }

    @media ${tablet}{
        margin: 0 auto;
        margin-bottom: 5px;
    }
`

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    min-height: 130px;
    // border: 1px solid black;

    @media ${laptopXS}{
        aspect-ratio: 1;
        align-self: center;
        height: 150px;
    }

    @media ${tabletXL}{
        height: 130px;
    }

    @media ${tablet}{
        margin: 15px 0;
    }

    @media ${mobileXL}{
        width: 130px;
    }
`

export const LogoImg = styled.img`
    width: 75%;

    @media ${laptopXS}{
        width: 100%;
    }
`

export const CopyrightDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    // border: 1px solid black;
`

export const CopyrightName = styled.p`
    text-align: end;
`

export const CopyrightYear = styled.p`
    text-align: left;
    padding-left: 0.5%;
`