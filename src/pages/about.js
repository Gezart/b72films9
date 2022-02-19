import React from 'react'
import Header from '../components/Header';
import { graphql } from 'gatsby';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs/AboutUs';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import Team from '../components/Team';

const About = ({data}) => {
    const about = data.wpPage;
    return (
        <>
            <Header />
            <Banner title={about.banner.banner.title} content={about.banner.banner.content} background={about.banner.banner.background}></Banner>
            <AboutUs  aboutUs= {about.aboutUs}/>
            <Certificates certificates={about.certificates.certificates} />
            <Services services={about.services}/>
            <Team team={about.team}/>
        </>
    )
}


export default About

export const data = graphql`
  {
    wpPage(slug: {eq: "about"}) {
      banner {
        banner {
          title
          content
          background {
            mediaItemUrl
          }
        }
      }
      aboutUs {
        title
        content
        buttonText
        buttonLink {
          url
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
      certificates {
        certificates {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
      services {
        servicesTitle
        servicesSubtitles
        service {
          title
          content
        }
      }
      team {
        teamTitle
        teamSubtitle
        member {
          name
          jobPosition
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
`