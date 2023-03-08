"use client";

import { CgMenu } from "react-icons/cg";
const MenuToggle = () => {
	const handleToggleMobileMenu = () => {
		let mobileMenu = document.getElementById("mobileMenu").style;
		if (mobileMenu.display === "none" || !mobileMenu.display) {
			mobileMenu.display = "block";
		} else {
			mobileMenu.display = "none";
		}
	};
	return (
		<CgMenu
			onClick={() => handleToggleMobileMenu()}
			className="text-4xl border rounded ml-6 p-1 lg:hidden"
		/>
	);
};
export default MenuToggle;
