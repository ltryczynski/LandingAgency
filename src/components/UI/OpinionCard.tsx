import Image from "next/image";
import { OpinionCardProps } from "@/lib/type";
import { FaCommentDots } from "react-icons/fa";

import React from "react";

export default function OpinionCard({ desc, autor, avatar }: OpinionCardProps) {
  return (
    <article className="rounded-2xl bg-white/5 p-8 flex flex-col items-start gap-8 shadow-sm">
      <div className="w-max h-max relative after:w-3/4 after:h-1/2 after:bg-white after:absolute after:inset-0 after:m-auto">
        <FaCommentDots className="text-purple text-3xl z-10 relative" />
      </div>
      <p className="text-xl">{desc}</p>
      <div className="flex gap-4 items-center">
        <Image
          src={avatar}
          width={48}
          height={48}
          alt="avatar"
          className="rounded-full"
        />
        <div className="text-xl">{autor}</div>
      </div>
    </article>
  );
}
