"use client";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

export default function BlobCursor() {
  const blob = useRef(null);

  const mouse = useRef({
    x: -200,
    y: -200,
  });

  const position = useRef({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x =
        e.clientX;

      mouse.current.y =
        e.clientY;
    };

    window.addEventListener(
      "pointermove",
      move,
      {
        passive: true,
      }
    );

    const ctx = gsap.context(
      () => {
        const tick = () => {
          position.current.x +=
            (mouse.current.x -
              position.current.x) *
            0.12;

          position.current.y +=
            (mouse.current.y -
              position.current.y) *
            0.12;

          if (blob.current) {
            gsap.set(
              blob.current,
              {
                x: position.current.x,
                y: position.current.y,
              }
            );
          }
        };

        gsap.ticker.add(tick);

        return () => {
          gsap.ticker.remove(
            tick
          );
        };
      },
      blob
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        move
      );

      ctx.revert();
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-[5]
        overflow-hidden
      "
    >
      <div
        ref={blob}
        className="
          absolute
          left-0
          top-0
          h-[90px]
          w-[90px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#9DC7CB]/10
          blur-[22px]
        "
      />
    </div>
  );
}