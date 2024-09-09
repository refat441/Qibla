import React from 'react';
import './BestPackageCard.css'
import MoreDetailsBTN from '../Buttons/MoreDetailsBTN';

const BestPackageCard = () => {
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <div className='h-[1126px] mx-[100px] w-[1240px] pt-[75px]'> 
                <div>
                    <div className='overflow-hidden flex items-center justify-center '>
                        <img className='w-5 h-5  object-cover' src="/img/main-icon.svg" alt="icon" />
                        <p className='text-[14px] Gothic-A1-bold ml-2 mt-0.5'>BEST PACKAGE</p>
                    </div>
                    <h1 className=' '>Hajj and umrah special offers </h1>
                    <p className='text-[16px] Gothic-A1-thin mt-8'>Don't miss out on this exclusive opportunity to embark on a hajj & umrah that is truly yours</p>
                </div> 

                <div className='mt-[40px]'>
                    <div class="grid grid-cols-3 gap-7">
                        <div className='text-left graybroder rounded-lg' style={{backgroundColor: 'white'}}>
                            <div className='w-[393px] h-[267px] gradientBG'></div>
                                <div className='pl-3'>
                                    <p   className='scheherazade-thin text-[32px] mt-2'>Economy Umrah Package</p>
                                       

                                    <hr className='w-[370px] mt-3' />

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

                                    <div>
                                        <p className='Gothic-A1-700 goldenText mt-4'>Package Details</p>
                                    </div>
                                    <div className='flex justify-start mt-4 mx-5 Gothic-A1-thin text-[14px]'>
                                    <div>
                                            <ul className="list-disc">
                                                <li>3 Star Hotel</li>
                                                <li>Transportation</li>
                                                <li>Guidance</li>
                                                <li>Meals</li>
                                                <li>Pilgrimage Servicesn</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <ul className="list-disc mx-12">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                                <li>Guidance</li>
                                            </ul>
                                    </div>
                                    </div>
                                    <div>
                                        <p className='Gothic-A1-700 goldenText mt-4'>Additional</p>
                                    </div>
                                    <div className='flex justify-start mt-4 mx-5 Gothic-A1-thin text-[14px]'>
                                    <div>
                                            <ul className="list-disc">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <ul className="list-disc mx-12">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                            </ul>
                                    </div>
                                    </div>

                                    <hr className='w-[370px] mt-3' />
                                    
                                </div>
                                <MoreDetailsBTN></MoreDetailsBTN>
                        </div>

                        <div className='text-left graybroder rounded-lg' style={{backgroundColor: 'white'}}>
                            <div className='w-[393px] h-[267px] gradientBG'></div>
                                <div className='pl-3'>
                                    <p   className='scheherazade-thin text-[32px] mt-2'>Economy Umrah Package</p>
                                    <p className='Gothic-A1-thin'>Start From: <span className='goldenText Gothic-A1-700'>$ 2,200</span> (9 days)</p>

                                    <hr className='w-[370px] mt-3' />

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

                                    <div>
                                        <p className='Gothic-A1-700 goldenText mt-4'>Package Details</p>
                                    </div>
                                    <div className='flex justify-start mt-4 mx-5 Gothic-A1-thin text-[14px]'>
                                    <div>
                                            <ul className="list-disc">
                                                <li>3 Star Hotel</li>
                                                <li>Transportation</li>
                                                <li>Guidance</li>
                                                <li>Meals</li>
                                                <li>Pilgrimage Servicesn</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <ul className="list-disc mx-12">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                                <li>Guidance</li>
                                            </ul>
                                    </div>
                                    </div>
                                    <div>
                                        <p className='Gothic-A1-700 goldenText mt-4'>Additional</p>
                                    </div>
                                    <div className='flex justify-start mt-4 mx-5 Gothic-A1-thin text-[14px]'>
                                    <div>
                                            <ul className="list-disc">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <ul className="list-disc mx-12">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                            </ul>
                                    </div>
                                    </div>

                                    <hr className='w-[370px] mt-3' />
                                    
                                </div>
                                <MoreDetailsBTN></MoreDetailsBTN>
                        </div>

                        <div className='text-left graybroder rounded-lg' style={{backgroundColor: 'white'}}>
                            <div className='w-[393px] h-[267px] gradientBG'></div>
                                <div className='pl-3'>
                                    <p   className='scheherazade-thin text-[32px] mt-2'>Economy Umrah Package</p>
                                    <p className='Gothic-A1-thin'>Start From: <span className='goldenText Gothic-A1-700'>$ 2,200</span> (9 days)</p>

                                    <hr className='w-[370px] mt-3' />

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

                                    <div>
                                        <p className='Gothic-A1-700 goldenText mt-4'>Package Details</p>
                                    </div>
                                    <div className='flex justify-start mt-4 mx-5 Gothic-A1-thin text-[14px]'>
                                    <div>
                                            <ul className="list-disc">
                                                <li>3 Star Hotel</li>
                                                <li>Transportation</li>
                                                <li>Guidance</li>
                                                <li>Meals</li>
                                                <li>Pilgrimage Servicesn</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <ul className="list-disc mx-12">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                                <li>Guidance</li>
                                            </ul>
                                    </div>
                                    </div>
                                    <div>
                                        <p className='Gothic-A1-700 goldenText mt-4'>Additional</p>
                                    </div>
                                    <div className='flex justify-start mt-4 mx-5 Gothic-A1-thin text-[14px]'>
                                    <div>
                                            <ul className="list-disc">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                            </ul>
                                    </div>
                                    <div>
                                            <ul className="list-disc mx-12">
                                                <li>Accommodation</li>
                                                <li>Transportation</li>
                                            </ul>
                                    </div>
                                    </div>

                                    <hr className='w-[370px] mt-3' />
                                    
                                </div>
                                <MoreDetailsBTN></MoreDetailsBTN>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};



export default BestPackageCard;