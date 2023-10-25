import React, {useState, useRef} from "react";
import {StarIcon} from "../exports";
import {ShowItemNav} from "../exports";
import cn from "classnames";
import Button from "../button/button";

const Card = ({onClick, src, title, price, category, description}) => {
	const ref = useRef();
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			ref={ref}
			className=" drop-shadow-lg w-84 relative pt-8 items-center mb-4 pb-4 rounded  bg-gray-50 border-[1px] border-gray-200  flex flex-col gap-4"
		>
			<div className="h-64">
				<img className="w-52 h-full object-contain" src={src} />
			</div>
			{/* show navigation on  item hover */}
			{isHovered && <ShowItemNav />}
			<div className="bg-gray-100 h-36 p-4 z-10">
				<div className=" w-full flex items-center justify-between">
					<h2 className="text-lg font-bold">{title.substring(0, 20)}</h2>
					<p className="text-xs">${price}</p>
				</div>

				<p className=" italic absolute right-2 top-0">{category}</p>
				<p className=" text-sm font-semibold">
					{description.substring(0, 100)}...
				</p>
				<p className="flex w-full justify-start text-orange-500">
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</p>
			</div>
			<div className="bg-gray-100  cursor-pointer">
				<Button
					onMouseEnter={() => setIsHovered(false)}
					onMouseLeave={() => setIsHovered(true)}
					onClick={onClick}
					buttonText="Add Cart."
					className={cn(
						`buttonStyle
						${isHovered ? "hover:bg-yellow-500 active:bg-yellow-700" : ""}`
					)}
				/>
			</div>
		</div>
	);
};

export default Card;
