import styled from "styled-components";
import { devicesWidth } from "./constants/device-size";

const { mobileS, mobileXL } = devicesWidth

export const BannerDiv = styled.div`
    max-width: 100%;
    overflow: hidden;
    height: 550px;

    @media ${mobileXL}{
        height: 300px
    }

    @media ${mobileS} {
        height: 210px;
    }
`

export const BannerImg = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;
    object-position: center;

    @media ${mobileXL}{
        height: 300px;
    }
    
    @media ${mobileS} {
        height: 200px;
    }
`