import React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import HeaderPc from "../header/headerPc";
import HeaderBottom from "../header/headerBottom";
import HeaderMobile from "../header/headerMobile";
const NavBar = () => {
	// const theme = useTheme();
	// const isSmall = useMediaQuery(theme.breakpoints.down("700"));

	// function renderNavbar() {
	// 	return isSmall ? <HeaderMobile />  : <HeaderPc />;
	// }
	// return <div>{renderNavbar()}</div>;
	return (
		<>
			<HeaderPc />
			<HeaderBottom />
		</>
	);
};

export default NavBar;