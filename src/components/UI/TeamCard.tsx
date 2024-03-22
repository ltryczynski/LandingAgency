import { TeamCardProps } from "@/lib/type";
import React from "react";
import Image from "next/image";
import { H3 } from "./Headings";

export default function TeamCard({
  name,
  position,
  desc,
  image,
}: TeamCardProps) {
  return (
    <article>
      <Image
        src={image}
        width={400}
        height={150}
        alt={`${name} - ${position} Image`}
        className="w-full rounded-full mb-8"
      />
      <div className="flex flex-col items-start gap-4">
        <H3>{name}</H3>
        <div className="rounded-full text-white bg-indigoC w-max px-4 py-2 text-lg">
          {position}
        </div>
        <p className="text-xl">{desc}</p>
      </div>
    </article>
  );
}
