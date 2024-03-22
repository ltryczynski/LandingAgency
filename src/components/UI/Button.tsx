import { ButtonProps } from "@/lib/type";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TfiAngleRight } from "react-icons/tfi";

export function ButtonAlt({ children, className, style }: ButtonProps) {
  return (
    <button
      className={`${twMerge(
        "group bg-white w-max transition text-indigoC px-8 py-4 rounded-full text-2xl flex items-center buttonTransition justify-center gap-4 font-medium hover:text-white hover:bg-indigoC border border-indigoC",
        className
      )}`}
      style={style}>
      <span className="transition group-hover:-translate-x-1">{children}</span>
      <TfiAngleRight className="transition group-hover:translate-x-1" />
    </button>
  );
}

export default function Button({ children, className, style }: ButtonProps) {
  return (
    <button
      className={`${twMerge(
        "group bg-indigoC w-max transition text-white px-8 py-4 rounded-full text-2xl buttonTransition flex items-center justify-center gap-4 font-medium hover:text-indigoC hover:bg-white border border-indigoC",
        className
      )}`}
      style={style}>
      <span className="transition group-hover:-translate-x-1">{children}</span>
      <TfiAngleRight className="transition group-hover:translate-x-1" />
    </button>
  );
}
