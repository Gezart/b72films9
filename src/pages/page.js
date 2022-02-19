import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import createPages from '../../gatsby-node'


const PageTemplate = () => {
	return (
		<div>
			{/* <h2>{page.slug}</h2> */}
			{/* <p>{page.author.name}</p> */}
			{/* <div dangerouslySetInnerHTML={{ __html: page.content }} /> */}
		</div>
	)
}
  
  export default PageTemplate


