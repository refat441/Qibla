import React from 'react';
import LearnMoreBTN from '../Buttons/LearnMoreBTN';
import './Footer.css';

const Footer = () => {
    return (
        <div className="relative footerbg">
            {/* SVG Decoration */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 53"
                fill="none"
                className="absolute top-0 left-0 w-full h-auto"
                style={{ zIndex: 1 }}
            >
                <path
                    d="M462.291 21.1924C259.478 42.0892 52.2581 29.8994 -26 21.1924V7.62939e-06H1466V46.0814C1435.91 49.0385 1348.83 59.1249 1244.05 46.0814C785.5 -11 715.808 -4.92857 462.291 21.1924Z"
                    fill="white"
                />
            </svg>

            <div className="relative w-full mt-10 h-[781px] text-white z-10">
                <div className="grid grid-cols-3 gap-4 mx-[140px]">
                    <div className="mt-[85px] w-[293px] text-left">
                        <img src="/img/brandGold.png" className='w-[113px] h-[60px]'  alt="brand" />
                        <p className="Gothic-A1-400 mt-6">
                            Reflections on the significance of each ritual, immerse yourself in the richness of this spiritual endeavor and shape it to align perfectly with your intentions and aspirations
                        </p>
                    </div>

                    <div className="mt-[85px] w-[117px] text-left ml-[100px]">
                        <h1 className="goldenText Gothic-A1-700">Help & Support</h1>
                        <p className="Gothic-A1-400 mt-8">
                            <p className="mt-4">Help Center</p>
                            <p className="mt-4">FAQ</p>
                            <p className="mt-4">Product</p>
                            <p className="mt-4">Services</p>
                            <p className="mt-4">Payment</p>
                        </p>
                    </div>

                    <div className="mt-[85px] text-left w-[366px]">
                        <h1 className="goldenText Gothic-A1-700">Payment method</h1>
                        <div className="mt-8">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-9 h-9 bg-white">
                                    <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <hr className="w-[1110px] justify-start mx-[140px] mt-[43px] mb-[56px]" />

                <div className="grid grid-cols-3 gap-4 mx-[140px]">
                    <div className="w-[293px] text-left">
                        <h1 className="goldenText Gothic-A1-700">Contact</h1>
                        <div className="Gothic-A1-400 mt-8 flex">
                            <span className="mr-6 pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                            </span>
                            <span>50A - Wetland Avenue Coastline Boulevard, NY USA</span>
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
                    </div>

                    <div className="w-[117px] text-left ml-[100px]">
                        <h1 className="goldenText Gothic-A1-700">Company</h1>
                        <p className="Gothic-A1-400 mt-8">
                            <p className="mt-4">About</p>
                            <p className="mt-4">Contact</p>
                            <p className="mt-4">Blog</p>
                            <p className="mt-4">Jobs</p>
                            <p className="mt-4">Terms of services</p>
                            <p className="mt-4">Privacy policy</p>
                        </p>
                    </div>

                    <div className="text-left w-[367px]">
                        <h1 className="goldenText Gothic-A1-700">Newsletter</h1>
                        <div className="mt-8">
                            <p className="Gothic-A1-400">
                                Metus sed Disse aliquet amet ultrices faucibus mauris sito diattis morbi suspendisse pellentesque pulvinar interdum justo
                            </p>
                            <div className="flex">
                                <input type="email" name="email" className="mt-8 w-[240px] h-[48px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 rounded-md sm:text-sm" placeholder="You Email Address" />
                                <div className="mt-3 ml-2">
                                    <LearnMoreBTN />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-[#131313] py-2'>
                <h1 className='Gothic-A1-700 text-white'>Copyright© 2024 Qibla - All Rights Reserved.</h1>
            </div>
        </div>

    );
};

export default Footer;
