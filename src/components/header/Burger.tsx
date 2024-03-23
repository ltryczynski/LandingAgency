"use client";
import React, { forwardRef } from "react";

type BurgerProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export default forwardRef<HTMLDivElement, BurgerProps>(function Burger(
  { onClick },
  ref
) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="w-10 flex flex-col gap-2 cursor-pointer">
      <span className="w-full h-[2px] bg-purple"></span>
      <span className="w-full h-[2px] bg-purple"></span>
      <span className="w-full h-[2px] bg-purple"></span>
    </div>
  );
});
