import React, {useState} from "react";
import {BiPlay} from "react-icons/Bi";
import Button from "../../button/button";
const SignInForm = () => {
	const [needHelp, setNeedHelp] = useState(false);

	return (
		<div className="w-[45.9%]  p-6 rounded-lg border-[0.3px] border-gray-200  outline-0 flex flex-col gap-4 h-auto ">
			{/* Sign up form header */}
			<h1 className="font-normal lg:text-3xl">Sign In</h1>
			{/* sign up form header ends here */}
			{/* Sign up form field */}
			<form className="flex flex-col gap-4" action="#">
				<label htmlFor="email">
					<p className="text-[.8rem] mb-1 font-semibold">
						Email or mobile phone number
					</p>
					{/* form input */}
					<input
						className="w-full rounded-sm outline-none p-2 h-8 border-[0.1px] border-gray-500 focus:shadow-outline-blue"
						type="email"
					/>
				</label>

				<Button buttonText="Continue" className="py-1 buttonStyle" />
			</form>
			{/* sign up form field ends here  */}
			{/* terms of services  */}
			<p className="text-[.8rem]">
				By continuing, you agree to Amazon's{" "}
				<span className="text-[#374faf] font-semibold  hover:text-red-400 hover:underline cursor-pointer">
					Conditions of Use
				</span>{" "}
				and{" "}
				<span className="text-[#374faf] font-semibold cursor-pointer hover:text-red-400 hover:underline">
					Privacy Notice.
				</span>
			</p>
			{/* forgot password or need other services starts here */}
			<p
				onClick={() => {
					setNeedHelp(!needHelp);
				}}
				className="text-[#374faf] font-semibold text-[.8rem] flex  flex-col "
			>
				{" "}
				<div className="flex items-center hover:text-red-400 hover:underline cursor-pointer ">
					<span
						className={` text-gray-500 ${needHelp ? "rotate-90" : "rotate-0"}`}
					>
						<BiPlay className=" text-gray-500" />
					</span>
					<p>Need help?</p>
				</div>
				{/* text embedded in need help */}
				{needHelp && (
					<span className="ml-3">
						<p className="hover:text-red-400 hover:underline cursor-pointer">
							Forgot your password?
						</p>
						<p className="hover:text-red-400 hover:underline cursor-pointer">
							Other issues with Sign-In
						</p>
					</span>
				)}
			</p>
			{/* forgot password or need other services starts here */}
		</div>
	);
};

export default SignInForm;