import React from 'react';

const AboutFeaturedCard = () => {
    return (
        <div>
            {/* <div className=' mt-20 h-[506px]'>
                <div className="flex">
                    
                    <div className="flex-none w-2/6 flex items-center justify-center text-white" style={{ backgroundColor: '#D19B56' }}>
                        <div className="flex items-center">
                            <img className='w-5 h-5' src="/img/Main-logo-white.svg" alt="Logo" />
                            <p className='text-[14px] Gothic-A1-900 pl-2'>About qablah</p>
                        </div> 
                        <div> 
                        </div>
                        
                    </div>



                    <div className="flex-none w-4/6 h-14 ..." style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                        
                    </div>
                </div>

            </div>    */}
            <div className='flex h-[506px] mt-[108px]'>
                <div className='w-3/9 pt-20'  style={{ backgroundColor: '#D19B56' }}>
                    <div className='mx-12'>
                        <div className='flex justify-center items-center text-white mb-4'>
                            <img className='w-5 h-5 ' src="/img/Main-logo-white.svg" alt="Logo" />
                            <p className='text-[14px] Gothic-A1-900 pl-2'>About qablah</p>
                        </div>
                        <h1 className='scheherazade-thin text-[64px] text-white'>Services for Hajj and Umrah Travel</h1>
                        <p className='Gothic-A1-thin mt-4'>Our dedicated section offers three distinct offerings to ensure a seamless and spiritually fulfilling experience</p>
                    </div>
                </div>

                <div className='w-2/9' style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                    <div className='mt-[324px] mx-6'>
                        <h2 className='scheherazade-thin text-[40px] text-white'>ISLAMIC TOURS</h2>
                        <p className='Gothic-A1-thin mt-3'>Rich cultural and religious heritage of Islamic history with our meticulously curated tours</p>
                    </div>
                </div>
                
                <div className='w-2/9' style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                    <div className='mt-[324px] mx-6'>
                        <h2 className='scheherazade-thin text-[40px] text-white'>ISLAMIC TOURS</h2>
                        <p className='Gothic-A1-thin mt-3'>Rich cultural and religious heritage of Islamic history with our meticulously curated tours</p>
                    </div>
                </div>
                
                <div className='w-2/9' style={{ background: 'linear-gradient(to top,  #111111, #A9A9A9'}}>
                    <div className='mt-[324px] mx-6'>
                        <h2 className='scheherazade-thin text-[40px] text-white'>ISLAMIC TOURS</h2>
                        <p className='Gothic-A1-thin mt-3'>Rich cultural and religious heritage of Islamic history with our meticulously curated tours</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeaturedCard;