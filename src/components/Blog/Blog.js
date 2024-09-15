import React from 'react';
import BlogHeader from './Card/BlogHeader';
import OurNews from './Card/OurNews';
import PaginatinSection from './Card/PaginatinSection';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import Footer from '../PlaceholderComponents/Cards/Footer';

const Blog = () => {
    return (
        <div>
            {/* header */}
            <BlogHeader></BlogHeader>

            {/* OUR News */}
            <OurNews></OurNews>

            {/* PaginatinSection */}
            <PaginatinSection></PaginatinSection>

            {/* PaginatinSection */}
            <UmrahPackage></UmrahPackage>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Blog;