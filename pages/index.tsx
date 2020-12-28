/*

  Index File for the main view of the page.

  Date: 28 - 12 -2020
  Author: Alejandro AS

*/



import * as React from 'react';
import Header from "@components/Header"
import NavBar from '@components/NavBar';
import ButtonBorder from '@components/ButtonBorder';
import Footer from '@layout/footer';
import { NavContainer, Body, ButtonContainer, ImgCenter, TextContainer } from "@styles/index.style"



export interface IndexProps {
}

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