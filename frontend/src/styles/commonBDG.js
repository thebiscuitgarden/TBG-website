import styled from "styled-components";

export const CommonH1 = styled.h1`
width: 100%;
text-align: center;
`

export const CommonH2 = styled.h2`
width: 100%;
text-align: center;
margin-top: 40px
`

export const CommonH3 = styled.h3`
text-align: center;
width: 100%;
font-size: 3rem;
` 

export const CommonH4 = styled.h4`
font-size: 2.2rem;
`

//Start of the Page:
export const CommonStartDiv = styled.div`
padding: 2.5% 12.5% 0%;
display: flex;
flex-wrap: wrap;
justify-content: center;
// border: 1px solid purple;
`

//Information Sections:
export const CommonInfoSection = styled.div`
text-align: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 40px 43px;
// border: 1px solid blue;
`

//What we value section:
export const ValuesSection = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: left;
width: 100%;
margin-top: 15px;
`

export const ValuesText = styled.div`
display: flex;
justify-content: center;
width: 40%;
align-items: center;
flex-wrap: wrap;
margin-top: 25px;
`
export const ValuesP = styled.p`
width: 100%;
margin-bottom: 5px;
`

export const ValuesItems = styled.div`
font-size: 1.5rem;
`

export const ValuesLi = styled.li`
width: 100%;
`

//Prices Section:
export const PricesDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
align-items: center;
justify-content: center;
`

export const PricesSection = styled.div`
margin-top: 10px;
display: inherit;
flex-wrap: wrap;
align-items: center;
width: 70%;
`

export const HeaderSection = styled.div`
width: 100%;
display: inherit;
flex-wrap: wrap;
justify-content: center;
`

export const PricesImg = styled.img`
min-width: 25%;    
max-width: 25%;
height: 300px;
`

export const CommonPSection = styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
padding: 15px 65px;
height: 300px;
`

export const CommonPLeft = styled.div`
display: flex;
flex-wrap: wrap;
align-content: space-between;
width: 100%;
height: 60px;
`

export const CommonPRight = styled(CommonPLeft)`
justify-content: flex-end;
text-align: end;
`

export const PricesP = styled.p`
width: 100%
`

export const PricesAsteriskDiv = styled.div`
width: 100%;
margin: 15px 0 50px;
`

export const PricesAsteriskP = styled.p`
width: 100%;
font-size: 2rem;
margin: 5px 0;
text-align: center;
`

//Requirements Section:
export const RequirementSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;
margin: 50px 0;
`

export const RequirementH2 = styled(CommonH3)`
width: 50%;
margin-top: 20px;
`

export const RequirementH3 = styled.h3`
margin: 40px 0 20px;
`

export const RequirementChecklistSection = styled.div`
width: 80%;
margin-top: 20px;
`

export const RequireChecklistDivs = styled.div`
margin: 15px 0;
`

export const RequirementsP = styled.p`
margin: 20px 0;
font-size: 2rem;
width: 100%;
`

export const RequirementsList = styled.li`
text-align: left;
margin: 0 0 1% 24%;
list-style: square;
`

export const RequirementBtn = styled.button`
margin-top: 2%
`