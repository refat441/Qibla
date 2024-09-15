import React from 'react';

const OurNews = () => {
    return (
        <div className='mx-4 md:mx-12 lg:mx-[100px]'>
            <div className='overflow-hidden flex items-center justify-center mt-6'>
                <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Centered icon" />
                <p className='Gothic-A1-900 text-[12px] sm:text-[14px] goldenText pl-4'>OUR NEWS</p>
            </div>

            <div>
                <h1 className='scheherazade-thin text-[32px] sm:text-[48px] lg:text-[64px] mt-4 text-center lg:text-left'>
                    Latest News and Updates
                </h1>
                <p className='Gothic-A1-thin text-center lg:text-left mt-4 text-[14px] sm:text-[16px]'>
                    Stay informed with articles, announcements, and insights on all things related to travel, Umrah, and Hajj.
                </p>
            </div>

            <div className='mt-10'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* First card: Large news card */}
                    <div className='text-left'>
                        <div className='bg-[#D19B56] h-auto px-6 py-4 rounded-t-lg'>
                            <h1 className='scheherazade-thin text-[32px] sm:text-[40px] lg:text-[56px] text-white'>
                                Cultural Diversity: Unity Amidst Diversity at Hajj
                            </h1>
                            <p className='Gothic-A1-thin mt-4 text-[14px] sm:text-[16px]'>
                                Nam sagittis fringilla dolor, vitae luctus massa fringilla eu. Nunc eu sapien posuere, ultrices nisi eu, luctus nisl. Fusce ac commodo mi. Etiam fermentum euismod risus at ultricies. Vestibulum eget.
                            </p>
                            <button className="mt-3 h-6 text-white Gothic-A1-700 font-bold">
                                Read More &nbsp; {'->'}
                            </button>
                        </div>
                        <div className='bg-[#BDBDBD] h-[200px] lg:h-[273px] rounded-b-lg'></div>
                    </div>

                    {/* Second column: Two smaller news cards */}
                    <div className='text-left'>
                        {/* First smaller card */}
                        <div className="flex flex-col lg:flex-row h-auto">
                            <div className='w-full lg:w-1/2 bg-black px-4 py-4 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none'>
                                <h1 className='scheherazade-thin-normal text-[20px] sm:text-[24px] text-white'>
                                    Exclusive Insights: Expert Tips for an Enlightening Umrah Experience
                                </h1>
                                <p className='Gothic-A1-thin mt-4 text-[14px]'>
                                    Discover strategies for connecting with the sacred sites, enriching your prayers, and fostering personal...
                                </p>
                                <button className="mt-3 h-6 text-white Gothic-A1-700 font-bold">
                                    Read More &nbsp; {'->'}
                                </button>
                            </div>
                            <div className='w-full lg:w-1/2 bg-[#BDBDBD] h-[200px] lg:h-[265px] rounded-b-lg lg:rounded-r-lg lg:rounded-l-none'></div>
                        </div>

                        {/* Second smaller card */}
                        <div className="flex flex-col lg:flex-row h-auto mt-4">
                            <div className='w-full lg:w-1/2 bg-[#E5E5E5] px-4 py-4 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none'>
                                <h1 className='scheherazade-thin-normal text-[20px] sm:text-[24px]'>
                                    New Direct Flight Routes for Hajj and Umrah Pilgrims Announced
                                </h1>
                                <p className='Gothic-A1-thin mt-4 text-[14px]'>
                                    This development promises smoother and more convenient travel experiences, reducing transit times...
                                </p>
                                <button className="mt-3 h-6 Gothic-A1-700 font-bold">
                                    Read More &nbsp; {'->'}
                                </button>
                            </div>
                            <div className='w-full lg:w-1/2 bg-[#BDBDBD] h-[200px] lg:h-[265px] rounded-b-lg lg:rounded-r-lg lg:rounded-l-none'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurNews;
