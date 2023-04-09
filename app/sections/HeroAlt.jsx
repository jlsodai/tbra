/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HeroAlt = ({ title, children }) => {
	return (
		<section className="bg-darkblue bigborder" data-aos="fade-up">
			<div className="flex container relative justify-center items-center ">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-4"
					alt=""
				/>
				<div className="z-10 text-xl flex flex-col gap-6 my-16 md:my-28">
					<h1 className="text-mustard">{title}</h1>
					<div className="md:max-w-[65%]">
						{children}
						{/* <div className="text-center mt-10">
							<Link
								href="/membership"
								className="btn bg-dawn font-normal"
							>
								Join Now
							</Link>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroAlt;
