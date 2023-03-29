/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MembershipSlides from "@/app/sections/MembershipSlides";

const MembershipHome = () => {
	return (
		<>
			<section className="">
				<div className="container relative">
					<div className="flex justify-end gap-10 items-center pt-6 text-white absolute z-50 right-0">
						<Link href="#">Login</Link>
						<Link href="#" className="btn">
							Apply
						</Link>
					</div>
				</div>
				<MembershipSlides />
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
		</>
	);
};
export default MembershipHome;
