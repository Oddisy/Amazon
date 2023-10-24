import React from "react";
import {StarIcon} from "../export";
import {useDispatch} from "react-redux";
import {Card} from "../export";

import "./products.css";
import {addToCart} from "../../redux/amazonSlice";
const Products = ({api}) => {
	const dispatch = useDispatch();

	return (
		<div className=" w-full pt-24   ">
			<div className="mx-auto  w-[95%]   grid grid-cols-1 sm:grid-cols-2    md:grid-cols-2  lg:grid-cols-4 gap-4">
				{api ? (
					api?.map((item) => (
						<div key={item.id}>
							<Card
								src={item.image}
								title={item.title}
								description={item.description}
								category={item.category}
								onClick={() =>
									dispatch(
										addToCart({
											src: item.image,
											id: item.id,
											category: item.category,
											title: item.title,
											description: item.description,
											price: item.price,
											image: item.image,
											quantity: 1,
										})
									)
								}
							/>
						</div>
					))
				) : (
					<p>No Api</p>
				)}
			</div>
		</div>
	);
};

export default Products;

{
	/* <div
className="w-84 relative pt-8 z-[-50] items-center bg-gray-50 border-[1px] border-gray-200  flex flex-col gap-4"
key={index}
>
<Card />

<div className="h-[70%]">
	<img className="w-52 h-64 object-contain" src={item.image} />
</div>
<ul
	className="  bg-gray-200 absolute bottom-[60%]  flex flex-col  w-[100%] hover:bottom-[20%] 
duration-700"
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
<div className="bg-gray-100 p-4 z-10">
	<div className=" w-full flex items-center justify-between">
		<h2 className="text-lg font-bold">
			{item.title.substring(0, 20)}
		</h2>
		<p className="text-xs">${item.price}</p>
	</div>

	<p className=" italic absolute right-2 top-0">
		{item.category}
	</p>
	<p className=" text-lg font-semibold">
		{item.description.substring(0, 100)}...
	</p>
	<p className="flex w-full justify-start text-orange-500">
		<StarIcon />
		<StarIcon />
		<StarIcon />
	</p>
</div>
<div className="bg-gray-100 ">
	<button
		onClick={() =>
			dispatch(
				addToCart({
					id: item.id,
					category: item.category,
					title: item.title,
					description: item.description,
					price: item.price,
					image: item.image,
					quantity: 1,
				})
			)
		}
		className="px-28 hover:cursor-pointer py-2 w-full font-semibold rounded-lg bg-yellow-300 bg-gradient-to-tr from-yellow-400 to-yellow-200"
	>
		Add Cart.
	</button>
</div>
</div> */
}
