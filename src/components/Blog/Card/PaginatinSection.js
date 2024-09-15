import React, { useState } from 'react';

// Create enough articles to cover 5 pages with 9 items per page (total 45 articles)
const articles = Array.from({ length: 45 }, (_, i) => ({
  title: `Article Title ${i + 1}`,
  date: `March ${i + 1}, 2024`,
  comments: "No Comments",
  description: `This is a brief description for article ${i + 1}.`
}));

const ITEMS_PER_PAGE = 9; // Now 9 items per page

const PaginationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5; // Hardcoded 5 total pages

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentItems = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
        <div className='mt-10 mx-[100px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map((article, index) => (
                <div className='text-left mb-10' key={index}>
                    <div className='bg-[#BDBDBD] h-[212px] rounded-lg'></div>
                    <h1 className='scheherazade-thin-normal text-[22px] sm:text-[24px] lg:text-[26px] mt-4'>{article.title}</h1>
                    <p className='Gothic-A1-600 text-[12px] sm:text-[14px] mt-2'>{article.date} {article.comments}</p>
                    <p className='Gothic-A1-thin text-[14px] sm:text-[16px] mt-4'>{article.description}</p>
                </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                Previous
                </button>

                <span className="text-gray-600">Page {currentPage} of {totalPages}</span>

                <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                Next
                </button>
            </div>
        </div>
  );
};

export default PaginationSection;
