import React from "react";
import { ClientCardProps } from "@/lib/type";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function ClientCard({
  imageSrc,
  className,
  style,
}: ClientCardProps) {
  return (
    <article
      className={`${twMerge("px-12 py-4 hover:bg-grayC", className)}`}
      style={style}>
      <Image
        src={imageSrc}
        width={200}
        height={80}
        alt="clientImage"
        className="w-28"
      />
    </article>
  );
}
