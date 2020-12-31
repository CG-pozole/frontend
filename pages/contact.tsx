/*

    Contact page rendered for react.

    Author: Alejandro AS
    Date: 29-12-2020

*/



import Header from '@components/Header';
import NavBar from '@components/NavBar';
import * as React from 'react';

import { Content } from "@content/contact"
import { Container, ContainerLegend, TitleContainer } from "@styles/contact.style"
import Title from '@components/Title';
import TextContainer from '@components/TextContainer';
import { PinkLine } from "@components/GradientDiv"
import Footer from '@layout/footer';


export interface ContactProps {

}

const Contact: React.FunctionComponent<ContactProps> = () => {
    return (
        <div>
            <Header subtitle="Contact" />
            <NavBar logoVisible={true} actual="contact" />
            <TitleContainer>
                <Title text="Contacto"/>
            </TitleContainer>
            <Container>
                <TextContainer>
                    <ul>
                        {Content.contact.map((item: Array<string>, idx : number )=>{
                            return(
                                <li key={idx}> 
                                    <p><strong>{item[0]}</strong>{item[1]}</p>
                                </li>
                            )
                        })}
                    </ul>
                </TextContainer>
                <img src="img/bootcampImg.png"/>
            </Container>
            <ContainerLegend>
                <PinkLine/>
                <legend>
                    <p className="legend-text">
                        {Content.legend}
                    </p>
                </legend>
            </ContainerLegend>
            <Footer/>
        </div>
    );
}

export default Contact;