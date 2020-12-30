/*

    Title Component 

    Authors: Alejandro AS
    Date: 29-12-2020

*/



import * as React from 'react';
import { TitleStyled } from "./style"


export interface TitleProps {
    text: string
}


const Title: React.FunctionComponent<TitleProps> = ({ text }) => {
    return (
        <TitleStyled>
            {text}
        </TitleStyled>
    );
}

export default Title;