import React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import HeaderPc from "../header/headerPc";
import HeaderBottom from "../header/headerBottom";
import HeaderMobile from "../header/headerMobile";
const NavBar = () => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("1000"));

	function renderNavbar() {
		return isSmall ? (
			<div className="flex flex-col ">
				{" "}
				<HeaderMobile /> <HeaderBottom />{" "}
			</div>
		) : (
			<div>
				<HeaderPc />
				<HeaderBottom />
			</div>
		);
	}
	return (
		<div className="absolute top-0">
			{" "}
			<div className="fixed top-0 w-screen z-50">{renderNavbar()}</div>
		</div>
	);
	// return (
	// 	<div className="fixed">
	// 		<HeaderPc />
	// 		<HeaderBottom />
	// 	</div>
	// );
};

export default NavBar;
