import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import lottie from "lottie-web";

export default function ShipSection() {
    const shipContainerRef = useRef(null);
    const shipWrapperRef = useRef(null);

    /* =====================================================
       LOTTIE INITIALIZATION
    ===================================================== */

    useEffect(() => {
        if (!shipContainerRef.current) return;

        let animation;

        const loadShip = async () => {
            try {
                const response = await fetch("/animation/Ship.json");

                if (!response.ok) {
                    throw new Error("Failed to load Ship.json");
                }

                const animationData = await response.json();

                animation = lottie.loadAnimation({
                    container: shipContainerRef.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData,
                });
            } catch (error) {
                console.error("Ship animation error:", error);
            }
        };

        loadShip();

        return () => {
            if (animation) {
                animation.destroy();
                animation = null;
            }
        };
    }, []);

    /* =====================================================
       GSAP FLOATING EFFECT
    ===================================================== */

    useEffect(() => {
        if (!shipWrapperRef.current) return;

        const animation = gsap.to(
            shipWrapperRef.current,
            {
                y: -10,
                rotate: 2,

                duration: 2.5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut",
            }
        );

        return () => {
            animation.kill();
        };
    }, []);
    
    return (
        <div>
            <div className="relative">
                <div
                    ref={shipWrapperRef}
                    className="
            absolute
            bottom-[-40px]
            -left-30
            z-10
            w-[100px]
            sm:w-[125px]
            lg:w-[300px]
        "
                >
                    <div
                        ref={shipContainerRef}
                        className="
                h-[300px]
                w-full
                overflow-visible
            "
                    />
                </div>

            </div>
        </div>
    )
}