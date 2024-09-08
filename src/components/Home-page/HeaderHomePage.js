import React from 'react';
import './HeaderHomePage.css'
import GetStartButton from '../PlaceholderComponents/Buttons/GetStartButton';
import AboutQablahCard from '../PlaceholderComponents/Cards/AboutQablahCard';
import OurServiceCard from '../PlaceholderComponents/Cards/OurServiceCard';
import FeaturedCard from '../PlaceholderComponents/Cards/FeaturedCard';
import TravelPackagCard from '../PlaceholderComponents/Cards/TravelPackagCard';
import BestPackag from '../PlaceholderComponents/Cards/BestPackageCard';
import BestPackageCard from '../PlaceholderComponents/Cards/BestPackageCard';
import GalleryQabla from '../PlaceholderComponents/Cards/GalleryQabla';
import QablahJamaah from '../PlaceholderComponents/Cards/QablahJamaah';
import OurNews from '../PlaceholderComponents/Cards/OurNews';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import Footer from '../PlaceholderComponents/Cards/Footer';
import AboutFeaturedCard from '../AboutPage/Card/AboutFeaturedCard';

const HeaderHomePage = () => {
    return (
        <div>
            <div className='WelcomeSectionGradient '>
            <div className='flex items-center justify-center text-white'>
                <div className='mt-20 w-2/5 text-center'>
                    <p className='text-sm'>WELCOME TO QABLA </p>
                    <p className='text-5xl mt-3'>Plan Your Umrah And <br /> Hajj Your Way</p>
                    <p className='mt-6'>Reflections on the significance of each ritual, immerse yourself in the rchness of this spiritual endeavor and shape it to align perfectly with your intentions and aspirations.</p>
                    <GetStartButton></GetStartButton>
                </div>
            </div>
        
            <div class="flex mb-4 mx-16 mt-14">
                <div class="w-1/3 bg-gray-400 h-38 text-left m-4 p-4 rounded-lg WelcomeSectionCardGradient ">
                <p className='gloden-textColour text-2xl'>20+ Years</p>
                <p className='font-medium text-white my-1.5'>Years of Trusted Service</p>
                <p className='font-thin text-white'>With over 20 years of experience in facilitating Hajj and Umrah pilgrimages</p>
                </div>

                <div class="w-1/3 bg-gray-400 h-38 text-left m-4 p-4 rounded-lg WelcomeSectionCardGradient ">
                <p className='gloden-textColour text-2xl'>10,000+ Jamaah</p>
                <p className='font-medium text-white my-1.5'>Total Registered Hajj & Umrah</p>
                <p className='font-thin text-white'>Have entrusted Dome Tours for their sacred journey experiencing of service</p>
                </div>

                <div class="w-1/3 bg-gray-400 h-38 text-left m-4 p-4 rounded-lg WelcomeSectionCardGradient ">
                <p className='gloden-textColour text-2xl'>99% Satisfied Jamaah</p>
                <p className='font-medium text-white my-1.5'>Satisfied Customer Use Our Service</p>
                <p className='font-thin text-white'>Luxurious accommodations to expert guidance ensures that your spiritual journey</p>
                </div>
            </div>
            </div>
            
            {/* About Qablah */}
            <AboutQablahCard></AboutQablahCard>

            {/* Our Service */}
            <OurServiceCard></OurServiceCard>

            {/* Featured */}
            <FeaturedCard></FeaturedCard>

            {/* TravelPackagCard */}
            <TravelPackagCard></TravelPackagCard>

            {/* BestPackag */}
            <BestPackageCard></BestPackageCard>

            {/* QablahJamaah */}
            <QablahJamaah></QablahJamaah>
            
            {/* GalleryQabla */}
            <GalleryQabla></GalleryQabla>

            {/* OurNews */}
            <OurNews></OurNews>

            {/* UmrahPackage  */}
            <UmrahPackage></UmrahPackage>

            {/* footer */}
            <Footer></Footer>

            {/* AboutFeaturedCard  */}
            <AboutFeaturedCard></AboutFeaturedCard>
        </div>
    );
};

export default HeaderHomePage;
