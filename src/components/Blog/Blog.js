import React from 'react';
import BlogHeader from './Card/BlogHeader';
import OurNews from './Card/OurNews';

const Blog = () => {
    return (
        <div>
            {/* header */}
            <BlogHeader></BlogHeader>

            {/* OUR News */}
            <OurNews></OurNews>
        </div>
    );
};

export default Blog;