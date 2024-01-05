import { notFound } from 'next/navigation';
import React from 'react';

const BlogsItems = ({params}) => {
    const {id}=params;
    if(id === '3'){
        notFound()
    }
    return (
        <div>
             <h1>This Blog id is: {id}</h1>
             
        </div>
    );
};

export default BlogsItems;