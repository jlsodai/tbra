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
		<div className="bg-white pt-16 md:py-24 testimonial-slides">
			<div className="-sm:pb-8 bg-darkblue md:pb-0 md:z-10 md:relative">
				<div className="container md:grid md:grid-cols-3 md:gap-8">
					<div className="relative md:-my-8">
						{/* <div
							aria-hidden="true"
							className="absolute inset-x-0 top-0 h-1/2 bg-white md:hidden"
						></div> */}
						<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:p-0 md:h-full">
							<div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 md:aspect-none md:h-full">
								<img
									className="object-cover md:h-full md:w-full"
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
							delay: 10000,
							disableOnInteraction: false,
						}}
						loop={true}
						className="mt-12 md:m-0 md:col-span-2 pb-16 md:pb-10"
					>
						{testimonials.map((testimonial, i) => (
							<SwiperSlide key={i}>
								<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 md:px-0 md:p-10 md:max-w-none md:pl-8">
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
