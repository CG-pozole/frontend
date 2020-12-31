/*
    Contact Styled Components.

    Authors: Alejandro AS
    Date: 30-12-2020
*/


import { dimension } from "@constants/dimensions"
import { Fonts } from "@constants/fonts"
import styled from "@emotion/styled"


export const TitleContainer = styled.div`
    width: 30%;
    margin: 3rem auto;


    @media(max-width: ${dimension.mobile}){
        width: 60%;

        h1{
            font-size: 2.5rem;
        }


    }
`


export const Container = styled.section`

    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 2rem 10rem;

    li{
        list-style: none;
        margin-top: 3rem;
        text-align: start;
    }
    
    p {
        font-weight: bold;
        font-size: 1.3rem;
    }

    strong{

        font-family: ${Fonts.secondary};
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }


    /* Media queries for Ipad */

    @media(max-width: ${dimension.tablet}){
        flex-direction: column;


        img{
            margin: 3rem auto 0rem auto;
            width: 70%;
        }
    }


    /* Media queries for Mobile */

    @media(max-width: ${dimension.mobile}){
        padding: 1.5rem;


        p{
            font-size: 1rem;
        }
        
        strong{
            font-size: 1.6rem;
        }
    }


`


export const ContainerLegend = styled.section`

    width: 40%;
    margin: 5rem auto;
    color: white;

    .legend-text{
        text-align: center;
        font-weight: bold;
    }


    /* media queries for Tablet */

    @media(max-width: ${dimension.tablet}){
        width: 60%;


        .legend-text{
            font-size: 1.2rem;
        }
    }


    /* media queries for mobile */

    @media(max-width: ${dimension.mobile}){
        .legend-text{
            font-size: 1rem;
        }
    }



`