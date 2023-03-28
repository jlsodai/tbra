import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Join us to build more inclusive leadership teams." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20 items-center">
					<KeySection
						heading="Let us take the complication out of sourcing exceptional talent"
						linkTitle="Advertise now"
					>
						<p>
							We support organisations hoping to unlock the power
							of diversity as a catalyst for improved business
							performance by connecting them with diverse and
							talented industry leaders open to adding value and
							expertise on boards.
						</p>
						<p>
							Over the years, we&apos;ve successfully undertaken
							governance reviews and the identification and
							selection of chairpersons, non-executive directors
							and even investment committee members for partners
							covering a wide range of industries.
						</p>
						<p>
							Our <strong>board recruitment</strong> and
							<strong>advertisement</strong>erings ensure we meet
							our clients where there are on their recruitment
							journies.
						</p>
						<p>
							Take a look at our recruitment offerings and get in
							touch.
						</p>
					</KeySection>

					<img
						src="https://tbratest.my.canva.site/board-roles/images/648bcbfed88271511db9546a3fc39661.jpg"
						alt=""
					/>
				</div>
			</section>

			<section data-aos="fade-up" className="mb-6">
				<div className="container grid grid-cols-2 gap-20">
					<CascadeImg
						position="left"
						src="https://tbratest.my.canva.site/board-roles/images/0223b0a6949672c5d258491373d270ed.jpg"
					/>
					<KeySection
						heading="Advertise Now"
						linkTitle="Advertise Now"
						url="/get-in-touch"
					>
						<p>
							As well as our tailored recruitment service, we also
							offer a range of advertisement options to enhance
							your search efforts.
						</p>
					</KeySection>
				</div>
			</section>

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection
						heading="Talk to us about our tailored recruitment service"
						linkTitle="Get in touch"
						url="/get-in-touch"
					>
						<p>
							We believe that diverse boards build the best
							companies. We’ve successfully undertaken governance
							reviews and the identification and selection of
							non-executive directors, chairpersons, and even
							investment committee members for a range of clients
							across diverse industries. Our bespoke recruitment
							model ensures that you will reach the best
							candidates that can perform and help you deliver
							growth.
						</p>
					</KeySection>

					<CascadeImg
						position="right"
						negative
						top
						src="https://tbratest.my.canva.site/board-roles/images/b932ee43c94889df3529241879a9120b.jpg"
					/>
				</div>
			</section>
		</>
	);
};
export default Page;
