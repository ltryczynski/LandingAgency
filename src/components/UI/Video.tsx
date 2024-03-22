"use client";
import { useEffect, useRef } from "react";
import { VideoProps } from "@/lib/type";

export function Video({ src, className }: VideoProps) {
  return (
    <video autoPlay loop muted className={className}>
      <source src={src} />
    </video>
  );
}
