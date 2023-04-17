/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "@/styles/slides.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const LogoSlides = ({ logos, className }) => {
	return (
		<>
			<Swiper
				slidesPerView={2}
				spaceBetween={10}
				slidesPerGroup={2}
				effect="fade"
				fadeEffect={{
					crossFade: true,
				}}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 4000,
				}}
				loop={true}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 10,
						slidesPerGroup: 3,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 30,
						slidesPerGroup: 4,
					},
					1024: {
						slidesPerView: 6,
						spaceBetween: 30,
						slidesPerGroup: 6,
					},
					1280: {
						slidesPerView: 7,
						spaceBetween: 30,
						slidesPerGroup: 7,
					},
				}}
				modules={[Pagination, Autoplay]}
				className="logoSlides !pb-8 mt-8"
			>
				{logos.map((logo, i) => (
					<SwiperSlide key={i}>
						<img
							src={logo.src}
							style={logo.style || {}}
							alt=""
							className={`max-h-[70px] max-w-[120px] mx-auto ${className}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default LogoSlides;
