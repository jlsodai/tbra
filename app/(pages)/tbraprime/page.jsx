/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import LogoSlides from "@/app/slides/LogoSlides";
import { clients } from "@/app/utils/options";
import Link from "next/link";
import { HiCheck } from "react-icons/hi2";

const Page = () => {
	return (
		<>
			<section className="bg-darkblue py-20 overflow-x-hidden text-xl font-light">
				<div className="container transition-all ease-in-out duration-300">
					<div className="lg:flex justify-between items-center">
						<div className="lg:w-6/12 order-2 mb-10 lg:mb-0">
							<div className="flex items-end justify-center gap-4 mb-4">
								<img
									className="object-cover w-[20%]"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809545/img5_aesxw5.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="300"
								/>
								<img
									className="object-cover w-[40%]"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809206/img2_jus6me.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="0"
								/>
							</div>
							<div className="flex items-start justify-center gap-4">
								<img
									className="object-cover w-[25%]"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809206/img3_ppimgg.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="500"
								/>
								<img
									className="object-cover w-[40%]"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809206/img1_xukr7d.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="100"
								/>
								<img
									className="object-cover w-[26%]"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809545/img4_smhigy.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="400"
								/>
							</div>
						</div>
						<div className="lg:w-5/12 mb-7 lg:mb-0">
							<p
								className="text-tender font-libreb mb-4"
								data-aos="fade-up"
								data-aos-delay="50"
							>
								Something Here
							</p>
							<h2
								className="text-4xl text-mustard mb-6"
								data-aos="fade-up"
								data-aos-delay=""
							>
								Upgrade to TBrA Prime
							</h2>
							<p
								className="mb-8 text-white text-opacity-80 leading-7"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<b className="font-semibold">
									<i>TBrA Prime</i>
								</b>{" "}
								is an enhanced premium membership experience to
								enable you to get the absolute best from your
								membership. Prime members can enjoy a wide range
								of perks and discounts on all member services,
								programmes and events.
								<br />
								<br />
								Learn more about the TBrA Prime experience, and
								upgrade today.
							</p>
							<p
								className="mt-5"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<Link
									className="btn transition-all ease-in-out duration-300 font-normal text-black rounded"
									href="#!"
								>
									Upgrade Now
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-10">
				<div className="container">
					<table
						width="100%"
						className="primeTable border-spacing-x-2 border-separate text-base"
					>
						<thead>
							<tr>
								<th>&nbsp;</th>
								<th className="p-0">
									<p className="mx-[15%] py-2 rounded-t-md text-white bg-[#A6A6A6]">
										Standard
									</p>
								</th>
								<th className="p-0">
									<p className="mx-[15%] py-2 rounded-t-md text-white bg-[#CDAD7D]">
										Prime
									</p>
								</th>
							</tr>
						</thead>
						<tbody>
							{[...Array(20)].map((e, i) => (
								<tr key={i}>
									<td width="70%">
										<p>Unlimited Access to Members Forum</p>
									</td>
									<td width="15%">
										<span>
											<HiCheck />{" "}
										</span>
									</td>
									<td width="15%">
										<HiCheck />{" "}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};
export default Page;
