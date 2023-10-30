import React from "react";
import FooterMiddleList from "../footermiddlelist/footermiddlelist";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {usaFlag} from "../../exports";
import {middlelistitems} from "../../objects";
import {amazonLogo} from "../../exports";

const FooterMiddle = () => {
	return (
		<div className="w-full">
			<div className="bg-[#232F3E] flex items-center flex-col align-center">
				<div className="w-full  py-3 bg-[#485769] flex justify-center text-sm text-white">
					Back to top
				</div>
				<div className="pl-8 py-8 w-full md:w-[80%] text-center text-white">
					<div className="grid gap-2 text-start md:grid-cols-2 lg:grid-cols-4 lg:w-full">
						{middlelistitems.map((item, index) => (
							<FooterMiddleList
								key={index}
								title={item.title}
								className="md:text-xl"
								children={item.listitem.map((data, index) => (
									<li
										className="text-gray-400 text-[.9rem] font-semibold leading-tight"
										key={index}
									>
										{data}
									</li>
								))}
							/>
						))}
					</div>
				</div>
				<div className="w-full flex justify-center border-t-[0.1px] border-gray-500 py-4">
					<div className="flex w-full md:w-[43%] flex-col md:flex-row lg:flex-row justify-center gap-4 py-6">
						<span className="flex justify-center md:justify-start lg:justify-start w-full">
							<img
								src={amazonLogo}
								alt="amazon logo"
								className="object-contain h-16 w-44"
							/>
						</span>
						<div className="flex w-[97%] mx-auto text-[.8rem] gap-2">
							<span className="h-8 w-1/3 border flex items-center justify-center text-gray-300 border-gray-400 hover:border-gray-50">
								<LanguageIcon className="text-[.5rem]" />
								<span>English</span>
							</span>
							<span className="h-8 w-1/3 border flex items-center justify-center text-gray-300 border-gray-400 hover:border-gray-50">
								<AttachMoneyIcon className="text-[.5rem]" />
								<span>Usd - U.S. Dollar</span>
							</span>
							<span className="h-8 w-1/3 border flex gap-2 items-center justify-center text-gray-300 border-gray-400 hover:border-gray-50">
								<span>
									<img className="h-4 w-8" src={usaFlag} alt="usa flag" />
								</span>{" "}
								United States
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
