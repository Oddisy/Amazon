import React from "react";
import {amazonLogo} from "../export";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDown from "@mui/icons-material/LocationOn";
const HeaderMobile = () => {
	return (
		<div className=" bg-blue-500 items-center w-full px-4 py-2  bg-amazon_background_bg ">
			{/* Image{amazonLogo} */}
			<div className="flex items-center gap-4 ">
				<img className=" w-24" src={amazonLogo} alt="" />
				{/* Deliver  */}
				<div className="flex items-center">
					<LocationOnIcon className="text-amazon_white_text" />

					<div className="text-amazon_light_text text-sm flex flex-col">
						Deliver to
						<span className="text-amazon_white_text">Nigeria</span>
					</div>
				</div>
			</div>
			{/* Input  */}
			<div className="ml-4 w-[60%] h-[40px] rounded-lg bg-white">
				<ArrowDropDown />
			</div>
		</div>
	);
};

export default HeaderMobile;
