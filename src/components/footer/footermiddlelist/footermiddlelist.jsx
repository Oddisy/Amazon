import React from "react";
const FooterMiddleList = ({title, children, className}) => {
	return (
		<div className={`${className}`}>
			<div className="w-[100%]">
				<h3 className=" font-bold text-gray-50 ">{title}</h3>
				<div className="">
					<ul className=" text-gray-300 flex flex-col gap-1">{children}</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddleList;
