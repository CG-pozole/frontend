/* 

 LOGO COMPONENT 
 RENDER DE IMAGE LOGO
 Date: 19-11-2020 
 Authors: Alejandro AS

 */ 


import Link from 'next/link';
import * as React from 'react';
import { LogoImg } from "./style"


export interface LogoProps {

}





const Logo: React.FunctionComponent<LogoProps> = () => {
    return (
        <React.Fragment>
            <Link href="/">
                <LogoImg src={"/img/CGpozole-logo-05.svg"} alt="CG-POZOLE-LOGO" style={{ width: "10rem" }} />
            </Link>
        </React.Fragment>
    );
}

export default Logo;