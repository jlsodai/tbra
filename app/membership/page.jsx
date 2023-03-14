/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const MembershipHome = () => {
	return (
		<>
			<section className="bg-dawn-900 bigborder">
				<div className="flex container min-h-screen relative px-4 items-center">
					<img
						src="/images/white-key.png"
						className="absolute left-0 h-[75%] -z-1 opacity-5"
						alt=""
					/>
					<div className="z-10 text-xl flex flex-col gap-6 my-28">
						<h1 className="text-mustard">
							Society thrives when women are equal decision
							makers.
						</h1>
						<p className=" text-dawn md:max-w-[65%]">
							TheBoardroom Africa is Africa&apos;s leading private
							membership network that promotes exceptional female
							talent to boards and executive teams while
							transforming the presence and influence of African
							women on a global stage.
						</p>
						<div className="text-center">
							<Link href="#" className="btn bg-dawn font-normal">
								Learn more about membership
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-mustard-100">
				<div className="flex flex-col container min-h-screen relative px-4 justify-center">
					<img
						src="/images/gray-key.png"
						className="absolute left-0 h-[75%] -z-10 opacity-10"
						alt=""
					/>
				<div className="md:max-w-[60%]">
						<h4 className="text-mustard text-6xl">
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
		</>
	);
};
export default MembershipHome;
