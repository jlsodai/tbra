/* eslint-disable @next/next/no-img-element */

import CascadeImg from "@/app/components/CascadeImg";
import HeroSection from "@/app/sections/HeroSection";
import Navigation from "@/app/sections/Navigation";
import TBRAKey from "@/app/components/TBRAKey";
import Image from "next/image";
import ArrowLink from "@/app/components/ArrowLink";

export default function Home() {
	return (
		<>
			<HeroSection />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<TBRAKey />
						<div className="col-span-3">
							<h3>
								The largest private network of women executives.
							</h3>
							<a className="text-white btn mt-4" href="#">
								About Membership
							</a>
						</div>
					</div>
					<CascadeImg
						position="right"
						src="https://placeholder.com/400x500"
					/>
				</div>
			</section>

			<section className="bg-gray-100">
				<div className="container grid grid-cols-2 gap-20">
					<CascadeImg
						position="left"
						src="https://placeholder.com/400x500"
					/>
					<div className="grid grid-cols-5 innerPadding gap-10">
						<div className="col-span-3">
							<h3>Board opportunities</h3>
							<p>
								We work with companies and organisations to help
								bridge the diversity gap on their boards by
								sharing vacant roles with our network, providing
								a shortlist of qualified candidates that meet
								their criteria, or through our bespoke search
								service.
							</p>

							<ArrowLink href="#" title="Learn more" />
						</div>
						<TBRAKey />
					</div>
				</div>
			</section>

			<section className="bg-white">
				<div className="container my-28">
					<h2 className="text-center">trusted by.</h2>
					<img
						src="https://placeholder.com/800x400"
						className="mx-auto mt-10"
						alt=""
					/>
				</div>
			</section>

			<section className="bg-gray-100">
				<div className="container">
					<div className="grid grid-cols-2 gap-20">
						<div className="grid grid-cols-5 innerPadding gap-10">
							<TBRAKey />
							<div className="col-span-3">
								<h3>Executive Development</h3>
								<p>
									Whether you are looking to transform your
									presence in the boardroom or lead your
									business and teams to success in our new
									global context, we offer a range of
									immersive experiences suited to your
									professional development goals.
								</p>
								<ArrowLink href="#" title="Learn more" />
							</div>
						</div>
						<CascadeImg
							position="right"
							src="https://placeholder.com/400x500"
						/>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="QuoteCascade">
						<img
							src="/images/quote.svg"
							height="150px"
							alt="Quote"
							className="mx-auto"
						/>
						<p className="mt-10">
							Our partners and donors provide invaluable support
							and share our vision for creating a gender-equal
							world. From foundations to corporations, our
							partners know that investing in TheBoardroom Africa
							is an investment in a more inclusive society, a
							stronger business community and Africa’s development
							objectives. We work with our donors and partners to
							achieve shared development objectives such as gender
							inclusion and jobs created. We work with our donors
							and partners to achieve shared development
							objectives such as gender inclusion and jobs
							created.
						</p>
						<p className="mt-4">
							<strong>Liesel Pritzker Simmons</strong>, Co-founder
							and Principle, Blue Haven Initiative
						</p>
					</div>
					<div className="grid grid-cols-5 innerPadding gap-10">
						<div className="col-span-3">
							<h3>Our Partners</h3>
							<p>
								Our partners and donors provide invaluable
								support and share our vision for creating a
								gender-equal world. From foundations to
								corporations, our partners know that investing
								in TheBoardroom Africa is an investment in a
								more inclusive society, a stronger business
								community and Africa’s development objectives.
								We work with our donors and partners to achieve
								shared development objectives such as gender
								inclusion and jobs created.
							</p>
							<ArrowLink href="#" title="Partners" />
						</div>
						<TBRAKey />
					</div>
				</div>
			</section>

			<section className="mt-16 bg-dawn">
				<div className="h-16"></div>
			</section>
		</>
	);
}
