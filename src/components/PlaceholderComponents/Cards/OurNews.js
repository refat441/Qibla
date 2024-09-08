import React from 'react';

const OurNews = () => {
    return (
        <div className='mx-[100px]'>
            <div className=' pt-[35px]'>
                <p className='text-[14px] Gothic-A1-bold'>Our News</p>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>Popular Blog & News</h1>
                <p className='text-[16px] Gothic-A1-thin mt-8'>Our curated content will ensure you're well-prepared and inspired every step of the way</p>
            </div>

            <div>
            <div class="grid grid-cols-3 gap-7 mt-10 text-left">
                <div className='h-[348px]'>
                    <div className='h-[212px] rounded-lg bg-[#BDBDBD]'></div>
                    <h3 className='scheherazade-thin text-[28px] mt-4'>Top 5 Packing Hacks for Your Hajj</h3>
                    <p className='Gothic-A1-thin text-[14px]'>March 22, 2024 No Comments</p>
                    <p className='Gothic-A1-thin mt-4'>Smart packing strategies, learn how to pack efficiently without compromising on comfort..</p>
                </div>

                <div className=' h-[348px]'>
                    <div className='h-[212px] rounded-lg bg-[#BDBDBD]'></div>
                    <h3 className='scheherazade-thin text-[28px] mt-4'>Top 5 Packing Hacks for Your Hajj</h3>
                    <p className='Gothic-A1-thin text-[14px]'>March 22, 2024 No Comments</p>
                    <p className='Gothic-A1-thin mt-4'>Smart packing strategies, learn how to pack efficiently without compromising on comfort..</p>
                </div>

                <div className=' h-[348px]'>
                    <div className='h-[212px] rounded-lg bg-[#BDBDBD]'></div>
                    <h3 className='scheherazade-thin text-[28px] mt-4'>Top 5 Packing Hacks for Your Hajj</h3>
                    <p className='Gothic-A1-thin text-[14px]'>March 22, 2024 No Comments</p>
                    <p className='Gothic-A1-thin mt-4'>Smart packing strategies, learn how to pack efficiently without compromising on comfort..</p>
                </div>

            </div>
            </div>

        </div>
    );
};

export default OurNews;