import React from 'react'
import AllBlog from '../components/AllBlog'
import Container from '../components/Container/Container'
import Header from '../components/Header'
import { graphql } from 'gatsby'
import Banner from '../components/Banner'

const Blog = ({data}) => {
    console.log("All posts:", data.allWpPost)
    const blog = data.wpPage;
    return (
        <>
            <Header />
            <Banner title={blog.banner.banner.title} content={blog.banner.banner.content} background={blog.banner.banner.background}></Banner>
            <Container>
                <AllBlog posts={data.allWpPost.nodes} />
            </Container>   
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
            mediaItemUrl
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
            mediaItemUrl
          }
        }
      }
    }
  } 
`
