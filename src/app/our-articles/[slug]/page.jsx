import { cache } from "react";
import { notFound } from "next/navigation";
import { connect } from "@/config/db";
import Blog from "@/models/blog";
import Article from "./Article";

export const dynamic = "force-dynamic";

const getArticleBySlug = cache(async (slug) => {
    await connect();
    return Blog.findOne({ permalink: slug }).lean();
});

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Article not found | Resol Industry",
            description: "The requested article could not be found.",
            robots: { index: false, follow: false },
        };
    }

    const description =
        article.metaDescription ||
        `Read ${article.title} on the Resol Industry journal.`;
    const canonical = `/our-articles/${encodeURIComponent(article.permalink)}`;
    const images = article.image ? [{ url: article.image, alt: article.title }] : [];
    const articleDate = new Date(article.date);

    return {
        title: article.metaTitle || article.title,
        description,
        alternates: { canonical },
        openGraph: {
            type: "article",
            url: canonical,
            title: article.metaTitle || article.title,
            description,
            publishedTime: Number.isNaN(articleDate.getTime())
                ? undefined
                : articleDate.toISOString(),
            images,
        },
        twitter: {
            card: article.image ? "summary_large_image" : "summary",
            title: article.metaTitle || article.title,
            description,
            images: article.image ? [article.image] : [],
        },
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return <Article article={JSON.parse(JSON.stringify(article))} />;
}
