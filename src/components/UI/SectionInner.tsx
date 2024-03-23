import { SectionProps } from "@/lib/type";
import { twMerge } from "tailwind-merge";
import React from "react";

export default function Section({ children, className }: SectionProps) {
  return (
    <div className={twMerge(`w-full md:max-w-big mx-auto px-4`, className)}>
      {children}
    </div>
  );
}
