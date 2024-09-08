import React from 'react';

const PackageHeader = () => {
    return (
        <div  style={{ backgroundColor: '#605f5f' }}>
            <div className='pt-[121px]'>
                <p className='Gothic-A1-bold'>PACKAGE</p>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4 text-white'>Explore Our Hajj & Umrah Package</h1>
                <div className='overflow-hidden flex items-center justify-center mt-6 '>
                    <img className='w-5 h-5  object-cover' src="/img/main-icon.svg" alt="Centered icon" />
                </div>
                <p className='Gothic-A1-700 text-gray-400 mt-6 pb-[120px]'> Home &nbsp; &nbsp; {'>'} &nbsp; &nbsp; <span className='text-white'>Package</span> </p>
            </div>
        </div>
    );
};

export default PackageHeader;