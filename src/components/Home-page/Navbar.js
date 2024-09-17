import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // For mobile menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For Page dropdown

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-full">
            <nav className="flex items-center justify-between p-3 w-full" style={{ backgroundColor: '#D19B56' }}>
                {/* Left Section (Logo) */}
                <div className={`flex items-center flex-shrink-0 text-white ml-6 sm:ml-12 ${isOpen ? 'block' : 'flex'}`}>
                    <img src="/img/brand.png" className="w-[87px] h-[46px]" alt="brand" />
                </div>

                {/* Mobile menu toggle button */}
                <div className="block lg:hidden">
                    {!isOpen && (
                        <button
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-black hover:border-white"
                        >
                            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Main navigation links */}
                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
                    <div className="text-sm flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto">
                        <a href="Home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Home
                        </a>
                        <a href="About" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            About
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Hajj & Umrah
                        </a>
                        <a href="Package" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Package
                        </a>

                        {/* Dropdown Menu for Page */}
                        <div className="relative block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            <button
                                onClick={toggleDropdown}
                                className="focus:outline-none flex items-center justify-between w-full lg:w-auto"
                            >
                                <span className="cursor-pointer">Page</span>
                                <svg
                                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                                        isDropdownOpen ? 'transform rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden max-h-0 ${
                                    isDropdownOpen ? 'max-h-[300px]' : 'max-h-0'
                                } lg:absolute bg-white text-black mt-1 rounded-lg shadow-lg lg:w-40`}
                            >
                                <a href="Testimonial" className="block px-4 py-2 hover:bg-gray-200">Testimonials</a>
                                <a href="#team" className="block px-4 py-2 hover:bg-gray-200">Team</a>
                                <a href="Pricing" className="block px-4 py-2 hover:bg-gray-200">Pricing</a>
                                <a href="FAQ" className="block px-4 py-2 hover:bg-gray-200">FAQ</a>
                                <a href="Error" className="block px-4 py-2 hover:bg-gray-200">404</a>
                                <a href="ComingSoon" className="block px-4 py-2 hover:bg-gray-200">Coming Soon</a>
                            </div>
                        </div>

                        <a href="Blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Blog
                        </a>
                        <a href="Contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Contact Us
                        </a>

                        {/* Mobile Button */}
                        {isOpen && (
                            <div className="block lg:hidden w-full mt-4">
                                <button className="w-full sm:w-[120px] md:w-[140px] lg:w-[163px] h-[35px] md:h-[38px] lg:h-[45px] px-4 py-2 rounded-lg bg-white hover:bg-black hover:text-white Gothic-A1-700 font-bold transition-all duration-300 ease-in-out">
                                    Get A Quote Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section (Button for larger screens) */}
                <div className="hidden lg:block mt-4 lg:mt-0 lg:mr-6">
                    <button className="w-full sm:w-[120px] md:w-[140px] lg:w-[163px] h-[35px] md:h-[38px] lg:h-[45px] px-4 py-2 rounded-lg bg-white hover:bg-black hover:text-white Gothic-A1-700 font-bold transition-all duration-300 ease-in-out">
                        Get A Quote Now
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
