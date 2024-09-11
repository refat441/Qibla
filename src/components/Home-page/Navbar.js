import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='w-1420px'>
            <nav className="flex items-center justify-between flex-wrap p-3" style={{ backgroundColor: '#D19B56' }}>
                <div className="flex items-center flex-shrink-0 text-white ml-24">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8 mr-2" width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                    </svg>
                    <span className="font-semibold text-xl tracking-tight ml-1">Qibla</span>
                </div>
                <div className="block lg:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-black hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block ' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
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
                        <div 
                            className="relative block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            <span className="cursor-pointer">Page</span>
                            <div className={`${isDropdownOpen ? 'block z-20' : 'hidden'} absolute bg-white text-black mt-1 rounded-lg shadow-lg`}>
                                <a href="#testimonials" className="block px-4 py-2 hover:bg-gray-200">Testimonials</a>
                                <a href="#team" className="block px-4 py-2 hover:bg-gray-200">Team</a>
                                <a href="Pricing" className="block px-4 py-2 hover:bg-gray-200">Pricing</a>
                                <a href="FAQ" className="block px-4 py-2 hover:bg-gray-200">FAQ</a>
                                <a href="#404" className="block px-4 py-2 hover:bg-gray-200">404</a>
                                <a href="#coming-soon" className="block px-4 py-2 hover:bg-gray-200">Coming Soon</a>
                            </div>
                        </div>

                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Blog
                        </a>
                        <a href="Contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-7">
                            Contact Us
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 mr-24 bg-white">
                            <b>Get A Quota Now</b>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
