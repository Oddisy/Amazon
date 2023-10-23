import React from "react";
import {CheckCircle} from "@mui/icons-material";
import Button from "../button/button";

function Totalprice({totalPrice}) {
	return (
		<div className=" col-span-1 flex flex-col bg-white px-2 py-4 h-44">
			<p className="flex justify-between gap-4">
				<CheckCircle className="text-green-500 bg-white " />{" "}
				<span className=" tracking-tight font-normal">
					Your item qualifies for{" "}
					<span className=" font-semibold text-sm">FREE</span> Shippping Choose
					this option at checkout. see details...
				</span>
			</p>
			<p className="w-full text-center">
				Total: <span className="text-lg font-bold ">{`$${totalPrice}`}</span>
			</p>
			<Button
				buttonText="Proceed to buy"
				className="buttonStyle py-1 mt-2 px-2"
			/>
		</div>
	);
}

export default Totalprice;
