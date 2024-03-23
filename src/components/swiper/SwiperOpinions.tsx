"use client";
import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

import { opinions } from "@/lib/data";
import SwiperArrows from "./SwiperArrows";
import OpinionCard from "../UI/OpinionCard";
import { SwiperProps } from "@/lib/type";
import { twMerge } from "tailwind-merge";

export default function SwiperCards({ className }: SwiperProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [swiperLeftArrowsState, setSwiperLeftArrowsState] =
    useState<boolean>(true);
  const [swiperRightArrowsState, setSwiperRightArrowsState] =
    useState<boolean>(false);

  const slidePerView = (): number => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 1700) return 3.3;
    else if (windowWidth > 1300 && windowWidth < 1700) return 2.3;
    else return 1;
  };

  const checkSwiperPos = useCallback((swiper: SwiperClass) => {
    swiper.isBeginning && setSwiperLeftArrowsState(true);
    !swiper.isBeginning && setSwiperLeftArrowsState(false);
    swiper.isEnd && setSwiperRightArrowsState(true);
    !swiper.isEnd && setSwiperRightArrowsState(false);
  }, []);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);
  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          setSwiperRef(swiper);
          checkSwiperPos(swiper);
        }}
        spaceBetween={50}
        slidesPerView={slidePerView()}
        onSlideChange={checkSwiperPos}
        className={`${twMerge("mb-8", className)}`}>
        {opinions.map((item, index) => (
          <SwiperSlide key={index}>
            <OpinionCard
              desc={item.desc}
              autor={item.autor}
              avatar={item.avatar}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 justify-center md:justify-start">
        <SwiperArrows
          onClick={handlePrevious}
          type="prev"
          className={`${
            swiperLeftArrowsState ? "opacity-30 cursor-default" : ""
          } border-none bg-white/5`}
          ArrowClassName="text-white"></SwiperArrows>
        <SwiperArrows
          onClick={handleNext}
          type="next"
          className={`${
            swiperRightArrowsState ? "opacity-30 cursor-default" : ""
          } border-none bg-white/5`}
          ArrowClassName="text-white"></SwiperArrows>
      </div>
    </>
  );
}
