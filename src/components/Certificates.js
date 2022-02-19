import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Container from '../components/Container/Container'

const Certificates = ({certificates}) => {
    // const csImage;
    return (
        <Container>
            <div className='certificates'>
                {
                    certificates.map((certificate, index, image) =>{
                        <div key={index} className={`certificate certificate-${index}`}>
                            {image = getImage(certificate.image.localFile)
                            }
                            {console.log(image)}
                        {/* <img src={certificate.image ? certificate.image.mediaItemUrl: ''} /> */}
                        <GatsbyImage image={image} alt={`certificate-${index}`} />
                    </div>
                    }
                    )
                }            
            </div>
        </Container>
    )
}

export default Certificates
