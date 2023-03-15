/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FooterLine from "@/app/sections/FooterLine";
const MembershipHome = () => {
	return (
		<>
			<section className="membership-hero bigborder">
				<div className="container flex justify-end gap-10 items-center pt-6 text-white relative">
					<Link href="#">Login</Link>
					<Link href="#" className="btn">
						Apply
					</Link>
				</div>
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="z-10 text-xl flex flex-col gap-6 my-28">
						<h1 className="text-mustard">
							Society thrives when women are equal decision
							makers.
						</h1>
						<div className=" md:max-w-[65%]">
							<p className=" text-dawn">
								TheBoardroom Africa is Africa&apos;s leading
								private membership network that promotes
								exceptional female talent to boards and
								executive teams while transforming the presence
								and influence of African women on a global
								stage.
							</p>
							<div className="text-center mt-10">
								<Link
									href="/membership/about-membership"
									className="btn bg-dawn font-normal"
								>
									Learn more about membership
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-mustard-100">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/gray-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-10"
						alt=""
					/>
					<div className="md:max-w-[60%] z-10 py-28">
						<h4 className="text-mustard text-6xl font-halyard font-thin">
							Influential network of women leaders
						</h4>
						<p className="mt-4">
							Being a woman at the top can be a lonely experience;
							TheBoardroom Africa enables our members to realise
							they don’t have to go at it alone.
						</p>
						<p className="mt-4">
							Join the most influential private community of women
							leaders on the continent and together transform your
							leadership while staying at the top.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-dusk">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="md:max-w-[60%] z-10 py-28 text-white">
						<h4 className="text-mustard text-6xl font-serif">
							Transforming the face of leadership
						</h4>
						<p className="mt-4">
							To disrupt the status quo, we must intentionally
							cultivate a pipeline of leaders.
						</p>
						<p className="mt-4">
							Connect to a network of other leading women and
							together, unlock access to opportunities, transform
							your presence through executive development, peer
							networking, in-person gatherings and more.
						</p>
					</div>
				</div>
			</section>

			<section className="membership-testimonial">
				<div className="flex flex-col container min-h-screen relative py-28 px-4 justify-center items-center gap-y-10">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="text-mustard md:max-w-[60%] z-10 text-center">
						<h4 className="text-6xl font-libreb">
							Join the movement
						</h4>
						<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
							Discover the power of doing it together.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-10 text-white md:max-w-[80%]">
						{[1, 2, 3].map((e, i) => (
							<div key={i} className="border border-white p-6">
								<p>
									I joined TheBoardroom Africa because I saw
									it as a platform to meet other amazing
									women, but also to have a platform that has
									eyes where I don&apos;t have eyes. It&apos;s
									a lonely road for executive women, and being
									part of a platform that provides this
									echosystem of like-minded people that can
									champion but also critique, and promote you,
									is a win win for everyone.
								</p>
								<p className="mt-8">- Tokunboh Ishmael</p>
								<p>Managing Director Alitheia Capital</p>
							</div>
						))}
					</div>

					<div className="text-center text-white flex gap-10 uppercase">
						<Link
							href="#"
							className="border-2 btn bg-transparent border-mustard"
						>
							Learn more
						</Link>

						<Link href="#" className="border-2 btn border-mustard">
							Apply
						</Link>
					</div>
				</div>
			</section>

			<FooterLine />
		</>
	);
};
export default MembershipHome;
