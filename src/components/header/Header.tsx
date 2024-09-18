"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { navList } from "@/lib/data";
import Burger from "./Burger";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [openMobileNavState, setOpenMobileNavState] = useState<boolean>(false);
  const burgerRef = useRef<HTMLDivElement | null>(null);
  return (
    <header className="py-8 border-b px-4 md:px-0">
      <div className="flex items-center justify-between max-w-big mx-auto">
        <div className="text-purple text-2xl font-black">
          <Image src="/logo.svg" width={200} height={60} alt="Agency logo" />
        </div>
      </div>
    </header>
  );
}
