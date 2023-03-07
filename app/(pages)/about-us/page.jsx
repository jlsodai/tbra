import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import ArrowLink from "@/app/components/ArrowLink";
import FooterSection from "@/app/sections/FooterSection";

const About = () => {
	return (
		<>
			<HeaderTitle title="Join us to build more inclusive leadership teams." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<TBRAKey />
						<div className="col-span-3">
							<h3>Advertise your role</h3>
							<p>
								TheBoardroom Africa supports organisations
								searching for diverse leaders to serve on board
								and investment committees. We offer three main
								options to help you share roles with our network
								of senior executives.
							</p>
							<ArrowLink href="#" title="Advertise now" />
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

			<section className="bg-gray-100">
				<div className="container grid grid-cols-2 gap-20">
					<CascadeImg
						position="left"
						negative
						src="https://placeholder.com/400x500"
					/>
					<div className="grid grid-cols-5 innerPadding gap-10">
						<div className="col-span-3">
							<h3>
								Talk to us about our tailored recruitment
								service
							</h3>
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
							<ArrowLink href="#" title="Get in touch" />
						</div>
						<TBRAKey />
					</div>
				</div>
			</section>
			<FooterSection />
		</>
	);
};
export default About;
