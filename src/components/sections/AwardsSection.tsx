"use client";
import React, { useRef } from "react";
import { H2 } from "../UI/Headings";
import SectionInner from "../UI/SectionInner";
import AwardCard from "../UI/AwardCard";
import { awards } from "@/lib/data";
import { useAwardGSAP } from "../../hooks/useGsapHooks";

export default function AwardsSection() {
  const awardRef = useRef<HTMLElement | null>(null);
  useAwardGSAP({ ref: awardRef });
  return (
    <section className="pb-16" ref={awardRef}>
      <SectionInner className="flex flex-col gap-8 mb-8">
        <H2 style={{ opacity: 0 }}>Awards</H2>
      </SectionInner>
      <SectionInner className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {awards.map((item) => (
          <div key={item.name} className="awardCard" style={{ opacity: 0 }}>
            <AwardCard name={item.name} event={item.event} year={item.year} />
          </div>
        ))}
      </SectionInner>
    </section>
  );
}
