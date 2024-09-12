import React from 'react';
import FaqHader from './Card/FaqHader';
import AboutQublah from './Card/AboutQublah';
import EssentialGuidePrice from '../Pricing/Card/EssentialGuidePrice';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import LogisticalFAQ from './Card/LogisticalFAQ';
import Footer from '../PlaceholderComponents/Cards/Footer';

const FAQ = () => {
    return (
        <div>
            {/* FaqHeader */}
            <FaqHader></FaqHader>

            {/* AboutQablah */}
            <AboutQublah></AboutQublah>

            {/* EssentialGuide */}
            <EssentialGuidePrice></EssentialGuidePrice>

            {/* UmrahPackage */}
            <div className='mt-[475px]'>
                <UmrahPackage></UmrahPackage>
            </div>
            
            {/* LogisticalFAQ */}
            <LogisticalFAQ></LogisticalFAQ>

            {/* footer */}
            <div className='mt-15'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default FAQ;