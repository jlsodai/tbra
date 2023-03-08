import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import ArrowLink from "@/app/components/ArrowLink";
import FooterSection from "@/app/sections/FooterSection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Certificate in Company Direction: Open Doors." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<TBRAKey />
						<div className="col-span-4">
							<h3>Course introduction</h3>
							<p>
								Open Doors is the first globally accredited
								director certificate programme tailored to women
								across Africa and the diaspora. The programme
								runs three times annually, is designed by
								directors for directors, and encourages peer
								learning to help delegates build real and
								impactful lifetime connections.
							</p>
							<p className="mt-4">
								The programme leads to an accredited Certificate
								in Company Direction by the UK Institute of
								Directors, a Bachelor's level (SCQF)
								qualification in its own right and the first
								stage in the Chartered Director qualification
								path. Beyond the core curriculum, the programme
								is supplemented with additional group workshops
								and a board simulation workshop. Open Doors
								alumnae include over 200+ women across the
								continent and the diaspora, with over 45+
								countries represented across 150+ companies.
							</p>
							<ArrowLink
								href="#"
								title="Learn about membership"
							/>
						</div>
					</div>
					<CascadeImg
						position="right"
						negative
						top
						src="https://placeholder.com/400x500"
					/>
				</div>
			</section>

			<FooterSection />
		</>
	);
};
export default Page;
