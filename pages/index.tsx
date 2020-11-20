import * as React from 'react';
import Header from "@components/Header"
import NavBar from '@components/NavBar';
import styled from "@emotion/styled";



export interface IndexProps {
}



const ImgCenter = styled.img`
  height: 50rem; 
  display: block;
  position: fixed;
  top:-5%;
  left: 25%;
  z-index: -1;

`

const index: React.SFC<IndexProps> = () => {
  return (
    <div>
      <Header subtitle="Home" />
      <NavBar logoVisible={false} actual="Home" />
      <div>
        <ImgCenter src={"/img/CGpozole-logo-01.svg"} />
      </div>
    </div>

  );

}

export default index;