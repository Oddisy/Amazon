import {React, useState, useEffect, useRef} from "react";
import {sidecontents} from "../objects";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNav from "../sidenav/sidenav";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const HeaderBottom = () => {
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
		<div className=" container bg-[#232F3E]">
			<div className="flex  ml-8 items-center justify-between w-[470px]  h-[40px]">
				<div
					ref={ref}
					// function to display sidenav
					onClick={() => setSideBar(true)}
					className=" hover:headerBottomHover cursor-pointer  text-white  p-[5px]"
				>
					<MenuIcon />
					All
				</div>

				<div className=" hover:headerBottomHover text-white p-[5px] ">
					Today's Deal
				</div>
				<div className="  hover:headerBottomHover p-[5px] text-white">
					Customer Service
				</div>
				<div className=" hover:headerBottomHover hover:headerBottomHover  text-white p-[5px]">
					Registry
				</div>
				<div className=" hover:headerBottomHover   text-white p-[5px]">
					Gift card's
				</div>
				<div className="hover:headerBottomHover  text-white  p-[5px]">Sell</div>
			</div>
			{/* sidebar contents */}
			{SideBar && (
				/* sidebar background color on display */
				<div
					ref={ref}
					className="w-full flex fixed top-0 left-0 h-screen bg-black bg-opacity-50"
				>
					{/* sidebar container  */}
					<div className=" w-[350px] bg-white h-full border-black relative">
						{/* sidebar header  */}
						<div
							className=" flex text-white tracking-wide  py-2 px-6
								bg-slate-800 font-bold gap-2 "
						>
							<AccountCircleIcon />
							<h3 className="">Hello, Sign in</h3>
						</div>
						<div className="w-[350px] h-full ">
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
	);
};
export default HeaderBottom;
