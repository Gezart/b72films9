import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import { useStaticQuery, graphql } from "gatsby"


const Post = ({ pageContext: { post }}) => {

  const query = useStaticQuery(graphql`
    {
      wp {
        blogOption {
          blogOptions {
            title
            content
            background {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)

	
	// console.log(query.);
  const blogOptions = query.wp.blogOption.blogOptions;
  console.log(post.featuredImage);
	return (
		<div className="single-post">
			<Header />
			<Banner banner={blogOptions}></Banner>
			<div className="container">
        <div className="post-content">
          <h2>{post.title}</h2>
          <img src={post.featuredImage ? post.featuredImage.node.mediaItemUrl: ''} alt="" />
          <p>{post.content}</p>
        </div>
      </div>

		</div>
	)
}

export default Post

