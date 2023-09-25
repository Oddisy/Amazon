import {useState, React} from "react";
import {amazonLogo} from "../export";
import {LocationOnIcon} from "../export";
import {ArrowDropDownIcon} from "../export";
import {ArrowDropUpIcon} from "../export";
import {SearchIcon} from "../export";
import {usaFlag} from "../export";
import {ShoppingCartOutlinedIcon} from "../export";
import {allitems} from "../export";
import {List} from "../export";
import {Link} from "../export";
import {SignIn} from "../export";
import {Cart} from "../export";

const HeaderPc = () => {
	const [displayItems, setDisplayItems] = useState(false);
	const [accountOver, setaccountOver] = useState(false);
	const [languageOver, setlanguageOver] = useState(false);

	return (
		<div className=" w-full  bg-amazon_background_bg">
			<div className=" sticky top-0 flex items-center w-[100%] h-[58px] px-1 py-2  bg-amazon_background_bg ">
				{/* Image{amazonLogo} */}
				<div className="flex items-center gap-6 mr-10 ">
					<img className=" w-24" src={amazonLogo} alt="amazon logo" />
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
				<div className=" ml-4 w-[70%] h-[40px] relative rounded-lg">
					{/* drop down button and search button and dropdown inner text  */}
					<div className=" h-full ">
						{/* drop down button and All only */}
						<div className="  flex h-full">
							{/* All"text" and Arrow Icon  */}
							<div
								onClick={() => setDisplayItems(!displayItems)}
								className=" absolute cursor-pointer flex items-center h-full rounded-tl-lg rounded-bl-lg 
								w-16 bg-amazon_grey_text px-2 my-auto"
							>
								<span>All</span>
								<span>
									<ArrowDropDownIcon />
								</span>
							</div>
							{/* All "text" and Arrow Icon ends here  */}
							{/* Input search  */}
							<input
								className=" rounded-md pl-[66px] h-full w-full "
								type="text"
							/>
							{/*  input ends here */}
						</div>
						{/* drop down button and All only ends here*/}
						{/* ArrowDropDown Icon inner texts start here  */}
						{displayItems && (
							<div className="relative">
								{/* ArrowDropDown container mapping  */}
								<ul className=" overflow-y-scroll rounded-lg text-amazon_text_dark w-[200px] h-[370px] bg-amazon-white-text border-[1px] border-amazon_header_bg bg-amazon_white_text absolute top-0 left-0 ">
									{allitems.map((item, index) => (
										<div key={index}>
											{/* <p>list </p> */}
											<List title={item.title} />
										</div>
									))}
								</ul>
								{/* ArrowDropDown container mapping stops here  */}
							</div>
						)}
						{/* ArrowDropDown container inner text stops here */}
					</div>
					{/* drop down button and search button and dropdown inner text ends here */}
					{/* search Icon starts here  */}
					<div className=" flex items-center justify-center rounded-tr-lg rounded-br-lg absolute bottom-0 right-0 cursor-pointer h-full  w-12 bg-[#FEBD69]  my-auto">
						<span>
							<SearchIcon />
						</span>
					</div>
					{/* search icon stops here  */}
				</div>
				{/* general input container ends here */}
				{/* right side of the header  */}
				<div
					onClick={() => setlanguageOver(!languageOver)}
					onMouseLeave={() => setlanguageOver(false)}
					className=" relative flex border-1 w-[24%] h-full  cursor-pointer ml-4 text-white items-center text-[14px]"
				>
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
					<div
						// function to display a
						onClick={() => setaccountOver(!accountOver)}
						onMouseLeave={() => setaccountOver(false)}
						className=" hover:border-2 gap-0 p-1  flex  flex-col items-center justify-center h-full  w-[130px] leading-tight  "
					>
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
						{accountOver ? (
							<div className="absolute right-5  top-[43px] w-[500px] h-[400px] bg-red-500">
								<ArrowDropUpIcon className="absolute right-[120px] top-[-14px]" />
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						) : (
							<div></div>
						)}
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
					<Link to="/Cart">
						<div className=" relative hover:border-2 gap-0 font-bold flex items-center mt-1 justify-center h-[40px]   w-[25%]">
							<span className="w-full items-baseline flex">
								<ShoppingCartOutlinedIcon />
								<span>Carts</span>
							</span>
							<span className="flex ">
								<span className=" absolute top-[-2px] right-[50px] w-4 h-4 flex items-center justify-center text-[10px] rounded-full  bg-yellow-500 font-bold ">
									0
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
