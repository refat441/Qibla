import React from 'react';
import HeaderHomePage from './HeaderHomePage';
import AboutQablahCard from '../PlaceholderComponents/Cards/AboutQablahCard';
import OurServiceCard from '../PlaceholderComponents/Cards/OurServiceCard';
import FeaturedCard from '../PlaceholderComponents/Cards/FeaturedCard';
import TravelPackagCard from '../PlaceholderComponents/Cards/TravelPackagCard';
import BestPackageCard from '../PlaceholderComponents/Cards/BestPackageCard';
import QablahJamaah from '../PlaceholderComponents/Cards/QablahJamaah';
import GalleryQabla from '../PlaceholderComponents/Cards/GalleryQabla';
import OurNews from '../PlaceholderComponents/Cards/OurNews';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import Footer from '../PlaceholderComponents/Cards/Footer';


const HomePage = () => {
    return (
        <div>
            <HeaderHomePage></HeaderHomePage>
            <AboutQablahCard></AboutQablahCard>
            <OurServiceCard></OurServiceCard>
            <FeaturedCard></FeaturedCard>
            <TravelPackagCard></TravelPackagCard>
            <BestPackageCard></BestPackageCard>
            <QablahJamaah></QablahJamaah>
            <GalleryQabla></GalleryQabla>
            <OurNews></OurNews>
            <UmrahPackage></UmrahPackage>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;