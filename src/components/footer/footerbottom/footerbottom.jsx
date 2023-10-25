import React from "react";
import FooterMiddleList from "../footermiddlelist/footermiddlelist";
import {bottomlistitems} from "../../exports";
const FooterBottom = () => {
	return (
		<div className=" w-full bg-[#131A22] py-6">
			<div className="w-[85%] mx-auto">
				<div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-7 gap-3  place-content-center text-grey">
					{bottomlistitems.map((item, index) => (
						<FooterMiddleList
							key={index}
							className="text-gray-300 pb-4"
							title={item.title}
							children={item.listitem.map((data, index) => (
								<li
									className=" text-[.7rem] font-semibold text-gray-400 md:text-sm"
									key={index}
								>
									{data}
								</li>
							))}
						/>
					))}
				</div>
			</div>
			<div className="border-gray-500 border-t-[0.5px] flex justify-center p-4 text-gray-300 font-bold ">
				<h4> Coded by Odunayo .</h4>
			</div>
		</div>
	);
};

export default FooterBottom;
