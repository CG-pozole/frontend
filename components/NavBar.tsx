import React, { useState } from 'react'
import styled from "@emotion/styled"
import Link from "next/link"

import Logo from './Logo'
import ButtonFill from "@components/ButtonFill"
import { colorOptions, ColorsHexa } from "@constants/color"
import { Fonts } from '@constants/fonts'
import { dimension } from '@constants/dimensions'



export interface NavBarProps {
    actual: string;
    logoVisible: boolean;
}



const NavBar: React.FunctionComponent<NavBarProps> = ({ logoVisible, actual }) => {
    const [color, setColor] = useState("")

    const genRandomColor = () => {
        let idx = Math.floor(Math.random() * colorOptions.length);
        setColor(colorOptions[idx])
        if (colorOptions[idx] != color) {
            return colorOptions[idx]
        }
        return genRandomColor()
    }




    const Nav = styled.nav`
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: 0.5rem auto;


        @media(max-width: ${dimension.tablet}){
            width: 100%;
            justify-content: space-around;
        }

        @media(max-width: ${dimension.mobile}){
            flex-direction: column;
            ${logoVisible && `background-color: ${ColorsHexa.backgroundClear};`}
            margin-bottom: 2rem;
        }
    `

    const UlStyled = styled.ul`
        display: flex;
        margin-top: 5rem;
        width: 40%;
        margin: 2rem 2rem;
        justify-content: space-between;
        z-index: 1;
        
        @media(max-width: ${dimension.tablet}){
            width:50%;
        }
        
        @media(max-width: ${dimension.mobile}){
            width: 100%;
            ${logoVisible && `margin: -0.9rem 0rem 1.5rem -1.2rem;`}
            justify-content: space-around;
        }
    
        li{
            color: white;
            list-style: none;
            margin: 1.2rem auto;
            font-size: 1rem;
            font-weight: 600px;
            font-family: ${Fonts.primary};
            
            @media(max-width: ${dimension.tablet}){
                font-size: 0.9rem;
                margin: 1rem auto;
            }
            @media(max-width: ${dimension.mobile}){
                font-size: 0.8rem;

            }
        }
         
        .link{
            :hover{
                color: ${color};
            }
        }
    `

    return (
        <Nav>
            {logoVisible ? <Logo /> : <div></div>}
            <UlStyled>
                {actual.toUpperCase() != "BOOTCAMP" &&
                    <li>
                        <ButtonFill href="/bootcamp/2020" text="BootCamp 2020" />
                    </li>
                }
                {
                    actual.toUpperCase() != "ABOUT" &&
                    <li className="link" onMouseEnter={genRandomColor}><Link href="/about">About Us</Link></li>
                }
                {
                    actual.toUpperCase() != "CONTACT" &&
                    <li className="link" onMouseEnter={genRandomColor}><Link href="/contact">Contact</Link></li>
                }
            </UlStyled>
        </Nav>
    );
}

export default NavBar;