import React from "react";
import SectionInner from "../UI/SectionInner";
import { H2 } from "../UI/Headings";
import { ButtonAlt } from "../UI/Button";
import { socialTags } from "@/lib/data";

export default function ContentSection() {
  return (
    <section className="py-16">
      <SectionInner className="max-w-small text-center flex flex-col gap-16">
        <H2 className="mask before:hidden">{`Let's Talk About the Next big thing`}</H2>
        <div className="flex justify-center flex-wrap gap-8 border-b pb-16">
          <ButtonAlt>noreply@test.com</ButtonAlt>
          <ButtonAlt>+48 123 456 789</ButtonAlt>
        </div>
        <div className="flex justify-center flex-wrap gap-4 md:gap-8  pb-16 border-b">
          {socialTags.map((item) => (
            <article
              key={item.name}
              className="bg-grayC px-4 py-2 rounded-full">
              <a href={item.link}>{item.name}</a>
            </article>
          ))}
        </div>
        <div className="">
          © 2024 Betheme template remake in NextJS | All Rights Reserved |
          Created by{" "}
          <a href="https://lt-media.pl/" target="blank" className="text-purple">
            LTmedia
          </a>
        </div>
      </SectionInner>
    </section>
  );
}
