import React from "react";
import {StarIcon} from "../exports";
import {useDispatch} from "react-redux";
import {Card} from "../exports";
import "./products.css";
import {addToCart} from "../../redux/amazonSlice";

const Products = ({api}) => {
	const dispatch = useDispatch();

	return (
		<div className="w-full pt-24 flex  justify-center">
			<div className="w-[94%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{api ? (
					api.map((item) => (
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
