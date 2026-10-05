import React from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

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

function getReadingTime(content) {
    const plainText = String(content || "")
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ");
    const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 200));
}

export default function Article({ article }) {
    const publishedDate = new Date(article.date);

    return (
        <main className="min-h-screen bg-[#f7f8fa] text-[#111b2f]">
            <header className="relative isolate overflow-hidden bg-[#081832] px-5 pb-10 pt-32 text-white sm:px-8 sm:pb-12 sm:pt-52 md:px-12 lg:px-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-36 -z-10 h-[360px] w-[360px] rounded-full border border-white/10 sm:h-[520px] sm:w-[520px]"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-20 -z-10 h-[250px] w-[250px] rounded-full border border-[#83d7ed]/20 sm:right-24 sm:h-[370px] sm:w-[370px]"
                />

                <div className="mx-auto max-w-[1280px] text-center">
                    <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                        {article.title}
                    </h1>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
                        <span className="inline-flex items-center gap-2">
                            <CalendarDays size={16} aria-hidden="true" />
                            <time
                                dateTime={
                                    Number.isNaN(publishedDate.getTime())
                                        ? undefined
                                        : publishedDate.toISOString()
                                }
                            >
                                {formatDate(article.date)}
                            </time>
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Clock3 size={16} aria-hidden="true" />
                            {getReadingTime(article.content)} min read
                        </span>
                    </div>
                </div>
            </header>

            <section className="px-5 py-8 sm:px-8 sm:py-12 md:px-12 lg:px-16 lg:py-16">
                <div className="mx-auto grid max-w-[1280px] items-start gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-14">
                    <aside className="lg:sticky lg:top-8 lg:self-start">
                        {article.image ? (
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#e7edf1] shadow-[0_24px_70px_rgba(16,39,71,0.12)] sm:rounded-[30px] lg:aspect-[4/4]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    fetchPriority="high"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081832]/35 via-transparent to-transparent" />
                                <span className="absolute bottom-5 left-5 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0c2845] backdrop-blur">
                                    Resol Industry
                                </span>
                            </div>
                        ) : (
                            <div className="flex aspect-[4/3] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#0c2845] to-[#245c78] text-sm font-semibold uppercase tracking-[0.2em] text-white/75 lg:aspect-[4/5]">
                                Resol Industry
                            </div>
                        )}
                    </aside>

                    <article className="min-w-0 rounded-[24px] border border-[#e8ebef] bg-white px-6 py-8 shadow-[0_12px_40px_rgba(16,39,71,0.035)] sm:rounded-[30px] sm:px-10 sm:py-11 lg:px-12">
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                        <div className="mt-12 border-t border-[#e9edf0] pt-6">
                            <Link
                                href="/our-articles"
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1c6580] transition-colors hover:text-[#0c2845]"
                            >
                                <ArrowLeft
                                    size={16}
                                    className="transition-transform group-hover:-translate-x-1"
                                    aria-hidden="true"
                                />
                                Back to all articles
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
