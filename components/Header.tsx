import React from 'react'
import { Helmet } from "react-helmet"



export interface HeaderProps {
    subtitle: String;
}

const Header: React.SFC<HeaderProps> = ({ subtitle }) => {
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