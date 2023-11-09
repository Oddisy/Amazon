import React from "react";

function Button({
	buttontext,
	className,
	type,
	onMouseEnter,
	onMouseLeave,
	onClick,
}) {
	return (
		<button
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
			type={type}
			className={className}
		>
			{buttontext}
		</button>
	);
}

export default Button;
