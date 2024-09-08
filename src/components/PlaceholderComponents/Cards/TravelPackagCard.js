import React from 'react';
import LearnMoreBTN from '../Buttons/LearnMoreBTN';

const TravelPackagCard = () => {
    return (
        <div className='mt-20 h-[520px]'  style={{ background: 'linear-gradient(to right,   white, #c6c0c0, #beb7b7, #b2abab '}}>
            <div className='mx-[100px] w-[500px] text-left pt-[35px]'>
                <p className='text-[14px] Gothic-A1-bold'>Travel  Package</p>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>Customize Your Own Umrah Package </h1>
                <p className='text-[16px] Gothic-A1-thin mt-8'>Customize every aspect of your journey, from accommodation preferences to excursion choices, to create a personalized itinerary that resonates with your faith and preferences. <br /> <br />

                With our easy-to-use platform and expert guidance, embark on a transformative journey that reflects your unique spiritual aspirations. Start crafting your dream Umrah experience today.</p>
                <LearnMoreBTN></LearnMoreBTN>
            </div>
        </div>
    );
};

export default TravelPackagCard;