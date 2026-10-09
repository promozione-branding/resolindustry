import { notFound } from "next/navigation";
import ProductPage from "./Products";
import { products } from "../../../../data";

// Search the nested category structure.
function getProductBySlug(slug) {
    for (const category of products) {
        const product = category.products?.find((item) => {
            const itemSlug = item.href?.split("/").filter(Boolean).at(-1);
            return itemSlug === slug;
        });

        if (product) return product;
    }

    return null;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: "Product Not Found | Resol Industry",
            robots: { index: false, follow: false, },
        };
    }

    const title = product.metaTitle || `${product.name} | Resol Industry`;
    const description = product.metaDescription || product.shortDescription || `Explore ${product.name} from Resol Industry.`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    const canonicalUrl = siteUrl ? `${siteUrl}${product.href}` : undefined;
    const imagePath = product.bannerImg || product.image;
    const imageUrl = siteUrl && imagePath?.startsWith("/") ? `${siteUrl}${imagePath}` : imagePath;

    return {
        title,
        description,
        alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,

        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Resol Industry",
            type: "website",
            images: imageUrl ? [{ url: imageUrl, alt: product.name, },] : undefined,
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined,
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return <ProductPage product={product} />;
}