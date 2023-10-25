import React from "react";
import {Link} from "react-router-dom";
const FooterTop = () => {
	return (
		<div className="py-6 border-b-[0.2px] border-t-[0.2px] mb-4 border-gray-300   flex items-center justify-center container  sm:overflow-x-hidden">
			<div className="px-8 text-[.8rem] text-center">
				<h4>See personalized recommendations</h4>
				<Link to="/Signinpage" className="w-full py-1 rounded-md buttonStyle ">
					Sign in
				</Link>
				<p>
					New Customer ?<span className="text-blue-500 ml-2">Start here.</span>
				</p>
			</div>
		</div>
	);
};

export default FooterTop;
