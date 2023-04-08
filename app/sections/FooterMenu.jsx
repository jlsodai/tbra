/* eslint-disable @next/next/no-img-element */

import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { bottomMenu } from "../utils/options";

const FooterMenu = () => {
	return (
		<footer className="px-4 bg-tender text-dawn-200 bigborder">
			<div className="container flex flex-col justify-between py-28 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/5">
					<a
						href="#"
						className="flex justify-center space-x-3 lg:justify-start"
					>
						<div className="flex items-center justify-center w-12 h-12 rounded-full">
							<img
								src="https://theboardroomafrica.com/wp-content/themes/tbra/assets/images/logo-secondary.svg"
								alt="logo"
							/>
						</div>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:w-4/5 sm:grid-cols-4">
					{bottomMenu.map((menus, i) => (
						<div
							key={i}
							className={`space-y-3 ${menus.neg && "md:-ml-10"}`}
						>
							<ul className="space-y-3">
								{menus.list.map((menu, i) => (
									<li key={i}>
										<a href={menu.href}>{menu.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="space-y-3">
						<div className="uppercase font-bold">Follow us</div>
						<div className="flex justify-start space-x">
							<a
								href="#"
								title="Twitter"
								className="flex items-center p-1"
							>
								<FaTwitterSquare className="text-2xl" />
							</a>
							<a
								href="#"
								title="Instagram"
								className="flex items-center p-1"
							>
								<FaLinkedin className="text-2xl" />
							</a>
						</div>

						<div className="py-6 text-sm">
							© {new Date().getFullYear()} TheBoardroom Africa.
							All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default FooterMenu;
