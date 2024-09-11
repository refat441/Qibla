import React, { useState } from 'react';

const EssentialGuidePrice = () => {
    // State to manage which FAQ is open for both sections
    const [openFAQ, setOpenFAQ] = useState(null);
    const [openBillingFAQ, setOpenBillingFAQ] = useState(null);

    // Function to toggle FAQ for the first section
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    // Function to toggle FAQ for the second section
    const toggleBillingFAQ = (index) => {
        setOpenBillingFAQ(openBillingFAQ === index ? null : index);
    };

    return (
        <div className='relative'>

            <div className='overflow-hidden'>
                <div className="relative -mt-2 h-[250px] md:h-[350px] lg:h-[417px] bg-[#605f5f]">
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
                        <path d="M968.727 21.1924C1164.47 42.0892 1364.47 29.8994 1440 21.1924V0H0V46.0814C29.038 49.0385 112.534 53.1784 214.215 46.0814C341.316 37.2101 724.046 -4.92857 968.727 21.1924Z" fill="#FAFAFA"/>
                    </svg>
                    <div className="relative mx-4 sm:mx-8 md:mx-[60px] lg:mx-[100px] pt-16 md:pt-28 z-10">
                        <div className='flex justify-center items-center text-white mb-4'>
                            <img className='w-5 h-5' src="/img/Main-logo-white.svg" alt="Logo" />
                            <p className='text-[12px] md:text-[14px] Gothic-A1-900 pl-2'>About qablah</p>
                        </div>
                        <h1 className='scheherazade-thin text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-white'>
                            Hajj and Umrah Travel FAQs
                        </h1>
                        <p className='Gothic-A1-400 text-[#d1d5db] mt-4'>
                            Hajj and Umrah travel, designed to provide you with all the essential information you need for your spiritual journey.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mx-4 sm:mx-8 md:mx-[60px] lg:mx-[100px] absolute -mt-16 md:-mt-20'>
                {/* Travel FAQ Section */}
                <div className='text-left w-full lg:w-1/2 bg-white rounded-lg px-4 sm:px-8 border-2 border-solid border-[#f1f5f9]'>
                    <h2 className='scheherazade-thin text-[30px] sm:text-[36px] md:text-[40px] pt-8'>Common FAQs</h2>
                    <p className='Gothic-A1-400'>
                        Booking procedures to travel essentials, visa requirements to safety tips, find the information you need in our curated list of FAQs. Simplify your travel planning process and embark on your next adventure.
                    </p>

                    {/* FAQ 1 */}
                    <div>
                        <h2
                            className='goldenText scheherazade-thin-normal text-[20px] md:text-[26px] pt-4 cursor-pointer flex justify-between'
                            onClick={() => toggleFAQ(1)}
                        >
                            What documents do I need for international travel
                            <span className={`transition-transform transform ${openFAQ === 1 ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </h2>
                        {openFAQ === 1 && (
                            <p className='Gothic-A1-thin'>
                                Learn about the essential documents required for international travel, including passports, visas, and any additional permits or certificates specific to your destination.
                            </p>
                        )}
                    </div>

                    {/* Other FAQs */}
                    {[2, 3, 4, 5].map((i) => (
                        <div key={i}>
                            <h2
                                className='scheherazade-thin-normal text-[20px] md:text-[26px] pt-4 cursor-pointer flex justify-between'
                                onClick={() => toggleFAQ(i)}
                            >
                                FAQ {i}
                                <span className={`transition-transform transform ${openFAQ === i ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </h2>
                            {openFAQ === i && (
                                <p className='Gothic-A1-thin'>
                                    FAQ {i} answer goes here.
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Billing FAQ Section */}
                <div className='text-left w-full lg:w-1/2 bg-white rounded-lg px-4 sm:px-8  border-2 border-solid border-[#f1f5f9]'>
                    <h2 className='scheherazade-thin text-[30px] sm:text-[36px] md:text-[40px] pt-8'>Billing FAQs</h2>
                    <p className='Gothic-A1-400'>
                        Navigate through our billing FAQ section to gain clarity on all matters related to payments and charges. Whether about billing cycles, payment methods, or understanding specific charges on your account.
                    </p>

                    {/* FAQ 1 */}
                    <div>
                        <h2
                            className='goldenText scheherazade-thin-normal text-[20px] md:text-[26px] pt-4 cursor-pointer flex justify-between'
                            onClick={() => toggleBillingFAQ(1)}
                        >
                            What payment methods do you accept?
                            <span className={`transition-transform transform ${openBillingFAQ === 1 ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </h2>
                        {openBillingFAQ === 1 && (
                            <p className='Gothic-A1-thin'>
                                Learn about the essential documents required for international travel, including passports, visas, and any additional permits or certificates specific to your destination.
                            </p>
                        )}
                    </div>

                    {/* Other Billing FAQs */}
                    {[2, 3, 4, 5].map((i) => (
                        <div key={i}>
                            <h2
                                className='scheherazade-thin-normal text-[20px] md:text-[26px] pt-4 cursor-pointer flex justify-between'
                                onClick={() => toggleBillingFAQ(i)}
                            >
                                Billing FAQ {i}
                                <span className={`transition-transform transform ${openBillingFAQ === i ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </h2>
                            {openBillingFAQ === i && (
                                <p className='Gothic-A1-thin'>
                                    Billing FAQ {i} answer goes here.
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EssentialGuidePrice;
