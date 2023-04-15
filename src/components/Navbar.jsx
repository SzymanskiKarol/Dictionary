import React from "react";
import Logo from "../assets/logo.svg";
import { FontChanger } from "./FontChanger";
import { DarkMode } from "./DarkMode";

export const Navbar = ({ activeFont, setActiveFont, theme, setTheme }) => {
	return (
		<nav>
			<div className="nav-left">
				<img
					src={Logo}
					alt="logo"
				/>
			</div>
			<div className="nav-right">
				<FontChanger setActiveFont={setActiveFont} />
				<DarkMode
					theme={theme}
					setTheme={setTheme}
				/>
			</div>
		</nav>
	);
};
