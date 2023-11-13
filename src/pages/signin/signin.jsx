import React, {useState} from "react";
import {Form, amazonLogo} from "../../components/exports";
import Button from "../../components/button/button";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
// importing validation library for validations
import {Formik, useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {useLoginMutation} from "../../app/api";
import Input from "../../components/input/input";
const initialValues = {
	username: "",
	password: "",
};
const Loo = () => {
	console.log("yessss");
};

const validationSchema = Yup.object({
	username: Yup.string()
		.min(5, "Name is too short!")
		.max(40, "Name is too long")
		.required("Email is Required!"),
	password: Yup.string().length(8).required("Password is required!"),
});

const Signin = () => {
	const loginPassword = useSelector((state) => state?.auth?.password);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [onLogin] = useLoginMutation();

	// store formik fields in a variable

	const handleLogin = async () => {
		setLoading(true);
		try {
			const postData = {
				username: formik.values.username,
				password: formik.values.password,
			};
			const res = await onLogin(postData);
			if (res) {
				dispatch(
					setUserValues({
						token: res.data.token,
						email: res.data.email,
						username: res.data.username,
					})
				);
				navigate("/Buy");
			}
		} catch (err) {
			console.error("Error logging in:", err);
			toast.error("There was an error logging in.");
		} finally {
			setLoading(false);
		}
	};
	const formik = useFormik({
		initialValues,
		validationSchema,
		// onSubmit: handleLogin,
	});

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
								className="h-16 lg:h-8 mt-4 mb-4 lg:w-16"
								alt=""
							/>
						</Link>
						{/* sign in form */}{" "}
						<Form
							// onSubmit={formik.handleLogin}
							onClick={handleLogin}
							htmlFor="password"
							labelText="Password"
							type="password"
							labelTextClassName="text-[.8rem] mb-1 font-semibold"
							inputClassName="w-full rounded-sm outline-none p-2 h-8 border-[0.1px] border-gray-500 focus:shadow-outline-blue"
						/>
						{/* sign in form ends here  */}
						<div className="flex lg:w-[58%] w-[87%] sm:w-[55%] md:w-[50%]  pt-2  items-start">
							<span className=" mt-2 w-[29%] border-b-[0.3px] border-gray-300 "></span>
							<span className=" text-center  w-[50%] mx-auto text-[0.8rem]">
								New to Amazon?
							</span>
							<span className="w-[29%] mt-2 border-b-[0.3px] border-gray-300"></span>
						</div>
						{/* button */}
						<Link
							className="lg:w-[58%] w-[87%] sm:w-[55%] md:w-[50%]"
							to="/signup"
						>
							<Button
								className="py-1 w-full focus:shadow-outline-blue  text-[0.9rem] drop-shadow-lg  hover:bg-gray-200 bg-gray-50 bg-gradient-to-tr from-gray-50 to-gray-50; px-0 flex items-center justify-center buttonStyle"
								buttontext="Create your Amazon account"
							/>
						</Link>
					</div>
				</div>
				<div className="h-[0.1px] bg-gray-200 w-full mt-2 drop-shadow-lg"></div>
				<div className=" flex justify-center  w-full mt-2 h-auto">
					<div className="w-1/2  flex justify-center  ">
						<div className="flex flex-col gap-4 mt-2 lg:w-[40%] w-[100%] sm:w-[55%] md:w-[50%]    ">
							<div className="flex justify-between">
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
							<span className="text-[.7rem]">
								© 1996-2023, Amazon.com, Inc. or its affiliates
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
