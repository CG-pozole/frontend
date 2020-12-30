/*

    Styles for the 2020 bootcamp page that contains all styled components.

    Author: Alejandro AS
    Date: 28-12-2020

*/


import { Gradients } from '@constants/color';
import { Fonts } from '@constants/fonts';
import styled from '@emotion/styled';
import { dimension } from '@constants/dimensions';


export const BodyFirst = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 0 4rem;


    @media(max-width: ${dimension.mobile}){
        padding: 0 1rem;
    }
    
    .title{
        width: 30%;
        margin: -3rem auto 2rem;
        

        @media(max-width: ${dimension.tablet}){
            width: 50%;
        }

        @media(max-width: ${dimension.mobile}){
            width:100%;
            h1{
                margin: 3rem 2rem 1rem 2rem;
                font-size: 2rem;
            }
        }

    }

    .text-desc{
        width: 45%;
        margin: auto;

        @media(max-width: ${dimension.tablet}){
            width: 80%;
            margin-bottom: 3rem;
        }

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
        
        
        @media(max-width: ${dimension.tablet}){
            transform:scale(0.8);
            margin: 2rem auto;
            
        }

        @media(max-width: ${dimension.mobile}){
            transform: scale(0.4);
            margin: -4rem -8rem;
        }
    }
`



export const BodySecond = styled.div`


    display: flex;
    justify-content: space-between;
    padding: 3rem;
    text-align: center;
    line-height: 1.6rem;
    color: white;
    margin-bottom: 4rem;
    width: 80%;
    margin: auto;

    @media(max-width: ${dimension.tablet}){
        flex-direction: column;
        justify-content: space-between;
    }

    @media(max-width: ${dimension.mobile}){
        padding: 0rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
    
    img{
        margin-bottom: 3rem;


        @media(max-width: ${dimension.tablet}){
            margin-top: 3.5rem;
        }

        @media(max-width: ${dimension.mobile}){
            width: 80%;
        }
    }

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
        
        @media(max-width: ${dimension.mobile}){
            span{
                font-size: 1.5rem;
                margin-left: 0rem;
                
            } 
                
        }
    }

`


export const BodyThird = styled.div`
    padding: 10rem;
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    

    @media(max-width: ${dimension.tablet}){
        width: 100%;
    }

    .item-question{
        list-style: none;   
        line-height: 2rem;
        margin-bottom: 4rem;
        border-bottom: 0.2rem solid white;

        &:last-of-type{
            border-bottom: 0rem;
            margin-bottom: 1.5rem;
        }


        @media(max-width: ${dimension.mobile}){
            text-align: start;
        }
    }
    .question{
        font-weight: bold;
    }


    @media(max-width: ${dimension.mobile}){
        h1{
            font-size: 2rem;
        }
        
        padding: 2rem;

    }
`