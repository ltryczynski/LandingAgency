import React from "react";
import { H2 } from "../UI/Heading";
import SectionInner from "../UI/SectionInner";
import AwardCard from "../UI/AwardCard";
import { awards } from "@/lib/data";

export default function AwardsSection() {
  return (
    <section className="pb-16">
      <SectionInner className="flex flex-col gap-8 mb-8">
        <H2>Awards</H2>
      </SectionInner>
      <SectionInner className="grid grid-cols-4 gap-8">
        {awards.map((item) => (
          <AwardCard
            key={item.name}
            name={item.name}
            event={item.event}
            year={item.year}
          />
        ))}
      </SectionInner>
    </section>
  );
}
