import React, {useState, useEffect} from "react";
import Shoppingcart from "../../components/shoppingcart/shoppingcart";
import {useSelector, useDispatch} from "react-redux";

import Totalprice from "../totalprice/totalprice";
function Cart() {
	// this is used to get all products data from the Redux store
	const products = useSelector((state) => state.amazonReducer.products);
	// this is used to set a  state for the total price
	const [totalPrice, setTotalPrice] = useState();
	// this is used for  Calculating the total price when selecting products
	useEffect(() => {
		let Total = 0;
		products.forEach(
			(item) => {
				// logic to calculate total price of each items by multiplying price by quantity
				Total += item.price * item.quantity;
				// Update the totalPrice state  in the components
				return setTotalPrice(Total.toFixed(2));
			},
			[products]
		);
	});

	return (
		<>
			{products.length > 0 ? (
				<div className="w-full pt-32 p-4 bg-gray-100">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto">
						{/* container for items selected in the cart */}
						<Shoppingcart />
						{/* container for the total price obtained after selecting items  */}
						<Totalprice totalPrice={totalPrice} />
					</div>
				</div>
			) : (
				<div className="h-96">No Products</div>
			)}
		</>
	);
}

export default Cart;
