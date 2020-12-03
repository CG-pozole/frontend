import ButtonBorder from '@components/ButtonBorder';
import { YellowLine } from '@components/GradientDiv';
import Header from '@components/Header';
import NavBar from '@components/NavBar';
import TextContainer from '@components/TextContainer';
import Title from '@components/Title';
import { Gradients } from '@constants/color';
import { Fonts } from '@constants/fonts';
import styled from '@emotion/styled';
import Footer from '@layout/footer';
import * as React from 'react';
import ReactPlayer from "react-player"
import { BootCamp as BootCampInfo } from "@constants/infoText"


export interface BootCampProps {

}

const BodyFirst = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 0 4rem;
    
    .title{
        width: 30%;
        margin: -3rem auto 2rem;
    }

    .text-desc{
        width: 45%;
        margin: auto;

        h2{
            font-family: ${Fonts.secondary};
            font-weight: normal;
            font-size: 1.8rem;
        }
        
        p{
            line-height: 2rem;
        }
    }

    .video{
        margin:4rem auto;
    }
`



const BodySecond = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 3rem;
    text-align: center;
    line-height: 1.6rem;
    color: white;
    margin-bottom: 4rem;

    h5{
        font-family: ${Fonts.secondary};
        font-size: 1.6rem;
        font-weight: normal;
    }

    ul{
        text-align: start;
        margin-top: 2rem;
    }
    
    .no-decoration{
        list-style: none;
    }

    .date-start{
        color: white;
        margin: 2rem 0 5rem;
        
        span{
            margin-left: 10rem;
            border-bottom: 0.3rem solid;
            color: grey;
            border-image-slice: 1;
            border-image-source: ${Gradients.yellowGreen}
        }
        
    }

`

const BootCamp: React.FunctionComponent<BootCampProps> = () => {
    return (
        <div>
            <Header subtitle="BootCamp 2020" />
            <NavBar logoVisible={true} actual="bootcamp" />
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
                    <ReactPlayer url={BootCampInfo.partOne.videoUrl} />
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
            <Footer />
        </div>
    );
}

export default BootCamp;