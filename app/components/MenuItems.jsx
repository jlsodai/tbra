"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";
import SubMenu from "./SubMenu";

const FinalNav = ({ menuLinks }) => {
	return (
		<ul className="flex-col md:flex-row flex md:space-x-8">
			{menuLinks.map((menulink, i) => (
				<li key={i}>
					<Link
						className="menulink flex items-center justify-between py-4"
						href={menulink.href}
					>
						{menulink.name}
						{menulink.submenu && <HiChevronDown className="ml-2" />}
					</Link>
					{menulink.submenu && (
						<SubMenu sublinks={menulink.submenu} />
					)}
				</li>
			))}
		</ul>
	);
};
export default FinalNav;
