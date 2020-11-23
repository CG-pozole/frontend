import React, { useState } from 'react'
import styled from "@emotion/styled"
import Link from "next/link"

import Logo from './Logo'
import ButtonFill from "@components/ButtonFill"
import { colorOptions } from "@constants/color"
import { Fonts } from '@constants/fonts'



export interface NavBarProps {
    actual: string;
    logoVisible: boolean;
}


const NavBar: React.SFC<NavBarProps> = ({ logoVisible, actual }) => {
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
    `

    const UlStyled = styled.ul`
        display: flex;
        margin-top: 5rem;
        width: 40%;
        margin: 2rem 2rem;
        justify-content: space-between;
        z-index: 1;
    
        li{
            color: white;
            list-style: none;
            margin: 1.2rem auto;
            font-size: 1rem;
            font-weight: 600px;
            font-family: ${Fonts.primary};
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
                        <Link href="/bootcamp/2020" passHref>
                            <ButtonFill text="BootCamp 2020" />
                        </Link>
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