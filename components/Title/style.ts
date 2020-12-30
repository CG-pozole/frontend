/*
    Styled Components for the Title component.

    Authors: Alejandro AS
    Date: 29-12-2020
*/


import styled from "@emotion/styled"
import { Fonts } from '@constants/fonts';
import { Gradients } from '@constants/color';


export const TitleStyled = styled.h1`
    font-family: ${Fonts.secondary};
    color: white;
    text-align: center;
    font-weight: normal;
    border-bottom: 0.4rem solid;
    font-size: 3.5rem;
    border-image-slice: 1;
    border-image-source: ${Gradients.pinkPurpleLeft};
`

