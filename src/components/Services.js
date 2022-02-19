import React from 'react'
import Container from '../components/Container/Container'
const Services = ({services}) => {
    const ourServices = services.service
    return (
        <div className='services'>
            <Container>
                <div className="section-header">
                    <h2>{services.servicesSubtitles}</h2>
                    <h1>{services.servicesTitle}</h1>
                </div>
                <div className="our-services">
                    {
                    ourServices.map((service, index) => 
                        <div className="service" key={index}>
                            <h3>{service.title}</h3>
                            <p>{service.content}</p>
                        </div>
                    )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Services
