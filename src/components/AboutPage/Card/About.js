import React from 'react';

const About = () => {
    return (
        <div className='overflow-hidden'>
            <div style={{ backgroundColor: '#605f5f', position: 'relative' }} className='-mb-[0.6px]'>
                <div className='pt-[121px]'>
                    <p className='Gothic-A1-bold'>About</p>
                    <h1 className='text-[64px] scheherazade-thin leading-[56px] mt-4 text-white'>
                        We Make Best Quality Travel Muslim For Everyone
                    </h1>
                    <div className='overflow-hidden flex items-center justify-center mt-6'>
                        <img className='w-5 h-5 object-cover' src='/img/main-icon.svg' alt='Centered icon' />
                    </div>
                    <p className='Gothic-A1-700 text-gray-400 mt-6 pb-[120px]'>
                        Home &nbsp; &nbsp; {'>'} &nbsp; &nbsp; <span className='text-white'>About</span>
                    </p>
                </div>
                <div className="absolute bottom-0 w-full overflow-hidden leading-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
                        <path
                            d="M594.369 64C399.823 23.5717 75.5306 32.1609 0 46.0921V80H1440V6.26982C1410.96 1.53847 1327.47 -5.08543 1225.79 6.26982C1098.68 20.4639 851.818 117.5 594.369 64Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default About;
