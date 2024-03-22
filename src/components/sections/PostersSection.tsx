"use client";
import React, { useRef } from "react";
import SectionInner from "../UI/SectionInner";
import { posterData } from "@/lib/data";
import ProjectCard from "../UI/ProjectCard";
import { usePosterGSAP } from "../hooks/useGsapHooks";

export default function PostersSection() {
  const posterRef = useRef<HTMLElement | null>(null);
  usePosterGSAP({ ref: posterRef });
  return (
    <section className="mb-32" ref={posterRef}>
      <SectionInner className="columns-2  gap-32">
        {posterData.map((item) => (
          <div className="mt-32 poster" key={item.title} style={{ opacity: 0 }}>
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
