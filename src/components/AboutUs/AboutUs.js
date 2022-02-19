import {GatsbyImage,  getImage } from 'gatsby-plugin-image';
import React from 'react'
import Container from '../Container/Container'
const AboutUs = (props) => {
    const aboutUs = props.aboutUs;
    const title = aboutUs.title;
    const content = aboutUs.content;
    const buttonText = aboutUs.buttonText;
    const image = getImage(aboutUs.image.localFile);
    return (
        <Container>
        <div className='plain-text'>
            <div className='content'>
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{buttonText}</button>
            </div>
            <div className='image'>
                <GatsbyImage image={image} alt="About image"/>
                {/* <img src={image ? image.mediaItemUrl : ''} alt="" /> */}
                {/* <GatsbyImage src={image ? image.mediaItemUrl : ''} alt=""></GatsbyImage> */}
            </div>
        </div>
        </Container>
    )
}

export default AboutUs
