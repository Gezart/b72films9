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
                        <GatsbyImage image={getImage(certificate.image.localFile)} alt={`certificate-${index}`} />
                    </div>
                    }
                    )
                }            
            </div>
        </Container>
    )
}

export default Certificates
