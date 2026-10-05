"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";

function formatDate(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "Date unavailable";
    }

    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}

export default function Articles() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadBlogs = useCallback(async (signal) => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/blog", { signal });
            if (!response.ok) {
                throw new Error(`Could not load articles (HTTP ${response.status}).`);
            }

            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error("The articles response was not in the expected format.");
            }

            setBlogs(data);
        } catch (loadError) {
            if (loadError.name !== "AbortError") {
                setError(loadError.message || "Unable to load articles. Please try again.");
            }
        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        loadBlogs(controller.signal);

        return () => controller.abort();
    }, [loadBlogs]);

    return (
        <main className="min-h-screen bg-[#f7f8fa] text-[#111b2f]">
            <section className="relative isolate overflow-hidden bg-[#081832] px-5 pb-16 pt-60 text-white sm:px-8 md:px-12 lg:px-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-36 -z-10 h-[420px] w-[420px] rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-16 -z-10 h-[300px] w-[300px] rounded-full border border-[#83d7ed]/20 sm:right-20 sm:h-[430px] sm:w-[430px]"
                />
                <div className="mx-auto max-w-[1280px] text-center">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                        Our articles
                    </h1>
                    <p className="mt-2 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                        Explore the latest stories, insights and updates from Resol Industry.
                    </p>
                </div>
            </section>

            <section className="px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-16 lg:py-16">
                <div className="mx-auto max-w-[1280px]">
                    {loading && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading articles">
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="overflow-hidden rounded-[22px] border border-[#e6e9ee] bg-white"
                                >
                                    <div className="aspect-[1.55] animate-pulse bg-[#e9edf2]" />
                                    <div className="space-y-3 p-5">
                                        <div className="h-3 w-28 animate-pulse rounded bg-[#e9edf2]" />
                                        <div className="h-6 w-4/5 animate-pulse rounded bg-[#e9edf2]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!loading && error && (
                        <div className="rounded-[22px] border border-red-200 bg-white px-6 py-10 text-center">
                            <p className="text-base text-red-700">{error}</p>
                            <button
                                type="button"
                                onClick={() => loadBlogs(new AbortController().signal)}
                                className="mt-5 rounded-full bg-[#0c2845] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#17466c]"
                            >
                                Try again
                            </button>
                        </div>
                    )}

                    {!loading && !error && blogs.length === 0 && (
                        <div className="rounded-[22px] border border-[#e6e9ee] bg-white px-6 py-16 text-center">
                            <Newspaper className="mx-auto mb-4 text-[#8c97a5]" size={32} strokeWidth={1.5} />
                            <h3 className="text-xl font-medium">No articles yet</h3>
                            <p className="mt-2 text-sm text-[#707b8a]">
                                New stories and updates will appear here.
                            </p>
                        </div>
                    )}

                    {!loading && !error && blogs.length > 0 && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {blogs.map((blog) => (
                                <article
                                    key={blog._id || blog.permalink}
                                    className="group overflow-hidden rounded-[22px] border border-[#e6e9ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#9bcbd8] hover:shadow-[0_24px_60px_rgba(16,39,71,0.09)]"
                                >
                                    <Link
                                        href={`/our-articles/${encodeURIComponent(blog.permalink)}`}
                                        className="block"
                                        aria-label={`Read article: ${blog.title}`}
                                    >
                                        <div className="relative h-[300px] overflow-hidden bg-[#eaf0f4]">
                                            <img
                                                src={blog.image || "/BLOG-citric-acid-origins.png"}
                                                alt={blog.title || "Article"}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                onError={(event) => {
                                                    event.currentTarget.onerror = null;
                                                    event.currentTarget.src = "/BLOG-citric-acid-origins.png";
                                                }}
                                            />
                                            <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0c2845] backdrop-blur">
                                                Resol Journal
                                            </span>
                                        </div>
                                        <div className="px-3 py-2">
                                            <p className="mb-2 flex items-center gap-2 text-xs font-medium text-[#778291]">
                                                <CalendarDays size={14} aria-hidden="true" />
                                                <time dateTime={blog.date}>
                                                    {formatDate(blog.date)}
                                                </time>
                                            </p>
                                            <h3 className="line-clamp-2 text-xl font-medium leading-snug tracking-[-0.025em] text-[#101b30] sm:text-2xl">
                                                {blog.title}
                                            </h3>
                                            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#1c6580]">
                                                Read article
                                                <ArrowRight
                                                    size={16}
                                                    className="transition-transform group-hover:translate-x-1"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
