/*
    Header Component.


    Authors: Alejandro AS
    Date: 18-12-2020

*/


import React from 'react'
import { Helmet } from "react-helmet"



export interface HeaderProps {
    subtitle: String;
}

const Header: React.FunctionComponent<HeaderProps> = ({ subtitle }) => {
    return (
        <header>
            <Helmet>
                <title>{`CGpozole | ${subtitle}`}</title>
                <link rel="icon" type="image/vnd.microsoft.icon" href={"/favicon.ico"} />
            </Helmet>
        </header>
    );
}

export default Header;