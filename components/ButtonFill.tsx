import * as React from 'react';
import styled from "@emotion/styled"
import Link from 'next/link';
import { dimension } from '@constants/dimensions';

const Button = styled.a`
        background: rgb(191,0,255);
        background: linear-gradient(90deg, rgba(191,0,255,0.5) 0%, rgba(255,0,128,0.5) 100%);
        border-radius: 2rem;
        padding: 1rem 2rem;
        z-index: 1;

        @media(max-width: ${dimension.mobile}){
            background: linear-gradient(90deg, rgba(191,0,255,0.85) 0%, rgba(255,0,128,0.85) 100%);
            padding: 1rem;
        }
        

        :hover{
            background: rgb(191,0,255);
            background: linear-gradient(-90deg, rgba(191,0,255,1) 0%, rgba(255,0,128,1) 100%);
            cursor: pointer;
        }
    
    `

export interface PropsButtonField {
    href: string;
    text: string;
}

const ButtonFill: React.FunctionComponent<PropsButtonField> = ({ href, text }) => (
    <Link href={href}>
        <Button >{text}</Button>
    </Link>
)

export default ButtonFill;