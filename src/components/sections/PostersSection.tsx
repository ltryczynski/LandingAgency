import React, { Fragment } from "react";
import Image from "next/image";
import SectionInner from "../UI/SectionInner";
import { H2 } from "../UI/Heading";
import { posterData } from "@/lib/data";
import ProjectCard from "../UI/ProjectCard";

export default function PostersSection() {
  return (
    <section className="mb-32">
      <SectionInner className="bg-[url(/quoteBg.svg)] bg-cover bg-center bg-no-repeat w-full py-32 -mt-16">
        <div className="max-w-small flex flex-col justify-center items-center gap-8 mx-auto">
          <H2 className="mask text-center pb-8 border-b">
            We believe that the quality of the product is the most important
            thing for the customer
          </H2>
          <Image
            src="/ceo.webp"
            width={200}
            height={70}
            alt="CEO"
            className="rounded-full"
          />
          <p className="text-md -mt-4">Henry, Art Director</p>
        </div>
      </SectionInner>
      <SectionInner className="columns-2  gap-32">
        {posterData.map((item) => (
          <div className="mt-32" key={item.title}>
            <ProjectCard
              title={item.title}
              likeCount={item.likeCount}
              image={item.image}
            />
          </div>
        ))}
      </SectionInner>
    </section>
  );
}
