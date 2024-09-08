import React from 'react';
import About from './Card/About';
import AboutQablahCard from '../PlaceholderComponents/Cards/AboutQablahCard';
import AboutFeaturedCard from './Card/AboutFeaturedCard';
import OurServiceCard from '../PlaceholderComponents/Cards/OurServiceCard';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import Footer from '../PlaceholderComponents/Cards/Footer';


const AboutPage = () => {
    return (
        <div>
                {/* About */}
                <About></About>

                {/* AboutQablahC */}
                <AboutQablahCard></AboutQablahCard>

                {/* Featured */}
                <AboutFeaturedCard></AboutFeaturedCard>

                {/* OurService */}
                <OurServiceCard></OurServiceCard>

                {/* UmrahPackage */}
                <UmrahPackage></UmrahPackage>

                {/* footer */}
                <Footer></Footer>
        </div>
    );
};

export default AboutPage;