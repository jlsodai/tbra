/* eslint-disable @next/next/no-img-element */
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
        modules={[Pagination]}
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
              <div className="box relative before:absolute before:h-full before:top-8 before:left-8 before:border-mustard before:border-8 before:w-full">
                <div className="bg-white p-8 relative text-gray-700">
                  <div className="flex mb-4 items-center gap-4">
                    <img
                      src="https://placehold.co/80"
                      className="rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="font-bold">Jackie Namara Rukare</p>
                      <p className="leading-tight">
                        Managing Consultant Iguru Consult Ltd
                      </p>
                    </div>
                  </div>
                  <p>
                    In TBrA, I found my &quot;stiletto network&quot;, a group of
                    powerful women willing to share their expertise, life
                    lessons, a sounding board for ideas, and good for a hearty
                    laugh. The reunion in Marrakesh cemented friendships,
                    created new bonds, and I am truly honoured to be in a
                    community of influencers and leaders impacting the world.
                  </p>
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
