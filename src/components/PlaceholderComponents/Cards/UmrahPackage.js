import React from 'react';
import './UmraPackage.css';

const UmrahPackage = () => {
    return (
        <div className='mx-4 sm:mx-6 md:mx-[50px] lg:mx-[100px] mt-8 sm:mt-12 md:mt-20 lg:mt-28'>
            <div className='bgimgs rounded-lg'>
                <div className="flex flex-col lg:flex-row">
                    {/* Left Section */}
                    <div className='w-full lg:w-7/12 px-4 sm:px-8 md:px-12 my-6 md:my-12'>
                        <div className='overflow-hidden flex items-center'>
                            <img className='w-5 h-5 object-cover' src="/img/Main-logo-white.svg" alt="Icon" />
                            <p className='text-[12px] sm:text-[14px] Gothic-A1-900 pl-2 mt-1 text-white'>Umrah package</p>
                        </div>
                        <div className='text-white text-left'>
                            <h1 className='scheherazade-thin text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] mt-4'>
                                Join Dome Tours for an Unforgettable Hajj and Umrah
                            </h1>
                            <p className='mt-4 text-sm sm:text-base'>
                                Join us and experience the difference firsthand.
                            </p>
                        </div>
                        <button className="w-[110px] md:w-[131px] mt-5 h-[35px] md:h-[40px] rounded bg-white hover:bg-black hover:text-white Gothic-A1-700 float-start">
                            Book Now &nbsp; {'>'}
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className='w-full lg:w-3/12 bg-[#828282] h-[180px] sm:h-[250px] md:h-[300px] lg:h-[457px] lg:-mt-16'></div>
                    <div className='w-full lg:w-2/12'></div>
                </div>
            </div>
        </div>
    );
};

export default UmrahPackage;
