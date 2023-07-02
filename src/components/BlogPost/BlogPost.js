import React from 'react';
import blogData from './blogData.yaml';

function BlogPost({ match }) {
    // Find the blog post based on the URL parameter
    const post = blogData.find((post) => post.slug === match.params.slug);

    // If the blog post is not found, render a message
    if (!post) {
        return <div>Blog post not found</div>;
    }

    // Render the blog post content
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
}

export default BlogPost;