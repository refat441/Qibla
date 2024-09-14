import React from 'react';

const ComingSoon = () => {
    return (
        <div className='bg-[#424242] min-h-screen flex flex-col justify-center items-center overflow-hidden pt-[105px] px-4 pb-24'>
            <div className='flex flex-col items-center space-y-4'>
                <img src="/img/brand.png" className='h-[60px] w-[113px] object-cover' alt="brand" />
                <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="Centered icon" />
            </div>
            <h1 className='scheherazade-thin text-[50px] sm:text-[80px] lg:text-[100px] mt-8 text-white text-center'>
                Coming Soon
            </h1>
            <p className='scheherazade-thin text-[20px] sm:text-[30px] lg:text-[40px] mt-4 sm:mt-8 text-white text-center'>
                Please check again in the near future.
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 mx-auto overflow-hidden goldenText mt-4 sm:mt-4">
                <div className='scheherazade-thin-normal text-[40px] sm:text-[50px] lg:text-[73px]'>10</div>
                <div className='scheherazade-thin-normal text-[40px] sm:text-[50px] lg:text-[73px]'>16</div>
                <div className='scheherazade-thin-normal text-[40px] sm:text-[50px] lg:text-[73px]'>36</div>
                <div className='scheherazade-thin-normal text-[40px] sm:text-[50px] lg:text-[73px]'>48</div>
                <div className='Gothic-A1-700 text-[14px] sm:text-[16px] lg:text-[18px]'>Days</div>
                <div className='Gothic-A1-700 text-[14px] sm:text-[16px] lg:text-[18px]'>Hours</div>
                <div className='Gothic-A1-700 text-[14px] sm:text-[16px] lg:text-[18px]'>Minutes</div>
                <div className='Gothic-A1-700 text-[14px] sm:text-[16px] lg:text-[18px]'>Seconds</div>
            </div>

            <div className='mt-10 sm:mt-14 flex flex-col sm:flex-row items-center'>
                <input 
                    className="max-w-[620px] sm:w-[300px] lg:w-[600px]  bg-transparent text-white border rounded py-2 px-3 leading-tight mb-4 sm:mb-0" 
                    id="username" 
                    type="text" 
                    placeholder="Your email address" 
                />
                <button 
                    className="w-[100px] sm:w-[120px] lg:w-[153px] h-[30px] lg:h-[39px] rounded bg-[#D19B56] text-white hover:bg-black Gothic-A1-700 font-bold sm:ml-4"
                >
                    Notify Me
                </button>
            </div>


            <div className='flex flex-col sm:flex-row gap-4 text-white justify-center items-center overflow-hidden mt-8'>
                <div className="Gothic-A1-400 flex flex-col sm:flex-row items-center space-x-8">
                    <div className="flex items-center">
                        <span className="mr-2 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </span>
                        <span className='text-sm sm:text-base'>50A - Wetland Avenue Coastline Boulevard, NY USA</span>
                    </div>
                    <div className="flex items-center mt-4 sm:mt-0">
                        <span className="mr-2 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </span>
                        <span className='text-sm sm:text-base'>021 3456 768</span>
                    </div>
                    <div className="flex items-center mt-4 sm:mt-0">
                        <span className="mr-2 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                            </svg>
                        </span>
                        <span className='text-sm sm:text-base'>customer@qiblatour.com</span>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <div className="flex justify-center">
                    <div className="flex flex-row gap-4 sm:gap-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#D19B56" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#D19B56" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.008-.422A6.676 6.676 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.443-1.817 6.533 6.533 0 0 1-2.084.797A3.28 3.28 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429A3.28 3.28 0 0 0 2.89 7.168a3.323 3.323 0 0 1-1.487-.41v.041a3.283 3.283 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.416-.02-.615-.058a3.283 3.283 0 0 0 3.065 2.277A6.588 6.588 0 0 1 .78 13.58a9.29 9.29 0 0 0 5.026 1.465" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#D19B56" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H3.129v7.225h1.814zm.89-8.225c.615 0 .99-.407.99-.917-.011-.521-.375-.917-.978-.917-.602 0-.989.396-.989.917 0 .51.374.917.967.917h.01zm3.31 8.225h1.814V9.359c0-.216.016-.432.08-.586.174-.431.568-.877 1.231-.877.868 0 1.215.662 1.215 1.633v4.865h1.814V9.28c0-2.22-1.184-3.252-2.764-3.252-1.276 0-1.845.702-2.164 1.193v.025h-.01a5.77 5.77 0 0 1 .01-.025V6.169H7.829c.024.67 0 7.225 0 7.225z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
