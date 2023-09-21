import React from "react";

const Img = ({src, className}) => {
	return <img src={src} className={`w-full h-40vh ${className}`} />;
};

export default Img;
