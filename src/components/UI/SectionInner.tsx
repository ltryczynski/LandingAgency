import { SectionProps } from "@/lib/type";
import { twMerge } from "tailwind-merge";
import React from "react";

export default function Section({ children, className }: SectionProps) {
  return (
    <div className={twMerge(`max-w-big mx-auto`, className)}>{children}</div>
  );
}
