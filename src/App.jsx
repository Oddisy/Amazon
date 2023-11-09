import React from "react";
import {Toaster} from "react-hot-toast";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SignIn, Signup, Cartpage} from "./components/exports";
import LandingPage from "../src/pages/Landingpage/landingpage";
import Buy from "./pages/BUY/buy";

function App() {
	return (
		<div>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 5000,
					style: {
						background: "#363636",
						color: "#fff",
					},
					// Default options for specific types
					success: {
						duration: 4000,
						theme: {
							primary: "green",
							secondary: "black",
						},
					},
				}}
			/>
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="Cartpage" element={<Cartpage />} />
					<Route path="Signup" element={<Signup />} />
					<Route path="Buy" element={<Buy />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
