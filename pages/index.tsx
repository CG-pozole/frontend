import * as React from 'react';
import Header from "@components/Header"
import NavBar from '@components/NavBar';
import styled from "@emotion/styled";
import { ColorsHexa } from "@constants/color"
import ButtonBorder from '@components/ButtonBorder';
import { dimension } from '@constants/dimensions';
import Footer from '@layout/footer';



export interface IndexProps {
}



const ImgCenter = styled.img`
  height: 60rem; 
  display: block;
  margin: -10rem auto;
  z-index: -1;

  @media(max-width: ${dimension.tablet}){
    height: 50rem;
  }

  @media(max-width: ${dimension.mobile}){
    height: 30rem;
    margin-top: -4.5rem;
  }

`

const Circle = styled.div`
  background-color: ${ColorsHexa.backgroundClear};
  padding: 2rem;
  width: 30rem;
  height: 30rem; 
  border-radius: 100%;
  position: fixed;
  top: 0;

  // TABLET AVerage size
  @media(max-width: ${dimension.tablet}){
    display: none;
  }

  @media(max-width: 1366px){
    top: -30%;
  }



`

const Container = styled.div`
  .circle-2{
    top: 80%;
    right: -10%;
    @media(max-width: 1366px){
      display: none;
    }

  }
`


const ButtonContainer = styled.div`
  display: flex;
  width: 20%;
  margin:0rem auto;
  justify-content: space-between;
  
  @media(max-width: 1366px){
    width: 30%;
  }

  @media(max-width: ${dimension.tablet}){
    width: 60%;
    justify-content: space-around;
  }

  @media(max-width: ${dimension.mobile}){
    margin: 3rem 3.5rem;
    width: 100%;
    justify-content: space-around;
  }
`

const TextContainer = styled.div`
    padding: 2rem;
    margin: 3rem auto;
    text-align:center;
    width: 80;
    z-index: 1;

  @media(max-width: ${dimension.tablet}){
    padding: 2rem;
    margin: 3rem auto;
    text-align:center;
    width: 80%;
  }

  @media(max-width: ${dimension.mobile}){
    padding: 2rem;
    margin: auto;
    text-align:center;
    width: 130%;
  }
`


const Body = styled.div`
  margin-bottom: 5rem;

  @media(max-width: ${dimension.tablet}){
    margin-bottom: 15rem;
  }

`

const index: React.SFC<IndexProps> = () => {
  return (
    <React.Fragment>
      <NavBar logoVisible={false} actual="Home" />
      <Header subtitle="Home" />
      <Body>
        <ImgCenter src={"/img/CGpozole-logo-01.svg"} />
        <Container>
          <Circle className="circle-1"></Circle>
          <Circle className="circle-2"></Circle>
        </Container>
        <ButtonContainer>
          <ButtonBorder text="More Info." href={"/about"} purple={true} />
          <ButtonBorder text="BootCamp" href={"/bootcamp/2020"} blue={true} />
        </ButtonContainer>
        <TextContainer>
          <p style={{ margin: "auto" }}>
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt maiores totam, saepe explicabo deleniti fugit."
          </p>
        </TextContainer>
      </Body>
      <Footer />
    </React.Fragment>

  );

}

export default index;