import React from 'react'
import AllBlog from '../components/AllBlog'
import Container from '../components/Container/Container'
import Header from '../components/Header'
import { graphql } from 'gatsby'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Blog = ({data}) => {
    const blog = data.wpPage;
    return (
        <>
            <Header />
            <Banner banner={blog.banner.banner}></Banner>
            <Container>
                <AllBlog posts={data.allWpPost.nodes} />
            </Container>   
            <Footer />
        </>
    )
}

export default Blog


export const data = graphql `
query MyQuery {
    allWpPost {
      nodes {
        date
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
        content
        slug
      }
    }
    wpPage(slug: {eq: "blog"}) {
      banner {
        banner {
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
`
