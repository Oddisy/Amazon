import React from "react";
const Carousel = ({children: slides}) => {
	return <div className="flex">{slides}</div>;
};

export default Carousel;
