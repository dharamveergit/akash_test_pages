import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper as SwiperReact, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import TestimonialCard from "./card";

// import required modules
import { Navigation } from "swiper/modules";

import { testimonials } from "./data";

export function Swiper() {
  return (
    <SwiperReact
      slidesPerView={4.5}
      breakpoints={{
        50: {
          slidesPerView: 1.4,
          spaceBetween: 32,
        },
        758: {
          slidesPerView: 2.5,
        },

        1024: {
          slidesPerView: 3.5,
        },
        1280: {
          slidesPerView: 4.005,
        },
        1536: {
          slidesPerView: 4.5,
        },
      }}
      modules={[Navigation]}
      loop
      centeredSlides
      loopedSlides={4}
      grabCursor={true}
      spaceBetween={48}
      navigation={true}
    >
      {testimonials?.map((testimonial) => (
        <SwiperSlide key={Math.random()}>
          <TestimonialCard
            userName={testimonial.userName}
            testimonial={testimonial.testimonial}
            userAvatar={testimonial.useAvatar}
          />
        </SwiperSlide>
      ))}

      <div className="mt-14 hidden items-center justify-center md:flex">
        <SwiperNavButtons />
      </div>
    </SwiperReact>
  );
}

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex space-x-4">
      <button
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border  hover:bg-foreground/5"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1.08691L1 6.08691L5 11.0869"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border  hover:bg-foreground/5"
        onClick={() => swiper.slideNext()}
      >
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.08691L5 6.08691L1 11.0869"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};
