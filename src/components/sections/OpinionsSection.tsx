"use client";
import React, { useRef } from "react";
import { H2 } from "../UI/Headings";
import SectionInner from "../UI/SectionInner";
import SwiperOpinions from "../swiper/SwiperOpinions";
import { useOpinionsGSAP } from "../hooks/useGsapHooks";

export default function OpinionsSection() {
  const opinionsRef = useRef<HTMLElement | null>(null);
  useOpinionsGSAP({ ref: opinionsRef });
  return (
    <section className="bg-indigoC py-16 text-white" ref={opinionsRef}>
      <SectionInner>
        <H2 className="w-1/2 mb-16">Opinions of our customers</H2>
        <SwiperOpinions className="opinionsSwiper" />
      </SectionInner>
    </section>
  );
}
