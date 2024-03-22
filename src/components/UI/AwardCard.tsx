import React from "react";
import { H3 } from "./Headings";
import { AwardsProps } from "@/lib/type";

export default function AwardCard({ name, event, year }: AwardsProps) {
  return (
    <article className="w-full bg-grayC p-8 rounded-2xl flex flex-col gap-8 justify-between">
      <div className="">
        <H3 className="text-xl mb-2">{name}</H3>
        <p className="text-xl text-indigo-950/60">{event}</p>
      </div>
      <div className="bg-white px-4 py-2 w-max rounded-xl text-xl">{year}</div>
    </article>
  );
}
