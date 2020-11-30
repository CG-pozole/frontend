// LOGO COMPONENT 
// RENDER DE IMAGE LOGO
// 19-11-2020 
// ALEJANDRO AS


import Link from 'next/link';
import * as React from 'react';
import styled from "@emotion/styled"


export interface LogoProps {

}


const LogoImg = styled.img`

    width: 10rem;
    margin: auto;

    :hover{
        cursor: pointer;
        transform: scale(1.1)
    }

`


const Logo: React.SFC<LogoProps> = () => {
    return (
        <React.Fragment>
            <Link href="/">
                <LogoImg src={"/img/CGpozole-logo-05.svg"} alt="CG-POZOLE-LOGO" style={{ width: "10rem" }} />
            </Link>
        </React.Fragment>
    );
}

export default Logo;