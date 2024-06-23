import styled from "styled-components";
import { bright_red, muted_bright_red } from "./constants/colors";
import { devicesWidth } from "./constants/device-size";

const { mobileM, mobileL, mobileS, mobileXL } = devicesWidth

export const AllFaqs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    width: 80%;
    box-shadow: 0 0 20px 1px black;
`

export const FaqTitleDiv = styled.div`
    width: 100%;
    background-color: ${bright_red};
    text-align: left;
`

export const FaqTitleH2 = styled.h2`
    color: white;

    @media ${mobileXL}{
        font-size: 4rem;
    }

    @media ${mobileL}{
        font-size: 3rem;
    }

    @media ${mobileS}{
        font-size: 2.5rem;
    }
`

export const FaqExpand = styled.div`
    display: flex;
    flex-wrap: flex;
    justify-content: space-between;
    padding: 2%;
`

export const AccordianTitleDiv = styled.div`
    display: flex;
    flex-wrap: flex;
    justify-content: space-between;
    padding: 2%;
    background-color: ${muted_bright_red};
`

export const AccordianTitleH3 = styled.h3`
    color: white;
    text-align: left;

    @media ${mobileXL}{
        font-size: 2.25rem;
        padding: 0.75%;
    }

    @media ${mobileS}{
        font-size: 1.75rem;
    }
`

export const AccordianAnswer = styled.p`
    padding: 2%;
    text-align: justify;
    color: black;
    background-color: #f5f0f6;

    @media ${mobileXL}{
    font-size: 1.65rem;
    margin: 5px;
}

@media ${mobileL}{
    font-size: 1.95rem;
}

@media ${mobileM}{
    font-size: 1.65rem;
}

@media ${mobileS}{
    font-size: 1.5rem;
}
`