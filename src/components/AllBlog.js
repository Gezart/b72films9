import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'

const AllBlog = ({posts}) => {
    return (
        <div className='blogs'>
            {posts.map((post, index) =>
                <div key={index} className="blog">
                    <div className="blog-image">
                        {/* <img src={post.featuredImage ? post.featuredImage.node.mediaItemUrl : ''} alt="" /> */}
                        <GatsbyImage image={getImage(post.featuredImage.node.localFile)} alt="post-image"/>
                    </div>
                   <div className="blog-content">
                        <Link to={post.slug}><h1>{post.title}</h1></Link>
                        <p>{post.content}</p>
                   </div>
                </div>
            )}
        </div>
    )
}

export default AllBlog
