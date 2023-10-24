import React from "react";

function Button({buttonText, className, onMouseEnter, onMouseLeave, onClick}) {
	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onmouseleave}
			onClick={onClick}
			className={className}
		>
			{buttonText}
		</div>
	);
}

export default Button;
