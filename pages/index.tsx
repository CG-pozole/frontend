import * as React from 'react';
import Header from "@components/Header"
import NavBar from '@components/NavBar';
import styled from "@emotion/styled";
import { ColorsHexa } from "@constants/color"



export interface IndexProps {
}



const ImgCenter = styled.img`
  height: 60rem; 
  display: block;
  margin: -10rem auto;
  z-index: -1;
`

const ImgBackground = styled.img`
  position: fixed;
  top: 0;
  z-index: -1;
`


const Circle = styled.div`
  background-color: ${ColorsHexa.backgroundClear};
  padding: 2rem;
  width: 30rem;
  height: 30rem; 
  border-radius: 100%;
  position: fixed;
  top: 0;
`

const Container = styled.div`
  .circle-2{
    top: 80%;
    right: 10%;
  }

`

const index: React.SFC<IndexProps> = () => {
  return (
    <div>
      <Header subtitle="Home" />
      <NavBar logoVisible={false} actual="Home" />
      <div>
        <ImgCenter src={"/img/CGpozole-logo-01.svg"} />
        <Container>
          <Circle className="circle-1"></Circle>
          <Circle className="circle-2"></Circle>
        </Container>
      </div>
    </div>

  );

}

export default index;