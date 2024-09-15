import React from 'react';
import BlogHeader from './Card/BlogHeader';
import OurNews from './Card/OurNews';
import PaginatinSection from './Card/PaginatinSection';

const Blog = () => {
    return (
        <div>
            {/* header */}
            <BlogHeader></BlogHeader>

            {/* OUR News */}
            <OurNews></OurNews>

            {/* PaginatinSection */}
            <PaginatinSection></PaginatinSection>
        </div>
    );
};

export default Blog;