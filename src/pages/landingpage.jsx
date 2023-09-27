import React from "react";
import NavBar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import {Footer} from "../components/export";
import Products from "../components/products/products";
import axios from "axios";
import {useEffect, useState} from "react";
const LandingPage = () => {
	const [ApiData, setApiData] = useState([]);
	async function fetchProductApi() {
		try {
			let response = await axios.get("https://fakestoreapi.com/products");
			const data = response.data;
			setApiData(data);
			// console.log("this is the data: ", data);
		} catch (error) {
			console.error("error fetching data", error);
		}
	}

	useEffect(() => {
		fetchProductApi();
	}, []);
	return (
		<>
			<NavBar />
			{/* <Hero /> */}
			<Products api={ApiData} />
			<Footer />
		</>
	);
};
export default LandingPage;
