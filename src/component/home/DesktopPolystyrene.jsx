"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// The scroll animation (GSAP ScrollTrigger + 180 frames) is desktop-only.
// It is code-split and only mounted when the viewport is >= 768px, so phones
// never download its JavaScript or any of its frames.
const PolystyreneScroll = dynamic(() => import("./PolystyreneScroll"), {
    ssr: false,
});

export default function DesktopPolystyrene() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const update = () => setIsDesktop(mq.matches);

        update();
        mq.addEventListener("change", update);

        return () => mq.removeEventListener("change", update);
    }, []);

    // min-h reserves the section height on desktop to avoid layout shift
    return (
        <div className="hidden bg-white md:block md:min-h-[580vh]">
            {isDesktop && <PolystyreneScroll />}
        </div>
    );
}
