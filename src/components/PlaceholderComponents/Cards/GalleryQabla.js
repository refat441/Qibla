import React from 'react';

const GalleryQabla = () => {
    return (
        <div className='mx-[100px]'>
            <div className=' pt-[35px]'>
                <p className='text-[14px] Gothic-A1-bold'>Gallery qabla</p>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>Throught Our Lens Photo & Video collection</h1>
                <p className='text-[16px] Gothic-A1-thin mt-8'>Take a glimpse into the sacred rituals, historical landmarks, and moments of reflection that</p>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-9 grid-rows-3 gap-8 mt-10 h-[768px]">
                <div className="col-span-4">
                    <div className='h-[680px] '>
                        <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="" />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className='h-[432px] '>
                        <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="" />
                    </div>
                    <div className='h-[216px] mt-8'>
                        <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="" />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className='h-[200px] '>
                        <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="" />
                    </div>
                    <div className='h-[200px] mt-8'>
                        <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="" />
                    </div>
                    <div className='h-[216px] mt-8'>
                        <img className='h-full w-full object-cover rounded-lg' src="/img/1357168.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryQabla;