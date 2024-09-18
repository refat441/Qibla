import React from 'react';

const FeaturedCard = () => {
    return (
        <div className='mx-4 md:mx-12 lg:mx-[100px] mt-10 lg:mt-20 mb-10 lg:mb-20 sm:mt-[960px]'>
            <div className='h-auto lg:md:text-center sm:text-left lg:md:items-center lg:md:justify-center'>
                <div className='flex items-center justify-center'>
                    <img className='w-5 h-5 ' src="/img/main-icon.svg" alt="Logo" />
                    <p className='text-[12px] md:text-[14px] Gothic-A1-bold ml-2 mt-1'>Featured</p>
                </div>
                <h1 className='text-[32px] md:text-[48px] lg:text-[64px] scheherazade-thin leading-[36px] md:leading-[48px] lg:leading-[56px] mt-4'>
                    Services for Hajj and Umrah Travel
                </h1>
                <p className='text-[14px] md:text-[16px] Gothic-A1-thin mt-4 lg:mt-8'>
                    Our dedicated section offers three distinct offerings to ensure a seamless and spiritually fulfilling experience.
                </p>
            </div>

            <div className='mt-8 lg:mt-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className='w-full h-[250px] md:h-[300px] lg:h-[328px] rounded-lg' style={{ background: 'linear-gradient(to top, #111111, #A9A9A9)' }}>
                        <div className='text-white mx-6 md:mx-8 lg:mx-11 mt-16 md:mt-[120px] lg:mt-[147px]'>
                            <h2 className='scheherazade-thin text-[24px] md:text-[30px] lg:text-[35px]'>ISLAMIC TOURS</h2>
                            <p className='Gothic-A1-400 mt-3 text-[12px] md:text-[14px]'>Rich cultural and religious heritage of Islamic history with our meticulously curated tours.</p>
                        </div>
                    </div>

                    <div className='w-full h-[250px] md:h-[300px] lg:h-[328px] rounded-lg' style={{ background: 'linear-gradient(to top, #111111, #A9A9A9)' }}>
                        <div className='text-white mx-6 md:mx-8 lg:mx-11 mt-16 md:mt-[120px] lg:mt-[147px]'>
                            <h2 className='scheherazade-thin text-[24px] md:text-[30px] lg:text-[35px]'>HAJJ & UMRAH</h2>
                            <p className='Gothic-A1-400 mt-3 text-[12px] md:text-[14px]'>Specializing in facilitating the logistics and arrangements necessary for the rites of Hajj and Umrah.</p>
                        </div>
                    </div>

                    <div className='w-full h-[250px] md:h-[300px] lg:h-[328px] rounded-lg' style={{ background: 'linear-gradient(to top, #111111, #A9A9A9)' }}>
                        <div className='text-white mx-6 md:mx-8 lg:mx-11 mt-16 md:mt-[120px] lg:mt-[147px]'>
                            <h2 className='scheherazade-thin text-[24px] md:text-[30px] lg:text-[35px]'>CUSTOMIZE TOUR</h2>
                            <p className='Gothic-A1-400 mt-3 text-[12px] md:text-[14px]'>Experience to your unique preferences and requirements with our customizable tour packages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;
