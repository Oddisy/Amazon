import React from "react";
import {Toaster} from "react-hot-toast";
import "./App.css";
import {Routes} from "./routes/routes";

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

			<Routes />
		</div>
	);
}

export default App;
