"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   INDUSTRY DATA
========================================================= */

const industries = [
  {
    id: "pvc",
    title: "PVC Panels",
    color: "#FF555D",
    description:
      "High-performance materials for modern PVC panel manufacturing, offering durability, consistency and reliable surface performance.",
  },
  {
    id: "adhesives",
    title: "Adhesives",
    color: "#5555F5",
    description:
      "Advanced material solutions designed to improve bonding strength, flexibility and long-term performance across adhesive applications.",
  },
  {
    id: "textile",
    title: "Textile",
    color: "#9635E8",
    description:
      "Material solutions for textile applications where flexibility, finish, durability and processing performance matter.",
  },
  {
    id: "footwear",
    title: "Footwear",
    color: "#FF555D",
    description:
      "Reliable solutions for footwear manufacturing, supporting strong bonding, enhanced finishing and consistent production quality.",
  },
  {
    id: "paint",
    title: "Paint & Coating",
    color: "#5555F5",
    description:
      "Specialized materials for paint and coating applications, helping achieve smooth finishes, strong adhesion and lasting performance.",
  },
];

/* =========================================================
   DECORATIVE DOT
========================================================= */

function IndustryDot({ color }) {
  return (
    <div
      className="relative flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-full"
      style={{
        border: "1px dotted #777",
      }}
    >
      <div
        className="h-[62px] w-[62px] rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

/* =========================================================
   PVC SVG
========================================================= */

function PVCIllustration() {
  return (
    <svg
      className="industry-svg pvc-svg"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* background orbit */}
      <circle
        className="svg-orbit"
        cx="310"
        cy="250"
        r="205"
        stroke="#777"
        strokeDasharray="2 9"
      />

      {/* panel 1 */}
      <g className="pvc-panel pvc-panel-1">
        <rect
          x="105"
          y="95"
          width="145"
          height="300"
          rx="5"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <path d="M135 95V395" stroke="#111" />
        <path d="M165 95V395" stroke="#111" />
        <path d="M195 95V395" stroke="#111" />
        <path d="M225 95V395" stroke="#111" />

        <circle cx="180" cy="155" r="18" fill="#FF555D" />
      </g>

      {/* panel 2 */}
      <g className="pvc-panel pvc-panel-2">
        <rect
          x="270"
          y="65"
          width="145"
          height="300"
          rx="5"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <path d="M300 65V365" stroke="#111" />
        <path d="M330 65V365" stroke="#111" />
        <path d="M360 65V365" stroke="#111" />
        <path d="M390 65V365" stroke="#111" />

        <circle cx="345" cy="135" r="18" fill="#5555F5" />
      </g>

      {/* panel 3 */}
      <g className="pvc-panel pvc-panel-3">
        <rect
          x="430"
          y="120"
          width="80"
          height="220"
          rx="4"
          fill="#F8F8F8"
          stroke="#111"
          strokeWidth="2"
        />

        <path d="M450 120V340" stroke="#111" />
        <path d="M470 120V340" stroke="#111" />
        <path d="M490 120V340" stroke="#111" />

        <circle cx="470" cy="180" r="10" fill="#9635E8" />
      </g>

      <circle
        className="svg-floating-dot"
        cx="100"
        cy="70"
        r="8"
        fill="#FF555D"
      />

      <circle
        className="svg-floating-dot"
        cx="500"
        cy="410"
        r="8"
        fill="#5555F5"
      />
    </svg>
  );
}

/* =========================================================
   ADHESIVES SVG
========================================================= */

function AdhesivesIllustration() {
  return (
    <svg
      className="industry-svg adhesives-svg"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="svg-orbit"
        cx="300"
        cy="250"
        r="210"
        stroke="#777"
        strokeDasharray="2 9"
      />

      {/* bottle */}
      <g className="adhesive-bottle">
        <rect
          x="235"
          y="145"
          width="130"
          height="220"
          rx="18"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M265 145V105H335V145"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M250 105H350"
          stroke="#111"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <rect
          x="265"
          y="200"
          width="70"
          height="90"
          rx="10"
          fill="#5555F5"
        />

        <circle cx="300" cy="245" r="20" fill="white" />
      </g>

      {/* glue drops */}
      <g className="glue-drops">
        <circle cx="160" cy="170" r="12" fill="#5555F5" />
        <circle cx="430" cy="190" r="8" fill="#5555F5" />
        <circle cx="175" cy="345" r="9" fill="#5555F5" />
        <circle cx="425" cy="350" r="13" fill="#5555F5" />
      </g>

      {/* bonding lines */}
      <g className="bond-lines" stroke="#111">
        <path d="M100 250H195" strokeWidth="2" />
        <path d="M405 250H500" strokeWidth="2" />
        <path d="M125 270H185" />
        <path d="M415 270H475" />
      </g>
    </svg>
  );
}

/* =========================================================
   TEXTILE SVG
========================================================= */

function TextileIllustration() {
  return (
    <svg
      className="industry-svg textile-svg"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="svg-orbit"
        cx="300"
        cy="250"
        r="215"
        stroke="#777"
        strokeDasharray="2 9"
      />

      {/* spool */}
      <g className="textile-spool">
        <ellipse
          cx="300"
          cy="125"
          rx="90"
          ry="30"
          fill="#F7F7F7"
          stroke="#111"
          strokeWidth="2"
        />

        <rect
          x="210"
          y="125"
          width="180"
          height="190"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <ellipse
          cx="300"
          cy="315"
          rx="90"
          ry="30"
          fill="#F7F7F7"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M230 150C260 175 340 175 370 150"
          stroke="#9635E8"
          strokeWidth="8"
        />

        <path
          d="M225 185C260 210 340 210 375 185"
          stroke="#9635E8"
          strokeWidth="8"
        />

        <path
          d="M225 220C260 245 340 245 375 220"
          stroke="#9635E8"
          strokeWidth="8"
        />

        <path
          d="M225 255C260 280 340 280 375 255"
          stroke="#9635E8"
          strokeWidth="8"
        />
      </g>

      {/* thread */}
      <path
        className="textile-thread"
        d="M390 150C500 120 500 360 400 350C340 345 410 250 500 290"
        stroke="#111"
        strokeWidth="2"
      />

      <circle
        className="textile-dot"
        cx="485"
        cy="290"
        r="14"
        fill="#9635E8"
      />
    </svg>
  );
}

/* =========================================================
   FOOTWEAR SVG
========================================================= */

function FootwearIllustration() {
  return (
    <svg
      className="industry-svg footwear-svg"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="svg-orbit"
        cx="300"
        cy="250"
        r="215"
        stroke="#777"
        strokeDasharray="2 9"
      />

      {/* shoe */}
      <g className="shoe">
        <path
          d="M155 295
             C205 300 245 260 280 210
             L350 245
             C370 255 390 270 415 285
             L475 320
             C505 338 505 370 470 380
             L175 380
             C135 380 120 350 155 295Z"
          fill="white"
          stroke="#111"
          strokeWidth="3"
        />

        {/* sole */}
        <path
          d="M150 350
             C210 365 350 365 480 350
             L490 375
             C400 410 230 410 155 385Z"
          fill="#5555F5"
          stroke="#111"
          strokeWidth="2"
        />

        {/* shoe lines */}
        <path
          d="M280 215L330 305"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M305 235L355 315"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M330 250L380 320"
          stroke="#111"
          strokeWidth="2"
        />

        <circle cx="280" cy="215" r="13" fill="#FF555D" />
      </g>

      <g className="footwear-spark">
        <circle cx="120" cy="200" r="7" fill="#5555F5" />
        <circle cx="470" cy="180" r="8" fill="#FF555D" />
        <circle cx="485" cy="420" r="7" fill="#9635E8" />
      </g>
    </svg>
  );
}

/* =========================================================
   PAINT SVG
========================================================= */

function PaintIllustration() {
  return (
    <svg
      className="industry-svg paint-svg"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="svg-orbit"
        cx="300"
        cy="250"
        r="215"
        stroke="#777"
        strokeDasharray="2 9"
      />

      {/* paint can */}
      <g className="paint-can">
        <ellipse
          cx="300"
          cy="150"
          rx="100"
          ry="35"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M200 150V330C200 355 400 355 400 330V150"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <ellipse
          cx="300"
          cy="150"
          rx="100"
          ry="35"
          fill="#F8F8F8"
          stroke="#111"
          strokeWidth="2"
        />

        <ellipse
          cx="300"
          cy="150"
          rx="70"
          ry="22"
          fill="#5555F5"
        />

        <rect
          x="235"
          y="210"
          width="130"
          height="65"
          rx="8"
          fill="#FF555D"
        />
      </g>

      {/* brush */}
      <g className="paint-brush">
        <rect
          x="425"
          y="120"
          width="32"
          height="180"
          rx="8"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        <path
          d="M420 285H462L475 350H405Z"
          fill="#5555F5"
          stroke="#111"
          strokeWidth="2"
        />
      </g>

      {/* paint drops */}
      <g className="paint-drops">
        <circle cx="155" cy="190" r="10" fill="#5555F5" />
        <circle cx="120" cy="330" r="7" fill="#FF555D" />
        <circle cx="455" cy="390" r="10" fill="#5555F5" />
        <circle cx="500" cy="270" r="7" fill="#FF555D" />
      </g>
    </svg>
  );
}

/* =========================================================
   SVG SWITCHER
========================================================= */

function IndustryIllustration({ id }) {
  switch (id) {
    case "pvc":
      return <PVCIllustration />;

    case "adhesives":
      return <AdhesivesIllustration />;

    case "textile":
      return <TextileIllustration />;

    case "footwear":
      return <FootwearIllustration />;

    case "paint":
      return <PaintIllustration />;

    default:
      return null;
  }
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const introRef = useRef(null);
  const slidesRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const slides = slidesRef.current.filter(Boolean);

      /* -----------------------------------------------
         INITIAL STATES
      ------------------------------------------------ */

      gsap.set(slides, {
        autoAlpha: 0,
        y: 80,
        scale: 0.96,
      });

      gsap.set(slides[0], {
        autoAlpha: 0,
      });

      /* -----------------------------------------------
         INTRO
      ------------------------------------------------ */

      gsap.set(introRef.current, {
        autoAlpha: 1,
        y: 0,
      });

      /* -----------------------------------------------
         MAIN SCROLL TIMELINE

         1 = Intro
         2 = PVC
         3 = Adhesives
         4 = Textile
         5 = Footwear
         6 = Paint
      ------------------------------------------------ */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * (industries.length + 1)}`,
          pin: stage,
          scrub: 1.15,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress;

            /*
              Intro occupies first 16.6%
              Remaining area handles industries
            */

            const introEnd = 1 / (industries.length + 1);

            if (progress < introEnd) {
              gsap.to(introRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 0.2,
                overwrite: true,
              });
            } else {
              gsap.to(introRef.current, {
                autoAlpha: 0,
                y: -70,
                duration: 0.2,
                overwrite: true,
              });
            }
          },
        },
      });

      /* -----------------------------------------------
         INTRO → FIRST INDUSTRY
      ------------------------------------------------ */

      tl.to(
        introRef.current,
        {
          autoAlpha: 0,
          y: -80,
          duration: 0.7,
          ease: "power2.inOut",
        },
        1
      );

      /* -----------------------------------------------
         INDUSTRY SLIDES
      ------------------------------------------------ */

      slides.forEach((slide, index) => {
        const content = slide.querySelector(".industry-content");
        const visual = slide.querySelector(".industry-visual");
        const dot = slide.querySelector(".industry-big-dot");
        const title = slide.querySelector(".industry-title");
        const description = slide.querySelector(".industry-description");
        const number = slide.querySelector(".industry-number");
        const line = slide.querySelector(".industry-line");

        const startTime = index + 0.8;

        /* slide entrance */
        tl.to(
          slide,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          startTime
        );

        /* left content */
        tl.fromTo(
          content,
          {
            x: -80,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          startTime + 0.05
        );

        /* title */
        tl.fromTo(
          title,
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          startTime + 0.15
        );

        /* description */
        tl.fromTo(
          description,
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          startTime + 0.3
        );

        /* visual */
        tl.fromTo(
          visual,
          {
            x: 100,
            autoAlpha: 0,
            scale: 0.88,
          },
          {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          startTime
        );

        /* dot */
        tl.fromTo(
          dot,
          {
            scale: 0,
            rotation: -90,
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.65,
            ease: "back.out(1.7)",
          },
          startTime + 0.1
        );

        /* number */
        tl.fromTo(
          number,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
          },
          startTime + 0.3
        );

        /* line */
        tl.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          startTime + 0.2
        );

        /* ---------------------------------------------
           SVG SPECIFIC ANIMATION
        --------------------------------------------- */

        if (industries[index].id === "pvc") {
          const panels = slide.querySelectorAll(".pvc-panel");

          tl.fromTo(
            panels,
            {
              y: 70,
              rotation: -5,
              autoAlpha: 0,
            },
            {
              y: 0,
              rotation: 0,
              autoAlpha: 1,
              stagger: 0.12,
              duration: 0.65,
              ease: "power3.out",
            },
            startTime + 0.2
          );
        }

        if (industries[index].id === "adhesives") {
          const bottle = slide.querySelector(".adhesive-bottle");
          const drops = slide.querySelectorAll(".glue-drops circle");

          tl.fromTo(
            bottle,
            {
              y: 70,
              scale: 0.8,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.8,
              ease: "back.out(1.5)",
            },
            startTime + 0.15
          );

          tl.fromTo(
            drops,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              stagger: 0.1,
              duration: 0.35,
              ease: "back.out(2)",
            },
            startTime + 0.55
          );
        }

        if (industries[index].id === "textile") {
          const spool = slide.querySelector(".textile-spool");
          const thread = slide.querySelector(".textile-thread");

          tl.fromTo(
            spool,
            {
              y: 80,
              rotation: -8,
              autoAlpha: 0,
            },
            {
              y: 0,
              rotation: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            startTime + 0.1
          );

          tl.fromTo(
            thread,
            {
              strokeDasharray: 500,
              strokeDashoffset: 500,
            },
            {
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.out",
            },
            startTime + 0.3
          );
        }

        if (industries[index].id === "footwear") {
          const shoe = slide.querySelector(".shoe");
          const sparks = slide.querySelectorAll(
            ".footwear-spark circle"
          );

          tl.fromTo(
            shoe,
            {
              x: 100,
              rotation: 5,
              autoAlpha: 0,
            },
            {
              x: 0,
              rotation: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            startTime + 0.1
          );

          tl.fromTo(
            sparks,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              stagger: 0.1,
              duration: 0.35,
              ease: "back.out(2)",
            },
            startTime + 0.45
          );
        }

        if (industries[index].id === "paint") {
          const can = slide.querySelector(".paint-can");
          const brush = slide.querySelector(".paint-brush");
          const drops = slide.querySelectorAll(".paint-drops circle");

          tl.fromTo(
            can,
            {
              y: 80,
              autoAlpha: 0,
              scale: 0.85,
            },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.4)",
            },
            startTime + 0.1
          );

          tl.fromTo(
            brush,
            {
              x: 80,
              rotation: 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              rotation: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
            },
            startTime + 0.35
          );

          tl.fromTo(
            drops,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              stagger: 0.08,
              duration: 0.3,
              ease: "back.out(2)",
            },
            startTime + 0.55
          );
        }

        /* ---------------------------------------------
           ACTIVE SLIDE EXIT
        --------------------------------------------- */

        if (index < slides.length - 1) {
          tl.to(
            slide,
            {
              autoAlpha: 0,
              y: -60,
              scale: 0.97,
              duration: 0.65,
              ease: "power2.inOut",
            },
            startTime + 1.05
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industries-section relative bg-white"
    >
      <div
        ref={stageRef}
        className="industries-stage relative h-screen w-full overflow-hidden"
      >
        {/* =================================================
            INTRO / OVERVIEW
        ================================================= */}

        <div
          ref={introRef}
          className="absolute inset-0 z-20 flex items-center"
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
              {/* LEFT */}
              <div>
                <div className="mb-10 flex items-center gap-7">
                  <IndustryDot color="#9635E8" />

                  <div>
                    <h2 className="text-[clamp(48px,7vw,104px)] font-bold leading-[0.9] tracking-[-0.055em] text-black">
                      Industries
                    </h2>

                    <h3 className="mt-3 text-[clamp(32px,4vw,58px)] font-medium leading-none tracking-[-0.04em] text-black">
                      We Cater
                    </h3>
                  </div>
                </div>

                <p className="max-w-[560px] text-[18px] leading-[1.6] text-[#555] lg:text-[21px]">
                  Serving diverse sectors with top quality materials,
                  dependable performance and application-focused
                  solutions.
                </p>

                {/* INDUSTRY LIST */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {industries.map((industry, index) => (
                    <div
                      key={industry.id}
                      className="industry-overview-item group flex items-center gap-4"
                    >
                      <span
                        className="h-[10px] w-[10px] rounded-full"
                        style={{
                          backgroundColor: industry.color,
                        }}
                      />

                      <span className="text-[20px] font-medium tracking-[-0.02em] text-black transition-transform duration-300 group-hover:translate-x-2">
                        {industry.title}
                      </span>

                      <span className="ml-auto pr-4 text-xs text-[#999]">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative hidden h-[560px] items-center justify-center lg:flex">
                <div className="absolute h-[480px] w-[480px] rounded-full border border-dashed border-[#999]" />

                <div className="absolute h-[320px] w-[320px] rounded-full border border-dotted border-[#bbb]" />

                <div className="relative z-10 grid grid-cols-2 gap-5">
                  {industries.map((industry) => (
                    <div
                      key={industry.id}
                      className="flex h-[120px] w-[150px] items-center justify-center rounded-[20px] border border-[#ddd] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
                    >
                      <div className="text-center">
                        <div
                          className="mx-auto mb-3 h-[28px] w-[28px] rounded-full"
                          style={{
                            backgroundColor: industry.color,
                          }}
                        />

                        <span className="text-sm font-medium">
                          {industry.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            INDIVIDUAL INDUSTRIES
        ================================================= */}

        {industries.map((industry, index) => (
          <div
            key={industry.id}
            ref={(el) => {
              slidesRef.current[index] = el;
            }}
            className="absolute inset-0 z-10 flex items-center"
            style={{
              visibility: "hidden",
            }}
          >
            <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
              <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                {/* LEFT CONTENT */}
                <div className="industry-content relative z-20">
                  <div className="mb-8 flex items-center gap-5">
                    <div
                      className="industry-big-dot relative flex h-[92px] w-[92px] items-center justify-center rounded-full"
                      style={{
                        border: "1px dotted #777",
                      }}
                    >
                      <div
                        className="h-[62px] w-[62px] rounded-full"
                        style={{
                          backgroundColor: industry.color,
                        }}
                      />
                    </div>

                    <span className="industry-number text-sm font-medium tracking-[0.2em] text-[#999]">
                      0{index + 1} / 05
                    </span>
                  </div>

                  <h2 className="industry-title max-w-[650px] text-[clamp(58px,7vw,110px)] font-bold leading-[0.88] tracking-[-0.065em] text-black">
                    {industry.title}
                  </h2>

                  <div
                    className="industry-line mt-8 h-[2px] w-[120px]"
                    style={{
                      backgroundColor: industry.color,
                    }}
                  />

                  <p className="industry-description mt-7 max-w-[540px] text-[18px] leading-[1.65] text-[#555] lg:text-[21px]">
                    {industry.description}
                  </p>

                  <div className="mt-9 flex items-center gap-4 text-sm font-medium text-black">
                    <span>Industry</span>

                    <span className="h-px w-12 bg-black/20" />

                    <span className="text-[#999]">
                      Application focused solutions
                    </span>
                  </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="industry-visual relative flex h-[560px] items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[500px] w-[500px] rounded-full border border-dashed border-[#999]" />
                  </div>

                  <div className="relative z-10 w-full max-w-[650px]">
                    <IndustryIllustration id={industry.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}