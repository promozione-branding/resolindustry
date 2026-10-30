import { products } from "../../../data";

const SITE_URL = "https://www.resolindustries.com";

const staticPages = [
    "/",
    "/about-us",
    "/contact-us",
    "/zaikai",
    "/products",
    "/our-articles",
];

function escapeXml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

export async function GET() {
    const productPages = products.flatMap((category) =>
        (category.products ?? [])
            .map((product) => product.href)
            .filter((href) => href?.startsWith("/products/")),
    );
    const pagePaths = [...new Set([...staticPages, ...productPages])];

    const urls = pagePaths
        .map((path) => `<url><loc>${escapeXml(new URL(path, SITE_URL).toString())}</loc></url>`)
        .join("");

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
        {
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
            },
        },
    );
}