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
				`<div class="slidesMobile md:hidden text-[45px] !w-[15px] !h-[45px] ${className}">&#x2219</div>` +
				'<div class="-sm:hidden text-center ' +
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
				<h3 className="font-halyard text-3xl md:text-5xl md:mt-16 text-center">
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
							className="flex justify-center items-center my-8 md:my-16"
						>
							<div className="container grid md:grid-cols-2 md:gap-24 items-center">
								<div className="prose text-left">
									<h2 className="mb-4 md:mb-8 text-2xl md:text-4xl">
										{instructor.Name}
									</h2>

									<img
										src={instructor.instructorImage}
										className="max-h-[450px] w-full object-cover -sm:mt-8 md:hidden"
										alt=""
									/>

									<p className="whitespace-pre-wrap">
										{instructor.Profile}
									</p>
								</div>
								<img
									src={instructor.instructorImage}
									className="max-h-[450px] w-full object-cover -sm:hidden"
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
