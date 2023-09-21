import React from "react";
const Products = ({api}) => {
	console.log(api);
	return (
		<div>
			{api ? (
				api?.map((item, index) => (
					<ul className="flex" key={index}>
						<li>
							<img className="w-52" src={item.image} />
						</li>
					</ul>
				))
			) : (
				<p>No Api Mapped</p>
			)}
		</div>
	);
};

export default Products;
