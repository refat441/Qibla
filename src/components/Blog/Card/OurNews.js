import React from 'react';

const OurNews = () => {
    return (
        <div className='mx-[100px]'>
            <div className='overflow-hidden flex items-center justify-center mt-6'>
                <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Centered icon" />
                <p className='Gothic-A1-900 text-[14px] goldenText pl-4'>OUR NEWS</p>
            </div>
            <div>
                <h1 className='scheherazade-thin text-[64px] mt-4'>Latest News and Updates</h1>
                <p className='Gothic-A1-thin mt-4'> Stay informed with of articles, announcements, and insights on all things related to travel, Umrah, and Hajj.</p>
            </div>

            <div className='mt-10' >
                <div class="grid grid-cols-2 gap-6">
                    <div className='text-left'>
                        <div className='bg-[#D19B56] h-[273px] px-6 py-4' style={{borderRadius:'10px 10px 0px 0px'}}>
                            <h1 className='scheherazade-thin text-[56px] text-white'>Cultural Diversity: Unity Amidst Diversity at Hajj</h1>
                            <p className='Gothic-A1-thin mt-4'>Nam sagittis fringilla dolor, vitae luctus massa fringilla eu. Nunc eu sapien posuere, ultrices nisi eu, luctus nisl. Fusce ac commodo mi. Etiam fermentum euismod risus at ultricies. Vestibulum eget.</p>

                            <button className=" mt-3 h-6  bg-[#D19B56] text-white Gothic-A1-700 font-bold">
                                Read More &nbsp; {'->'}
                            </button>
                        </div>
                        <div className='bg-[#BDBDBD] h-[273px]' style={{borderRadius:'0px 0px 10px 10px'}}></div>
                    </div>

                    <div className='text-left'>
                        <div class="flex flex-row h-[265px]">
                            <div className='w-1/2 bg-black px-4 py-4' style={{borderRadius:'10px 0px 0px 10px'}}>
                                <h1 className='scheherazade-thin-normal text-[24px] text-white'>Exclusive Insights: Expert Tips for an Enlightening Umrah Experience</h1>
                                <p className='Gothic-A1-thin mt-4 text-[14px]'>Discover strategies for connecting with the sacred sites, enriching your prayers, and fostering personal...</p>

                                <button className=" mt-3 h-6  text-white Gothic-A1-700 font-bold">
                                    Read More &nbsp; {'->'}
                                </button>
                            </div>
                            <div className='w-1/2 bg-[#BDBDBD]' style={{borderRadius:'0px 10px 10px 0px'}}></div>
                        </div>
                        
                        <div class="flex flex-row h-[265px] mt-4">
                            <div className='w-1/2 bg-[#E5E5E5] px-4 py-4' style={{borderRadius:'10px 0px 0px 10px'}}>
                                <h1 className='scheherazade-thin-normal text-[24px] '>New Direct Flight Routes for Hajj and Umrah Pilgrims Announced</h1>
                                <p className='Gothic-A1-thin mt-4 text-[14px]'>This development promises smoother and more convenient travel experiences, reducing transit times...</p>

                                <button className=" mt-3 h-6 Gothic-A1-700 font-bold">
                                    Read More &nbsp; {'->'}
                                </button>
                            </div>
                            <div className='w-1/2 bg-[#BDBDBD]' style={{borderRadius:'0px 10px 10px 0px'}}></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OurNews;