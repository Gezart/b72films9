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
		<Banner banner={home.banner.banner}></Banner>
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
			localFile {
			  childImageSharp {
				gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
			  }
			}
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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