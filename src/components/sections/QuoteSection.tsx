"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SectionInner from "../UI/SectionInner";
import { H2 } from "../UI/Headings";
import { useQuoteGSAP } from "../hooks/useGsapHooks";

export default function QuoteSection() {
  const quoteRef = useRef<HTMLElement | null>(null);
  useQuoteGSAP({ ref: quoteRef });
  return (
    <section ref={quoteRef}>
      <SectionInner className="bg-[url(/quoteBg.svg)] bg-cover bg-center bg-no-repeat w-full py-32 -mt-16">
        <div className="max-w-small flex flex-col justify-center items-center gap-8 mx-auto">
          <H2 className="mask text-center pb-8 border-b" style={{ opacity: 0 }}>
            We believe that the quality of the product is the most important
            thing for the customer
          </H2>
          <Image
            src="/ceo.webp"
            width={200}
            height={70}
            alt="CEO"
            className="rounded-full quoteImage"
            style={{ opacity: 0 }}
          />
          <p className="text-md -mt-4 quoteImageCaption" style={{ opacity: 0 }}>
            Henry, Art Director
          </p>
        </div>
      </SectionInner>
    </section>
  );
}
