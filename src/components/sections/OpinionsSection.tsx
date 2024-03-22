import React from "react";
import { H2 } from "../UI/Heading";
import SectionInner from "../UI/SectionInner";
import SwiperOpinions from "../swiper/SwiperOpinions";

export default function OpinionsSection() {
  return (
    <section className="bg-indigoC py-16 text-white">
      <SectionInner>
        <H2 className="w-1/2 mb-16">Opinions of our customers</H2>
        <SwiperOpinions />
      </SectionInner>
    </section>
  );
}
