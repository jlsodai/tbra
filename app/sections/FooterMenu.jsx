/* eslint-disable @next/next/no-img-element */

import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterMenu = () => {
	return (
		<footer className="mt-16 px-4 divide-y bg-dawn">
			<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/5">
					<a
						rel="noopener noreferrer"
						href="#"
						className="flex justify-center space-x-3 lg:justify-start"
					>
						<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
							<img
								src="https://theboardroomafrica.com/wp-content/themes/tbra/assets/images/logo-secondary.svg"
								alt="logo"
							/>
						</div>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-x-3 gap-y-8 lg:w-4/5 sm:grid-cols-4">
					<div className="space-y-3">
						<ul className="space-y-1">
							<li>
								<a href="#">About TBrA</a>
							</li>
							<li>
								<a href="#">Our Team</a>
							</li>
							<li>
								<a href="#">Our Community</a>
							</li>
							<li>
								<a href="#">Events</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<ul className="space-y-1">
							<li>
								<a href="#">Contact us</a>
							</li>
							<li>
								<a href="#">Board Roles</a>
							</li>
							<li>
								<a href="#">Advertise a Board Role</a>
							</li>
							<li>
								<a href="#">Sponsors & Partners</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<ul className="space-y-1">
							<li>
								<a href="#">Board Diversity Charter</a>
							</li>
							<li>
								<a href="#">Research</a>
							</li>
							<li>
								<a href="#">FAQ</a>
							</li>
							<li>
								<a href="#">Privacy Statement</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<div className="uppercase dark:text-gray-50">
							Follow us
						</div>
						<div className="flex justify-start space-x-3">
							<a
								rel="noopener noreferrer"
								href="#"
								title="Twitter"
								className="flex items-center p-1"
							>
								<FaTwitterSquare />
							</a>
							<a
								rel="noopener noreferrer"
								href="#"
								title="Instagram"
								className="flex items-center p-1"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="py-6 text-center dark:text-gray-400">
				© {new Date().getFullYear()} TheBoardroom Africa. All rights
				reserved.
			</div>
		</footer>
	);
};
export default FooterMenu;
