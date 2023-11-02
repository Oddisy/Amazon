import React from "react";

function Button({
	buttonText,
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
			buttonText={buttonText}
			onClick={onClick}
			type={type}
			className={className}
		>
			{buttonText}
		</button>
	);
}

export default Button;
