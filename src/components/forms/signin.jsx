import React from "react";

const SignInForm = ({type, fName, inputClassName}) => {
	return (
		<div>
			<form action="">
				<div className="flex flex-col)">
					<label htmlFor="">
						<input type={type} name={fName} className={`${inputClassName}`} />
					</label>
					<label htmlFor="">
						<input type={type} name={fName} className={`${inputClassName}`} />
					</label>
					<label htmlFor="">
						<input type={type} name={fName} className={`${inputClassName}`} />
					</label>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
