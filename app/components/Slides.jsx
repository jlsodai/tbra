/* eslint-disable @next/next/no-img-element */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/styles/slides.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<div class="' +
				className +
				'">' +
				'<img src="https://via.placeholder.com/200" />' +
				"</div>"
			);
		},
	};

	return (
		<>
			<section className="bg-dawn-200 py-8">
				<Swiper
					pagination={pagination}
					modules={[Pagination]}
					cssMode="true"
					// className="bg-transparent"
				>
					{[...Array(4)].map((e, i) => (
						<SwiperSlide
							key={i}
							className="flex justify-center items-center mt-16 mb-48"
						>
							<div className="container grid grid-cols-2 gap-24 items-center">
								<div className="prose text-left">
									<h2>Name of Facilitator</h2>
									<p className="font-bold">Title Here</p>
									<p>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Eveniet maxime ullam
										laborum quis accusantium provident,
										fugiat, quae quisquam doloremque rem,
										nihil recusandae perferendis nulla at
										odit. Fugiat alias illo assumenda!
									</p>
									<p>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Eveniet maxime ullam
										laborum quis accusantium provident,
										fugiat, quae quisquam doloremque rem,
										nihil recusandae perferendis nulla at
										odit. Fugiat alias illo assumenda!
									</p>
								</div>
								<img
									src="https://via.placeholder.com/500"
									alt=""
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
}
