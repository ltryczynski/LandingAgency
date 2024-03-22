"use client";
import React from "react";
import Image from "next/image";
import SectionInner from "../UI/SectionInner";
import Button from "../UI/Button";
import AboutUsSlider from "../swiper/AboutUsSwiper";
import SwiperCards from "../swiper/SwiperCards";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../swiper/swiper_style.css";
import { H2 } from "../UI/Heading";

export default function AboutSection() {
  return (
    <section className="py-16 flex flex-col gap-32">
      <SectionInner className="grid grid-cols-3 gap-16">
        <div className="col-span-2 flex flex-col items-start gap-8">
          <H2>Our main goal is to set your business on the hills</H2>
          <Image
            src="/about-us.webp"
            width="400"
            height="150"
            alt="About us image"
          />
          <Button>See other</Button>
        </div>
        <div className="border-8 border-lavender h-max pb-16 rounded-2xl">
          <AboutUsSlider />
        </div>
      </SectionInner>
      <SectionInner>
        <H2 className="w-1/2 mb-16">
          We believe the right design will bring your business to life
        </H2>

        <SwiperCards />
      </SectionInner>
    </section>
  );
}
