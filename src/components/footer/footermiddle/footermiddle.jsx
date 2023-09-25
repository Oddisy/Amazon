import React from "react";
import FooterMiddleList from "../footermiddlelist/footermiddlelist";
import {middlelistitems} from "../../objects";
import {amazonLogo} from "../../export";
const FooterMiddle = () => {
	return (
		<div className="w-full overflow-x-hidden lg:container ">
			<div className="bg-green-950   flex items-center flex-col align-center  ">
				<div className="w-full py-3 bg-green-800 flex justify-center text-sm    text-white">
					Back to top
				</div>
				<div className="mx-auto py-8 w-[80%] text-center text-white ">
					<div className="grid  gap-2   md:grid-cols-2 lg:grid-cols-4 lg:w-[100%]">
						{middlelistitems.map((item, index) => (
							<FooterMiddleList
								key={index}
								title={item.title}
								className="md:text-xl"
								children={item.listitem.map((data, index) => (
									<li className=" text-gray-400 md:mb-1 md:text-lg" key={index}>
										{data}
									</li>
								))}
							/>
						))}
					</div>
				</div>
				<div className="bl-2 flex border-t-[0.2px] border-gray-400 justify-center gap-4 py-6">
					<img src={amazonLogo} alt="amazon logo" className=" flex h-8 w-24" />{" "}
					<span className="h-8 w-24 border flex justify-center text-gray-300 border-gray-400 hover:border-gray-50">
						English
					</span>
				</div>
			</div>
		</div>
	);
};
export default FooterMiddle;
