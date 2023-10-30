import React from "react";
import {useSelector} from "react-redux";
import {
	amazonLogo,
	LocationOnIcon,
	ArrowDropDownIcon,
	ShoppingCartOutlinedIcon,
	Generalinputcontainer,
	Link,
} from "../exports";

const HeaderPc = () => {
	const products = useSelector((state) => state.amazonReducer.products);

	return (
		<div className=" w-full flex justify-center  bg-amazon_background_bg">
			<div className=" sticky top-0 flex items-center w-[95%] h-[58px] px-1 py-2  bg-amazon_background_bg ">
				{/* Image{amazonLogo} */}
				<div className="flex items-center gap-6 mr-10 ">
					<Link to="/">
						<img className="h-14 w-32" src={amazonLogo} alt="amazon logo" />
					</Link>
					{/* Deliver  */}
					<div className="flex items-center w-[80%]">
						<LocationOnIcon className="text-amazon_white_text mt-2" />

						<div className="text-amazon_light_text  text-sm flex flex-col">
							<span className=" flex w-full -mb-1">
								<span className="mr-2">Deliver</span>
								<span>to</span>
							</span>
							<span className="text-amazon_white_text">Nigeria</span>
						</div>
					</div>
				</div>
				{/* general input container  */}
				<Generalinputcontainer />
				{/* general input container ends here */}
				{/* right side of the header  */}
				<div className=" relative flex border-1 w-[24%] h-full  cursor-pointer ml-4 text-white items-center text-[14px]">
					{/* Usa flag and dropDownIcon starts here */}
					{/* <div className=" mr-2 hover:border-2  font-bold w-[80%] flex items-center pt-3 justify-center h-full">
						<span className="w-6 mr-2 h-4">
							<img src={usaFlag} className="h-full  w-full  " alt="Usa flag" />
						</span>
						<span className=" flex mr-[-2px] text-[16px]">EN</span>
						<span>
							<ArrowDropDownIcon />
						</span> */}
					{/* display preferred languages */}
					{/* {languageOver && (
							<div className="absolute right-0  top-[43px] w-[250px] h-[594px] bg-blue-500">
								<ArrowDropUpIcon className="absolute right-[124px] top-[-14px]" />
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						)}
					</div> */}
					{/* Usa flag flag and dropdown ends here  */}
					{/* Account and sign in  */}
					<div className=" hover:border-2 gap-0 p-1  flex  flex-col items-center justify-center h-full  w-[130px] leading-tight  ">
						<span>
							<Link to="/SignIn">
								<h5 className="w-full mr-[4rem] text-gray-400">
									Hello, sign in
								</h5>
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
					</div>
					{/* Account and sign in ends  */}
					{/* Returns and Orders  */}
					<div className=" hover:border-2 gap-0  flex  flex-col items-center justify-center h-full w-[100px] leading-tight  ">
						<span>
							<h5 className="mr-[40px] text-gray-400 ">Returns</h5>
						</span>
						<span className="flex">
							<span className=" mr-[-4px] text-[16px] font-bold ">&Orders</span>
							<span>
								<ArrowDropDownIcon />
							</span>
						</span>
					</div>
					{/* Return and header ends */}
					{/* <Cart /> */}
					<Link to="/Cartpage">
						<div className=" relative gap-0 font-bold flex items-center mt-1 justify-center h-[40px]   w-[25%]">
							<span className="w-full items-baseline flex">
								<ShoppingCartOutlinedIcon />
								<span>Carts</span>
							</span>
							<span className="flex ">
								<span className=" absolute top-[-2px] right-[-10px] w-4 h-4 flex items-center justify-center text-[10px] rounded-full  bg-yellow-500 font-bold ">
									{products.length > 0 ? products.length : 0}
								</span>
							</span>
						</div>
					</Link>
					{/* Cart ends here  */}
				</div>
				{/* Account and sign in ends here  */}
			</div>
		</div>
	);
};

export default HeaderPc;
