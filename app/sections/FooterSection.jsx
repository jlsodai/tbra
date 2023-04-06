import TBRAKey from "../components/TBRAKey";
import Stats from "../components/Stats";
import FormInput from "@/app/ui/FormInput";
import Link from "next/link";
const FooterSection = () => {
	return (
		<>
			<section className="bg-gray-100 mt-24">
				<div className="container grid grid-cols-2 gap-24 py-16">
					<div className="max-w-md">
						<div className="flex items-center">
							<h2 className="text-dusk text-center inline-block mr-8 text-4xl">
								Join Us
							</h2>
							<TBRAKey size="sm" />
						</div>
						<p className="mt-4">
							Become a member of the leading community for women
							executives on the continent. Build your network,
							enhance your profile, and seize new opportunities.
						</p>
					</div>
					<div className="max-w-md">
						<p>
							Learn more about our community and activities by
							signing up to receive updates
						</p>
						<div className="grid grid-cols-2 gap-4">
							<FormInput label="First Name" />
							<FormInput label="Last Name" />
						</div>
						<FormInput type="email" label="Email Address" />
						<Link
							href="#"
							className="btn font-normal text-white mt-4 rounded"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
export default FooterSection;
