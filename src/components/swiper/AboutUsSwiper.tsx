"use client";
import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { howWeOperate } from "@/lib/data";

export default function AboutUsSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}>
      {howWeOperate.map((item, index) => (
        <SwiperSlide key={item} className="pt-16 pb-20 px-8 text-lg">
          <div className="w-full h-full flex flex-col justify-start items-start gap-4">
            <p className="mb-8"> Check out how we operate</p>0{index + 1}
            <p className="text-3xl">{item}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
