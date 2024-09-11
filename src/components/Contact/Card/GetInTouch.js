import React from 'react';

const GetInTouch = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center h-auto md:h-[550px] mx-4 md:mx-[100px] mt-10 md:mt-20'>

            {/* Left Section */}
            <div className='w-full md:w-1/2 h-auto md:h-[560px] text-left mb-10 md:mb-0'>
                <div className='overflow-hidden flex'>
                    <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Centered icon" />
                    <p className='text-[14px] Gothic-A1-bold pl-2 mt-1'>Get in Touch</p>
                </div>
                    <h1 className='text-[32px] md:text-[64px] scheherazade-thin leading-[36px] md:leading-[56px] mt-4'>
                            Have questions about our travel packages for Umrah and Hajj?
                    </h1>
                    <p className='text-[14px] md:text-[16px] Gothic-A1-thin mt-4 md:mt-8'>
                        Whether you need assistance with itinerary customization, accommodation preferences, or general inquiries about your pilgrimage, we're just a message away. Reach out to us today to begin your transformative journey.
                    </p>

                    {/* Contact Info */}
                    <div>
                        <div className="text-left">
                            <div className="Gothic-A1-400 mt-4 flex">
                                <span className="mr-6 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg>
                                </span>
                                <span>021 Hollywood Boulevard, LA</span>
                            </div>
                            <div className="Gothic-A1-400 mt-4 flex">
                                <span className="mr-6 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </span>
                                <span>021 3456 768</span>
                            </div>
                            <div className="Gothic-A1-400 mt-4 flex">
                                <span className="mr-6 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                    </svg>
                                </span>
                                <span>customer@qiblatour.com</span>
                            </div>

                            {/* Follow Us Section */}
                            <div className='scheherazade-thin-normal mt-6'>
                                <h2 className='text-[24px] md:text-[32px]'>Follow Us</h2>
                                <div className='mt-4'>
                                    <div className="flex flex-row gap-4">
                                        {/* Social Icons */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D19B56" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D19B56" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.008-.422A6.676 6.676 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.085.797 3.286 3.286 0 0 0-5.595 2.994A9.325 9.325 0 0 1 1.112 2.1 3.289 3.289 0 0 0 2.13 6.57a3.323 3.323 0 0 1-1.487-.41v.041a3.283 3.283 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.615-.057 3.283 3.283 0 0 0 3.065 2.278A6.588 6.588 0 0 1 0 13.026a9.291 9.291 0 0 0 5.031 1.475" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D19B56" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.717 0 5.486.01 4.675.049c-.8.038-1.349.163-1.846.35a3.92 3.92 0 0 0-1.41.902 3.92 3.92 0 0 0-.903 1.41c-.187.497-.312 1.047-.35 1.846C0 5.486 0 5.717 0 8s.01 2.514.049 3.325c.038.8.163 1.349.35 1.846.192.501.45.937.902 1.41a3.918 3.918 0 0 0 1.41.903c.497.187 1.047.312 1.846.35C5.486 16 5.717 16 8 16s2.514-.01 3.325-.049c.8-.038 1.349-.163 1.846-.35a3.92 3.92 0 0 0 1.41-.902 3.918 3.918 0 0 0 .903-1.41c.187-.497.312-1.047.35-1.846C16 10.514 16 10.283 16 8s-.01-2.514-.049-3.325c-.038-.8-.163-1.349-.35-1.846a3.92 3.92 0 0 0-.902-1.41 3.92 3.92 0 0 0-1.41-.903c-.497-.187-1.047-.312-1.846-.35C10.514.01 10.283 0 8 0zm0 1.459c2.446 0 2.745.009 3.712.05.716.034 1.105.152 1.364.253.343.133.589.292.847.549.257.258.416.504.549.847.1.259.219.648.253 1.364.04.967.05 1.266.05 3.712s-.01 2.745-.05 3.712c-.034.716-.152 1.105-.253 1.364a2.46 2.46 0 0 1-.549.847 2.46 2.46 0 0 1-.847.549c-.259.1-.648.219-1.364.253-.967.04-1.266.05-3.712.05s-2.745-.01-3.712-.05c-.716-.034-1.105-.152-1.364-.253a2.46 2.46 0 0 1-.847-.549 2.46 2.46 0 0 1-.549-.847c-.1-.259-.219-.648-.253-1.364-.04-.967-.05-1.266-.05-3.712s.01-2.745.05-3.712c.034-.716.152-1.105.253-1.364a2.46 2.46 0 0 1 .549-.847c.258-.257.504-.416.847-.549.259-.1.648-.219 1.364-.253.967-.04 1.266-.05 3.712-.05zm0 2.527a4.014 4.014 0 1 0 0 8.028 4.014 4.014 0 0 0 0-8.028zm0 1.459a2.555 2.555 0 1 1 0 5.11 2.555 2.555 0 0 1 0-5.11zm5.087-.698a.936.936 0 1 1-1.873 0 .936.936 0 0 1 1.873 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='w-full md:w-1/2 h-auto md:h-[560px] overflow-hidden bg-[#D19B56] text-white rounded-xl px-4 md:px-6 py-6 md:py-4'>
                <h1 className='text-[32px] md:text-[54px] scheherazade-thin leading-[36px] md:leading-  [56px] mt-4 text-left'>
                    Send a Message
                </h1>
                <p className='Gothic-A1-400 mt-4 text-[14px] md:text-[16px] text-left'>
                    Please feel free to contact us, we will get back to you as soon as possible.
                </p>
                
                <div className='mt-4'>
                    <input
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight mt-4 text-[14px] md:text-[16px]"
                        id="Full-name"
                        type="text"
                        placeholder="Full name"
                    />
                    <input
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight mt-4 text-[14px] md:text-[16px]"
                        id="Email"
                        type="email"
                        placeholder="Email Address"
                    />
                    <textarea 
                        className="resize-y rounded-md shadow w-full h-40 md:h-48 py-2 px-3 text-gray-700 leading-tight mt-4 text-[14px] md:text-[16px]"
                        placeholder="Message">
                    </textarea>

                    <button className="w-full mt-4 h-[48px] rounded bg-black text-white hover:bg-white hover:text-black Gothic-A1-700 font-bold">
                        Send Message
                    </button>
                </div>
            </div>


        </div>
    );
};

export default GetInTouch;