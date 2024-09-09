import React from 'react';

const HaajEconomoyPackage = () => {
    return (
        <div className='mx-[100px] mt-20 h-[1140px]'>
            <div className='flex'>
                <div className='w-3/5 h-[497px] '   style={{
                    backgroundImage: 'linear-gradient(to bottom, #C0C0C0, #d4c8ba, rgba(201, 156, 97, 0.61), rgba(184, 116, 28, 0.61))',
                    }}>
                </div>
                
                <div className='text-left h-[454px] w-3/5 -ml-32 px-8 my-5 bg-slate-50 rounded-lg'>
                    <div className='h-454px'>
                        <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>Hajj Economy Package</h1>
                        <p className='Gothic-A1-thin mt-3'>Start From: <span className='goldenText Gothic-A1-700'>$ 2,200</span> (9 days)</p>
                    </div>

                    <div class="grid grid-cols-5 gap-4 w-[264px] h-[40px] mt-3">
                        <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded  '>
                            <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                        </div>
                        <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded  '>
                            <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                        </div>
                        <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded  '>
                            <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                        </div>
                        <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded  '>
                            <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                        </div>
                        <div className='w-10 h-10 border-solid border-2 border-gray-300 rounded  '>
                            <div className='h-[28px] w-[28px] bg-gray-500 m-1'></div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p className='Gothic-A1-thin'>The economic package Includes visa, comprehensive insurance, accommodation for 29 nights in Makkah's hotel 1.5 km from Haram, and transportation. The offer is for a limited time only.</p>
                    </div>
                    <div>
                        <p className='Gothic-A1-700 goldenText mt-3'>Package Details</p>
                    </div>
                    <div className='flex justify-start mt-3 mx-5 Gothic-A1-thin text-[14px]'>
                        <div>
                                <ul className="list-disc">
                                    <li>4 Star Hotel</li>
                                    <li>Transportation</li>
                                    <li>Guidance</li>
                                    <li>Transportation</li>
                                </ul>
                        </div>
                        <div>
                                <ul className="list-disc mx-12">
                                    <li>Accommodation</li>
                                    <li>Transportation</li>
                                    <li>Guidance</li>
                                    <li>Transportation</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className='flex gap-8 mt-10'>
                    <div className='w-1/3 rounded-lg bg-slate-50 text-left py-6 px-6'>
                        <p className='scheherazade-thin-normal text-[28px]'>Standard</p>
                        <p className='scheherazade-thin-normal text-[40px] goldenText'>$1500 <span className='Gothic-A1-thin text-[14px]'>/ PER PEOPLE</span></p>
                        <p className='Gothic-A1-thin mt-6'>Elit sit risus lorem proin eget molestie nibh odioa non neque turpis proin.</p>
                        <hr className='w-full mt-6'/>
                        <h3 className='Gothic-A1-700 goldenText mt-6'>Additional</h3>
                        <div className="mt-4 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Basic accommodations near the holy sites</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Group transportation services</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Guided tours of essential pilgrimage sites</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Essential amenities included</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Experienced tour guides</p>
                            </div>
                        </div>
                        <div>
                            <button className="w-full mt-4 h-[48px] rounded bg-[#D19B56] text-white hover:bg-black Gothic-A1-700 font-bold">
                                Choose Plan &nbsp; {'->'}
                            </button>
                        </div>
                    </div>

                    <div className='w-1/3 rounded-lg text-left py-6 px-6 text-white' style={{backgroundColor:'#D19B56'}}>
                        <div className='flex justify-between'>
                            <p className='scheherazade-thin-normal text-[28px]'>Premium</p>
                            <p className='bg-black Gothic-A1-600 text-[14px] mt-2 pt-2  rounded-full h-7'>RECOMMENDED</p>
                        </div>
                        
                        <p className='scheherazade-thin-normal text-[40px]'>$17,000 <span className='Gothic-A1-600 text-[14px]' >/ PER PEOPLE</span></p>
                        <p className='Gothic-A1-normal mt-6'>Elit sit risus lorem proin eget molestie nibh odioa non neque turpis proin.</p>
                        <hr className='w-full mt-6'/>
                        <h3 className='Gothic-A1-700 mt-6'>Additional</h3>
                        <div className="mt-4 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheckWhite.png" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Basic accommodations near the holy sites</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheckWhite.png" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Group transportation services</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheckWhite.png" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Guided tours of essential pilgrimage sites</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheckWhite.png"alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Essential amenities included</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheckWhite.png"alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Experienced tour guides</p>
                            </div>
                        </div>
                        <div>
                            <button className="w-full mt-4 h-[48px] rounded bg-[#ffffff] text-[#D19B56] hover:bg-black Gothic-A1-700 font-bold">
                                Choose Plan &nbsp; {'->'}
                            </button>
                        </div>
                    </div>

                    <div className='w-1/3 rounded-lg bg-slate-50 text-left py-6 px-6'>
                        <p className='scheherazade-thin-normal text-[28px]'>Standard</p>
                        <p className='scheherazade-thin-normal text-[40px] goldenText'>$1500 <span className='Gothic-A1-thin text-[14px]'>/ PER PEOPLE</span></p>
                        <p className='Gothic-A1-thin mt-6'>Elit sit risus lorem proin eget molestie nibh odioa non neque turpis proin.</p>
                        <hr className='w-full mt-6'/>
                        <h3 className='Gothic-A1-700 goldenText mt-6'>Additional</h3>
                        <div className="mt-4 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Basic accommodations near the holy sites</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Group transportation services</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Guided tours of essential pilgrimage sites</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Essential amenities included</p>
                            </div>
                        </div>
                        <div className="mt-3 flex">
                            <div className='w-6 h-6 mt-2.5 mr-2'>
                                <img className='h-full w-full object-cover' src="/img/BadgeCheck.svg" alt="Badge Check" />
                            </div>    
                            <div>
                                <p className="mt-2">Experienced tour guides</p>
                            </div>
                        </div>
                        <div>
                            <button className="w-full mt-4 h-[48px] rounded bg-[#D19B56] text-white hover:bg-black Gothic-A1-700 font-bold">
                                Choose Plan &nbsp; {'->'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HaajEconomoyPackage;