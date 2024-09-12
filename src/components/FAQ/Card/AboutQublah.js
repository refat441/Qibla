import React from 'react';

const AboutQablahCard = () => {
    return (
        <div className='flex flex-col lg:flex-row h-auto lg:h-[390px] mb-10 items-center justify-center mx-4 lg:mx-[100px] mt-10 lg:mt-20'>
            {/* Image Section */}
            <div className='w-full lg:w-1/2 h-[250px] lg:h-full overflow-hidden mb-4 lg:mb-0' style={{ borderRadius: '10px 0 0 10px' }}>
                <img className='h-full w-full object-cover' src="/img/1357168.png" alt="About Qablah" />
            </div>

            {/* Text Section */}
            <div className='w-full lg:w-1/2 h-auto lg:h-full p-4 lg:p-8 bg-white flex flex-col justify-center'>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Icon" />
                        <p className='text-[12px] lg:text-[14px] font-bold pl-2 goldenText'>About Qablah</p>
                    </div>
                    <h1 className='text-[20px] sm:text-[24px] lg:text-[32px] font-light leading-[24px] sm:leading-[28px] lg:leading-[36px] mt-4 text-left scheherazade-thin'>
                    Requirements and Documentation Hajj & Umrah
                    </h1>
                </div>
                <p className='text-[12px] sm:text-[14px] lg:text-[16px] mt-4 text-left Gothic-A1-thin'>
                    With a dedicated focus on halal-certified services, prayer facilities, and accommodation arrangements that respect modesty and privacy. Our team of experienced professionals is committed to delivering seamless travel experiences, offering personalized assistance every step of the way.
                    <br />
                    Welcome to a world of quality travel, tailored for everyone who seeks the harmony of faith and wanderlust.
                </p>
                {/* Add GetStartButton or other components as needed */}
            </div>
        </div>
    );
};

export default AboutQablahCard;
