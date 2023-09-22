import React from "react";
import {StarIcon} from "./export";
const Products = ({api}) => {
	console.log(api);
	return (
		<div className=" w-full pt-24  ">
			<div className="mx-auto w-[95%]  grid grid-cols-4 gap-4 p-4">
				{api ? (
					api?.map((item, index) => (
						<div
							className="w-84 relative p-4  pt-8 z-[-50] items-center bg-gray-50 border-[1px] border-gray-200  flex flex-col gap-4"
							key={index}
						>
							<div className="h-[70%]">
								<img className="w-52 h-64 object-contain" src={item.image} />
							</div>
							<div className=" w-full flex items-center justify-between">
								<h2 className="text-lg font-semibold">
									{item.title.substring(0, 20)}
								</h2>
								<p className="text-xs">${item.price}</p>
							</div>
							<p className=" italic absolute right-2 top-0">{item.category}</p>
							<p className=" text-lg font-semibold">
								{item.description.substring(0, 100)}...
							</p>
							<p className="flex w-full justify-start text-orange-500">
								<StarIcon />
								<StarIcon />
								<StarIcon />
							</p>
							<div>
								<button className="px-28 py-2 font-semibold rounded-lg bg-yellow-300">
									Add Cart.
								</button>
							</div>
						</div>
					))
				) : (
					<p>No Api Mapped</p>
				)}
			</div>
		</div>
	);
};

export default Products;
