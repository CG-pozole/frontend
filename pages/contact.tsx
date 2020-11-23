import Header from '@components/Header';
import NavBar from '@components/NavBar';
import * as React from 'react';


export interface ContactProps {

}

const Contact: React.SFC<ContactProps> = () => {
    return (
        <div>
            <Header subtitle="Contact" />
            <NavBar logoVisible={true} actual="contact" />
        </div>
    );
}

export default Contact;