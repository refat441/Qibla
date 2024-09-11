import React from 'react';

const ContactHader = () => {
    return (
        <div className='overflow-hidden'>
            <div style={{ backgroundColor: '#605f5f', position: 'relative' }} className='-mb-[0.7px]'>
                <div className='pt-[80px] md:pt-[121px] text-center px-4 md:px-0'>
                    <p className='Gothic-A1-bold text-white text-[18px] md:text-[24px]'>Contact Us</p>
                    <h1 className='text-[32px] sm:text-[48px] md:text-[64px] scheherazade-thin leading-[36px] sm:leading-[48px] md:leading-[56px] mt-4 text-white'>
                        Let’s Connect with Our Travel Experts
                    </h1>
                    <div className='overflow-hidden flex items-center justify-center mt-4 md:mt-6'>
                        <img className='w-4 h-4 sm:w-5 sm:h-5 object-cover' src="/img/main-icon.svg" alt="Centered icon" />
                    </div>
                    <p className='Gothic-A1-700 text-gray-400 mt-4 md:mt-6 pb-[80px] md:pb-[120px]'>
                        Home &nbsp; &nbsp; {'>'} &nbsp; &nbsp; <span className='text-white'>Contact Us</span>
                    </p>
                </div>

                {/* Wavy Bottom Border */}
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 80"
                        fill="none"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    >
                        <path
                            d="M594.369 64C399.823 23.5717 75.5306 32.1609 0 46.0921V80H1440V6.26982C1410.96 1.53847 1327.47 -5.08543 1225.79 6.26982C1098.68 20.4639 851.818 117.5 594.369 64Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ContactHader;
