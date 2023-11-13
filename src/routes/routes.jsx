import React from "react";
import {useRoutes} from "react-router-dom";
import {SignIn, Signup, Cartpage} from "../components/exports";
import LandingPage from "../pages/Landingpage/landingpage";
import {ProtectedRoute} from "../helpers/helpers";
import Buy from "../pages/BUY/buy";

export const Routes = () => {
	const route = useRoutes([
		{
			path: "/Signup",
			element: <Signup />,
		},
		{
			path: "/SignIn",
			element: <SignIn />,
		},
		{
			path: "/Cartpage",
			element: <Cartpage />,
		},
		{
			path: "/",
			element: <LandingPage />,
		},
		{
			path: "/Buy",
			element: (
				// <ProtectedRoute>
				<Buy />
				// </ProtectedRoute>
			),
		},
	]);
	return route;
};
