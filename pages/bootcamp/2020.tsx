/*

    Bootcamp 2020 page to render with react.

    Author: Alejandro AS
    Date: 28-12-2020

*/



import ButtonBorder from '@components/ButtonBorder';
import { PinkLine, YellowLine } from '@components/GradientDiv';
import Header from '@components/Header';
import NavBar from '@components/NavBar';
import TextContainer from '@components/TextContainer';
import Title from '@components/Title';
import Footer from '@layout/footer';
import * as React from 'react';
import ReactPlayer from "react-player"
import { BootCamp as BootCampInfo } from "@constants/infoText"
import {BodyFirst, BodyThird, BodySecond } from "@styles/2020.style"



export interface BootCampProps {

}






const BootCamp: React.FunctionComponent<BootCampProps> = () => {
    return (
        <div>
            <Header subtitle="BootCamp 2020" />
            <NavBar logoVisible={true} actual="bootcamp" />
            <div>

                <BodyFirst>
                    <div className="title">
                        <Title text={BootCampInfo.title} />
                    </div>
                    <div className="text-desc">
                        <TextContainer>
                            <h2>
                                {BootCampInfo.partOne.subtitle}
                            </h2>
                            <p>
                                {BootCampInfo.partOne.content}
                            </p>
                        </TextContainer>
                    </div>
                    <div className="video">
                        <ReactPlayer className="video-item" url={BootCampInfo.partOne.videoUrl} />
                    </div>
                </BodyFirst>
                <YellowLine />
                <BodySecond>
                    <div className="right">
                        <TextContainer>
                            <h5>Inscripciones</h5>
                            <ul className="no-decoration">
                                {BootCampInfo.partTwo.steps.map((item, idx) => (
                                    <li key={idx}><p>{idx + 1}- {item}</p></li>
                                ))}
                            </ul>
                        </TextContainer>
                        <div className="date-start">
                            <h5>
                                Fecha de inicio
                        <br />
                                <span>
                                    {BootCampInfo.partTwo.startDate}
                                </span>
                            </h5>
                        </div>
                        <ButtonBorder href="/" text="Inscribete!" blue={true} />
                    </div>
                    <div className="left">
                        <img src={BootCampInfo.partTwo.imgSrc} alt="Descripcion" />
                        <TextContainer>
                            <h5>Beneficios</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <ul>
                                {BootCampInfo.partTwo.advantages.map((item, idx) => (
                                    <li key={idx}><p>{item}</p></li>
                                ))}
                            </ul>
                        </TextContainer>
                    </div>
                </BodySecond>
                <PinkLine />
                <BodyThird>
                    <TextContainer>
                        <Title text={BootCampInfo.partThree.title} />
                        <ul>
                            {BootCampInfo.partThree.faq.map((question, idx) => (
                                <li className="item-question">
                                    <p className="question">{question[0]}</p>
                                    <p className="answer">{question[1]}</p>
                                </li>
                            ))}
                        </ul>
                    </TextContainer>
                </BodyThird>
            </div>
            <Footer />
        </div>
    );
}

export default BootCamp;