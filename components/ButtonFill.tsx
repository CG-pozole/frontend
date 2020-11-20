import * as React from 'react';
import styled from "@emotion/styled"

const Button = styled.a`
        background: rgb(191,0,255);
        background: linear-gradient(90deg, rgba(191,0,255,1) 0%, rgba(255,0,128,1) 100%);
        border-radius: 2rem;
        padding: 1rem 2rem;
        z-index: 1;
        

        :hover{
            background: rgb(191,0,255);
            background: linear-gradient(-90deg, rgba(191,0,255,1) 0%, rgba(255,0,128,1) 100%);
            
        }
    
    `

export interface PropsButtonField {
    href?: any;
    text: string;
}

const ButtonFill: React.SFC<PropsButtonField> = ({ href, text }) => (<Button href={href}>{text}</Button>)

export default ButtonFill;