import React from "react";
import Products from "../../products/products";
const FooterTop = () => {
	return (
		<div className="pb-6 flex items-center justify-center container  w-full sm:overflow-x-hidden">
			<div className="px-28 text-center">
				<Products />
				<h4>See personalized recommendations</h4>
				<button className="w-full py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 ">
					Sign in
				</button>
				<p>
					New Customer ?<span className="text-blue-500 ml-2">Start here.</span>
				</p>
			</div>
		</div>
	);
};

export default FooterTop;
