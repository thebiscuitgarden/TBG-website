/* 
ALL pages have an expanded different photo - same like header below the nav bar
    Make long text boxes shorter (less width)
*/

import styled from 'styled-components';
import { FormPageBtn } from './forms-page';

export const ErrSection = styled.div`
    display: flex,
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
`
export const ErrH1 = styled.h1`
    margin: 30px;
    width: 65%;
`

export const ErrBelly = styled.img`
    width: 20%;
    margin: 30px;
`

export const Errp = styled.p`
    width: 100%;
    font-size: 2.2rem;
    margin: 0.5% 0;
`

export const ErrTextDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const ErrButton = styled(FormPageBtn)`
    width: 18%;
    padding: 0.5%;
    margin: 1% 0;
    font-size: 2.5rem;
`