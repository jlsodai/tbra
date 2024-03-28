/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, i) => (
          // <SwiperSlide key={i} className="border border-white p-6">
          //   <p>{testimonial.quote}</p>
          //   <p className="mt-8">- {testimonial.author}</p>
          //   <p>{testimonial.title}</p>
          // </SwiperSlide>
          <SwiperSlide key={i}>
            <div className="testimonial flex">
              <div className="box relative">
                <div className="border-white border p-8 md:p-12 relative">
                  <p className="mb-4">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="leading-tight">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:cdad7d,e_colorize:100/v1706523446/quote_vzpd3d.png"
                  className="absolute -top-6 right-6 w-14"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MemberTestimonial;
