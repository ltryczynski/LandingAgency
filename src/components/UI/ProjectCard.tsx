import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { H3 } from "./Heading";
import { ProjectCardProps } from "@/lib/type";

export default function ProjectCard({
  title,
  likeCount,
  image,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <div className="w-full h-max overflow-hidden rounded-[3rem] ">
        <Image
          src={image.src}
          width={image.width / 2}
          height={image.height / 2}
          alt={title}
          className="rounded-[3rem] hover:scale-110 transition w-full"
        />
      </div>
      <div className="flex justify-between px-4 items-start text-xl">
        <H3>{title}</H3>
        <div className="flex items-center gap-2 text-black/60">
          <CiHeart />
          {likeCount}
        </div>
      </div>
    </article>
  );
}
