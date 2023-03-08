/* eslint-disable @next/next/no-img-element */
import AppMenu from "../components/AppMenu";
import MenuItems from "@/app/components/MenuItems";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { menuLinks } from "@/app/utils/options";

const Navigation = () => {
	return (
		<section className="relative bg-white">
			<div className="shadow">
				<div className="container px-4">
					<div className="flex items-center justify-between py-4">
						<Link href="/">
							<img
								src="https://theboardroomafrica.com/wp-content/themes/tbra/assets/images/logo-primary.svg"
								width="100px"
								alt="Logo"
							/>
						</Link>

						<div className="hidden lg:flex lg:items-center text-darkblue">
							<MenuItems menuLinks={menuLinks} />
						</div>

						<div className="flex items-center">
							<AppMenu className="hidden sm:inline-block" />
							<CgMenu className="text-4xl border rounded ml-6 p-1 lg:hidden" />
						</div>
					</div>
				</div>
			</div>
			<div className="block lg:hidden bg-gray-50 border-t-2 py-2 absolute w-full z-50 mobilemenu">
				<div className="container">
					<MenuItems menuLinks={menuLinks} mobile />
					<AppMenu className="sm:hidden flex justify-between items-center border-t-2 pt-2 mb-2" />
				</div>
			</div>
		</section>
	);
};
export default Navigation;
