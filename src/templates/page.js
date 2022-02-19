import React from "react"
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";


const Page = ({ pageContext: { page } }) => {
	return (
		<div style={{margin: 0, padding: 0}}>
            <Header />
            <Banner banner={page.banner.banner}  />
			{/* <AboutUs aboutUs= {page.aboutUs}/> */}
		</div>
	)
}

export default Page