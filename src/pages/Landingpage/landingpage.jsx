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
	const [error, setError] = useState(false);

	async function fetchProductApi() {
		try {
			let response = await axios.get("https://fakestoreapi.com/products");
			const data = response.data;
			setApiData(data);
			setIsLoading(false);
			setError(false);
		} catch (error) {
			setError(true);
		}
	}

	useEffect(() => {
		// Set a timer to trigger an error if the API request hasn't completed within 6 seconds
		const timer = setTimeout(() => {
			ApiData ? setError(false) : setError(true);
		}, 6000);

		fetchProductApi();

		return () => {
			// Clear the timer if the request completes before 4 seconds
			clearTimeout(timer);
		};
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
			{error ? (
				<div className="error-message ">
					<i>Error, please check your internet and try again.</i>
				</div>
			) : isLoading ? (
				<div
					className={`italic absolute top-0 h-[100vh] w-[100%] flex items-center justify-center text-white
					 bg-opacity-1  z-50 ${ApiData ? "bg-amazon_background_bg" : " "}`}
				>
					<div>
						<div className="loading-ring"></div>
						<p className="loading-text">Loading{dots}</p>
					</div>
				</div>
			) : (
				<div className="relative w-full">
					{/* <Hero /> */}
					<div className="absolute top-[20%] w-[100%] md:top-[50%]">
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
