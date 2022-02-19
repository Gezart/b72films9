import { Link } from 'gatsby';
import React from 'react'

const AllBlog = ({posts}) => {
    const url = 'http://localhost:8000';
    return (
        <div className='blogs'>
            {posts.map((post, index) =>
                <div key={index} className="blog">
                    <div className="blog-image">
                        <img src={post.featuredImage ? post.featuredImage.node.mediaItemUrl : ''} alt="" />
                    </div>
                   <div className="blog-content">
                        <Link to={url + "/blog/" + post.slug}><h1>{post.title}</h1></Link>
                        <p>{post.content}</p>
                   </div>
                </div>
            )}
        </div>
    )
}

export default AllBlog
