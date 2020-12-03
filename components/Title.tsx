import * as React from 'react';
import styled from "@emotion/styled"
import { Fonts } from '@constants/fonts';
import { Gradients } from '@constants/color';

export interface TitleProps {
    text: string
}


const TitleStyled = styled.h1`
    font-family: ${Fonts.secondary};
    color: white;
    text-align: center;
    font-weight: normal;
    border-bottom: 0.4rem solid;
    font-size: 3.5rem;
    border-image-slice: 1;
    border-image-source: ${Gradients.pinkPurpleLeft};
`


const Title: React.FunctionComponent<TitleProps> = ({ text }) => {
    return (
        <TitleStyled>
            {text}
        </TitleStyled>
    );
}

export default Title;