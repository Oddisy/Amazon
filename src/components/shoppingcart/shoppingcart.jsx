import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Button from "../button/button";
import {toggleDescription, deleteItem} from "../../redux/amazonSlice";
function Shoppingcart() {
	const products = useSelector((state) => state.amazonReducer.products);
	const deleteProduct = useSelector(
		(state) => state.amazonReducer.deleteProduct
	);
	console.log(deleteProduct);
	const dispatch = useDispatch();
	const handleReadMore = (id, expanded) => {
		dispatch(toggleDescription({id, expanded: !expanded}));
	};
	return (
		<div className=" col-span-4 w-full h-full px-4 bg-white">
			<div className="flex justify-between items-center p-2 border-b-amazon_background_bg border-b-[1px]">
				<h2 className=" font-medium text-3xl">Shopping Cart</h2>
				<h2 className=" font-normal 2xl">subtotal</h2>
			</div>
			{products.map((item) => (
				<div
					key={item.id}
					className="w-full h-auto border-b-amazon_light_text border-b-[1px] p-4 flex items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6"
				>
					<div className=" w-1/5">
						{" "}
						<img
							className=" h-44 w-full object-contain "
							src={item.image}
							alt=""
						/>{" "}
					</div>
					<div className=" flex p-4 h-auto flex-col gap-4 w-1/2">
						<h2 className=" font-bold text-2xl">{item.category}</h2>
						<p>
							{!item.expanded
								? item.description.substring(0, 200) + "... "
								: item.description}

							<span
								className="text-blue-400 cursor-pointer"
								onClick={() => handleReadMore(item.id, item.expanded)}
							>
								{item.expanded ? "Read less" : "Read more"}
							</span>
						</p>
						<div className="flex items-center gap-1 bg-gray-100 w-24 px-2 py-1 drop-shadow-lg rounded-md">
							<p>Qty:</p>
							<span className=" cursor-pointer   duration-300 p-1 rounded-md hover:bg-gray-400 px-2">
								-
							</span>
							<span>{item.quantity}</span>
							<span className=" cursor-pointer duration-300 p-1 hover:bg-gray-400 rounded-md ">
								+
							</span>
						</div>
						<button className=" flex items-center justify-center text-sm font-semibold w-24 rounded-lg px-1 py-1 text-white mt-2  bg-red-500 hover:bg-red-700 active:bg-rose-900 ">
							Delete item{" "}
						</button>
					</div>
					<div className=" text-lg w-1/3 flex font-bold justify-end">
						${item.quantity * item.price}
					</div>
				</div>
			))}
			<div className="w-32 mt-4">
				<Button
					buttonText="Clear Cart"
					className=" text-sm font-semibold text-white px-2 w-full py-2 rounded-md flex  justify-center bg-red-500 hover:bg-red-500 active:bg-red-600"
				/>
			</div>
		</div>
	);
}

export default Shoppingcart;
