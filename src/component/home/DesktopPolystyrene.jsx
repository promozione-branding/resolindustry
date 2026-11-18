"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

// The scroll animation is desktop-only; phones use one static frame instead
// of loading the animation code and full image sequence.
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

    return (
        <div className="relative w-full bg-white md:min-h-[580vh]">
            {isDesktop && <PolystyreneScroll />}

            <section className="relative h-[82svh] min-h-[540px] max-h-[760px] overflow-hidden bg-[#071a3d] md:hidden">
                <Image
                    src="/frames2/ezgif-frame-001.png"
                    alt="Industrial resin packaging displayed at a quarry"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/55 via-transparent to-[#071a3d]/10" />

              
            </section>
        </div>
    );
}
