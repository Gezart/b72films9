import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from './Container/Container';
const Footer = ({data}) => {
    const query = useStaticQuery(graphql `
    {
        wp {
            footerOption {
                footerOptions {
                    column2Title
              column3Title
              contact {
                text
                icon {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                        childrenImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                    title
                }
                link {
                    url
                }
            }
        }
    }
}
}
`)
let footer =  query.wp.footerOption.footerOptions
  return (
    
    <div className="footer">
        <Container>
            <div className="footer-wrapper">
                <div className="footer-logo">

                </div>
                <div className="footer-column footer-contacts">
                    <h3>{footer.column2Title}</h3>
                    <div className="contacts">
                        {footer.contact.map((contact, index) =>
                            <div key={index} className="contact"><a href={contact.link.url}>{contact.text}</a></div>
                        )}
                    </div>
                </div>
                <div className="footer-column footer-social-media">
                    <h3>{footer.column3Title}</h3>
                   
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer
