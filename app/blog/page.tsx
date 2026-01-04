import React from "react";
import { fetchBlogPosts, HashnodePost } from "@/lib/hashnode";
import BlogClient from "./BlogClient";

const HASHNODE_HOST = process.env.NEXT_PUBLIC_HASHNODE_HOST!;
if (!HASHNODE_HOST) {
    throw new Error("NEXT_PUBLIC_HASHNODE_HOST environment variable is not set");
}

export const metadata = {
    metadataBase: new URL("https://moonway-agency.vercel.app"),
    openGraph: {
        title: "Blog - Moonway",
        description: "Insights and thoughts from the Moonway team.",
        type: "website",
        siteName: "Moonway",
        images: [
            {
                url: "https://moonway-agency.vercel.app/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Moonway Blog",
            },
        ],
    },
};


export default async function BlogPage() {
    const posts = await fetchBlogPosts(HASHNODE_HOST);

    // Format dates and prepare data for the client component
    const formattedPosts = posts.map((post: HashnodePost) => ({
        ...post,
        formattedDate: new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }),
    }));

    return <BlogClient initialPosts={formattedPosts} />;
}
