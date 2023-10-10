import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCartOutlinedIcon, amazonLogo} from "../export";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
const HeaderMobile = () => {
	return (
		<div className="  w-full px-4 py-2   bg-amazon_background_bg ">
			{/* Image{amazonLogo} */}
			<div className="flex items-center justify-between gap-4 mx-2 ">
				<img className=" w-24" src={amazonLogo} alt="" />
				{/* Account and sign in  */}
				<div className=" hover:border-2 gap-0 p-1  flex  flex-col items-center justify-center h-full  w-[130px] leading-tight  ">
					<span>
						<Link to="/SignIn">
							<h5 className="w-full mr-[4rem] text-gray-400">Hello, sign in</h5>
						</Link>
					</span>
				</div>
				{/* Account and sign in ends  */}
				{/* <Cart /> */}
				<Link to="/Cart">
					<div className=" relative hover:border-2 gap-0 font-bold flex items-center mt-1 justify-center h-[40px]   w-[25%]">
						<span className="w-full text-white items-baseline flex">
							<ShoppingCartOutlinedIcon />
							<span>Carts</span>
						</span>
						<span className="flex ">
							<span className=" absolute top-[-2px] right-[-10px] w-4 h-4 flex items-center justify-center text-[10px] rounded-full  bg-yellow-500 font-bold ">
								0
							</span>{" "}
						</span>
					</div>
				</Link>
			</div>
			{/* Cart ends here  */}
			{/* Input  */}
			<div className=" flex items-center w-[96%] mx-auto h-[40px] rounded-lg bg-white">
				<ArrowDropDown />
				<input className="h-full w-[80%]" />
				<span className=" flex items-center justify-center w-[10%] h-full bg-yellow-300"></span>
			</div>

			{/* Deliver  */}
			<div className="flex  items-center">
				<LocationOnIcon className="text-amazon_white_text" />

				<div className="text-amazon_light_text text-sm flex flex-col">
					Deliver to
					<span className="text-amazon_white_text">Nigeria</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderMobile;
