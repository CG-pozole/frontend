import * as React from 'react';
import styled from "@emotion/styled"
import { Gradients } from "@constants/color"
import { Fonts } from "@constants/fonts"



export interface ButtonBorderProps {
    href?: string;
    text: string;
    green?: boolean;
    purple?: boolean;
    blue?: boolean;

}


const ButtonBorder: React.SFC<ButtonBorderProps> = ({ href, text, purple, green, blue }) => {
    const ButtonPurple = styled.a`
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
        




        :hover{
            border-image-slice: 1;
            border-image-source: ${Gradients.pinkPurpleRight}; 
            cursor: pointer;
        } 
    
    `


    const ButtonBlue = styled.a`
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
    
    `
    return (
        <React.Fragment>
            <div>
                {purple &&
                    <ButtonPurple href={href}>
                        {text}
                    </ButtonPurple>
                }
                {
                    blue &&
                    <ButtonBlue href={href}>
                        {text}
                    </ButtonBlue>
                }
            </div>
        </React.Fragment>
    );

}

export default ButtonBorder;