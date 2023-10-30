import React from "react";
import NavBar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./landingpage.css";
import {Footer} from "../../components/exports";
import Products from "../../components/products/products";
import axios from "axios";
import {useEffect, useState} from "react";
const LandingPage = () => {
	const [ApiData, setApiData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [dots, setDots] = useState("...");

	async function fetchProductApi() {
		try {
			let response = await axios.get("https://fakestoreapi.com/products");
			const data = response.data;
			setApiData(data);
			setIsLoading(false);
		} catch (error) {
			console.error("error fetching data", error);
		}
	}

	useEffect(() => {
		fetchProductApi();
	}, []);
	// Function to animate the dots
	const animateDots = () => {
		setTimeout(() => {
			setDots(dots === "..." ? "" : dots + ".");
		}, 500); // Change dots every 500 milliseconds
	};
	// change dots dynamically
	useEffect(() => {
		const intervalId = setInterval(animateDots, 500);
		return () => clearInterval(intervalId);
	}, [dots]);
	return (
		<div>
			{isLoading ? (
				<div
					className={`italic absolute top-0 h-[100vh] w-[100%] flex items-center justify-center text-white
					 bg-opacity-1  z-50 ${ApiData ? "bg-amazon_background_bg" : " "}`}
				>
					{isLoading ? (
						<div>
							<div className="loading-ring"></div>
							<p className="loading-text">Loading{dots}</p>
						</div>
					) : (
						<div>Error, please try again.</div>
					)}
				</div>
			) : (
				<div className="relative">
					{/* <Hero /> */}
					<div className="absolute top-[20%] md:top-[50%]">
						<Products api={ApiData} />
						<div className={`${isLoading ? " hidden" : <p></p>}`}>
							<NavBar />
						</div>
						<div className={`${isLoading ? " hidden" : <span></span>}`}>
							<Footer />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default LandingPage;
