/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/slides.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const InstructorSlides = ({ instructors }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<div class="text-center ' +
				className +
				'">' +
				'<img src="' +
				instructors[index].imageUrl +
				'" className="rounded-full" />' +
				'<p class="text-sm mt-2">' +
				instructors[index].name +
				"</p>" +
				"</div>"
			);
		},
	};

	return (
		<>
			<section className="bg-dawn-200 py-8 instructor-slides">
				<h3 className="font-halyard text-5xl mt-16 text-center">
					Course Instructors
				</h3>
				<Swiper
					pagination={pagination}
					loop={true}
					modules={[Pagination, Navigation]}
					cssMode="true"
					navigation={true}
					className="mySwiper"
					// className="bg-transparent"
				>
					{instructors.map((instructor, i) => (
						<SwiperSlide
							key={i}
							className="flex justify-center items-center mt-16 mb-16"
						>
							<div className="container grid grid-cols-2 gap-24 items-center">
								<div className="prose text-left">
									<h2 className="mb-8 text-4xl">
										{instructor.name}
									</h2>
									{instructor.profile.map((profile, i) => (
										<p key={i}>{profile}</p>
									))}
								</div>
								<img src={instructor.imageUrl} alt="" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
export default InstructorSlides;
