import React from "react";
import { ClientCardProps } from "@/lib/type";
import Image from "next/image";

export default function ClientCard({ imageSrc }: ClientCardProps) {
  return (
    <article className=" px-12 py-4 transition hover:bg-grayC">
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
