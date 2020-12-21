import { ColorsHexa } from '@constants/color';
import { dimension } from '@constants/dimensions';
import styled from '@emotion/styled';
import React from 'react'




export interface TextContainerProps {
}

const Container = styled.div`
    background-color: ${ColorsHexa.backgroundClear};
    color: white;
    border-radius: 3rem;
    padding: 1.5rem;
    text-align: center;


`

const TextContainer: React.FunctionComponent<TextContainerProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default TextContainer;