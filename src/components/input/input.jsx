import React from "react";

function Input({htmlFor, type, fName, inputClassName}) {
	return (
		<>
			<label htmlFor={htmlFor}>
				<input type={type} name={fName} className={`${inputClassName}`} />
			</label>
		</>
	);
}

export default Input;
