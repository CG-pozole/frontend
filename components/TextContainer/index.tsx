/*
    Text Container Component.

    Authors: Alejandro AS
    Date: 12-12-2020

*/


import React from 'react'
import { Container } from "./style"




export interface TextContainerProps {
}



const TextContainer: React.FunctionComponent<TextContainerProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default TextContainer;