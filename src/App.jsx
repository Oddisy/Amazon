import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn, Signup, Cartpage} from "./components/exports";
import LandingPage from "../src/pages/Landingpage/landingpage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="Cartpage" element={<Cartpage />} />
					<Route path="Signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
