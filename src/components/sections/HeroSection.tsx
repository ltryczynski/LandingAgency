"use client";
import React from "react";
import SectionInner from "../UI/SectionInner";
import Button from "../UI/Button";
import { Video } from "../UI/Video";
import { Suspense } from "react";
import { clients } from "@/lib/data";
import ClientCard from "../UI/ClientCard";

export default function HeroSection() {
  return (
    <section className="w-full py-16 border-b">
      <SectionInner className="flex justify-between items-end pb-16 bg-[url(/agencyBackground.svg)] bg-contain bg-no-repeat bg-[70%_top]">
        <h1 className="text-6xl leading-tight font-medium">
          <span className="block text-purple">Innovation.</span>{" "}
          <span className="block">Creativy.</span>{" "}
          <span className="block">Effect.</span>
        </h1>
        <Button>What we do</Button>
      </SectionInner>
      <SectionInner className="pb-16">
        <div className="h-[30rem] border w-full overflow-hidden rounded-3xl flex items-center">
          <Suspense fallback={<p>Loading video...</p>}>
            <Video src="/agencyVideo.mp4" className="w-full" />
          </Suspense>
        </div>
      </SectionInner>
      <SectionInner className="flex justify-center gap-4">
        {clients.map((item) => (
          <ClientCard key={item} imageSrc={item} />
        ))}
      </SectionInner>
    </section>
  );
}
