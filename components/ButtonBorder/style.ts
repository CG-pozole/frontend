/*

    Styled components for ButtonBorder.

    Authors: Alejandro AS
    Date: 22-12-2020

*/



import styled from "@emotion/styled"
import { Gradients } from "@constants/color"
import { Fonts } from "@constants/fonts"
import { dimension } from '@constants/dimensions';

export const ButtonPurple = styled.a`
        background: rgba(0,0,255,0%);
        padding: 1rem 2rem;
        z-index: 1;
        text-align: center;
        color: white;
        border-width: 4px;
        border-style: solid;
        border-image-slice: 1;
        border-image-source: ${Gradients.pinkPurpleLeft};
        font-family: ${Fonts.primary};
        font-size: 1.2rem;
        
      @media(max-width: ${dimension.mobile}){
            font-size: 1rem;
            padding: 1rem auto;
        }



        :hover{
            border-image-slice: 1;
            border-image-source: ${Gradients.pinkPurpleRight}; 
            cursor: pointer;
        } 
    
    `


export const ButtonBlue = styled.a`
        background: rgba(0,0,255,0%);
        padding: 1rem 2rem;
        z-index: 1;
        text-align: center;
        color: white;
        border-width: 4px;
        border-style: solid;
        border-image-slice: 1;
        border-image-source: ${Gradients.greenBlueLeft};
        font-family: ${Fonts.primary};
        font-size: 1.2rem;
        :hover{
            border-image-slice: 1;
            border-image-source: ${Gradients.greenBlueRight}; 
            cursor: pointer;
        } 


        @media(max-width: ${dimension.mobile}){
            font-size: 1rem;
            padding: 1rem auto;
        }
    
    `


export const ButtonOrange = styled.a`
        background: rgba(0,0,255,0%);
        padding: 1rem 2rem;
        z-index: 1;
        text-align: center;
        color: white;
        border-width: 4px;
        border-style: solid;
        border-image-slice: 1;
        border-image-source: ${Gradients.pinkOrange};
        font-family: ${Fonts.primary};
        font-size: 1.2rem;
        :hover{
            border-image-slice: 1;
            border-image-source: ${Gradients.pinkOrange}; 
            cursor: pointer;
        } 


        @media(max-width: ${dimension.mobile}){
            font-size: 1rem;
            padding: 1rem auto;
        }
    
    `

