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
        <nav>
          <ul className="gap-12 hidden md:flex">
            {navList.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <Burger />

          {/* <div className="mobileNav w-full bg-white h-full fixed inset-0 m-auto flex justify-end">
            />
            <div
              className={`w-3/4 bg-purple h-full absolute left-auto inset-y-0 right-0 ${
                openMobileNavState ? "block" : "hidden"
              }`}></div>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
