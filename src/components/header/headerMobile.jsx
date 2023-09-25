import React from "react";
import {Link} from "react-router-dom";
import {amazonLogo} from "../export";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
const HeaderMobile = () => {
	return (
		<div className=" items-center w-full px-4 py-2  bg-amazon_background_bg ">
			{/* Image{amazonLogo} */}
			<div className="flex items-center gap-4 ">
				<img className=" w-24" src={amazonLogo} alt="" />
				{/* Deliver  */}
				<div className="flex  items-center">
					<LocationOnIcon className="text-amazon_white_text" />

					<div className="text-amazon_light_text text-sm flex flex-col">
						Deliver to
						<span className="text-amazon_white_text">Nigeria</span>
					</div>
				</div>
			</div>
			{/* Input  */}
			<div className="mx-auto flex items-center w-[100%] h-[40px] rounded-lg bg-white">
				<ArrowDropDown />
				<input className="h-full w-[80%]" />
				<span className=" flex items-center justify-center w-[10%] h-full bg-yellow-300"></span>
			</div>
			{/* <div className=" hover:border-2 gap-0 p-1  flex  flex-col items-center justify-center h-full  w-[130px] leading-tight  ">
				<span>
					<Link to="/SignIn">
						<h5 className="w-full mr-[4rem] text-gray-400">Hello, sign in</h5>
					</Link>
				</span>
				<span className="flex w-[100%] ">
					<span className=" mr-[-4px] gap-1 flex text-sm font-bold ">
						<span>Account</span> <span>&</span>
						<span>Lists</span>
					</span>
					<span>
						<ArrowDropDownIcon />
					</span>
				</span>
			</div> */}
		</div>
	);
};

export default HeaderMobile;
