import React from 'react';

const QablahJamaahTestimonial = () => {
    return (
        <div>
            <div className="ml-[100px] md:ml-[50px] sm:ml-[20px]">
                <div className="flex flex-col md:flex-row justify-center items-start">
                    {/* Left Text Section */}
                    <div className="w-full md:w-1/2 h-auto md:h-[452px] text-left mt-8">
                    <div className="mx-6">
                        <div className="flex items-center">
                        <img className="w-5 h-5 object-cover" src="/img/main-icon.svg" alt="Icon" />
                        <p className="text-[12px] lg:text-[14px] font-bold pl-2 goldenText">Qablah jamaah</p>
                        </div>
                        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] scheherazade-thin leading-[36px] md:leading-[56px] mt-4">
                        Hear What Our Travelers Say with their spiritual journey
                        </h1>
                        <p className="text-[14px] sm:text-[16px] Gothic-A1-thin mt-4 md:mt-8">
                        Discover their experiences, reflections, and profound moments that have transformed their lives. Join the countless believers who have found solace and fulfillment through our dedicated support and travel arrangements.
                        </p>
                    </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[452px] mt-6 md:mt-0">
                    <img
                        className="h-full w-full object-cover rounded-md md:rounded-l-none"
                        src="/img/1357168.png"
                        alt=""
                    />
                    </div>
                </div>
            </div>
  
            <div className="mx-[20px] sm:mx-[50px] lg:mx-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Section - Image */}
                    <div>
                        <img 
                            className="h-full w-full object-cover rounded-t-md lg:rounded-l-md lg:rounded-tr-none" 
                            src="/img/1357168.png" 
                            alt="" 
                        />
                    </div>

                    {/* Right Section - Testimonial */}
                    <div className="bg-[#D19B56] rounded-b-md lg:rounded-r-md lg:rounded-bl-none text-white p-6 lg:p-8">
                        <div className="flex justify-start mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-solid border-white"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700">Aisha Hassan</p>
                                <p className="Gothic-A1-600 text-[12px]">Nurse</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <h3 className="scheherazade-thin text-[24px] sm:text-[32px] mb-4">Qabla exceeded expectations!</h3>
                            <p className="Gothic-A1-400 px-4 py-2 bg-[#0303037e] rounded-lg">
                                Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-[20px] sm:mx-[50px] lg:mx-[100px] mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="h-auto lg:h-[325px] border-[1px] border-solid border-[#E5E5E5] rounded-lg p-6">
                        <div className="flex mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-[#D19B56]"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700 goldenText">Fatima Ahmed</p>
                                <p className="Gothic-A1-600 text-[12px] text-[#5E5E5E]">Business Owner</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>
                        <h3 className="scheherazade-thin text-[24px] sm:text-[28px] lg:text-[32px] mb-4">Great customer service!</h3>
                        <p className="Gothic-A1-thin">Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.</p>
                    </div>

                    {/* Repeat this card for all other testimonial cards */}
                    {/* Testimonial Card 2 */}
                    <div className="h-auto lg:h-[325px] border-[1px] border-solid border-[#E5E5E5] rounded-lg p-6">
                        <div className="flex mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-[#D19B56]"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700 goldenText">Fatima Ahmed</p>
                                <p className="Gothic-A1-600 text-[12px] text-[#5E5E5E]">Business Owner</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>
                        <h3 className="scheherazade-thin text-[24px] sm:text-[28px] lg:text-[32px] mb-4">Great customer service!</h3>
                        <p className="Gothic-A1-thin">Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.</p>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="h-auto lg:h-[325px] border-[1px] border-solid border-[#E5E5E5] rounded-lg p-6">
                        <div className="flex mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-[#D19B56]"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700 goldenText">Fatima Ahmed</p>
                                <p className="Gothic-A1-600 text-[12px] text-[#5E5E5E]">Business Owner</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>
                        <h3 className="scheherazade-thin text-[24px] sm:text-[28px] lg:text-[32px] mb-4">Great customer service!</h3>
                        <p className="Gothic-A1-thin">Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.</p>
                    </div>

                    {/* Testimonial Card 4 */}
                    <div className="h-auto lg:h-[325px] border-[1px] border-solid border-[#E5E5E5] rounded-lg p-6">
                        <div className="flex mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-[#D19B56]"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700 goldenText">Fatima Ahmed</p>
                                <p className="Gothic-A1-600 text-[12px] text-[#5E5E5E]">Business Owner</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>
                        <h3 className="scheherazade-thin text-[24px] sm:text-[28px] lg:text-[32px] mb-4">Great customer service!</h3>
                        <p className="Gothic-A1-thin">Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.</p>
                    </div>

                    
                    {/* Testimonial Card 5 */}
                    <div className="h-auto lg:h-[325px] border-[1px] border-solid border-[#E5E5E5] rounded-lg p-6">
                        <div className="flex mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-[#D19B56]"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700 goldenText">Fatima Ahmed</p>
                                <p className="Gothic-A1-600 text-[12px] text-[#5E5E5E]">Business Owner</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>
                        <h3 className="scheherazade-thin text-[24px] sm:text-[28px] lg:text-[32px] mb-4">Great customer service!</h3>
                        <p className="Gothic-A1-thin">Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.</p>
                    </div>

                    
                    {/* Testimonial Card 6 */}
                    <div className="h-auto lg:h-[325px] border-[1px] border-solid border-[#E5E5E5] rounded-lg p-6">
                        <div className="flex mb-4">
                            <div className="h-[85px] w-[85px] bg-[#BDBDBD] rounded-full border-[3px] border-[#D19B56]"></div>
                            <div className="ml-4">
                                <p className="text-[18px] Gothic-A1-700 goldenText">Fatima Ahmed</p>
                                <p className="Gothic-A1-600 text-[12px] text-[#5E5E5E]">Business Owner</p>
                                <div className="flex mt-2">
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                    <span className="fa fa-star" style={{ color: '#F2C94C' }}></span>
                                </div>
                            </div>
                        </div>
                        <h3 className="scheherazade-thin text-[24px] sm:text-[28px] lg:text-[32px] mb-4">Great customer service!</h3>
                        <p className="Gothic-A1-thin">Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default QablahJamaahTestimonial;