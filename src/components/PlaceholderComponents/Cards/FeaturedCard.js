import React from 'react';

const FeaturedCard = () => {
    return (
        <div className=' mx-[100px] mt-20 h-[501px]'>
            <div className='h-[133px]'>
                <p className='text-[14px] Gothic-A1-bold'>Featured</p>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>Services for Hajj and Umrah Travel </h1>
                <p className='text-[16px] Gothic-A1-thin mt-8'>Our dedicated section offers three distinct offerings to ensure a seamless and spiritually fulfilling experience</p>
            </div>

            <div className='mt-10 '>
                <div className="grid grid-cols-3 gap-8">
                    <div className='w-[392px] h-[328px] rounded-lg'   style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                        <div className='text-white mx-11 mt-[147px]'>
                            <h2 className='scheherazade-thin text-[40px]'>ISLAMIC TOURS</h2>
                            <p className='Gothic-A1-400 mt-3'>Rich cultural and religious heritage of Islamic history with our meticulously curated tours</p>
                        </div>
                    </div>

                    <div className='w-[392px] h-[328px] rounded-lg'   style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                        <div className='text-white mx-11 mt-[147px]'>
                            <h2 className='scheherazade-thin text-[40px]'>HAJJ & UMRAH</h2>
                            <p className='Gothic-A1-400 mt-3'>Specializing in facilitating the logistics and arrangements necessary for the rites of Hajj and Umrah</p>
                        </div>
                    </div>

                    <div className='w-[392px] h-[328px] rounded-lg'   style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                        <div className='text-white mx-11 mt-[147px]'>
                            <h2 className='scheherazade-thin text-[38px]'>CUSTOMIZE TOUR</h2>
                            <p className='Gothic-A1-400 mt-3'> Experience to your unique preferences and requirements with our customizable tour packages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FeaturedCard;