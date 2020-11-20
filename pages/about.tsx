import Header from '@components/Header';
import NavBar from '@components/NavBar';
import * as React from 'react';


export interface AboutProps {

}

const About: React.SFC<AboutProps> = () => {
    return (
        <div>
            <Header subtitle="About us" />
            <NavBar logoVisible={true} actual="about" />
        </div>
    );
}

export default About;