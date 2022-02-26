exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
  
	const wpData = await graphql(`
	query MyQuery {
		allWpPost {
		  nodes {
			date
			title
			featuredImage {
			  node {
				mediaItemUrl
			  }
			}
			content
			slug
		  }
		}
	  } 
  `)

	if (wpData.errors) {
		console.error(wpData.errors)
	}

	const { allWpPost } = wpData.data
	allWpPost.nodes.forEach( post => {
		createPage({
			path: `blog/${post.slug}`,
			component: require.resolve(`./src/templates/post.js`),
			context: { post },
		})
	})

	// const { allWpPage } = wpData.data
	// allWpPage.nodes.forEach( page => {
	// 	createPage({
	// 		path: `/${page.slug}`,
	// 		component: require.resolve(`./src/templates/page.js`),
	// 		context: { page },
	// 	})
	// })
  
}