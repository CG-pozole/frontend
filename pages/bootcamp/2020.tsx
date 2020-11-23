import Header from '@components/Header';
import NavBar from '@components/NavBar';
import * as React from 'react';


export interface BootCampProps {

}

const BootCamp: React.SFC<BootCampProps> = () => {
    return (
        <div>
            <Header subtitle="About us" />
            <NavBar logoVisible={true} actual="bootcamp" />
        </div>
    );
}

export default BootCamp;