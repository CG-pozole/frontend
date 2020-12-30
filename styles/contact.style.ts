/*
    Contact Styled Components.

    Authors: Alejandro AS
    Date: 30-12-2020
*/


import { Fonts } from "@constants/fonts"
import styled from "@emotion/styled"


export const TitleContainer = styled.div`
    width: 30%;
    margin: 3rem auto;

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
    }

    strong{

        font-family: ${Fonts.secondary};
        font-size: 1.2rem;
        margin-right: 0.5rem;
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


`