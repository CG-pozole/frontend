// LOGO COMPONENT 
// RENDER DE IMAGE LOGO
// 19-11-2020 
// ALEJANDRO AS


import * as React from 'react';


export interface LogoProps {

}


const Logo: React.SFC<LogoProps> = () => {
    return (
        <React.Fragment>
            <img src={"/img/CGpozole-logo-05.svg"} alt="CG-POZOLE-LOGO" style={{ width: "10rem" }} />
        </React.Fragment>
    );
}

export default Logo;