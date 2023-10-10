import React from "react";
import NavBar from "../../components/navbar/navbar";
import {Footer} from "../../components/export";
import {SignInForm} from "../../components/export";
const SignIn = () => {
	return (
		<div>
			<NavBar />
			<div className=" h-screen">
				<SignInForm inputClassName="p-4" />
			</div>
			<Footer />
		</div>
	);
};

export default SignIn;
