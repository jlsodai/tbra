/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MembershipSlides from "@/app/sections/MembershipSlides";
import Image from "next/image";
import TrustedBy from "@/app/components/TrustedBy";
import { communityLogos } from "@/app/utils/options";
import { fetchData } from "@/app/lib/fetchData";

const MembershipHome = async () => {
	const data = await fetchData("membership?populate=*");
	const {
		testimonials,
		community,
		curated,
		groupCoaching,
		inspireBusiness,
		tools,
		heroSlides,
	} = data?.data?.attributes;
	return (
		<>
			<section className="">
				<div className="relative flex justify-center text-white w-full">
					<div className="container flex mt-6 justify-between items-center absolute z-50">
						<Link href="/">
							<img
								src="/logo-primary.svg"
								className="img-white"
								width="100px"
								alt="Logo"
							/>
						</Link>
						<div className="flex gap-4 md:gap-10 items-center">
							<Link
								href="https://membersforum.theboardroomafrica.com/login"
								target="_blank"
							>
								Login
							</Link>
							<Link
								href="/membership/application"
								className="btn"
							>
								Apply
							</Link>
						</div>
					</div>
				</div>
				<MembershipSlides details={heroSlides} />
			</section>

			<section className="bg-[#3C455F] text-white">
				<div className="flex flex-col container md:min-h-screen relative py-16 items-center justify-center">
					<img
						src="/images/gray-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-5"
						alt=""
					/>
					<div className="grid md:grid-cols-2 gap-20 items-center">
						<div>
							<h4 className="text-mustard text-3xl md:text-6xl font-serif">
								{community.Title}
							</h4>
							<p className="mt-4">{community.content}</p>
						</div>
						<img
							src={community.imageUrl}
							alt=""
							className="mx-auto"
						/>
					</div>
				</div>
			</section>

			<section className="bg-[#384159] py-16">
				<div className="container flex flex-col">
					<h3 className="text-center text-dawn font-libreb -sm:mb-4 text-xl md:text-4xl md:mx-32">
						Our members come from some of Africa&apos;s leading
						companies and organisations
					</h3>
					<TrustedBy
						logos={communityLogos}
						className="community-logos"
					/>
				</div>
			</section>

			<section className="bg-[linear-gradient(rgba(32,41,69,0.9),rgba(32,41,69,0.9)),url('https://tbratest.my.canva.site/membership-learn-more-page/images/b8f20935578f5ba1b8b182cd33fff00a.jpg')] bg-cover bg-center">
				<div className="flex container md:min-h-screen relative items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid md:grid-cols-2 z-10 py-28 text-white">
						<div className="">
							<h4 className="text-mustard text-3xl md:text-6xl font-serif">
								{curated.Title}
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								{curated.subTitle}
							</p>
							<p className="mt-4 md:whitespace-pre-wrap">
								{curated.content}
							</p>
						</div>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="bg-[linear-gradient(rgba(32,41,69,0.9),rgba(32,41,69,0.9)),url('https://tbratest.my.canva.site/membership-learn-more-page/images/a00b60f40dce31fa319e4dcd91c0d494.jpg')] bg-cover bg-center">
				<div className="flex flex-col container md:min-h-screen -sm:py-28 relative justify-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid md:grid-cols-2 z-10 md:mb-28 text-white">
						<div className="">
							<h4 className="text-mustard text-3xl md:text-6xl font-serif">
								{groupCoaching.Title}
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								{groupCoaching.subTitle}
							</p>
							<p className="mt-4">{groupCoaching.content}</p>
						</div>
						<div>&nbsp;</div>
					</div>
					<img
						src="https://res.cloudinary.com/tbra/image/upload/v1680188246/gc_words_z1ycum.png"
						alt=""
						data-aos="fade-up"
					/>
				</div>
			</section>

			<section className="-sm:py-28 bg-[linear-gradient(rgba(32,41,69,0.9),rgba(32,41,69,0.9)),url('https://tbratest.my.canva.site/membership-learn-more-page/images/66a99990b0237ba0bb45488d7fc4a6d8.jpg')] md:bg-[center_-120px] bg-cover">
				<div className="flex container md:min-h-screen relative items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid md:grid-cols-2 z-10 text-white">
						<div className="">
							<h4 className="text-mustard text-3xl md:text-6xl font-serif">
								{inspireBusiness.Title}
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								{inspireBusiness.subTitle}
							</p>
							<p className="mt-4">{inspireBusiness.content}</p>
						</div>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="bg-darkblue">
				<div className="flex container md:min-h-screen relative items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="grid md:grid-cols-2 z-10 py-28 text-white items-center">
						<div className="">
							<h4 className="text-mustard text-3xl md:text-6xl font-serif">
								{tools.Title}
							</h4>
							<p className="mt-4 font-halyard font-extralight text-3xl text-mustard">
								{tools.subTitle}
							</p>
							<p className="mt-4 md:whitespace-pre-wrap">
								{tools.content}
							</p>
						</div>
						<img
							src="https://res.cloudinary.com/tbra/image/upload/v1680189640/mockup_fp3gab.png"
							width="300px"
							alt="membership mockup"
							className="mx-auto -sm:mt-8"
						/>
					</div>
				</div>
			</section>

			<section className="membership-testimonial">
				<div className="flex flex-col container md:min-h-screen relative py-28 justify-center items-center gap-y-10">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-3"
						alt=""
					/>
					<div className="text-mustard md:max-w-[60%] z-10 text-center">
						<h4 className="text-3xl md:text-6xl font-libreb">
							Join the movement
						</h4>
						<p className="mt-4 font-halyard font-extralight text-2xl md:text-3xl text-mustard">
							Discover the power of doing it together.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-10 text-white md:max-w-[80%]">
						{testimonials.map((testimonial, i) => (
							<div key={i} className="border border-white p-6">
								<p>{testimonial.quote}</p>
								<p className="mt-8">- {testimonial.author}</p>
								<p>{testimonial.title}</p>
							</div>
						))}
					</div>

					<div className="text-center text-white flex gap-10 uppercase">
						<Link
							href="/membership/application"
							className="border-2 btn border-mustard"
						>
							Apply
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
export default MembershipHome;
