import * as React from 'react';
import styled from "@emotion/styled"
import { Gradients } from "@constants/color"
import { Fonts } from "@constants/fonts"
import Link from 'next/link';
import { dimension } from '@constants/dimensions';



export interface ButtonBorderProps {
    href?: string;
    text: string;
    green?: boolean;
    purple?: boolean;
    blue?: boolean;

}


const ButtonBorder: React.FunctionComponent<ButtonBorderProps> = ({ href, text, purple, green, blue }) => {
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


        @media(max-width: ${dimension.mobile}){
            font-size: 1rem;
            padding: 1rem auto;
        }
    
    `
    return (
        <React.Fragment>
            <div>
                {purple &&
                    <Link href={href}>
                        <ButtonPurple>
                            {text}
                        </ButtonPurple>
                    </Link>
                }
                {
                    blue &&
                    <Link href={href}>
                        <ButtonBlue >
                            {text}
                        </ButtonBlue>
                    </Link>
                }
            </div>
        </React.Fragment>
    );

}

export default ButtonBorder;