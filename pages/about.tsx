/*
    About Page to render from react.


    Author: Alejandro AS
    Date: 28-12-2020

*/



import Header from '@components/Header';
import NavBar from '@components/NavBar';
import Title from '@components/Title';
import * as React from 'react';
import { YellowLine, PinkLine } from "@components/GradientDiv"
import ButtonBorder from '@components/ButtonBorder';

import { BodyFirst, BodySecond, BodyThird, TitleContainer } from "@styles/about.style"


export interface AboutProps {

}


const About: React.FunctionComponent<AboutProps> = () => {
    return (
        <div>
            <Header subtitle="About us" />
            <NavBar logoVisible={true} actual="about" />
            <TitleContainer>
                <Title text="Sobre Nosotros" />
            </TitleContainer>
            <BodyFirst>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum iusto voluptatibus laudantium natus consectetur qui dolores ullam nihil laborum, eos, deleniti laboriosam similique facere ex eligendi? Accusantium soluta error quidem aperiam velit commodi, nihil facilis ea provident est, non omnis eaque quis enim placeat expedita doloribus sunt assumenda sapiente cumque quasi odit porro laboriosam? Placeat nulla, blanditiis doloremque dolorum dicta hic excepturi iure deserunt ullam quia sequi similique?
                </p>
                <img alt="Sobre-Nosotros" src={"img/bootcampImg.png"} />
            </BodyFirst>
            <YellowLine />
            <BodySecond>
                <video muted={true} />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, enim!
                </span>
            </BodySecond>
            <PinkLine />
            <BodyThird>
                <div className="title-container">
                    <Title text="Lo que hacemos" />
                </div>
                <div className="icon-container">
                    <div className="icon">
                        <div className="icon-circle"></div>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="icon">
                        <div className="icon-circle"></div>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="icon">
                        <div className="icon-circle"></div>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="icon">
                        <div className="icon-circle"></div>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <ButtonBorder text="Contactanos" href="/contact" orange={true} />
            </BodyThird>
        </div>
    );
}

export default About;