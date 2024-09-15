import React from 'react';
import './UmraPackage.css';
const UmrahPackage = () => {
    return (
        <div className='mx-[100px] mt-28 '>
            <div className='bgimgs rounded-lg'>
            <div class="flex flex-row ...">
                <div className='w-7/12 mx-16 my-12'>
                    <div className='overflow-hidden flex items-center'>
                        <img className='w-5 h-5 object-cover' src="/img/Main-logo-white.svg" alt="Icon" />
                        <p className='text-[14px] Gothic-A1-900 pl-2 mt-1 text-white'>Umrah package</p>
                    </div>
                    <div className='text-white text-left'>
                        <h1 className='scheherazade-thin text-[64px] mt-4'>Join Dome Tours for an Unforgettable Hajj and Umrah</h1>
                        <p className='mt-4'>Join us and experience the difference firsthand.</p>
                    </div>
                    <button className="w-[110px] md:w-[131px] mt-5 h-[35px] md:h-[40px] rounded bg-white  hover:bg-black hover:text-white Gothic-A1-700 font-bold float-start">
                        Book Now &nbsp; {'>'}
                    </button>
                </div>
                <div className='w-3/12 bg-[#828282] h-[457px] -mt-16 '></div>
                <div className='w-2/12'></div>
            </div>
            </div>
        </div>
    );
};

export default UmrahPackage;