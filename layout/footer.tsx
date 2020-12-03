import { ColorsHexa, Gradients } from '@constants/color';
import { dimension } from '@constants/dimensions';
import { Fonts } from '@constants/fonts';
import styled from '@emotion/styled';
import Link from 'next/link';
import * as React from 'react';



export interface FooterProps {

}


const FooterContainer = styled.footer`
    border-top: 0.5rem solid red;
    border-image-slice: 1;
    border-image-source: ${Gradients.greenBlueRight};
    background-color: ${ColorsHexa.grey};
    color: white;
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-around;
    font-family: ${Fonts.secondary};

    @media(max-width: ${dimension.mobile}){
        flex-direction: column-reverse;
        width: 130%;
    }


    .sec-3{
        /* background-color: red; */
        width: 20%;

        @media(max-width: ${dimension.tablet}){
            width: 33%;
        }

        @media(max-width: ${dimension.mobile}){
            display: none;
        }

    }
    .sec-2{
        /* background-color: yellow; */
        width: 33%;

        @media(max-width: ${dimension.mobile}){
            width: 100%;
        }

    }
    .sec-1{
        /* background-color: green; */
        width: 20%;

        @media(max-width: ${dimension.tablet}){
            width: 33%
        }

        @media(max-width: ${dimension.mobile}){
            width: 100%;
        }
    }

    h3{
        font-weight: normal;
    }

    img{
        width: 10rem;
        display: flex;
        margin: auto;
    }

    li{
        list-style: none;
    }
    
    i{
        transform: scale(1.5);
        margin: -0.3rem 0.5rem;
         :first-of-type{
             margin: -0.3 0rem;
         }
    }

    .links{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;
        margin-top: 5rem;
        font-size: 0.9rem;
        
        li{
            margin-right: 1.5rem;
            border-bottom: 0.2rem solid whitesmoke;

            @media(max-width: ${dimension.tablet}){
                margin-right: 0.2rem;
            }
        }
    }

    .privacy {

        margin-top: 3rem;
        display: flex;
        flex-direction: column;

        li{
            margin: auto;
            justify-content: space-around;
        }
    }

    .contact{
        margin: 5rem 0rem;

        
        h4, h3{
            font-weight: normal;
            text-align: start;

            @media(max-width: ${dimension.mobile}){
                text-align: end;
            }

        }
        
        h3{
            width: 100%;
            border-bottom: 0.3rem solid whitesmoke; 

        }
    }


    .social{


        h3{
            border-bottom: 0.2rem solid whitesmoke;
            width: 30%;
        }

    }
`

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <FooterContainer>
            <div className="sec-1 ">
                <div className="social">
                    <h3>Follow us</h3>
                    <a href="https://github.com/CG-pozole" target="_blank">
                        <i className="fab fa-github "></i>
                    </a>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                </div>
                <div className="contact">
                    <h3>Contact:</h3>
                    <h4>social@cgpozole.com</h4>
                    <h4>+52 123412421</h4>
                </div>
            </div>
            <div className="sec-2">
                <img src={"/img/CGpozole-logo-05.svg"} />
            </div>
            <div className="sec-3">
                <ul className="links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/bootcamp/2020">BootCamp</Link></li>
                </ul>

                <ul className="privacy">
                    <li>
                        <Link href="/">Privacy and Terms</Link>
                    </li>
                    <li>
                        <Link href="/bootcamp/2020/?slide=True">FAQ</Link>
                    </li>
                </ul>

            </div>
        </FooterContainer>
    );
}

export default Footer;