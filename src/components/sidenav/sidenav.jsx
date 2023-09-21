import React from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
const SideNav = ({
	titlecontent,
	productonecontent,
	productwocontent,
	producthreecontent,
}) => {
	return (
		<div>
			<h3 className="font-bold bg-red mt-2 px-6">{titlecontent}</h3>
			<ul className="border-b-2">
				<li className="flex justify-between px-6 py-2">
					{productonecontent}
					<span>
						<KeyboardArrowRight />
					</span>
				</li>
				<li className="flex justify-between px-6 py-2 ">
					{productwocontent}
					<span>
						<KeyboardArrowRight />
					</span>
				</li>

				<li className="flex justify-between px-6 py-2 ">
					{producthreecontent}
					<span>
						<KeyboardArrowRight />
					</span>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
