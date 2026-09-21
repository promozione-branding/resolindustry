"use client";

import React from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";


/* =========================================================
   SLIDER IMAGES
   Replace these paths with your actual images
========================================================= */

const sliders = {
    tile1: [
        "https://www.resolindustries.com/wp-content/uploads/2026/04/resol-campany.jpg-500x570.jpeg",
        "https://www.resolindustries.com/wp-content/uploads/2026/04/resol-campany.jpg-500x570.jpeg",
        "https://www.resolindustries.com/wp-content/uploads/2026/04/resol-campany.jpg-500x570.jpeg",
    ],

    tile2: [
        "/team/mr-krishan-kumar-bansal.webp",
        "/team/mr-parth-dodeja-big-377x474.webp",
        "/team/vijay-rawal-377x474.webp",
    ],

    tile3: [
        "/product/1.png",
        "/product/2.png",
        "/product/3.png",
    ],

    tile4: [
        "/product/1.png",
        "/product/2.png",
        "/product/3.png",
    ],
};


/* =========================================================
   REUSABLE FADE SWIPER
========================================================= */

function ImageSwiper({
    images,
    delay = 3000,
    className = "",
}) {
    return (
        <div
            className={`
                relative
                h-full
                w-full
                overflow-hidden
                ${className}
            `}
        >

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                speed={1200}
                autoplay={{
                    delay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                allowTouchMove={false}
                className="h-full w-full"
            >

                {images.map((src, index) => (
                    <SwiperSlide
                        key={`${src}-${index}`}
                        className="relative h-full w-full"
                    >

                        <img
                            src={src}
                            alt=""
                            className="
                                absolute
                                inset-0 
                                h-full
                                w-full
                                object-cover
                                object-center
                            "
                        />

                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
}


/* =========================================================
   LIFE AT RESOL
========================================================= */

export default function LifeAtReliance() {

    return (
        <section
            className="
                relative
                flex
                min-h-screen
                w-full
                items-center
                justify-center
                overflow-hidden
                bg-[#c69d58]
                px-6
                py-16
                sm:px-10
                lg:px-16
            "
        >

            {/* =====================================================
                DECORATIVE BACKGROUND
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >

                {/* Bottom left large shape */}

                <div
                    className="
                        absolute
                        -bottom-[18%]
                        left-[4%]
                        h-[38%]
                        w-[18%]
                        rotate-[-10deg]
                        rounded-t-[80%]
                        bg-[#ead7ad]
                    "
                />

                {/* Bottom center leaf */}

                <div
                    className="
                        absolute
                        -bottom-[15%]
                        left-[22%]
                        h-[34%]
                        w-[11%]
                        rotate-[8deg]
                        rounded-[50%]
                        bg-[#ead7ad]
                    "
                />

            </div>


            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    grid
                    w-full
                    max-w-7xl
                    grid-cols-1
                    items-center
                    gap-12
                    lg:grid-cols-12
                    lg:gap-14
                "
            >

                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div
                    className="
                        flex
                        max-w-xl
                        flex-col
                        justify-center
                        lg:col-span-5
                    "
                >

                    {/* ---------------------------------------------
                        HEADING
                    ---------------------------------------------- */}

                    <h1
                        className="
                            mb-8
                            font-serif
                            text-5xl
                            font-normal
                            leading-tight
                            tracking-tight
                            text-white
                            sm:text-6xl
                            lg:text-[68px]
                        "
                    >
                        Life at Resol Industry.
                    </h1>


                    {/* ---------------------------------------------
                        SUBHEADING
                    ---------------------------------------------- */}

                    <h2
                        className="
                            mb-5
                            text-xl
                            font-bold
                            leading-snug
                            tracking-tight
                            text-white
                            sm:text-2xl
                        "
                    >
                        Why work at Resol?
                    </h2>


                    {/* ---------------------------------------------
                        DESCRIPTION
                    ---------------------------------------------- */}

                    <p
                        className="
                            mb-9
                            text-[15px]
                            font-normal
                            leading-relaxed
                            text-white/95
                            sm:text-[16px]
                        "
                    >
                        Resol Industries Ltd. (RIL) is a prominent polymer
                        products distributor founded in 2005. Head office
                        based in New Delhi, the company specializes in import
                        and wholesale distribution of a wide range of
                        high-quality polymers and chemicals, including PVC
                        resin, EVA, LLDPE, LDPE and various plasticizers.
                        RIL has established itself as a trusted partner in
                        industries such as PVC pipes and fittings, footwear,
                        PVC flooring, Packaging, Plastic, Adhesives, Textile,
                        Paint &amp; Coatings and Vinyl.
                    </p>


                    {/* =================================================
                        BUTTONS
                    ================================================= */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-4
                        "
                    >

                        <Link
                            href="#meet-people"
                            className="
                                group
                                inline-flex
                                items-center
                                justify-between
                                gap-3
                                rounded-full
                                border
                                border-white/80
                                bg-white/10
                                px-6
                                py-2.5
                                text-sm
                                font-medium
                                tracking-wide
                                text-white
                                shadow-sm
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:bg-white
                                hover:text-[#c69d58]
                            "
                        >

                            <span>
                                meet our people
                            </span>

                            <span
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            >
                                →
                            </span>

                        </Link>


                        <Link
                            href="#search-apply"
                            className="
                                group
                                inline-flex
                                items-center
                                justify-between
                                gap-3
                                rounded-full
                                border
                                border-white/80
                                bg-white/10
                                px-6
                                py-2.5
                                text-sm
                                font-medium
                                tracking-wide
                                text-white
                                shadow-sm
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:bg-white
                                hover:text-[#c69d58]
                            "
                        >

                            <span>
                                search &amp; apply
                            </span>

                            <span
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            >
                                →
                            </span>

                        </Link>

                    </div>

                </div>


                {/* =================================================
                    RIGHT IMAGE COLLAGE
                ================================================= */}

                <div
                    className="
                        flex
                        w-full
                        justify-center
                        lg:col-span-7
                        lg:justify-end
                    "
                >

                    <div
                        className="
                            relative
                            grid
                            w-full
                            max-w-[620px]
                            grid-cols-2
                            gap-3.5
                            p-2
                            sm:gap-4
                        "
                    >

                        {/* =================================================
                            TILE 1
                            LARGE TOP LEFT
                        ================================================= */}

                        <div
                            className="
                                relative
                                aspect-[4/5]
                                w-full
                                overflow-hidden
                                rounded-tl-[120px]
                                rounded-bl-[130px]
                                rounded-tr-md
                                rounded-br-md
                                shadow-md
                            "
                        >

                            <ImageSwiper
                                images={sliders.tile1}
                                delay={2800}
                            />

                        </div>


                        {/* =================================================
                            TILE 2
                            AWARD / CERTIFICATION
                        ================================================= */}

                        <div
                            className="
                                relative
                                aspect-[4/5]
                                w-full
                                overflow-hidden
                                rounded-tr-[120px]
                                rounded-tl-md
                                rounded-br-md
                                rounded-bl-md
                                bg-white
                                shadow-md
                            "
                        >

                            <ImageSwiper
                                images={sliders.tile2}
                                delay={3600}
                            />

                        </div>


                        {/* =================================================
                            TILE 3
                            BOTTOM LEFT
                        ================================================= */}

                        <div
                            className="
                                relative
                                aspect-[4/3]
                                w-full
                                overflow-hidden
                                rounded-bl-xl
                                rounded-tr-xl
                                rounded-tl-md
                                rounded-br-md
                                shadow-md
                            "
                        >

                            <ImageSwiper
                                images={sliders.tile3}
                                delay={3200}
                            />

                        </div>


                        {/* =================================================
                            TILE 4
                            BOTTOM RIGHT
                        ================================================= */}

                        <div
                            className="
                                relative
                                aspect-[4/3]
                                w-full
                                overflow-hidden
                                rounded-br-[80px]
                                rounded-tl-xl
                                rounded-tr-md
                                rounded-bl-md
                                shadow-md
                            "
                        >

                            <ImageSwiper
                                images={sliders.tile4}
                                delay={3000}
                            />

                        </div>


                        {/* =================================================
                            ORGANIC GOLD SHAPE BEHIND COLLAGE
                        ================================================= */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-[7%]
                                -top-[8%]
                                -z-10
                                h-[115%]
                                w-[72%]
                                bg-[#ead7ad]
                            "
                            style={{
                                clipPath:
                                    "ellipse(58% 48% at 58% 48%)",
                            }}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}