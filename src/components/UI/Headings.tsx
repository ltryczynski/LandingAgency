import { HeadingProps } from "@/lib/type";
import { twMerge } from "tailwind-merge";
export function H2({ className, children, style }: HeadingProps) {
  return (
    <h2
      className={`${twMerge(
        "text-5xl font-medium leading-none before:bg-[url(/icon.svg)] before:w-6 before:h-6 before:mb-4 before:block before:bg-cover",
        className
      )}`}
      style={style}>
      {children}
    </h2>
  );
}
export function H3({ className, children, props }: HeadingProps) {
  return (
    <h3
      className={`${twMerge("text-4xl font-medium leading-none", className)}`}
      {...props}>
      {children}
    </h3>
  );
}
