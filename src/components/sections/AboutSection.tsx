"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SectionInner from "../UI/SectionInner";
import Button from "../UI/Button";
import AboutUsSlider from "../swiper/AboutUsSwiper";
import SwiperCards from "../swiper/SwiperCards";

import { H2 } from "../UI/Headings";
import { useAboutUsGSAP } from "../../hooks/useGsapHooks";

export default function AboutSection() {
  const aboutUsRef = useRef<HTMLElement | null>(null);
  useAboutUsGSAP({ ref: aboutUsRef });
  return (
    <section className="py-16 flex flex-col gap-32" ref={aboutUsRef}>
      <SectionInner className="grid grid-cols-1 md:grid-cols-3 gap-16 aboutUsFirst">
        <div className="flex flex-col items-center md:col-span-2 md:items-start gap-8">
          <H2 style={{ opacity: 0 }} className="first text-center md:text-left">
            Our main goal is to set your business on the hills
          </H2>
          <Image
            src="/about-us.webp"
            width={400}
            height={150}
            alt="About us image"
            className="aboutUsImage"
            style={{ opacity: 0 }}
          />
          <div className="aboutUsButton" style={{ opacity: 0 }}>
            <Button>See other</Button>
          </div>
        </div>
        <div
          className="border-8 border-lavender h-max pb-16 rounded-2xl aboutUsSwiper"
          style={{ opacity: 0 }}>
          <AboutUsSlider />
        </div>
      </SectionInner>
      <SectionInner className="aboutUsSecond">
        <H2 className="md:w-1/2 mb-16 second text-center md:text-left">
          We believe the right design will bring your business to life
        </H2>

        <SwiperCards className="aboutUsSwiper" />
      </SectionInner>
    </section>
  );
}
