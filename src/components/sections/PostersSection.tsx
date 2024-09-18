"use client";
import React, { useRef } from "react";
import SectionInner from "../UI/SectionInner";
import { posterData } from "@/lib/data";
import ProjectCard from "../UI/ProjectCard";
import { usePosterGSAP } from "../../hooks/useGsapHooks";

export default function PostersSection() {
  const posterRef = useRef<(HTMLDivElement | null)[]>([]);
  const postersSectionRef = useRef<HTMLDivElement | null>(null);
  usePosterGSAP({ itemRef: posterRef, sectionRef: postersSectionRef });
  return (
    <section className="mb-32" ref={postersSectionRef}>
      <SectionInner className="md:columns-2  gap-32">
        {posterData.map((item, index) => (
          <div
            className="mt-32 poster"
            ref={(el) => {
              if (el) posterRef.current[index] = el;
            }}
            key={item.title}
            style={{ opacity: 0 }}>
            <ProjectCard title={item.title} likeCount={item.likeCount} image={item.image} />
          </div>
        ))}
      </SectionInner>
    </section>
  );
}
