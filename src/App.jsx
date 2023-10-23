import React from "react";
import LandingPage from "./pages/landingpage";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn, Cartpage} from "./components/export";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="Cartpage" element={<Cartpage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
