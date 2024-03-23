"use client";
import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

import { cardContent } from "@/lib/data";
import Card from "../UI/Card";
import SwiperArrows from "./SwiperArrows";
import { twMerge } from "tailwind-merge";
import { SwiperProps } from "@/lib/type";

export default function SwiperCards({ className }: SwiperProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const [swiperLeftArrowsState, setSwiperLeftArrowsState] =
    useState<boolean>(true);
  const [swiperRightArrowsState, setSwiperRightArrowsState] =
    useState<boolean>(false);

  const slidePerView = (): number => {
    let windowWidth = window.innerWidth || 1;
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
        onSwiper={setSwiperRef}
        spaceBetween={50}
        slidesPerView={slidePerView()}
        onSlideChange={checkSwiperPos}
        className={`${twMerge("mb-8", className)}`}>
        {cardContent.map((item, index) => (
          <SwiperSlide key={index}>
            <Card icon={item.icon} title={item.title} content={item.content} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 justify-center md:justify-start">
        <SwiperArrows
          onClick={handlePrevious}
          type="prev"
          className={swiperLeftArrowsState ? "opacity-30" : ""}></SwiperArrows>
        <SwiperArrows
          onClick={handleNext}
          type="next"
          className={swiperRightArrowsState ? "opacity-30" : ""}></SwiperArrows>
      </div>
    </>
  );
}
