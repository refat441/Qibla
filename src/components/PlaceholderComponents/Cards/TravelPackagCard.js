import React from 'react';
import LearnMoreBTN from '../Buttons/LearnMoreBTN';

const TravelPackagCard = () => {
    return (
        <div className='overflow-hidden'>
            <div className="relative -mt-2 h-auto lg:h-[520px] bg-gradient-to-r from-white via-[#c6c0c0] to-[#b2abab]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1434 51"
                    fill="none"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 'auto',
                        zIndex: 1
                    }}
                >
                    <path
                        d="M471.273 21.7388C275.528 42.6356 75.5306 30.4458 0 21.7388V0.546387H1440V46.6278C1410.96 49.5848 1327.47 53.7248 1225.79 46.6278C1098.68 37.7565 715.954 -4.38218 471.273 21.7388Z"
                        fill="white"
                    />
                </svg>

                <div className="relative mx-4 md:mx-12 lg:mx-[100px] w-full lg:w-[500px] text-left pt-10 md:pt-16 lg:pt-20 z-10">
                    <div className='flex'>
                        <img className='w-5 h-5 ' src="/img/main-icon.svg" alt="Logo" />
                        <p className='text-[12px] md:text-[14px] Gothic-A1-bold ml-2 mt-1'>Travel Package</p>
                    </div>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[64px] scheherazade-thin leading-[36px] md:leading-[48px] lg:leading-[56px] mt-4">
                        Customize Your Own Umrah Package
                    </h1>
                    <p className="text-[14px] md:text-[16px] Gothic-A1-thin mt-4 md:mt-6 lg:mt-8">
                        Customize every aspect of your journey, from accommodation preferences to excursion choices, to create a personalized itinerary that resonates with your faith and preferences. <br /> <br />
                        With our easy-to-use platform and expert guidance, embark on a transformative journey that reflects your unique spiritual aspirations. Start crafting your dream Umrah experience today.
                    </p>
                    <div className='mt-4'>
                        <LearnMoreBTN />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPackagCard;
