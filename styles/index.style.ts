/*

    The styles of the index page.

    Date: 28 - 12 - 2020
    Author: Alejandro AS
*/



import { dimension } from "@constants/dimensions"
import styled from "@emotion/styled"



export const NavContainer = styled.div`
  width: 70%;

  @media(max-width: ${dimension.tablet}){
    width: 80%;
  }


  @media(max-width: ${dimension.mobile}){
    width: 70%;
  }

`

export const ImgCenter = styled.img`
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




export const ButtonContainer = styled.div`
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

export const TextContainer = styled.div`
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


export const Body = styled.div`
  margin-bottom: 5rem;
  background-image: url("/img/circles.png");

  @media(max-width: ${dimension.tablet}){
    margin-bottom: 15rem;
  }

  @media(max-width: ${dimension.mobile}){
    margin-bottom: 3rem;
  }


`
