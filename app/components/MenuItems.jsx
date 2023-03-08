"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";
import SubMenu from "./SubMenu";

const FinalNav = ({ menuLinks, mobile = false }) => {
	const toggleShowSubmenu = (e) => {
		let el = e.currentTarget.nextSibling.style;
		if (el.display === "none" || !el.display) {
			el.display = "block";
		} else {
			el.display = "none";
		}
	};

	return (
		<ul className="flex-col lg:flex-row flex lg:space-x-8 navmenu">
			{menuLinks.map((menulink, i) => (
				<li key={i} className="menuitem">
					<Link
						className="menulink flex items-center justify-between"
						href={menulink.href}
						onClick={(e) =>
							mobile && menulink.submenu && toggleShowSubmenu(e)
						}
					>
						{menulink.name}
						{menulink.submenu && <HiChevronDown className="ml-2" />}
					</Link>
					{menulink.submenu && (
						<SubMenu sublinks={menulink.submenu} mobile={mobile} />
					)}
				</li>
			))}
		</ul>
	);
};
export default FinalNav;
