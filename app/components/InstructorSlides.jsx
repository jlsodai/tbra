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
				instructors[index].instructorImage +
				'" className="rounded-full" />' +
				'<p class="text-sm mt-2">' +
				instructors[index].Name +
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
					className={`${instructors.length === 1 && "single-slide"}`}
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
										{instructor.Name}
									</h2>

									<p className="whitespace-pre-wrap">
										{instructor.Profile}
									</p>
								</div>
								<img
									src={instructor.instructorImage}
									className="max-h-[450px] w-full object-cover"
									alt=""
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
export default InstructorSlides;
