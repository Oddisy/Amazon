import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {store} from "../src/redux/store.js";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
