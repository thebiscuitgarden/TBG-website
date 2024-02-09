import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bright_red, darkGrey } from "./constants/colors"


export const FormTabSection = styled.section`
width: 100%;
display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: 30px 30px;
row-gap: 10px;
justify-content: space-around;
padding: 15px 10px 0;

// border: 2px solid pink;
`

export const FormTabDiv = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: auto;

${props => {
    let { col, row } = props;

    return {
        'grid-column-start': col,
        'grid-column-end': col,
        'grid-row-start': row,
        'grid-row-end': row,
    }
    
}}

// border: 1px solid blue;
`

export const FormTabIcon = styled(FontAwesomeIcon)`
${props => {
    return props.colorState ? {
        color: bright_red
    } : {
        color: darkGrey
    }
 }}
`

export const FormTabP = styled.p`
font-size: 16px;
text-align: left;
margin: 6px;

${props => {
    return props.colorState ? {
        color: bright_red, 
        fontWeight: 'bold',
    } : null
 }}
`

export const FormAsteriskH4 = styled.h4`
display: flex;
flex-wrap: wrap;
justify-content: center;
font-size: 1.8rem;
font-weight: normal;
margin: 5px 0 20px 0;
width: 100%;

// border: 1px solid black;
`

export const FormAsterisk = styled.h4`
color: ${bright_red};
font-size: 1.8rem;
font-weight: normal;
width: 12px;

// border: 1px solid red;
`

export const FormExample = styled.p`
font-size: inherit;
text-align: left;
margin: 0 15px;
width: 100%;

${props => {
    if(props.props){
        return {
            'margin': '0px'
        }
    }
}}
`