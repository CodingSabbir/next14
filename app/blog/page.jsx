import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    const Blogs=[{
        id:1,
        title: 'Blog 1',
        desceptions:'this is a blog  post 1',
    },
    {
        id:2,
        title: 'Blog 2',
        desceptions:'this is a blog  post 1',
    }]
    return (
        <div className='mt-5'>
           {
            Blogs.map((blog)=>(
                <li><Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>
            ))
           }
            
        </div>
    );
};

export default BlogsPage;