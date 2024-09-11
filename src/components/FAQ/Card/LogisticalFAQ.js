import React, { useState } from 'react';

const LogisticalFAQ = () => {
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
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mx-4 sm:mx-8 md:mx-[60px] lg:mx-[100px] absolute  mt-20'>
            {/* Travel FAQ Section */}
            <div className='text-left w-full lg:w-1/2 bg-white rounded-lg px-4 sm:px-8 border-2 border-solid border-[#f1f5f9] bg-slate-500'>
                

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
    );
};

export default LogisticalFAQ;