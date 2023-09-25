import React from "react";
import LandingPage from "./pages/landingpage";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn} from "./components/export";
import axios from "axios";
import {useEffect, useState} from "react";
import {Cart} from "./components/export";
function App() {
	const [ApiData, setApiData] = useState([]);
	async function fetchProductApi() {
		try {
			let response = await axios.get("https://fakestoreapi.com/products");
			const data = response.data;
			setApiData(data);
		} catch (error) {
			console.error("error fetching data", error);
		}
	}

	useEffect(() => {
		fetchProductApi();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage api={ApiData} />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="Cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
