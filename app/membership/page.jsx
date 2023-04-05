/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MembershipSlides from "@/app/sections/MembershipSlides";
import Image from "next/image";
import TrustedBy from "@/app/components/TrustedBy";
import { communityLogos } from "@/app/utils/options";

const MembershipHome = () => {
	return (
		<>
			<section className="">
				<div className="container relative">
					<div className="flex justify-between items-center pt-6 text-white absolute z-50 w-full">
						<Link href="/">
							<img
								src="https://theboardroomafrica.com/wp-content/themes/tbra/assets/images/logo-primary.svg"
								className="img-white"
								width="100px"
								alt="Logo"
							/>
						</Link>
						<div className="flex gap-10 items-center">
							<Link href="#">Login</Link>
							<Link href="#" className="btn">
								Apply
							</Link>
						</div>
					</div>
				</div>
				<MembershipSlides />
			</section>

			<section className="bg-[#3C455F] text-white">
				<div className="flex flex-col container min-h-screen relative px-4 py-16 items-center justify-center">
					<img
						src="/images/gray-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-5"
						alt=""
					/>
					<div className="grid grid-cols-2 gap-20 items-center">
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
						<img
							src="https://res.cloudinary.com/tbra/image/upload/v1680184362/community_tnruqd.png"
							alt=""
							className="mx-auto"
						/>
					</div>
				</div>
			</section>

			<section className="bg-[#384159] py-16">
				<div className="container flex flex-col">
					<h3 className="text-center text-dawn font-libreb text-4xl md:mx-32">
						Our members come from some of Africa&apos;s leading
						companies and organisations
					</h3>
					<TrustedBy
						logos={communityLogos}
						className="community-logos"
					/>
				</div>
			</section>

			<section
				style={bgStyle(
					"https://tbratest.my.canva.site/membership-learn-more-page/images/b8f20935578f5ba1b8b182cd33fff00a.jpg"
				)}
			>
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

			<section
				style={bgStyle(
					"https://tbratest.my.canva.site/membership-learn-more-page/images/a00b60f40dce31fa319e4dcd91c0d494.jpg"
				)}
			>
				<div className="flex flex-col container min-h-screen relative px-4 justify-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 mb-28 text-white">
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
					<img
						src="https://res.cloudinary.com/tbra/image/upload/v1680188246/gc_words_z1ycum.png"
						alt=""
					/>
				</div>
			</section>

			<section
				style={{
					...bgStyle(
						"https://tbratest.my.canva.site/membership-learn-more-page/images/66a99990b0237ba0bb45488d7fc4a6d8.jpg"
					),
					backgroundSize: "100%",
					backgroundPosition: "0 -200px",
				}}
			>
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

			<section className="bg-darkblue">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid grid-cols-2 z-10 py-28 text-white items-center">
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
						<img
							src="https://res.cloudinary.com/tbra/image/upload/v1680189640/mockup_fp3gab.png"
							width="300px"
							alt="membership mockup"
							className="mx-auto"
						/>
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
						<Link href="#" className="border-2 btn border-mustard">
							Apply
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
export default MembershipHome;

const bgStyle = (bgImg, opacity = 90) => ({
	background: `linear-gradient(rgba(32,41,69, 0.${opacity}), rgba(32,41,69, 0.${opacity})), url('${bgImg}')`,
	backgroundSize: "cover",
});
