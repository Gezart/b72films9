import React from 'react'
import Header from '../components/Header';
import { graphql } from 'gatsby';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs/AboutUs';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';

const About = ({data}) => {
    const about = data.wpPage;
    return (
        <>
            <Header />
            <Banner banner={about.banner.banner}></Banner>
            <AboutUs  aboutUs= {about.aboutUs}/>
            <Certificates certificates={about.certificates.certificates} />
            <Services services={about.services}/>
            <Team team={about.team}/>
            <Footer />
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
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      certificates {
        certificates {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`