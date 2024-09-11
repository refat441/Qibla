import React from 'react';


const AboutQablahCard = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center mx-4 md:mx-[100px] mt-10 md:mt-20'>
            {/* Image Section */}
            <div className='w-full md:w-1/2 h-[300px] md:h-[560px] overflow-hidden mb-4 md:mb-0'>
                <img className='h-full w-full object-cover' src="/img/1357168.png" alt="About Qablah" />
            </div>

            {/* Text Section */}
            <div className='w-full md:w-1/2 h-auto p-4 md:p-8 '>
                <div className='overflow-hidden flex items-center'>
                    <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Icon" />
                    <p className='text-[14px] Gothic-A1-bold pl-2 mt-1'>About Qablah</p>
                </div>
                <h1 className='text-[32px] md:text-[64px] scheherazade-thin leading-[36px] md:leading-[56px] mt-4 text-left'>
                    We Make the Best Quality Travel Muslim for Everyone
                </h1>
                <p className='text-[14px] md:text-[16px] Gothic-A1-thin mt-4 text-left'>
                    With a dedicated focus on halal-certified services, prayer facilities, and accommodation arrangements that respect modesty and privacy. Our team of experienced professionals is committed to delivering seamless travel experiences, offering personalized assistance every step of the way. <br />
                    Welcome to a world of quality travel, tailored for everyone who seeks the harmony of faith and wanderlust.
                </p>
            </div>
        </div>
    );
};

export default AboutQablahCard;
