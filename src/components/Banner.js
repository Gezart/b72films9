import {GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Container from './Container/Container';
const Banner = ({banner}) => {
    var image = getImage(banner.background.localFile);
    return (
        <>
            <div className='banner'>
                <GatsbyImage className='banner-image' image={image} alt="Banner Image"/>
                <Container>
                    <div className="banner-wrapper">
                        <div className="banner-content">
                            <h1>{banner.title}</h1>
                            <p className='content'>{banner.content}</p>
                        </div>
                    </div>
                </Container>
            </div>  
        </>

    )
}

export default Banner


