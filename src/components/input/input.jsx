import React from "react";

function Input({
	htmlFor,
	type,
	fName,
	yourName,
	inputClassName,
	labelTextClassName,
	labelText,
	placeholder,
	onChange,
	value,
	onBlur,
}) {
	return (
		<>
			<label htmlFor={htmlFor}>
				<p className={labelTextClassName}>{labelText}</p>
				<input
					id={yourName}
					type={type}
					name={fName}
					placeholder={placeholder}
					className={`${inputClassName}`}
					onChange={onChange}
					value={value}
					onBlur={onBlur}
				/>
			</label>
		</>
	);
}

export default Input;
