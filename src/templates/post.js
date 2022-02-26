import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/Container/Container"
import Footer from "../components/Footer"


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

	
  const blogOptions = query.wp.blogOption.blogOptions;
  console.log(post.featuredImage);
	return (
		<div className="single-post">
			<Header />
			<Banner banner={blogOptions}></Banner>
			<Container>
        <div className="post-content">
          <h2>{post.title}</h2>
          <GatsbyImage image={getImage(post.background.localFile)} alt="post-image"/>
          <p>{post.content}</p>
        </div>
      </Container>
      <Footer />
		</div>
	)
}

export default Post

