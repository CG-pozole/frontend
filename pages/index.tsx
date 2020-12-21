import * as React from 'react';
import Header from "@components/Header"
import NavBar from '@components/NavBar';
import styled from "@emotion/styled";
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
    height: 20rem;
    margin-top: -4.5rem;
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
    flex-direction: column;
    width: 50%;
    justify-content: space-between;
    margin-top: 7rem;
    height: 10rem;
    margin-bottom: 2rem;
    text-align: center;
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
    width: 70%;
  }
`


const Body = styled.div`
  margin-bottom: 5rem;
  background-image: url("/img/circles.png");

  @media(max-width: ${dimension.tablet}){
    margin-bottom: 15rem;
  }

  @media(max-width: ${dimension.mobile}){
    margin-bottom: 3rem;
  }


`

const NavContainer = styled.div`
  width: 70%;

  @media(max-width: ${dimension.tablet}){
    width: 80%;
  }


  @media(max-width: ${dimension.mobile}){
    width: 70%;
  }

`



const index: React.FunctionComponent<IndexProps> = () => {
  return (
    <React.Fragment>
      <Header subtitle="Home" />
      <Body>
        <NavContainer>
          <NavBar logoVisible={false} actual="about" />
        </NavContainer>
        <ImgCenter src={"/img/CGpozole-logo-01.svg"} />
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