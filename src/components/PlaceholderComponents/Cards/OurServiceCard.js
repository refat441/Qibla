import React from 'react';
import GetStartButton from '../Buttons/GetStartButton';

const OurServiceCard = () => {
    return (
        <div className='mt-20 mx-6 md:mx-12 lg:mx-[100px] h-auto lg:h-[652px] relative'>
            <div className='flex flex-col lg:flex-row justify-center items-start '>
                <div className='w-full lg:w-1/2 text-left lg:mr-[37px] mt-8 lg:mt-16'>
                    <div className='flex items-center'>
                        <img className='w-5 h-5 ' src="/img/main-icon.svg" alt="Logo" />
                        <p className='text-[14px] Gothic-A1-bold ml-2 mt-1'>Our services</p>
                    </div>
                    <h1 className='text-[32px] md:text-[48px] lg:text-[64px] scheherazade-thin leading-[36px] md:leading-[48px] lg:leading-[56px] mt-4'>
                        Tailored to Elevate Your
                    </h1>
                    <p className='text-[14px] md:text-[16px] Gothic-A1-thin mt-4 md:mt-8'>
                        From Luxurious accommodations to expert guidance through sacred rituals, we're dedicated to crafting unforgettable journeys that resonate with the essence of your faith. Explore our offerings and embark on a pilgrimage that transcends expectations.
                    </p>
                    <GetStartButton></GetStartButton>
                </div>

                <div className='w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[485px] mt-8 lg:mt-0'>
                    <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="Service" />
                </div>
            </div>

            <div className='lg:mr-16 h-auto lg:h-[256px] absolute lg:bottom-0 left-0 w-full lg:w-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 lg:mt-0">
                    <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E5E5', }} className='rounded-xl p-6'>
                        <div className='flex justify-between mb-6'>
                            <p className='Gothic-A1-700 my-2'>Best Hotels</p>
                            <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded'>
                                <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                            </div>
                        </div>
                        <p className='Gothic-A1-thin text-left mb-6'>
                            Experience world-class amenities, breathtaking views, and impeccable service, ensuring that your stay is nothing short of extraordinary.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E5E5', }} className='rounded-xl p-6'>
                        <div className='flex justify-between mb-6'>
                            <p className='Gothic-A1-700 my-2'>Best Hotels</p>
                            <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded'>
                                <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                            </div>
                        </div>
                        <p className='Gothic-A1-thin text-left mb-6'>
                            Experience world-class amenities, breathtaking views, and impeccable service, ensuring that your stay is nothing short of extraordinary.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E5E5', }} className='rounded-xl p-6'>
                        <div className='flex justify-between mb-6'>
                            <p className='Gothic-A1-700 my-2'>Best Hotels</p>
                            <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded'>
                                <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                            </div>
                        </div>
                        <p className='Gothic-A1-thin text-left mb-6'>
                            Experience world-class amenities, breathtaking views, and impeccable service, ensuring that your stay is nothing short of extraordinary.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E5E5', }} className='rounded-xl p-6'>
                        <div className='flex justify-between mb-6'>
                            <p className='Gothic-A1-700 my-2'>Best Hotels</p>
                            <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded'>
                                <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                            </div>
                        </div>
                        <p className='Gothic-A1-thin text-left mb-6'>
                            Experience world-class amenities, breathtaking views, and impeccable service, ensuring that your stay is nothing short of extraordinary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceCard;
