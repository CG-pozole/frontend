/*

    Contact page rendered for react.

    Author: Alejandro AS
    Date: 29-12-2020

*/



import Header from '@components/Header';
import NavBar from '@components/NavBar';
import * as React from 'react';


export interface ContactProps {

}

const Contact: React.FunctionComponent<ContactProps> = () => {
    return (
        <div>
            <Header subtitle="Contact" />
            <NavBar logoVisible={true} actual="contact" />
        </div>
    );
}

export default Contact;