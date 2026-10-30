"use client";

import { useState } from "react";
import Preloader from "@/component/layout/Preloader";
import Hero from "@/component/home/Hero";

// Holds the only client state the home page needs at the top level, so that
// app/page.js itself can be a server component.
export default function HeroIntro() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <Hero loading={loading} />
        </>
    );
}
