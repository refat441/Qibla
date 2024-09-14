import React from 'react';
import './ErrorHader.css';

const ErrorHader = () => {
    return (
        <div className='bgimage h-[600px] md:h-[600px] sm:h-[400px]'>
            <div className='pt-[100px] md:pt-[157px] text-center'>
                <h1 className='scheherazade-thin text-[80px] md:text-[140px]'>404</h1>
                <h2 className='scheherazade-thin text-[32px] md:text-[56px] mt-6 md:mt-12'>
                    Oops! Something went wrong
                </h2>
                <p className='Gothic-A1-400 mt-2 md:mt-4 text-[14px] md:text-[18px]'>
                    We can’t seem to find the page you are looking for
                </p>
                <div>
                    <button className="w-[120px] md:w-[153px] mt-4 h-[40px] md:h-[48px] rounded bg-[#D19B56] text-white hover:bg-black Gothic-A1-700 font-bold">
                        Back To Home &nbsp; {'>'}
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default ErrorHader;
