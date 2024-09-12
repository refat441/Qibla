import React from 'react';
import TestimonialHeader from './Card/TestimonialHeader';
import QablahJamaahTestimonial from './Card/QablahJamaahTestimonial';
import FeaturedCard from '../PlaceholderComponents/Cards/FeaturedCard';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import Footer from '../PlaceholderComponents/Cards/Footer';

const Testimonial = () => {
    return (
        <div>
            {/* TestimonialHeader */}
            <TestimonialHeader></TestimonialHeader>

            {/* QablahJamaah */}
            <QablahJamaahTestimonial></QablahJamaahTestimonial>
            
            {/* Featured */}
            <FeaturedCard></FeaturedCard>

            {/* UmrahPackage */}
            <UmrahPackage></UmrahPackage>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Testimonial;