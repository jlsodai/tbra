/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import TrustedBy from "@/app/components/TrustedBy";
import { communityLogos } from "@/app/utils/options";

const MembershipHome = () => {
	return (
		<>
			<section className="membership-about-hero bigborder">
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
							A membership that understands your journey.
						</h1>
						<div className=" md:max-w-[65%]">
							<p className=" text-dawn">
								Whether you are looking to transform your
								presence in the boardroom, position yourself for
								global opportunities, or lead your business and
								teams to success given our new global context,
								our membership offerings are uniquely designed
								to open the doors to leadership spaces and keep
								you there.
							</p>
							<div className="text-center mt-10">
								<Link
									href="/membership"
									className="btn bg-dawn font-normal"
								>
									Learn more about membership
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#3C455F] text-white">
				<div className="flex flex-col container min-h-screen relative px-4 py-16 items-center">
					<img
						src="/images/gray-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-5"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 items-center">
						<div>
							<h4 className="text-mustard text-6xl font-serif">
								Powerful community
							</h4>
							<p className="mt-4">
								Our highly-selective network is a
								rapidly-growing community of talented women
								executives representing more than 65 countries
								across Africa and the diaspora. Our network’s
								executives come from leading African and
								multinational companies, including Actis,
								General Electric, African Finance Corporation,
								Google, GlaxoSmithKline, Standard Chartered,
								Uber and more.
							</p>
						</div>
						<Image
							src="https://placeholder.com/300x400"
							width="300"
							height="400"
							alt=""
							className="mx-auto"
						/>
					</div>
					<TrustedBy
						logos={communityLogos}
						className="community-logos"
					/>
				</div>
			</section>

			<section className="bg-[#5D6579]">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 py-28 text-white">
						<div className="">
							<h4 className="text-mustard text-6xl font-serif">
								Curated peer conversations
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								Discover the power of doing it together.
							</p>
							<p className="mt-4">
								Enabled by a community activation platform that{" "}
								<br />
								facilitates curated connections at scale.
							</p>
							<p className="mt-4">
								Get matched every month with a peer for a 1-1{" "}
								<br />
								conversation on a topic of you choice.
							</p>
						</div>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="bg-[#222344]">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 py-28 text-white">
						<div className="">
							<h4 className="text-mustard text-6xl font-serif">
								Group coaching
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								Discover the power of doing it together.
							</p>
							<p className="mt-4">
								Deconstruct your limiting beliefs, and explore
								the moods that shape our leadership journey in
								intimate monthly virtual coaching sessions.
							</p>
						</div>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="bg-[#434460]">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 py-28 text-white">
						<div className="">
							<h4 className="text-mustard text-6xl font-serif">
								The tools you need to stay on top
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								Position yourself to stay on top.
							</p>
							<p className="mt-4">
								Whether it&apos;s discovering how to position
								yourself for the next major move, avoiding
								getting stuck, or preparing yourself for
								regional and global opportunities, there are
								clear steps you can take to advance those
								ambitions.
							</p>
							<p>
								Your membership provides access to our range of
								professional advancement tools.
							</p>
						</div>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="bg-[#6B6C82]">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 py-28 text-white">
						<div className="">
							<h4 className="text-mustard text-6xl font-serif">
								Inspire business excellence
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								Adapt and authentically lead in our new global
								context.
							</p>
							<p className="mt-4">
								Navigate the complexities of strategic
								leadership with exclusive access to our suite of
								Executive Programmes
							</p>
						</div>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default MembershipHome;
