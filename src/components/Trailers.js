import React from 'react'
import Container from './Container/Container'

const Trailers = ({trailers}) => {
    return (
        <Container>
            <div className='trailers'>
                { trailers.map((trailer, index) => 
                
                    <div className='trailer' key={index}>
                        <video controls={true} name="media" poster={trailer.poster ? trailer.poster.mediaItemUrl: ''}>
                            <source src={trailer.videohome ? trailer.videohome.mediaItemUrl: ''} type="video/mp4" />
                        </video> 
                    </div>
                    )}
            </div>
        </Container>
    )
}

export default Trailers

