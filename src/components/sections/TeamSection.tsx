"use client";
import React, { useRef } from "react";
import SectionInner from "../UI/SectionInner";
import { H2 } from "../UI/Headings";
import { teamMembers } from "@/lib/data";
import TeamCard from "../UI/TeamCard";
import { TfiAngleLeft } from "react-icons/tfi";
import { useTeamGSAP } from "../hooks/useGsapHooks";

export default function TeamSection() {
  const teamRef = useRef<HTMLElement>(null);
  useTeamGSAP({ ref: teamRef });
  return (
    <section
      className="flex flex-col gap-16 border-b mb-16 pb-16"
      ref={teamRef}>
      <SectionInner className="flex items-end">
        <H2 className="w-1/2 before:hidden" style={{ opacity: 0 }}>
          <span className="text-purple">We believe that the right</span> design
          will bring your business to life
        </H2>
        <div className="flex w-1/2 justify-end">
          <div
            className="bg-purple p-4 rounded-full arrow"
            style={{ opacity: 0 }}>
            <TfiAngleLeft className="text-3xl -rotate-45 text-white " />
          </div>
        </div>
      </SectionInner>
      <SectionInner className="grid grid-cols-3 gap-8 justify-center items-start">
        {teamMembers.map((item, index) => (
          <div
            key={item.name + index}
            className="teamCard"
            style={{ opacity: 0 }}>
            <TeamCard
              name={item.name}
              position={item.position}
              desc={item.desc}
              image={item.image}
            />
          </div>
        ))}
      </SectionInner>
    </section>
  );
}
