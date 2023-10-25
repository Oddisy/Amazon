import React from "react";
import {SignInForm, amazonLogo} from "../../components/export";
import Button from "../../components/button/button";
Button;

const SignIn = () => {
	return (
		<div className="bg-red-200 min-h-screen w-full overflow-y-hidden">
			<div className=" flex items-center justify-center flex-col max-w-screen-xl mx-auto">
				<div className="w-full lg:w-1/2 h-auto lg:h-auto lg:drop-shadow-lg bg-[#FFFFFF]  p-4">
					<div className="flex items-center flex-col">
						<span>
							<img src={amazonLogo} className="h-8 mt-4 mb-4 lg:w-16" alt="" />
						</span>
						{/* sign in form */}
						<SignInForm />
						{/* sign in form ends here  */}
						<div className="flex lg:w-[45.9%] w-[87%] sm:w-[55%] md:w-[50%]pt-2  items-start">
							<span className=" mt-2 w-[29%] border-b-[0.3px] border-gray-300 "></span>
							<span className=" text-center  w-[50%] mx-auto text-[0.8rem]">
								New to Amazon?
							</span>
							<span className="w-[29%] mt-2 border-b-[0.3px] border-gray-300"></span>
						</div>
						{/* button */}
						<Button
							className="py-1 lg:w-[45.9%] w-[80%] sm:w-[55%] md:w-[50%]text-[0.9rem] drop-shadow-lg  hover:bg-gray-200 bg-gray-50 bg-gradient-to-tr from-gray-50 to-gray-50; px-0 flex items-center justify-center buttonStyle"
							buttonText="Create your Amazon account"
						/>
					</div>
				</div>
				<div className=" lg:w-1/2 h-auto bg-red-400"></div>
			</div>
		</div>
	);
};

export default SignIn;
