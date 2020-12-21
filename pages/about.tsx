import Header from '@components/Header';
import NavBar from '@components/NavBar';
import Title from '@components/Title';
import * as React from 'react';
import styled from "@emotion/styled"
import { YellowLine, PinkLine } from "@components/GradientDiv"
import ButtonBorder from '@components/ButtonBorder';
import { Fonts } from '@constants/fonts';
import { ColorsHexa } from '@constants/color';


export interface AboutProps {

}


const BodyFirst = styled.div`
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 4rem auto;


    p{
        width: 45%;
        font-size: 1.2rem;
        line-height: 2rem;
    }


    img{
        width: 40%;
    }


`

const BodySecond = styled.div`
    padding: 2rem 2rem;
    margin: 10rem auto;

    span{
        font-family: ${Fonts.secondary};
        color: white;
        font-size: 1.7rem;
        text-align: center;
    }



`

const BodyThird = styled.div`

    margin: 4rem auto;
    text-align: center;


    .title-container{
        width: 30%;
        margin: auto;
    }

    .icon-container{
        background-color: ${ColorsHexa.backgroundClear};
        display: flex;
        margin: 6rem auto;
        justify-content: space-between;
        padding: 3rem;
    }

    .icon-circle{
        background-color: grey;
        width: 240px;
        height: 240px;
        border-radius: 20rem;
    }
`


const TitleContainer = styled.div`
    width: 30%;
    margin: auto;


`


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