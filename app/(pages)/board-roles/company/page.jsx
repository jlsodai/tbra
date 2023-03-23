import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Join us to build more inclusive leadership teams." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							heading="Advertise now"
							linkTitle="Advertise now"
						>
							<p>
								TheBoardroom Africa supports organisations
								searching for diverse leaders to serve on board
								and investment committees. We offer three main
								options to help you share roles with our network
								of senior executives.
							</p>
						</KeySection>
					</div>
					<CascadeImg
						position="right"
						negative
						top
						src="https://tbratest.my.canva.site/board-roles/images/b932ee43c94889df3529241879a9120b.jpg"
					/>
				</div>
			</section>

			<section data-aos="fade-up" className="mb-6">
				<div className="container grid grid-cols-2 gap-20">
					<CascadeImg
						position="left"
						src="https://tbratest.my.canva.site/board-roles/images/0223b0a6949672c5d258491373d270ed.jpg"
					/>
					<div className="grid grid-cols-5 innerPadding gap-10 pb-0">
						<KeySection
							heading="Talk to us about our tailored recruitment
								service"
							linkTitle="Get in touch"
							className="col-span-4"
						>
							<p>
								We specialise in placing senior women on boards
								for clients of all shapes and sizes around the
								world. We believe that diverse perspectives
								offer a competitive edge, so we engage our
								network to identify the unique talent who can
								offer their skills and expertise to your
								organisation. Our bespoke recruitment model
								ensures that you will reach candidates that can
								perform, succeed and deliver growth. Through our
								endorsement approach, which taps the best and
								brightest regional leaders, we reach beyond
								traditional and mainstream circles and
								continuously refresh our pool of eligible
								candidates to identify those with the deep
								skills and sector knowledge you need.
							</p>
						</KeySection>
					</div>
				</div>
			</section>
		</>
	);
};
export default Page;
