import React from "react";
import NavBar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import {Footer} from "../components/export";
import Products from "../components/products";
const LandingPage = ({api}) => {
	return (
		<>
			<NavBar />
			{/* <Hero /> */}
			<Products api={api} />
			<Footer />
		</>
	);
};
export default LandingPage;
