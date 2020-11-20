import React from 'react'
import styled from "@emotion/styled"
import Link from "next/link"

import Logo from './Logo'

export interface NavBarProps {
    actual: string;
    logoVisible: boolean;
}


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 4rem;
`

const UlStyled = styled.ul`
    display: flex;
    margin-top: 5rem;
    width: 40%;
    margin: 2rem 2rem;
    justify-content: space-between;

    li{
        color: white;
        list-style: none;
        margin: 1.2rem 3rem;
    }
`




const NavBar: React.SFC<NavBarProps> = ({ logoVisible }) => {
    return (
        <Nav>
            {logoVisible ? <Logo /> : <div></div>}
            <UlStyled>
                <li><Link href="/bootcamp/2020">BootCamp</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </UlStyled>
        </Nav>
    );
}

export default NavBar;