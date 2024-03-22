import React from "react";
import SectionInner from "../UI/SectionInner";
import { H2 } from "../UI/Heading";
import { teamMembers } from "@/lib/data";
import TeamCard from "../UI/TeamCard";
import { TfiAngleLeft } from "react-icons/tfi";

export default function TeamSection() {
  return (
    <section className="flex flex-col gap-16 border-b mb-16 pb-16">
      <SectionInner className="flex items-end">
        <H2 className="w-1/2">
          <span className="text-purple">We believe that the right</span> design
          will bring your business to life
        </H2>
        <div className="flex w-1/2 justify-end">
          <div className="bg-purple p-4 rounded-full">
            <TfiAngleLeft className="text-3xl -rotate-45 text-white" />
          </div>
        </div>
      </SectionInner>
      <SectionInner className="grid grid-cols-3 gap-8 justify-center items-start">
        {teamMembers.map((item, index) => (
          <TeamCard
            key={item.name + index}
            name={item.name}
            position={item.position}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </SectionInner>
    </section>
  );
}
