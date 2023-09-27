import React from "react";
import {StarIcon} from "../export";

function ShowItemNav({isHovered}) {
	return (
		<ul
			className={` bg-gray-200 absolute  flex flex-col  w-[100%]  transition-transform duration-700  ${
				{isHovered} ? "translate-y-20  " : "translate-y-20 "
			}`}
		>
			<li className=" productHover productLi">
				Compare
				<span>
					<StarIcon />
				</span>
			</li>
			<li className=" productHover productLi">
				Add to Cart.
				<span>
					<StarIcon />
				</span>
			</li>
			<li className=" productHover productLi">
				View Details
				<span>
					<StarIcon />
				</span>
			</li>
			<li className="productHover productLi">
				compare
				<span>
					<StarIcon />
				</span>
			</li>
		</ul>
	);
}

export default ShowItemNav;
