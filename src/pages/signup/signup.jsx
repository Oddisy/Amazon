import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Formik, Field, ErrorMessage, Form} from "formik";
import * as Yup from "yup";

import {useSignupMutation} from "../../app/api";
import {amazonLogo} from "../../components/exports";
import {useNavigate, Link} from "react-router-dom";
import Button from "../../components/button/button";
import {BiPlay} from "react-icons/Bi";
import {toast} from "react-hot-toast";
import Input from "../../components/input/input";

const SignIn = () => {
	// yup validation schema
	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Username is required"),
		emailAddress: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
	});
	//   validationSchema ends here
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailAddress, setEmailAddress] = useState("");

	const [loading, setLoading] = useState(false);
	const [onSignup] = useSignupMutation();

	const handleSubmit = async () => {
		setLoading(true);
		const postData = {
			username: userName,
			confirmPassword: confirmPassword,
			emailAddress: emailAddress,
			password: password,
		};

		try {
			const res = await onSignup(postData);
			if (res) {
				dispatch(
					setLoginEmailValues({
						email: res?.data.data.newUser.emailAddress,
					})
				);
				dispatch(
					setLoginUserNameValues({
						username: res?.data.data.newUser.username,
					})
				);
				navigate("/signin");
				setLoading(false);
			}
		} catch (err) {
			toast.error("there was an error: ", err);
			setLoading(false);
		}
	};
	return (
		<div className=" min-h-screen w-full overflow-y-hidden">
			<div className=" flex items-center justify-center flex-col max-w-screen-xl mx-auto">
				<div
					className="w-full lg:w-1/2 h-auto lg:h-auto  pb-2 bg-[#FFFFFF] 
				 p-4"
				>
					<div className="flex items-center flex-col">
						<Link to="/">
							<img
								src={amazonLogo}
								className="object-contain h-14 -mt-3   w-32"
								alt=""
							/>
						</Link>
						{/* sign in form */}
						<div
							className="lg:w-[58%] w-[87%] sm:w-[55%] md:w-[50%]  p-6 rounded-lg border-[0.3px] border-gray-200 
                         outline-0 flex flex-col gap-4 h-auto "
						>
							{/* Sign up form header */}
							<h1 className="font-normal text-3xl">Create account</h1>
							{/* sign up form header ends here */}
							{/* Sign up form field */}

							<form className="flex flex-col gap-4" action="#">
								<Input
									htmlFor="name"
									id="yourName"
									value={userName}
									onChange={(e) => setUserName(e.target.value)}
									labelTextClassName="text-[.8rem] mb-1 font-bold"
									labelText="Your name
                                    "
									placeholder="First and last name"
									inputClassName="w-full rounded-sm outline-none p-2 h-8 border-[0.1px] border-gray-500 focus:shadow-outline-blue"
									type="name"
								/>

								<Input
									htmlFor="email"
									id="email"
									value={emailAddress}
									onChange={(e) => setEmailAddress(e.target.value)}
									labelTextClassName="text-[.8rem] mb-1 font-bold"
									labelText="Mobile phone number or email"
									inputClassName="w-full rounded-sm outline-none p-2 h-8 border-[0.1px] border-gray-500 focus:shadow-outline-blue"
									type="email"
								/>
								<Input
									htmlFor="password"
									labelTextClassName="text-[.8rem] mb-1 font-bold"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									labelText="password"
									inputClassName="w-full rounded-sm outline-none p-2 h-8 border-[0.1px] border-gray-500 focus:shadow-outline-blue"
									type="Password"
									Re-enter
									password
								/>
								<Input
									htmlFor="Re-enter password"
									labelTextClassName="text-[.8rem] mb-1 font-bold"
									labelText="Re-enter password"
									id="Re-enter password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									inputClassName="w-full rounded-sm outline-none p-2 h-8 border-[0.1px] border-gray-500 focus:shadow-outline-blue"
									type="password"
								/>

								<Button
									buttonText="Continue"
									className="py-1 flex items-center justify-center buttonStyle focus:shadow-outline-blue"
									onClick={handleSubmit}
								/>
							</form>
							{/* sign up form field ends here  */}
							{/* terms of services  */}
							<div className="text-[.8rem] font-normal">
								By creating an account, you agree to Amazon's{" "}
								<span className="text-[#374faf] font-semibold  hover:text-red-400 hover:underline cursor-pointer">
									Conditions of Use
								</span>{" "}
								and{" "}
								<span className="text-[#374faf] font-semibold cursor-pointer hover:text-red-400 hover:underline">
									Privacy Notice.
								</span>
							</div>
							{/* forgot password or need other services starts here */}
							<div className="text-[#374faf] font-semibold text-[.8rem] border-t pt-6 border-gray-200 flex  flex-col ">
								{" "}
								<div className="flex items-center  ">
									<p className=" text-black font-semibold ">
										Already have an account?
									</p>

									<Link to="/Signin">
										<p className="ml-1 flex items-center formLinksHover">
											Sign in
											<BiPlay className=" text-gray-500" />
										</p>
									</Link>
								</div>
								<div className="flex items-center flex-col sm:flex-row  ">
									<p className=" text-black font-semibold ">Buying for work?</p>

									<p className="ml-1 flex items-center formLinksHover">
										Create a free business account
										<BiPlay className=" text-gray-500" />
									</p>
								</div>
							</div>
							{/* forgot password or need other services starts here */}
						</div>
						{/* sign in form ends here  */}
					</div>
				</div>
				<div className="h-[0.1px] bg-gray-200 w-full mt-2 drop-shadow-lg"></div>
				<div className=" flex justify-center  w-full mt-2 h-auto">
					<div className="w-1/2  flex justify-center  ">
						<div className="flex flex-col gap-4 mt-2 lg:w-[40%] w-[87%] sm:w-[55%] md:w-[60%]    ">
							<div className="flex justify-between gap-2">
								<span className="text-[#374faf] text-[.7rem] font-semibold  hover:text-red-400 hover:underline cursor-pointer">
									Conditions of Use
								</span>{" "}
								<span className="text-[#374faf] text-[.7rem] font-semibold cursor-pointer hover:text-red-400 hover:underline">
									Privacy Notice
								</span>
								<span className="text-[#374faf] text-[.7rem] font-semibold cursor-pointer hover:text-red-400 hover:underline">
									help
								</span>
							</div>
							<p className="text-[.7rem]">
								© 1996-2023, Amazon.com, Inc. or its affiliates
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
