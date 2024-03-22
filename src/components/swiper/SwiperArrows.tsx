"use client";
import Image from "next/image";
import { SwiperArrowsProps } from "@/lib/type";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

export default function SwiperArrows({
  type,
  onClick,
  className,
  ArrowClassName,
}: SwiperArrowsProps) {
  const arrowSrc = useMemo(() => {
    return type === "prev" ? (
      <LiaAngleLeftSolid className="text-5xl" />
    ) : (
      <LiaAngleRightSolid className="text-5xl" />
    );
  }, [type]);
  return (
    <button
      onClick={onClick}
      className={`${twMerge(
        "border rounded-full px-8 transition",
        className
      )}`}>
      <div className={`${twMerge("px-4 py-2", ArrowClassName)}`}>
        {arrowSrc}
      </div>
    </button>
  );
}
