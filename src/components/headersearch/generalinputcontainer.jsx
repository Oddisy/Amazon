import React, {useState} from "react";

import {ArrowDropDownIcon, SearchIcon, allitems} from "../export";

function Generalinputcontainer() {
	const [displayItems, setDisplayItems] = useState(false);

	return (
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
					<input className=" rounded-md pl-[66px] h-full w-full " type="text" />
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
	);
}

export default Generalinputcontainer;
