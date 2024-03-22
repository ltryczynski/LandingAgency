import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefProps } from "@/lib/type";
gsap.registerPlugin(ScrollTrigger);

export function useHomepageGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      const heroTl = gsap.timeline({
        delay: 0.3,
        defaults: {
          duration: 0.3,
        },
      });
      heroTl.set("h1", { opacity: 1 });
      heroTl.fromTo(
        "h1 span",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1 }
      );
      heroTl.fromTo(".heroButton", { opacity: 0 }, { opacity: 1 }, "-=50%");
      heroTl.fromTo(
        ".heroVideo",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },
        "-=90%"
      );

      const clientsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".heroClientsSection",
          start: "top 80%",
        },
        defaults: {
          ease: "elastic.out(1,0.75)",
        },
      });
      clientsTl.fromTo(
        ".clientCard",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
        }
      );
    },
    { scope: ref }
  );
}

export function useAboutUsGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      const aboutUsFirstTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutUsFirst",
          once: true,
          start: "top center",
        },
        defaults: {
          duration: 0.3,
        },
      });
      aboutUsFirstTl.fromTo(
        "h2.first",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
      aboutUsFirstTl.fromTo(
        ".aboutUsImage",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=50%"
      );
      aboutUsFirstTl.fromTo(
        ".aboutUsButton",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=50%"
      );
      aboutUsFirstTl.fromTo(
        ".aboutUsSwiper",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=50%"
      );
      const aboutUsSecondTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutUsSecond",
          once: true,
          start: "top 40%",
        },
        defaults: {
          duration: 0.3,
        },
      });
      aboutUsSecondTl.fromTo(
        "h2.second",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
      aboutUsSecondTl.fromTo(
        ".aboutUsSwiper article",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "elastic.out(1,0.5)" }
      );
    },
    { scope: ref }
  );
}

export function useQuoteGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      const quoteTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          once: true,
          start: "top 40%",
        },
        defaults: {
          duration: 0.3,
        },
      });

      quoteTl.fromTo("h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      quoteTl.fromTo(
        ".quoteImage",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
      quoteTl.fromTo(
        ".quoteImageCaption",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      );
    },
    { scope: ref }
  );
}

export function usePosterGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      if (!ref.current) return;
      if (!ref.current.querySelector(".poster")) return;

      ref.current.querySelectorAll(".poster").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: "top center",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        );
      });
    },
    { scope: ref }
  );
}

export function useTeamGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      const teamTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          once: true,
          start: "top 40%",
        },
        defaults: {
          duration: 0.3,
        },
      });
      teamTl.fromTo("h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      teamTl.fromTo(
        ".arrow",
        { opacity: 0, y: -50, x: 50 },
        { opacity: 1, y: 0, x: 0 },
        "<"
      );
      teamTl.fromTo(
        ".teamCard",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "elastic.out(1,0.75)" }
      );
    },
    { scope: ref }
  );
}

export function useAwardGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      const awardTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          once: true,
          start: "top 40%",
        },
        defaults: {
          duration: 0.3,
        },
      });

      awardTl.fromTo("h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      awardTl.fromTo(
        ".awardCard",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "elastic.out(1,0.75)" }
      );
    },
    { scope: ref }
  );
}

export function useOpinionsGSAP({ ref }: RefProps) {
  useGSAP(
    () => {
      const opinionsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          once: true,
          start: "top 40%",
        },
        defaults: {
          duration: 0.3,
        },
      });

      opinionsTl.fromTo("h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      opinionsTl.fromTo(
        ".opinionsSwiper article",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "elastic.out(1,0.5)" }
      );
    },
    { scope: ref }
  );
}
