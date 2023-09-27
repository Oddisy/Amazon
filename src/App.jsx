import React from "react";
import LandingPage from "./pages/landingpage";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn} from "./components/export";

import {Cart} from "./components/export";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="Cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
