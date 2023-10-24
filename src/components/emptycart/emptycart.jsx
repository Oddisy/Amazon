import React from "react";

function Emptycart() {
	return (
		<div className="flex flex-col">
			<div className="h-auto pt-28 bg-[#EAEDED] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
				<div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex flex-col gap-4">
					<div className="min-h-[272px] bg-white"></div>
					<div className="min-h-[100px] bg-white"></div>
					<p className="text-[.7rem] font-normal">
						The price and availability of items at Amazon.com are subject to
						change. The Cart is a temporary place to store a list of your items
						and reflects each item's most recent price. Shopping CartLearn more
						Do you have a gift card or promotional code? We'll ask you to enter
						your claim code when it's time to pay.
					</p>
				</div>
				<div className="col-span-1 min-h-[1252px] rounded-lg drop-shadow-lg bg-white"></div>
			</div>
			<div className="w-full bg-white min-h-[428px]"></div>
		</div>
	);
}

export default Emptycart;
