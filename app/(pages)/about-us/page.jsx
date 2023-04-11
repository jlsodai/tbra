/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import StatsSection from "@/app/sections/StatsSection";

export const metadata = {
	title: "About Us - Improving Board Diversity",
};

const About = () => {
	return (
		<>
			<HeaderTitle title="We've created a movement." />

			<section className="container" data-aos="fade-up">
				<div className="grid md:grid-cols-2 md:gap-20">
					<KeySection heading="Our Story">
						<p>
							TheBoardroom Africa officially launched in 2016, but
							in many ways, this community has been years in the
							making. My own journey navigating corporate ranks as
							a young executive inspired the desire to build what
							has now become Africa&apos;s most vibrant private
							community of women executives.
						</p>
						<p>
							What started with a handful of women across a few
							countries has now developed into a continent-wide
							movement for change.
						</p>
						<p>
							Today, TBrA is enhancing and amplifying the
							potential of Africa&apos;s exceptional women
							leaders. We also support companies hoping to unlock
							the power of diversity and improve business
							performance by connecting them with talent. And we
							work with women to equip them with the resources
							they need as they navigate their journeys in and
							outside the boardroom. We invite you to join us to
							build better boardrooms and more inclusive
							leadership spaces.
						</p>
						<p>
							Marcia Ashong <br />
							Founder <TBRAKey size="xs" /> CEO, TheBoardroom
							Africa
						</p>
					</KeySection>
					<CascadeImg
						position="right"
						negative
						top
						src="https://tbratest.my.canva.site/about-page/images/2a11927f52f4ccf222c8587590ab42c8.jpg"
					/>
				</div>
			</section>

			<section className="mt-10 md:py-24" data-aos="fade-up">
				<div
					className="container keySectionWrap items-center"
					data-aos="fade-up"
				>
					<div>
						<h3 className="text-mustard">Mission</h3>
						<p>
							To accelerate the appointment of women on boards and
							build a growing pipeline of board-ready women, while
							inspiring and educating the business community on
							the power of diverse leadership.
						</p>
					</div>
					<img
						src="https://theboardroomafrica.com/wp-content/uploads/2020/05/Group-76-1.jpg"
						alt=""
						className="justify-self-end -sm:mt-8"
						width="330px"
					/>
				</div>
				<div
					className="container keySectionWrap items-center mt-10"
					data-aos="fade-up"
				>
					<img
						src="https://theboardroomafrica.com/wp-content/uploads/2022/07/telescope.jpg"
						alt=""
						className="justify-self-start -sm:order-last -sm:mt-4"
						width="330px"
					/>
					<div>
						<h3 className="text-mustard">Vision</h3>
						<p>
							To create a world where women and men have equal
							access to opportunity at the decision-making table.
						</p>
					</div>
				</div>

				<div
					className="container keySectionWrap items-center mt-10"
					data-aos="fade-up"
				>
					<div>
						<h3 className="text-mustard">Values</h3>
						<p>
							We cultivate a Community where women feel they
							belong by leading with Vision, Integrity and
							Excellence to create an environment for others to
							lead. We hold ourselves accountable for our
							commitments and actions to deliver on our promise of
							exceptional quality.
						</p>
					</div>
					<img
						src="https://theboardroomafrica.com/wp-content/uploads/2020/05/Group-1.jpg"
						alt=""
						className="justify-self-end -sm:mt-4"
						width="330px"
					/>
				</div>
			</section>
			<StatsSection />
		</>
	);
};
export default About;
