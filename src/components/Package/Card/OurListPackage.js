import React, { useState } from 'react';

// Simulate 24 package items for 4 pages (6 packages per page)
const packages = Array.from({ length: 24 }, (_, index) => ({
    title: `Unforgettable Premium Hajj Experience ${index + 1}: Journey to Spiritual Enlightenment`,
    price: `$2,200`,
    duration: "9 days",
    description: "Indulge in luxurious accommodations, exclusive access to sacred sites, personalized guidance...",
    imgSrc: "/img/main-icon.svg"
}));

const OurListPackage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const packagesPerPage = 6;  // 6 packages per page

    // Calculate the index range of packages to display for the current page
    const indexOfLastPackage = currentPage * packagesPerPage;
    const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
    const currentPackages = packages.slice(indexOfFirstPackage, indexOfLastPackage);

    // Calculate total pages needed (4 pages for 24 packages)
    const totalPages = Math.ceil(packages.length / packagesPerPage);

    // Pagination functions for Next and Previous buttons
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Change page manually
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='mx-[100px]'>
            <div>
                <div className='overflow-hidden flex items-center justify-center '>
                    <img className='w-5 h-5 object-cover' src="/img/main-icon.svg" alt="icon" />
                    <p className='text-[14px] Gothic-A1-bold ml-2 mt-0.5'>Our List Package</p>
                </div>
                <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4'>Explore Our Packages</h1>
                <p className='text-[16px] Gothic-A1-thin mt-8'>
                    Immerse yourself in a world of spiritual exploration with our carefully curated packages for Umrah and Hajj.
                </p>
            </div>

            {/* Display the current packages */}
            <div className='mt-12'>
                <div className="grid grid-cols-3 gap-8">
                    {currentPackages.map((pkg, index) => (
                        <div key={index} className='h-[426px] bg-[#F5F5F5] rounded-lg' style={{ border: '1px solid #F5F5F5' }}>
                            <div className='h-[182px] text-left text-white rounded-t-lg' style={{ background: 'linear-gradient(to top, #111111, #A9A9A9)' }}>
                                <p className='Gothic-A1-400 pt-[142px] pl-4'>Start From: <span className='goldenText'>{pkg.price}</span> ({pkg.duration})</p>
                            </div>
                            <div className='mx-3 my-4'>
                                <h2 className='scheherazade-thin-normal text-[32px] leading-8'>{pkg.title}</h2>
                                <p className='Gothic-A1-thin mt-2'>{pkg.description}</p>
                                <div>
                                    <button className="w-full mt-3 h-[48px] rounded bg-[#D19B56] text-white hover:bg-black Gothic-A1-700 font-bold">
                                        More Details &nbsp; {'->'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination with Next/Previous */}
            <div className="flex justify-center mt-8 space-x-2">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-[#D19B56] text-white'}`}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-4 py-2 rounded ${
                            currentPage === index + 1 ? 'bg-[#D19B56] text-white' : 'bg-gray-200'
                        } hover:bg-[#D19B56] hover:text-white`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-[#D19B56] text-white'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OurListPackage;
