import React from 'react'
import Container from './Container/Container';
const Banner = ({title, background, content}) => {
    // const banner = props.banner;
    return (
        <>
            <div className='banner' style={{backgroundImage: `url(${background && background.mediaItemUrl })`}}>
                <Container>
                    <div className="banner-wrapper">
                        <div className="banner-content">
                            {/* <h2>Category Film</h2> */}
                            <h1>{title}</h1>
                            <p className='content'>{content}</p>
                        </div>
                    </div>
                </Container>
            </div>  
        </>
    )
}

export default Banner


