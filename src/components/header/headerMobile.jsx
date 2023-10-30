import React, {useState, useRef, useEffect} from "react";
import {
	List,
	SearchIcon,
	allitems,
	ShoppingCartOutlinedIcon,
	amazonLogo,
	sidecontents,
} from "../exports";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "../sidenav/sidenav";
import {Link} from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import {useSelector} from "react-redux";

const HeaderMobile = () => {
	const [displayItems, setDisplayItems] = useState(false);
	const products = useSelector((state) => state.amazonReducer.products);
	const [SideBar, setSideBar] = useState(false);
	const ref = useRef();

	useEffect(() => {
		document.body.addEventListener("click", (e) => {
			if (e.target.contains(ref.current)) {
				setSideBar(false);
			}
		});
	}, []);

	return (
		<div className="w-full absolute px-auto -top-4 pt-2 bg-amazon_background_bg">
			<div className="w-[94%] flex items-center flex-col  py-2">
				<div className="flex items-center justify-between w-[96%]  mb-2">
					{/* Logo */}
					<div className="w-1/2 flex justify-start">
						{/* menu bar and amazon */}
						<div className="flex flex-row-reverse">
							<Link to="/">
								<img
									className="object-contain w-24 h-8"
									src={amazonLogo}
									alt=""
								/>
							</Link>

							{/* side bar */}
							<div
								// function to display sidenav
								onClick={() => setSideBar(true)}
								className=" hover:headerBottomHover cursor-pointer  text-white "
							>
								<MenuIcon />
							</div>
						</div>
						{/* menubar and amazon ends here */}
						{/* sidebar contents */}
						{SideBar && (
							/* sidebar background color on display */
							<div
								ref={ref}
								className="w-full flex fixed top-0 left-0 h-screen bg-black bg-opacity-90"
							>
								{/* sidebar container  */}
								<div className=" w-[75%] bg-white h-full border-black relative">
									{/* sidebar header  */}
									<div
										className=" flex text-white tracking-wide  py-2 px-6
								bg-slate-800 font-bold gap-2 "
									>
										<AccountCircleIcon />
										<h3 className="">Hello, Sign in</h3>
									</div>
									<div className="w-[100%] h-full overflow-y-scroll">
										{sidecontents.map((content, index) => (
											<SideNav
												key={index}
												titlecontent={content.title}
												productonecontent={content.productone}
												productwocontent={content.producttwo}
												producthreecontent={content.productthree}
											/>
										))}
									</div>
								</div>
								<div
									onClick={() => setSideBar(false)}
									className=" cursor-pointer flex items-center justify-center text-white p-1  h-10"
								>
									<CloseSharpIcon />
								</div>
							</div>
						)}
					</div>
					{/* Sign-In and Cart */}
					<div className="flex items-center justify-end gap-2 w-1/2">
						<div className="hover:border-2 gap-0 p-1 flex flex-col items-center justify-center h-full  leading-tight">
							<span>
								<Link to="/SignIn">
									<h5 className="w-full  font-bold text-gray-200">Sign In</h5>
								</Link>
							</span>
						</div>
						<div
							className={`relative hover:border-2 gap-0 font-bold flex items-center mt-1 justify-center h-[40px] ${
								SideBar && "-z-20"
							} `}
						>
							<Link to="/Cartpage">
								<span className="w-full text-white items-baseline flex">
									<ShoppingCartOutlinedIcon />
									<span>Carts</span>
								</span>
								<span className="flex">
									<span className="absolute top-[-2px] right-[40px] w-4 h-4 flex items-center justify-center text-[10px] rounded-full bg-yellow-500 font-bold">
										{products.length > 0 ? products.length : 0}
									</span>
								</span>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex items-center w-[96%] h-[40px] rounded-lg bg-white">
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
			</div>
			<div className="flex w-[100%] py-2 px-4 bg-slate-700 text-amazon_white_text items-center">
				<LocationOnIcon />
				<div className=" text-[.8rem] ">
					Deliver to Nigeria
					<ArrowDropDown />
				</div>
			</div>
		</div>
	);
};

export default HeaderMobile;
