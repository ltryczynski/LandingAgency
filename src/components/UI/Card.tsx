import React from "react";
import Image from "next/image";
import { ButtonAlt } from "./Button";
import { CardProps } from "@/lib/type";

export default function Card({ icon, title, content }: CardProps) {
  return (
    <article className="rounded-2xl bg-grayC p-8 flex flex-col items-start gap-8 shadow-sm">
      <Image src={icon} width={64} height={64} alt="card icon" />
      <h3 className="text-[2.4em] font-medium">{title}</h3>
      <p className="text-xl">{content}</p>
      <ButtonAlt className="text-lg">See offer</ButtonAlt>
    </article>
  );
}
