"use client";
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/slides.css";

import { Pagination, Autoplay } from "swiper";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialSlider = ({ testimonials, imageUrl }) => {
	const pagination = {
		clickable: true,
	};

	return (
		<div className="bg-white pt-16 lg:py-24 testimonial-slides">
			<div className="pb-16 bg-darkblue lg:pb-0 lg:z-10 lg:relative">
				<div className="container lg:grid lg:grid-cols-3 lg:gap-8">
					<div className="relative lg:-my-8">
						<div
							aria-hidden="true"
							className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
						></div>
						<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
							<div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
								<img
									className="object-cover lg:h-full lg:w-full"
									src={imageUrl}
									alt=""
								/>
							</div>
						</div>
					</div>
					<Swiper
						pagination={pagination}
						modules={[Pagination, Autoplay]}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false,
						}}
						loop={true}
						className="mt-12 lg:m-0 lg:col-span-2 pb-10"
					>
						{testimonials.map((testimonial, i) => (
							<SwiperSlide key={i}>
								<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:p-10 lg:max-w-none lg:pl-8">
									<blockquote>
										<div>
											<ImQuotesLeft className="h-12 w-12 text-white opacity-25" />
											<p className="mt-6 text-xl text-white font-light">
												{testimonial.quote}
											</p>
										</div>
										<footer className="mt-6">
											<p className="font-medium text-libreb text-xl text-white">
												{testimonial.author}
											</p>
											<p className="text-dawn-200">
												{testimonial.title}
											</p>
										</footer>
									</blockquote>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
export default TestimonialSlider;
