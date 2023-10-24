import React, {useState} from "react";
import {List, SearchIcon, allitems} from "../export";
import {Link} from "react-router-dom";
import {ShoppingCartOutlinedIcon, amazonLogo} from "../export";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import {useSelector} from "react-redux";

const HeaderMobile = () => {
	const [displayItems, setDisplayItems] = useState(false);
	const products = useSelector((state) => state.amazonReducer.products);

	return (
		<div className="w-full absolute -top-2 bg-amazon_background_bg">
			<div className="w-[94%] mx-auto py-2">
				<div className="flex items-center justify-between w-[96%] -ml-4 mb-2">
					<Link to="/">
						<img className="object-contain w-24 h-8" src={amazonLogo} alt="" />
					</Link>
					<div className="hover:border-2 gap-0 p-1 flex flex-col items-center justify-center h-full w-[130px] leading-tight">
						<span>
							<Link to="/SignIn">
								<h5 className="w-full mr-[4rem] text-gray-400">
									Hello, sign in
								</h5>
							</Link>
						</span>
					</div>
					<Link to="/Cartpage">
						<div className="relative hover:border-2 gap-0 font-bold flex items-center mt-1 justify-center h-[40px] w-[25%]">
							<span className="w-full text-white items-baseline flex">
								<ShoppingCartOutlinedIcon />
								<span>Carts</span>
							</span>
							<span className="flex">
								<span className="absolute top-[-2px] right-[-10px] w-4 h-4 flex items-center justify-center text-[10px] rounded-full bg-yellow-500 font-bold">
									{products.length > 0 ? products.length : 0}
								</span>
							</span>
						</div>
					</Link>
				</div>

				<div className=" flex items-center w-[96%] h-[40px] rounded-lg bg-white">
					<span
						onClick={() => setDisplayItems(!displayItems)}
						className="cursor-pointer"
					>
						<ArrowDropDown />
					</span>
					{displayItems && (
						<div className="relative">
							<ul className="z-300 overflow-y-scroll rounded-lg text-amazon_text_dark w-[200px] h-[370px] bg-amazon-white-text border-[1px] border-amazon_header_bg bg-amazon_white_text absolute top-[20px] -left-6">
								{allitems.map((item, index) => (
									<div key={index}>
										<List title={item.title} />
									</div>
								))}
							</ul>
						</div>
					)}
					<input className="h-full w-[80%]" />
					<span className="flex items-center justify-center w-[20%] h-full rounded-tr-md rounded-br-md bg-yellow-600">
						<SearchIcon className="text-lg" />
					</span>
				</div>

				<div className="flex items-center">
					<LocationOnIcon className="text-amazon_white_text" />
					<div className="text-amazon_light_text text-sm flex flex-col">
						Deliver to
						<span className="text-amazon_white_text">Nigeria</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMobile;
