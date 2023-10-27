import React from "react";
import Button from "../../button/button";
import {Link} from "react-router-dom";
import {emptyCART} from "../../exports";

function Emptycartleft() {
	return (
		<div className="min-h-[281px] md:min-h-screen md:flex md:items-center bg-white">
			<img
				src={emptyCART}
				className="md:w-[22.5rem] object-contain w-full"
				alt="empty cart"
			/>
			<div className="w-full md:w-96 -mt-4 md:h-44">
				<h1 className="font-bold text-2xl">Your Amazon Cart is empty</h1>
				<h6 className="text-[#187185] mb-4">Shop today's deal</h6>
				<div className="flex flex-col md:flex-row md:gap-4">
					<Link
						className="bg-[#F7CA00] text-[1rem] font-[500] py-[4px] drop-shadow-lg flex items-center justify-center rounded-md px-2 focus:shadow-outline-blue mb-2 md:mb-0"
						to="/Signin"
					>
						<Button buttonText="Sign in to your account" />
					</Link>
					<Link
						className="text-[1rem] font-[500] py-[4px] drop-shadow-lg flex items-center justify-center rounded-md px-2 focus:shadow-outline-blue border-gray-300 border"
						to="/signup"
					>
						<Button buttonText="Sign up now" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Emptycartleft;
