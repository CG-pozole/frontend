/*

    Styles for the page about.
    All the styled components used in that page are founded here. 


    Author: Alejandro AS
    Date: 28-12-2020

*/


import styled from "@emotion/styled"
import { Fonts } from '@constants/fonts';
import { ColorsHexa } from '@constants/color';


export const BodyFirst = styled.div`
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 4rem auto;


    p{
        width: 45%;
        font-size: 1.2rem;
        line-height: 2rem;
    }


    img{
        width: 40%;
    }


`

export const BodySecond = styled.div`
    padding: 2rem 2rem;
    margin: 10rem auto;

    span{
        font-family: ${Fonts.secondary};
        color: white;
        font-size: 1.7rem;
        text-align: center;
    }



`

export const BodyThird = styled.div`

    margin: 4rem auto;
    text-align: center;


    .title-container{
        width: 30%;
        margin: auto;
    }

    .icon-container{
        background-color: ${ColorsHexa.backgroundClear};
        display: flex;
        margin: 6rem auto;
        justify-content: space-between;
        padding: 3rem;
    }

    .icon-circle{
        background-color: grey;
        width: 240px;
        height: 240px;
        border-radius: 20rem;
    }
`


export const TitleContainer = styled.div`
    width: 30%;
    margin: auto;


`