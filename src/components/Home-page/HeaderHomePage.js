import React from 'react';
import './HeaderHomePage.css';
import GetStartButton from '../PlaceholderComponents/Buttons/GetStartButton';

const HeaderHomePage = () => {
    return (
        <div className='overflow-hidden'>
            <div className='WelcomeSectionGradient relative pb-20'>
                {/* Centered Content */}
                <div className='flex items-center justify-center text-white'>
                    <div className='mt-20 text-center'>
                        <div className='flex items-center justify-center'>
                            {/* Responsive Image and Text */}
                            <img className='w-6 h-6 sm:w-8 sm:h-8 object-cover' src="/img/Main-logo-white.svg" alt="Icon" />
                            <p className='text-xs sm:text-sm lg:text-base font-bold pl-2 text-white Gothic-A1-900'>Welcome To qablah</p>
                        </div>
                        {/* Responsive Headline Text */}
                        <p className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-3 scheherazade-thin'>
                            Plan Your Umrah And <br /> Hajj Your Way
                        </p>
                        <p className='mt-6 text-sm sm:text-base lg:text-lg Gothic-A1-400'>
                            Reflections on the significance of each ritual, immerse yourself in the richness of this spiritual <br /> 
                            endeavor and shape it to align perfectly with your intentions and aspirations.
                        </p>
                        <GetStartButton />
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="flex flex-col md:flex-row mb-4 mx-4 md:mx-16 mt-14">
                    <div className="w-full md:w-1/3 bg-gray-400 text-left m-4 p-4 rounded-lg WelcomeSectionCardGradient">
                        <p className='gloden-textColour text-xl sm:text-2xl lg:text-3xl scheherazade-thin-normal'>20+ Years</p>
                        <p className='font-medium text-white mt-2 mb-4 text-sm lg:text-base Gothic-A1-700'>Years of Trusted Service</p>
                        <p className='font-thin text-white text-xs sm:text-sm Gothic-A1-400'>
                            With over 20 years of experience in facilitating Hajj and Umrah pilgrimages
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 bg-gray-400 text-left m-4 p-4 rounded-lg WelcomeSectionCardGradient">
                        <p className='gloden-textColour text-xl sm:text-2xl lg:text-3xl scheherazade-thin-normal'>10,000+ Jamaah</p>
                        <p className='font-medium text-white mt-2 mb-4 text-sm lg:text-base Gothic-A1-700'>Total Registered Hajj & Umrah</p>
                        <p className='font-thin text-white text-xs sm:text-sm Gothic-A1-400'>
                            Have entrusted Dome Tours for their sacred journey
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 bg-gray-400 text-left m-4 p-4 rounded-lg WelcomeSectionCardGradient">
                        <p className='gloden-textColour text-xl sm:text-2xl lg:text-3xl scheherazade-thin-normal'>99% Satisfied Jamaah</p>
                        <p className='font-medium text-white mt-2 mb-4 text-sm lg:text-base Gothic-A1-700'>Satisfied Customers</p>
                        <p className='font-thin text-white text-xs sm:text-sm Gothic-A1-400'>
                            Luxurious accommodations and expert guidance ensure that your spiritual journey is comfortable.
                        </p>
                    </div>
                </div>

                {/* SVG Decoration */}
                <div className="absolute bottom-0 w-full overflow-hidden leading-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="50" viewBox="0 0 1440 50" fill="none">
                        <path
                            d="M471.273 28.8076C275.528 7.91076 75.5306 20.1006 0 28.8076V50H1440V3.91864C1410.96 0.961541 1327.47 -3.17839 1225.79 3.91864C1098.68 12.7899 715.954 54.9286 471.273 28.8076Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HeaderHomePage;
