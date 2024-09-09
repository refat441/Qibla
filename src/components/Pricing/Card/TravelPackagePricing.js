import React from 'react';
import LearnMoreBTN from '../../PlaceholderComponents/Buttons/LearnMoreBTN';

const TravelPackagePricing = () => {
    return (
        <div>
            <div className='mt-20'>
                <div className='overflow-hidden'>
                    {/* Top section with SVG */}
                    <div className="relative -mt-2 h-[580px] bg-gradient-to-r from-white via-[#c6c0c0] to-[#b2abab]">
                        {/* Top SVG */}
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
                                zIndex: 1,
                            }}
                        >
                            <path
                                d="M471.273 21.7388C275.528 42.6356 75.5306 30.4458 0 21.7388V0.546387H1440V46.6278C1410.96 49.5848 1327.47 53.7248 1225.79 46.6278C1098.68 37.7565 715.954 -4.38218 471.273 21.7388Z"
                                fill="white"
                            />
                        </svg>

                        {/* Content Section */}
                        <div className="relative mx-[100px] w-[500px] text-left pt-20 z-10">
                            <p className="text-[14px] Gothic-A1-bold">Travel Package</p>
                            <h1 className="text-[64px] scheherazade-thin leading-[56px] mt-4">
                                Customize Your Own Umrah Package
                            </h1>
                            <p className="text-[16px] Gothic-A1-thin mt-8">
                                Customize every aspect of your journey, from accommodation preferences to excursion choices, to create a personalized itinerary that resonates with your faith and preferences. <br /> <br />
                                With our easy-to-use platform and expert guidance, embark on a transformative journey that reflects your unique spiritual aspirations. Start crafting your dream Umrah experience today.
                            </p>
                            <LearnMoreBTN />
                        </div>

                        {/* Bottom SVG */}
                        <div className="absolute bottom-[-2px] left-0 right-0 w-full overflow-hidden leading-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1434 51"
                                fill="none"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            >
                                <path
                                    d="M968.727 29.354C1164.47 8.45715 1364.47 20.647 1440 29.354V50.5464H0V4.46502C29.038 1.50793 112.534 -2.632 214.215 4.46502C341.316 13.3363 724.046 55.475 968.727 29.354Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPackagePricing;