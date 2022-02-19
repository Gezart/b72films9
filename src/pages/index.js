import React from "react"
import Header from "../components/Header";
import '../global.module.scss'
import { graphql } from "gatsby";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Counter from "../components/Counter";
import Trailers from "../components/Trailers";
import '../assets/css/main.css';

export default function Home({data}) {
  console.log(data); 	
  const home = data.wpPage;
  return (
    <>
		<Header />
		<Banner title={home.banner.banner.title} content={home.banner.banner.content} background={home.banner.banner.background}></Banner>
		<AboutUs aboutUs= {home.aboutUs}/>
		<Counter counter={home.counter} />
		<Trailers trailers={home.trailers.trailers}/>
    </>
  );
}
export const data = graphql `
query Home {
	wpPage(slug: {eq: "home"}) {
	  title
	  slug
	  banner {
		banner {
		  title
		  content
		  background {
			mediaItemUrl
		  }
		}
	  }
	  aboutUs {
		title
		content
		buttonText
		buttonLink {
		  url
		}
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
	  }
	  counter {
		counter {
		  number
		  text
		}
		counterBackground {
		  mediaItemUrl
		}
	  }
	  trailers {
		trailers {
		  videohome {
			mediaItemUrl
		  }
		  poster {
			mediaItemUrl
		  }
		}
	  }
	}
  }
`