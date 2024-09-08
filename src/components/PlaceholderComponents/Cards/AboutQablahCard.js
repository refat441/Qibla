import React from 'react';
import GetStartButton from '../Buttons/GetStartButton';

const AboutQablahCard = () => {
    return (
        <div className='flex justify-center items-center h-[560px] mx-[100px] mt-20'>
            <div className='w-1/2 h-[560px] overflow-hidden '>
                <img className='h-full w-full object-cover ' src="/img/1357168.png" alt=""  />
            </div>

            <div className='w-1/2 h-[560px] text-left p-8 shadow-md'>
                <div className='overflow-hidden flex'>
                    <img className='w-5 h-5  object-cover' src="/img/main-icon.svg" alt="Centered icon" />
                    <p className='text-[14px] Gothic-A1-bold pl-2 mt-1'>About qablah</p>
                </div>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>We Make best Quality Travel Muslim For Everyone</h1>
                <p className='text-[16px] Gothic-A1-thin mt-8'>With a dedicated focus on halal-certified services, prayer facilities, and accommodation arrangements that respect modesty and privacy. Our team of experienced professionals is committed to delivering seamless travel experiences, offering personalized assistance every step of the way. <br /> Welcome to a world of quality travel, tailored for everyone who seeks the harmony of faith and wanderlust.</p>
                <GetStartButton></GetStartButton>
            </div>

        </div>
    );
};

export default AboutQablahCard;