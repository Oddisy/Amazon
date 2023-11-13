import React from "react";
import {Link} from "react-router-dom";

function Buy() {
	return (
		<div className="w-full min-h-screen bg-black text-white flex items-center flex-col gap-4 justify-center">
			<div>
				<i>Site is under construction please check later</i>{" "}
			</div>

			<Link to="/">
				<div className="text-3xl">Continue shopping</div>
			</Link>
			<div></div>
		</div>
	);
}

export default Buy;
