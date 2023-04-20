import TBRAKey from "../components/TBRAKey";
import Stats from "../components/Stats";
import FormInput from "@/app/ui/FormInput";
import Link from "next/link";
import ConstantContact from "@/app/components/ConstantContact";
import Modal from "../components/Modal";
const FooterSection = () => {
	return (
		<>
			<section className="bg-gray-100 mt-24">
				<div className="container py-16 items-center">
					<div className="max-w-md mx-auto justify-center">
						<div className="flex items-center justify-center">
							<h2 className="text-dusk text-center inline-block mr-4 text-3xl">
								Join Us
							</h2>
							<TBRAKey className="!w-[25px]" />
						</div>
						<p className="mt-6 text-center">
							Learn more about our community and activities by
							signing up to receive updates
						</p>
						<Modal btnText="Subscribe" center={true}>
							<ConstantContact />
						</Modal>
						{/* <div className="grid grid-cols-2 gap-4">
							<FormInput label="First Name" />
							<FormInput label="Last Name" />
						</div>
						<FormInput type="email" label="Email Address" />
						<Link
							href="#"
							className="btn font-normal text-white mt-4 rounded"
						>
							Sign Up
						</Link> */}
					</div>
				</div>
			</section>
		</>
	);
};
export default FooterSection;
