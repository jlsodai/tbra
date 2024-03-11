"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/styles/slides.css";

// import required modules
import { Pagination } from "swiper";

const MemberTestimonial = ({ testimonials, imageUrl }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i} className="border border-white p-6">
            <p>{testimonial.quote}</p>
            <p className="mt-8">- {testimonial.author}</p>
            <p>{testimonial.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MemberTestimonial;
