import React from 'react';
import ContactHader from './Card/ContactHader';
import GetInTouch from './Card/GetInTouch';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import Footer from '../PlaceholderComponents/Cards/Footer';

const Contact = () => {
    return (
        <div>
            {/* Header */}
            <ContactHader></ContactHader>

            {/* GetInTouch */}
            <GetInTouch></GetInTouch>

            {/* UmrahPackage */}
            <UmrahPackage></UmrahPackage>

            {/* footer */}
            <div className='mt-16'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;