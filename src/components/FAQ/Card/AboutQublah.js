import React from 'react';

const AboutQablahCard = () => {
    return (
        <div className='flex flex-col md:flex-row h-[390px] mb-10 items-center justify-center mx-4 md:mx-[100px] mt-10 md:mt-20'>
            {/* Image Section */}
            <div className='w-full md:w-1/2 h-full overflow-hidden mb-4 md:mb-0' style={{ borderRadius: '10px 0 0 10px' }}>
                <img className='h-full w-full object-cover' src="/img/1357168.png" alt="About Qablah" />
            </div>

            {/* Text Section */}
            <div className='w-full md:w-1/2 h-full p-4 md:p-8 bg-white flex flex-col justify-center'>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Icon" />
                        <p className='text-[12px] md:text-[14px] Gothic-A1-bold pl-2 mt-1'>About Qablah</p>
                    </div>
                    <h1 className='text-[24px] md:text-[32px] scheherazade-thin leading-[28px] md:leading-[36px] mt-4 text-left'>
                        We Make the Best Quality Travel Muslim for Everyone
                    </h1>
                </div>
                <p className='text-[12px] md:text-[14px] Gothic-A1-thin mt-4 text-left'>
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
