"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TITLE = "Global Sourcing. Industrial Excellence.";
const CHAR_DELAY_MS = 55;

// Split the title into words, remembering each word's first character index
// so every character can get its own animation delay.
const WORDS = (() => {
    let start = 0;

    return TITLE.split(" ").map((word) => {
        const entry = { word, start };
        start += word.length;
        return entry;
    });
})();

// Visual-only effects. The heading text itself is always in the server HTML.
const HERO_CSS = `
@keyframes heroChar { from { opacity: 0 } to { opacity: 1 } }
.hero-char {
  opacity: 0;
  animation: heroChar 0.01s linear forwards;
  animation-play-state: paused;
}
.hero-char[data-run="true"] { animation-play-state: running; }

@keyframes heroZoom { from { transform: scale(1.15) } to { transform: scale(1) } }
.hero-zoom { animation: heroZoom 6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards; }

@media (prefers-reduced-motion: reduce) {
  .hero-char { opacity: 1; animation: none; }
  .hero-zoom { animation: none; }
}
`;

export default function HeroSlider({ loading }) {
    const videoRef = useRef(null);
    const [mountVideo, setMountVideo] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const [videoFailed, setVideoFailed] = useState(false);

    // Load the background video only after the page (and the hero image)
    // has finished loading, so it never competes with the LCP image.
    useEffect(() => {
        const saveData = navigator.connection?.saveData;
        if (saveData) return; // keep the still image on data-saver mode

        const mount = () => setMountVideo(true);

        if (document.readyState === "complete") {
            const t = setTimeout(mount, 0);
            return () => clearTimeout(t);
        }

        window.addEventListener("load", mount, { once: true });
        return () => window.removeEventListener("load", mount);
    }, []);

    useEffect(() => {
        const v = videoRef.current;
        if (v && !v.paused && v.readyState >= 3) setVideoReady(true);
    }, [mountVideo]);

    return (
        <section className="relative w-full overflow-hidden bg-black md:h-[100svh] md:min-h-[650px] md:pt-0">
            <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />
            <noscript>
                <style>{`.hero-char{opacity:1!important;animation:none!important}`}</style>
            </noscript>

            <div className="relative aspect-[3/4] w-full md:absolute md:inset-0 md:aspect-auto">
                {/* Hero image: the LCP element, optimized + preloaded */}
                <Image
                    src="/12.jpeg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {mountVideo && !videoFailed && (
                    <video
                        ref={videoRef}
                        src="/video/WhatsApp Video 2026-10-14 at 10.37.29 AM.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onPlaying={() => setVideoReady(true)}
                        onError={() => setVideoFailed(true)}
                        onStalled={() => setVideoReady(false)}
                        className={`hero-zoom absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"
                            }`}
                    />
                )}

                <div className="absolute inset-0 bg-black/45" />

                {/* Text inside the video box on every screen size */}
                <div className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center text-white md:pt-20">
                    <div className="mx-auto max-w-5xl">
                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 sm:text-xs md:mb-5 md:text-sm md:tracking-[0.35em]">
                            Welcome to Resol Industries Limited
                        </p>

                        {/* Full text is rendered on the server; only the reveal is animated */}
                        <h1 className="font-heading text-2xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
                            {WORDS.map(({ word, start }, wi) => (
                                <span key={wi}>
                                    {wi > 0 && " "}
                                    <span className="inline-block whitespace-nowrap">
                                        {word.split("").map((ch, ci) => (
                                            <span
                                                key={ci}
                                                className="hero-char"
                                                data-run={loading ? "false" : "true"}
                                                style={{
                                                    animationDelay: `${(start + ci) * CHAR_DELAY_MS}ms`,
                                                }}
                                            >
                                                {ch}
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            ))}
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base md:mt-6 md:text-xl md:leading-7">
                            A Reliable Solution For All Your Polymer Needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
