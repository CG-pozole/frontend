import Header from '@components/Header';
import NavBar from '@components/NavBar';
import TextContainer from '@components/TextContainer';
import Title from '@components/Title';
import { Fonts } from '@constants/fonts';
import styled from '@emotion/styled';
import * as React from 'react';


export interface BootCampProps {

}

const Body = styled.div`

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
`

const BootCamp: React.FunctionComponent<BootCampProps> = () => {
    return (
        <div>
            <Header subtitle="BootCamp 2020" />
            <NavBar logoVisible={true} actual="bootcamp" />
            <Body>
                <div className="title">
                    <Title text="BootCamp 2020" />
                </div>
                <div className="text-desc">
                    <TextContainer>
                        <h2>
                            Informacion General
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit distinctio! Sed sit esse impedit? Dolore accusantium tempore, dicta dolor ullam nostrum aliquid expedita mollitia a earum commodi tempora quaerat.
                        </p>
                    </TextContainer>
                </div>
                <div className="video">

                </div>
            </Body>
        </div>
    );
}

export default BootCamp;