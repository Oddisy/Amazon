import React from "react";

function Input({
	htmlFor,
	name,
	id,
	inputClassName,
	labelTextClassName,
	labelText,
	placeholder,
	onChange,
	value,
	onBlur,
	type,
}) {
	return (
		<label htmlFor={htmlFor}>
			<p className={labelTextClassName}>{labelText}</p>
			<input
				id={id}
				type={type}
				name={name}
				placeholder={placeholder}
				className={`${inputClassName}`}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
			/>
		</label>
	);
}

export default Input;
